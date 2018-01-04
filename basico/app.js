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

//Obtengo el token.
app.get('/token',(req,res)=>{

  res.status(200).send({token: auth.createToken()});

});

//Traigo la lista de paises.
app.get('/paises/:token/',auth.validToken,(req,res)=>{

  //Cargo el archivo.
  fs.readFile('./paises.json', 'utf8', (err,data)=> {
  
    if (err)
      res.status(500).send({error:"No se puede cargar datos"});
    else
      res.status(200).send(data);

  });

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