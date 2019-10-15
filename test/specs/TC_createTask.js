var page_task = require('../page/page_task')
var core = require('../keywords/core')

function createTask() {

    //Define uma variavel do tipo lista
    let data_task = []
    //Preenche a variavel listada acima com uma lista de json
    data_task = core.readFile('./test/data/task.json')
    //clica em nova tarefa
    page_task.aNewTask().click();
    //repeticao para criar as 30 tarefas
    for (i = 0; i <= 29; i++) {
        //escreve titulo da tarefa
        page_task.inputTitle().setValue(data_task[i].title);
        //escreve descricao da tarefa
        page_task.inputDescription().setValue(data_task[i].description);
        //clica no botao criar e continuar
        page_task.buttonCreateContinue().click();
    }

}
module.exports.createTask = createTask