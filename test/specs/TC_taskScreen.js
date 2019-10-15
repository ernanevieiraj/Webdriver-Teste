var page_task = require('../page/page_taskscreen')
var core = require('../keywords/core')
var assert = require('chai')

function createTask() {

    //variavel que recebe o json com as informacoes para validar a tarefa 29
    let validation = core.readFile('./test/data/validation_task.json')
    let i = 1;

    //Clicar aba tarefas
    page_task.aTasks().click();
    //condição para pegar o indice(i) referente a tarefa 29
    //ele percorrera todos os titulos da pagina até achar o titulo com a tarefa 29
    while (page_task.tdTitle(i).getText() != validation.title) {
        i++;
    }
    //comparacao do texto do elemento(titulo) capturado com o titulo contido no json 
    assert.expect(page_task.tdTitle(i).getText()).to.equal(validation.title);
    //comparacao do texto do elemento(tipo) capturado com o tipo contido no json 
    assert.expect(page_task.tdType(i).getText()).to.equal(validation.type);
    //comparacao do texto do elemento(situacao) capturado com a situacao contida no json 
    assert.expect(page_task.tdSituation(i).getText()).to.equal(validation.situation);
    //comparacao do texto do elemento(prioridade) capturado com a prioridade contida no json 
    assert.expect(page_task.tdPriority(i).getText()).to.equal(validation.priority);
}
module.exports.createTask = createTask