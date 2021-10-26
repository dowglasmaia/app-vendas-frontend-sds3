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

- Três pilares do React
  - Componentes
  - Props
  - Estado
- React Hooks
  - useState
  - useEffect
- Libs
  - React Router DOM
  - Axios

  - Instalar React Router DOM
```bash
yarn add react-router-dom

yarn add @types/react-router-dom -D
```

- Instalar Axios
```bash
yarn add axios

```

- Instalar date-fns  -  para formata Datas
```bash
yarn add date-fns
```

```
Hook: useState
Manter estado no componente
```
```
Hook: useEffect
Executar algo na instanciação ou destruição do componente, observar estado
```
```
Props
Argumentos que um componente React pode receber
```


- Função auxiliar formatLocalDate
```bash
export const formatLocalDate = (date: string, pattern: string) => {
    const dt = new Date(date);
    const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
    return format(dtDateOnly, pattern);
}

```

- Props
```
Argumentos que um componente React pode receber

```



