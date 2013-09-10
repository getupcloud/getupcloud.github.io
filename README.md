Site getupcloud.com
===================

Este repositório armazena os arquivos originais (templates e statics) para gerar o site getupcloud.com

O procesos se dá nas seguintes etapas:

- edição
- teste
- build
- deploy

O fluxo de desenvolvimento inicia no branch **source**, onde os arquivo originais devem ser editados e testados.

Arquivo estáticos devem ficar no diretório `common/[TIPO]`, onde `[TIPO]` pode ser `static`, `js`, `img`, etc.

Suportamos templates a partir de simples shell scripts. Basta criar o arquivo `templates/[NOME].sh` e utilizar
comandos de BASH no próprio arquivo. Estes arquivos são executados no momento do build, gerando o arquivo
correspondende (sem a extensão .sh).

Por exemplo, podemos criar o arquivo `templates/teste.txt.sh` com o seguinte conteúdo:

```
Olá, eu sou o usuario ${USER}.
Estou no diretório $(pwd).
```

Após o build, o arquivo `build/teste.txt` é gerado:

```
Olá, eu sou o usuario mateus.
Estou no diretório /home/mateus/git/getupcloud.github.io.
```

Para visualizar as alterações (a.k.a. testar o site) execute o comando `./test.sh` e acesse a url que aparece na tela.

Publicando
==========

A publicação compreende a construção de um novo build e a publicação destes arquivos no branch **master**.
Basta executar o script `./deploy.sh` pra gerar um novo build e publicá-lo em seguida.

Em linhas gerais, o que o script `deploy.sh` faz é:

- Gerar um novo build no diretorio `build` de **source**
- Comitar tudo e gerar tags em pontos específicos
- Mover o conteudo do diretório `build` para a raiz de **master**
- Comitar tudo em **master** e subir todas as alterações

Após o processo completo, pode-se ver as alterações online em http://getupcloud.github.io/

A cada build são geradas duas tags:

- source-[BUILD_ID]: tag do fonte usado para gerar o build, commit do **source**
- [BUILD_ID]: tag do build gerado, comitado em **master**

sendo que `[BUILD_ID]` possui a data do build.



