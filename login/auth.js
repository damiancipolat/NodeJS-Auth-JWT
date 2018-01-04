const config = require('./config.js');
const userBd = require('./users.js');
const jwt    = require('jsonwebtoken');
const moment = require('moment');

//Valido el usuario con la matriz.
const getUser = (userParam,pwdParam)=>{

  //Busco el usuario.
  return userBd.find((userTmp)=>((userTmp.user == userParam)&&(userTmp.pwd == pwdParam)));

}

//Login.
const login = (req,res)=>{

  //Si hay datos de login.
  if ((req.body.user!=null)&&(req.body.pwd!=null)){

    //Traigo el usuario.
    let user = getUser(req.body.user,req.body.pwd);

    if (user!=null){

      //Armo el token.
      let token = jwt.sign({ id: user.iduser }, config.secret, {expiresIn: 86400});
      
      //Retorno el token.
      res.status(200).send({user:user.user, auth: true, token: token });

    }
    else
      res.status(200).send({ error : "Login incorrecto"});   

  }
  else
    res.status(200).send({ error : "Faltan datos para login"});

}

module.exports.login = login;

//Valido el token.
const validateToken = (req,res,next)=>{

jwt.verify(req.body.token, config.secret, (err, decoded)=> {

    if (err) 
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else
      next();   
    
  });

}

module.exports.validateToken = validateToken;