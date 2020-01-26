# Slack
https://programator-fullstack.slack.com/

Zaposzenie:
https://bit.ly/ 3a LF UTC 

# Bitbucket / GIT:
https://bitbucket.org/ev45ive/altkom-programator-fullstack/

# Inicjalizacja nowego projektu
git clone https://bitbucket.org/ev45ive/altkom-programator-fullstack.git 
npm init 

# Instalujemy server
npm install --global http-server 
npm i -g http-server 
// $PATH -> C:\Users\Student\AppData\Roaming\npm\http-server
http-server.cmd

npm install --save http-server 
// => node_modules
// => package.json - dependencies

npm i

# GIT
git init 
git status
.gitignore
git add .
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git commit -m "Pierwszy commit"
git log 
git status
git checkout <COMMIT_ID>

# Bootstrap CSS
npm install bootstrap --save 

# Npm Scripts
npm run nazwa_skryptu
npm run start
npm start

# Document Object Model
```js
window.document.body.children[0].style = "color:hotpink;"
"color:hotpink;"

window.document.body.children[0].children[0].children[0].children[0].innerText = "Lubie placki!"
```

# ESLint
https://eslint.org/

npm install eslint --save-dev

npm i  -g eslint
eslint.cmd --init

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

<!-- npm i -D eslint-config-prettier eslint-plugin-prettier -->