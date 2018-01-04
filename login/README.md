# NodeJS - JWT - Ejemplo Login

### Instalación:
- Para realizar la instalación.

Usamos el modulo jsonwebtoken: https://www.npmjs.com/package/jsonwebtoken

```sh
$ cd login
$ npm install
```

Para ejecutar.

```sh
$ node app.js
```

### API:

- Logear acceso:

POST:  http://127.0.0.1:3000/login

BODY: 
- user : damian
- pwd  : 1234
 
Respuesta:
```json
{
    "user": "damian",
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMSIsImlhdCI6MTUxNTA0MTI0OSwiZXhwIjoxNTE1MTI3NjQ5fQ.CZ5hYn0EyvEV-mw6aK620rrhNCknaMTlSN9iz-7fiEI"
}
```

- Traer datos:

Se envia en la url el token del api, obtenida en el request anterior.

POST: 127.0.0.1:3000/info

BODY: 
- token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwMSIsImlhdCI6MTUxNTA0MTI0OSwiZXhwIjoxNTE1MTI3NjQ5fQ.CZ5hYn0EyvEV-mw6aK620rrhNCknaMTlSN9iz-7fiEI

 
