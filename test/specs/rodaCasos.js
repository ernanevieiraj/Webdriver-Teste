var register = require('./TC_register')
var createProject = require('./TC_createProject')
var createTask = require('./TC_createTask')
var taskScreen = require('./TC_taskScreen')
var assert = require('chai')

describe('Avaliacao Softbox', () =>{

    it('Avaliacao Softbox', () =>{
        assert.expect(1).to.equal(1);
        //registra o usuário
        register.register();
        //cria o projeto
        createProject.createProject();
        //cria as 30 tarefas
        createTask.createTask();
        //valida a 29 tarefa
        taskScreen.createTask();
        
    })
})