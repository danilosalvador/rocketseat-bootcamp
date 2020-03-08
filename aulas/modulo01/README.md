<h1 align="center">
    Configuração do Ambiente de Desenvolvimento
</h1>

<p>
O texto abaixo tem como objetivo de documentar os passos iniciais de configuração do ambiente de desenvolvimento aplicado no [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp).
</p>

<p align="center">
    <img alt="License" src="https://img.shields.io/badge/made%20by-danilosalvador-blue">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

## Anotações

###### Referências de GitHub
    https://github.com/lukemorales/
    https://github.com/luizbatanero/

###### VS Code
    1. Tema: Dracula Official (adicionar pelas Extensions do VSCode)

    2. Fonte: 
        Fira Code (https://github.com/tonsky/FiraCode), 
        Procurar por Solution e fazer o Download e instalar os arquivos TTF

    3. Ícones: Material Icon Theme (adicionar pelas Extensions)
    4. Cores nos códigos hexadecimais: Color Highlight (adicionar pelas Extensions do VSCode)

    5. Outros plugins (adicionar pelas Extensions do VSCode): 
        Rocketseat ReactJS
        Rocketseat React Native

    6. Abrir o settings do VS Code, editar o arquivo JSON e adicionar:
```
        {
            "dart.flutterSdkPath": "/Users/danilosalvador/Library/Developer/flutter",
            "workbench.iconTheme": "material-icon-theme",
            "workbench.colorTheme": "Dracula",
            "editor.fontFamily": "Fira Code",
            "editor.fontLigatures": true,
            "editor.fontSize": 12,
            "editor.rulers": [80, 120],
            "editor.renderLineHighlight": "all",
            "editor.tabSize": 2,
            "terminal.integrated.fontSize": 12,
            "emmet.includeLanguages": {
                "javascript": "javascriptreact"
            },
            "emmet.syntaxProfiles": {
                "javascript": "jsx"
            },
            "javascript.updateImportsOnFileMove.enabled": "never",
            "javascript.suggest.autoImports": false,
            "editor.parameterHints.enabled": false,
            "breadcrumbs.enabled": true
        }
```
###### Terminal
    1. Tema: 
        Acessar https://draculatheme.com/ e fazer o download do Terminal.app;
        Importar e mudar nas preferencias do Terminal

    2. Mudar a fonte do tema instalado para o Fira Code

    3. Instalar Oh My Ash? http://ohmyz.sh/

    4. Instalar Spaceship por git clone: https://github.com/denysdovhan/spaceship-prompt
        editar o arquivo .zshrc (arquivo oculto na pasta do usuário) 
        e trocar o tema: ZSH_THEME="spaceship"
        e adicionar as configurações:
```
            SPACESHIP_PROMPT_ORDER=(
                user
                dir
                host
                git
                exec_time
                line_sep
                vi_mode
                jobs
                exit_code
                char
            )
            SPACESHIP_PROMPT_ADD_NEWLINE=false
            SPACESHIP_CHAR_SYMBOL="❯"
            SPACESHIP_CHAR_SUFFIX=" "
```
    5. Instalação do plugin: https://github.com/zdharma/zinit
        Editar o arquivo .zshrc (arquivo oculto na pasta do usuário) 
```
            zinit light zsh-users/zsh-autosuggestions
            zinit light zsh-users/zsh-completions
            zinit light zdharma/fast-syntax-highlighting
```
    6. Ferramentas
        A. Insomnia: https://insomnia.rest/
        B. DevDocs: https://devdocs.egoist.moe/

    7. Terminal do VSCode
        A. Editar o arquivo .zshrc (arquivo oculto na pasta do usuário) 
```
            "terminal.integrated.shell.osx": "/bin/zsh"
```
        B. Abrir o VSCode por linha de comando (code)
            I. Inicia o VsCode
            II. Digita Cmd + Shift + P
            III. No campo para digitar escreve shell command
            IV. Seleciona a opção Shell Command: Install 'code' command in PATH
            V. Fecha o terminal e abrir de novo para aplicar

###### NVM
    Para instalação Node.js

    1A. Instalação (**MacOS**): https://github.com/nvm-sh/nvm
        A. Por terminal: 
```     
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```
        B. Abrir o arquivo de configuração (pasta do usuário): ˜/.zshrc
```
            export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
            [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
        C. Instalar o Node.JS por terminal (pegar a última versão no site)
```
            nvm install 12.14.1
```
        D. Colocar como versão default
```
            nvm alias default 12.14.1
```
    1B. Instalação (**Windows**): https://chocolatey.org/ 

###### YARN 
    Instalação de pacotes (igual ao NPM, porém, mais veloz)
    1. Instalação: https://legacy.yarnpkg.com/

##  Principais comandos
    1. Criação do arquivo packget.json
```
        yarn init -y
```
    2. Framework do Node.JS
```
        yarn add express
```
    3. Para instalação de todas as dependências do projeto (em um projeto já criado)
```
        yarn install
```
    4. Rodar o servidor Node
```
        node index.js
```
    5. Atualização automática sem precisar reiniciar o Node apenas em modo de desenvolvimento (-D)
```
        yarn add nodemon -D
```
        5.1 Para iniciar o nodemon, adicionar no arquivo package.json
```
            "scripts": {
                "dev": "nodemon index.js"
            },
```
        5.2 Para iniciar o projeto, pelo terminal:
```
            yarn dev
```
## :memo: Licença
Este projeto está sob a licença MIT. Consulte a [LICENÇA](LICENSE.md) para obter mais informações.

---

Feito com ♥ by Danilo Salvador
