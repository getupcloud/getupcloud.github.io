Site getupcloud.com
===================

Este repositório armazena os arquivos originais (templates e statics) para gerar o site getupcloud.com

O procesos se dá nas seguintes etapas:

- edição
- teste
- build
- deploy

O fluxo de desenvolvimento inicia no branch **source**, onde os arquivo originais devem ser editados e testados.

```
ATENÇÃO!

Não edite arquivos diretamente no branch "master".

Sempre inicie suas alterações no branch "source".
```

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

Para visualizar as alterações (a.k.a. testar o site) execute o comando `./build.sh`. Os arquivos finais do site são gerados
no diretório `build/`.

Use a opção `--server` para iniciar um servidor HTTP do novo build, escutando na porta 9090 (padrão). Se deseja utilizar
outra porta, passe-a como argumento:

```./build.sh --server=8080```

Publicando
==========

A publicação compreende a construção de um novo build e a publicação destes arquivos no branch **master**.
Basta executar o script `./deploy.sh` pra gerar um novo build e publicá-lo automaticamente em seguida (voce precisa de
permissões no repositório do gihub para fazer o push).

Em linhas gerais, o que o script `deploy.sh` faz é:

- Gera um novo build no diretorio `build` (branch **source**)
- Comita tudo e gerar tags em pontos específicos
- Move o conteudo do diretório `build` para a raiz do branch **master**
- Comita tudo no branch **master** e sube (push) todas as alteraçõe

Após o processo completo, pode-se ver as alterações online em http://getupcloud.github.io/

A cada build são geradas duas tags:

- source-[BUILD_ID]: tag do fonte usado para gerar o build, commit do **source**
- [BUILD_ID]: tag do build gerado, comitado em **master**

sendo que `[BUILD_ID]` possui a data do build.

