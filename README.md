### Passo 1: criar projetos
- Conferir Yarn
```bash
yarn -v
npm install --global yarn

- Criar projeto ReactJS com `create-react-app`:
```bash
npx create-react-app frontend --template typescript
```
* `yarn start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* `yarn test`
* `yarn build`

- Arquivo  _redirects   deve ser criado na pasta public 
```
/* /index.html 200
```

### Passo 3: adicionar Bootstrap e CSS ao projeto
- Bootstrap
```
yarn add bootstrap
```
```
(index.tsx) import 'bootstrap/dist/css/bootstrap.css';
```
