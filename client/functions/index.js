export default { 
  fetch(request) { 
    const allowedOrigins = [
      'http://localhost:3000',
    ]

    const corsHeaders = origin => ({
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': origin
    })

    const checkOrigin = request => {
      const origin = request.headers.get("Origin")
      const foundOrigin = allowedOrigins.find(allowedOrigin => allowedOrigin.includes(origin))
      return foundOrigin ? foundOrigin : allowedOrigins[0]
    }
    if (request.method === "OPTIONS") {
      // Check that the request's origin is a valid origin, allowed to access this API
      const allowedOrigin = checkOrigin(request)
      return new Response("OK", { headers: corsHeaders(allowedOrigin) })
    }

    // lets be lazy and assume this is a POST request
    const data = {
      specialsecret: "foobar"
    }

    const json = JSON.stringify(data, null, 2)
    const allowedOrigin = checkOrigin(request)

    return new Response(json, {
      headers: {
        'content-type': 'application/json',
        ...corsHeaders(allowedOrigin)
      }
    }) 
  } 
}
