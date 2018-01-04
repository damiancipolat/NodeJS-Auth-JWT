//Incluyo modulo.
const http       = require('http');
const express    = require('express');
const bodyParser = require('body-parser');
const jwt        = require('jwt-simple');
const fs         = require('fs');

//Cargo configuración.
const config = require('./config.js');

//Modulo con funciones de auth.
const auth   = require('./auth.js');

//Creo el server.
const app      = express();
const server   = http.createServer(app);

//Agrego body parser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Login de usuario.
app.post('/login',auth.login);

//Traigo info, si el token es valido.
app.post('/info',auth.validateToken,(req,res)=>{

  res.status(200).send({result:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]});

});

//Cuando no machea la url.
app.get('*',(req,res)=>{
  res.json({error:"Servicio inexistente."});
});

//Inicio en modo escucha.
app.listen(config.port,(err)=>{

  //Si hay un error, muestro por la consola, sino msj de inicio.
  if (err)
    console.log('ERROR: hubo un problema al inciar el server.');
  else{
    console.log('> NODE.JS - API  & jwt');
    console.log('> Listen on port: '+config.port);
  }

});