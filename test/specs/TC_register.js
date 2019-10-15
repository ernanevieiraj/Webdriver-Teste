var page_register = require('../page/page_register')
var core = require('../keywords/core')
var page = require('../page/page')

function register() {

    //Abrir url definida no arquivo core
    core.openUrl()
    //Clicar botao registrar
    page_register.buttonRegister().click();
    //Gravar Json com os dados de registro na variavel data_login
    let data_login = core.readFile('./test/data/login.json');
    //Escreve login
    page_register.inputLogin().setValue(data_login.user);
    //Escreve password
    page_register.inputPassword().setValue(data_login.password);
    //Escreve confirmacao de password
    page_register.inputConfirmPass().setValue(data_login.password);
    //Escreve primeiro nome
    page_register.inputFirstName().setValue(data_login.name);
    //Escreve sobrenome
    page_register.inputLastName().setValue(data_login.lastname);
    //Escreve email
    page_register.inputEmail().setValue(data_login.email);
    //Escolhe Linguagem
    page_register.chooseLanguage();
    //Clica em registrar
    page_register.buttonSend().click();
}
module.exports.register = register