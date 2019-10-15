//tela de tarefas

module.exports = {

    //objeto que pega os titulos das tarefas de acordo com o indice(i) passado
    tdTitle(i){ return $ (`(//td[@class='subject'])[${i}]`);},
    //objeto que pega os tipos das tarefas de acordo com o indice(i) passado
    tdType(i){ return $ (`(//td[@class='tracker'])[${i}]`);},
    //objeto que pega as prioridades das tarefas de acordo com o indice(i) passado
    tdPriority(i){ return $ (`(//td[@class='priority'])[${i}]`);},
    //objeto que pega as situacoes das tarefas de acordo com o indice(i) passado
    tdSituation(i){ return $ (`(//td[@class='status'])[${i}]`);},
    //hyperlink tarefas
    aTasks(){ return $(".issues");}
}