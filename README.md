![alt text](https://www.openra.net/images/social.jpg?t=2022-02-04-09-33)

## As You Wish (OpenRA Discord Bot)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white) ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
)

### Sobre

Sabe quando você está jogando algo com seus amigos e o sentido Dev começa a ser acionado em seu cérebro? Então! Durante algumas (várias) jogatinas de [OpenRA](https://www.openra.net/) com meus amigos, surgiu a necessidade de termos nosso próprio servidor. Sendo assim, já fui correndo para o serviço de Cloud Computing da Amazon (AWS) e inicializei nosso server! O problema é que, em alguns momentos, era necessário iniciar, parar ou reiniciar o nosso servidor. Por jogarmos utilizando o Discord, achei conveniente criar o "As You Wish"!, um bot capaz de iniciar, parar e reiniciar o nosso servidor com simples comandos!

### Techs
- Node.js;
- SSH;
- TypeScript;
- Git/Github;
- DiscordJS;
- Amazon Web Service;

### Funcionalidades

#### Iniciar Servidor
![Start](https://github.com/Seiixas/openra-discord-bot/blob/main/images/ra%23start.png?raw=true)

Por meio do comando `ra#start`, é possível iniciar o servidor. É feita uma conexão SSH com o servidor para iniciar o serviço `openra-server`.

#### Parar Servidor
![Stop](https://github.com/Seiixas/openra-discord-bot/blob/main/images/ra%23stop.png?raw=true)

O comando `ra#stop` é utilizado para parar o servidor. É feita uma conexão SSH com o servidor para parar o serviço `openra-server`.

#### Reiniciar Servidor
![Stop](https://github.com/Seiixas/openra-discord-bot/blob/main/images/ra%23restart.png?raw=true)

Para reiniciar o servidor, usa-se `ra#start`. É feita uma conexão SSH com o servidor para reiniciar o serviço `openra-server`.

#### Requisitos:
- Node.js;
- Yarn;

Para inicializar o projeto, realize a compilação do [OpenRA](https://github.com/OpenRA/OpenRA) em seu servidor.

Edite o arquivo `launch-dedicated.sh` e informe as configurações do seu servidor pessoal (tais como senha, nome, porta e outros).

Copie o arquivo `launch-dedicated.sh` para `/usr/local/bin` com o nome de `openra-server.sh`. Não se esqueça de alterar os diretórios do shellscript!

Crie um serviço através do `systemctl` com o nome `openra-server` no diretório `/lib/systemd/system/openra-server.service`:
```sh
[Unit]
Description=OpenRA Server

[Service]
ExecStart=/usr/local/bin/openra-server.sh

[Install]
WantedBy=multi-user.target
```

Caso fique alguma dúvida sobre a configuração do servidor, dê uma olhada [neste tutorial](https://www.youtube.com/watch?v=cdYW1PSJWc4) ou siga a própria [documentação do OpenRA](https://github.com/OpenRA/OpenRA/blob/bleed/README.md).

Realize o clone deste repositório:
```sh
git clone https://github.com/Seiixas/openra-discord-bot
```

Baixe todas as dependências com o `yarn`.

Rode o bot com `yarn dev`.
