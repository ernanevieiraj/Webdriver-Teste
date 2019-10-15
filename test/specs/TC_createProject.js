var core = require('../keywords/core')
var page_createproject = require('../page/page_createproject')

function createProject() {
    // variavel que recebe o json com as informacoes do cadastro do projeto
    let data_project = core.readFile('./test/data/project.json');
    //clica aba projetos
    page_createproject.aProject().click();
    //clica em novo projeto
    page_createproject.aNewProject().click();
    //escreve nome do projeto
    page_createproject.inputProjectName().setValue(data_project.name);
    //escreve descricao do projeto
    page_createproject.inputProjectDesc().setValue(data_project.description);
    //escreve homepage do projeto
    page_createproject.inputProjectPage().setValue(data_project.project_page);
    //desmarca tipo de tarefa feature
    page_createproject.inputType(3).click();
    //desmarca tipo de tarefa support
    page_createproject.inputType(4).click();
    //clica no botao criar  
    page_createproject.buttonCreate().click();
    //valida se apareceu mensagem de sucesso
    page_createproject.messageSuccess().waitForExist(2000);
}
module.exports.createProject = createProject