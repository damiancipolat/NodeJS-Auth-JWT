const config = require('./config.js');
const jwt    = require('jwt-simple');
const moment = require('moment');

//Crea el token.
module.exports.createToken = ()=>{

 let payload = {
    sub: '999',
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };

  //Armo el jwt, agrego como clave el token de config.js
  return jwt.encode(payload, config.token);
  
}

//Valido el token.
module.exports.validToken = (req,res,next)=>{

  if (req.params.token!=null){

    try{

      //Decodifico el token.
      let payload = jwt.decode(req.params.token, config.token);  

      //Reviso que el token no halla expirado.
      if(payload.exp <= moment().unix())
        return res.status(401).send({message: "El token ha expirado"});
      else
        next();

    }
    catch(error){
      return res.status(500).send({message: "Token incorrecto"});
    }

  }
  else
    return res.status(500).send({message: "Falta el token"});

}