# NodeJS-Auth-JWT

Colección de ejemplos de uso de JWT con Node.js

## Ejemplos:
* Para ver ejemplos de uso de JWT:

**[Basico]**, uso basico de JWT en un Api-rest.

[Basico]:https://github.com/damiancipolat/NodeJS-Auth-JWT/tree/master/basico

## Info:
Un ejemplo de token consiste en:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NGE4Y2U2MThlOTFiMGIxMzY2NWUyZjkiLCJpYXQiOiIxNDI0MTgwNDg0IiwiZXhwIjoiMTQyNTM5MDE0MiJ9.yk4nouUteW54F1HbWtgg1wJxeDjqDA_8AhUPyjE5K

Esta separado en tres partes: header, payload, signature

### Header:
```json
{
  "typ": "JWT",
  "alg": "HS256
}
```
- Codificado seria: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

### Payload:
Se compone de JWT-Claims, en este link podes ver más info.

http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html#RegisteredClaimName

```json
{
   "sub": "54a8ce618e91b0b13665e2f9",
   "iat": "1424180484",
   "exp": "1425390142"
}
```

- Se pueden agregar atributos personalizados:

```json
{
   "sub": "54a8ce618e91b0b13665e2f9",
   "iat": "1424180484",
   "exp": "1425390142",
   "admin": true,
   "role": 1
}
```

- Codifcado seria:
eyJzdWIiOiI1NGE4Y2U2MThlOTFiMGIxMzY2NWUyZjkiLCJpYXQiOiIxNDI0MTgwNDg0IiwiZXhwIjoiMTQyNTM5MDE0MiJ9

### Signature:
La firma es la tercera y última parte del JSON Web Token. Está formada por los anteriores componentes (Header y Payload) cifrados en Base64 con una clave secreta (almacenada en nuestro backend). Así sirve de Hash para comprobar que todo está bien.

HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)

Podes probar los tokens y las claves en este sitio: https://jwt.io/
