//tela criar tarefas

module.exports = {

    //campo de titulo
    inputTitle() { return $("#issue_subject"); },
    //campo descricao
    inputDescription() { return $("#issue_description"); },
    //clica em nova tarefa
    aNewTask(){ return $("#main-menu > ul > li:nth-child(4) > a");},
    //clica em criar e continuar
    buttonCreateContinue(){ return $("input[type=submit]:nth-child(5)");},
}

