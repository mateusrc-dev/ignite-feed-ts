import React from 'react' //o react em si é o coração do react onde tem as funcionalidades que são compartilhadas entre todas as interfaces, todos os ambientes, clientes (tv, vr, mobile, web)
import ReactDOM from 'react-dom/client' //reactDom é a integração entre o coração do react com a DOM (document object model - representação do HTML através do JS - quando importamos o ReactDom estamos integrando o React para funcionar no ambiente Web)
import { App } from './App' //App nada mais é uma função que retorna um HTML
//React é uma biblioteca de construção de SPA 

ReactDOM.createRoot(document.getElementById('root')).render( //aqui é especificado o elemento raiz da página HTML - "root" - React vai criar todo o HTML, CSS e JS da aplicação dentro da div "root" - Aplicação SPA (toda interface da aplicação é construída a partir do JS facilitando a manipulação da interface) - dentro do render vamos ter uma sintaxe semelhante ao HTML, mas em vez de tags html, está sendo usado componentes do react - o que está dentro do render vai ser mostrado em tela (rederizar), dentro da div "root"
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)