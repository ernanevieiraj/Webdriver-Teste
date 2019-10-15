//tela criar projetos
module.exports = {

    //hyperlink projetos
    aProject(){ return $(".projects");},
    //hyperlink novo projeto
    aNewProject(){ return $(".icon-add");},
    //campo nome projeto
    inputProjectName(){ return $("#project_name");},
    //campo descricao projeto
    inputProjectDesc(){ return $(".wiki-edit");},
    //campo homepage projeto
    inputProjectPage(){ return $("#project_homepage");},
    //funcao que recebe indice, para retornar os elementos para desmarcar a selecao.(feature,support)
    inputType(i){
        element =`#project_trackers > label:nth-child(${i})  > input`;
        return $ (element);
    },
    //button projeto
    buttonCreate(){return $("#new_project > input:nth-child(7)")},
    //mensagem sucesso, só aparece quando um projeto e criado com sucesso
    messageSuccess(){ return $("#flash_notice")}

}