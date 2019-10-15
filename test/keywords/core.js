var fs = require('fs');

module.exports  = {

    //funcao para abrir url no dominio definido na variavel url
    openUrl() {
        let url = 'http://demo.redmine.org/';
        browser.url(url)
    },
    //funcao para ler o json que for passado e o retornar
    readFile(adress){
        let contents = fs.readFileSync(adress);
        return JSON.parse(contents);
    }
}