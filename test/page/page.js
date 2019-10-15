
var fs = require('fs');

module.exports = {

    //button registrar tela inicial

    //button entrar tela inicial
    buttonEntrar(){ return $(".login");},
    //Campos de texto tela Login
    inputUserLogin(){ return $("#username:nth-child(1)");},
    inputPassLogin(){ return $("#password");},
    //button Entrar tela Login
    buttonEntrarLogin(){ return $("input[type=submit]");},

}

