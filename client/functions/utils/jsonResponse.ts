import * as jose from 'jose';

export const jsonResponse = (value: any, init: ResponseInit = {}) =>
  new Response(JSON.stringify(value), {
    headers: { "Content-Type": "application/json", ...init.headers },
    ...init,
  });

export const signedJsonResponse = async (value: any, pkcs8: string, init: ResponseInit = {}) => {
  const algorithm = 'ES256';
  const privateKey = await jose.importPKCS8(pkcs8, algorithm);
  const jwt = await new jose.SignJWT({ value })
    .setProtectedHeader({ alg: algorithm })
    .setIssuedAt()
    .setIssuer('urn:off-chain-validation:issuer')
    .setAudience('urn:off-chain-validation:audience')
    .setExpirationTime('2m')
    .sign(privateKey);
  return new Response(JSON.stringify({ payload: jwt }), {
    headers: { "Content-Type": "application/json", ...init.headers },
    ...init
  });
}
