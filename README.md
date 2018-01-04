# NodeJS-Auth-JWT

Colección de ejemplos de uso de JWT con Node.js

## Info:
JWT
token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NGE4Y2U2MThlOTFiMGIxMzY2NWUyZjkiLCJpYXQiOiIxNDI0MTgwNDg0IiwiZXhwIjoiMTQyNTM5MDE0MiJ9.yk4nouUteW54F1HbWtgg1wJxeDjqDA_8AhUPyjE5K

0U

- header:
{
  "typ": "JWT",  //Tipo de token
  "alg": "HS256  //Algoritmo
}

codificado daria:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

- payload:
http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html#RegisteredClaimName

{
   "sub": "54a8ce618e91b0b13665e2f9", //sujeto del token
   "iat": "1424180484",		      //fecha de creacion
   "exp": "1425390142"		      //fecha de expiracion
}

Se pueden agregar atributos personalizados:
{
   "sub": "54a8ce618e91b0b13665e2f9",
   "iat": "1424180484",
   "exp": "1425390142",
   "admin": true,
   "role": 1
}

codifcado seria:
eyJzdWIiOiI1NGE4Y2U2MThlOTFiMGIxMzY2NWUyZjkiLCJpYXQiOiIxNDI0MTgwNDg0IiwiZXhwIjoiMTQyNTM5MDE0MiJ9

- signature:
La firma es la tercera y última parte del JSON Web Token. Está formada por los anteriores componentes (Header y Payload) cifrados en Base64 con una clave secreta (almacenada 

en nuestro backend). Así sirve de Hash para comprobar que todo está bien.


HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)

https://jwt.io/
