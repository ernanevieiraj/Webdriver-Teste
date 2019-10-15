Para criação do projeto foi utilizado o terminal do visual studio code com o node 10.16.3 instalado.

Passo a Passo:
Na pasta raiz do projeto rodar os seguintes comandos: 

1-npm init -y,

2-npm i --save-dev @wdio/cli,

3-npm i --save-dev @types/jquery,

4-npm i --save-dev @types/mocha,

5-npm install --save-dev chai
	Após rodar esses comandos, rodar esse aqui ainda na pasta raiz do projeto:
	
6-./node_modules/.bin/wdio conf;
	Depois disso ele nos fará algumas perguntas e deverão ser respondidos das seguintes formas:
	
7- 1 Error: Could not execute "run" due to missing configuration. Would you like to create one? (y/N)
Resposta: Y;(só apertar enter)

8- 2 Where should your tests be launched? (Use arrow keys):
Resposta: local;(só apertar enter)

9- 3 Where is your automation backend located? (Use arrow keys):
Resposta: On my local machine;(só apertar enter)

10- 4 ? Which framework do you want to use? (Use arrow keys)
Resposta: Mocha(só apertar enter)

11- 5 Do you want to run WebdriverIO commands synchronous or asynchronous? (Use arrow keys)
Resposta: Sync(só apertar enter)

12- 6 Where are your test specs located? (./test/specs/**/*.js)
Resposta: (só apertar enter)

13- 7 Which reporter do you want to use? (Press <space> to select, <a> to toggle all, <i> to invert selection)
Resposta: spec(só apertar enter)

14- 8 ? Do you want to add a service to your test setup? (Press <space> to select, <a> to toggle all, <i> to invert selection)
Resposta: chromedriver(só apertar enter)

15- 9 What is the base url?
Resposta: (só apertar enter)

Após executarmos todos esses passos, pegar o arquivo test.rar disponibilizado e extrair para a raiz desse projeto, o unico arquivo que será sustituído será o wdio.conf.js(Substituir pelo disponibilizado no arquivo rar).
Depois de extrair a pasta, só rodar o seguinte comando:"./node_modules/.bin/wdio wdio.conf.js"








