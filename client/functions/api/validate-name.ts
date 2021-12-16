import { signedJsonResponse } from "../utils/jsonResponse";

export const onRequestPost: PagesFunction<{ KV: KVNamespace }, 'param', { PRIVATE_KEY : string }> = async ({
  env,
}) => {
  return signedJsonResponse({'name': 'Bob'}, env.PRIVATE_KEY);
};
