### criar projetos
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

* Arquivo  ' _redirects  ',  deve ser criado na pasta public 
```
/* /index.html 200
```

### Adicionar Bootstrap e CSS ao projeto
- Bootstrap
```
yarn add bootstrap
```
```
(index.tsx) import 'bootstrap/dist/css/bootstrap.css';
```

### Adicionar gráficos estáticos
- Apex Charts [https://apexcharts.com/](https://apexcharts.com/)
```bash
yarn add apexcharts
yarn add react-apexcharts
```

### Implantação no Netlify 
- Publicação no Netlify  [https://www.netlify.com/](https://www.netlify.com/)
  - Comando: yarn build
  - Diretório: build
  - Site settings -> Build & Deploy: (colocar o nome da sua pasta ou subpasta do projeto frontend)
  - Site settings -> Domain Management: (colocar o nome que você quiser)
  - Deploys -> Trigger deploy
