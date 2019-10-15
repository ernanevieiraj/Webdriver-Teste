//tela de registro

module.exports = {

    //button confirmar cadastro tela register
    buttonSend() { return $("#new_user > input:nth-child(4)"); },
    //button registrar
    buttonRegister() { return $(".register"); },
    //campo password
    inputConfirmPass() { return $("#user_password_confirmation"); },
    //campo email
    inputEmail() { return $("#user_mail"); },
    //campo nome
    inputFirstName() { return $("#user_firstname"); },
    //campo sobrenome
    inputLastName() { return $("#user_lastname"); },
    //campo login
    inputLogin() { return $("#user_login"); },
    //campo password
    inputPassword() { return $("#user_password"); },
    //funcao para escolher linguagem
    chooseLanguage() {
        //select password tela register
        selectLanguage = $("#user_language");
        //option password tela register
        optionLanguage = $("#user_language > option:nth-child(35)")
        selectLanguage.click();
        optionLanguage.click();
    }

}