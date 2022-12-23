 //JSX = JavaScript + XML (HTML) - JSX é um arquivo JS que contém HTML
import "./global.css"; //importação do css ocorrem nos próprios components react - estilização global da aplicação
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post"; //criamos um component chamado Post e importamos ele - importante observar como é realizado a exportação - "export default 'nomedocomponente'"
import { Sidebar } from "./components/Sidebar";

//duas formas de fazer exportação
//-default exports - podemos colocar o nome que desejarmos na importação
//-named exports - não colocamos a palavra default - é preciso colocar as chaves na importação - não pode alterar o nome que foi colocado na exportação - vamos usar esse modo de exportação no nosso projeto

//conponent post precisa das informações do (pensar nas informações que variam):
//author: {avatar_url: "", name: "", role: ""}
//publishedAt: Date
//content: String

const posts = [
  //vamos criar um array com as informações do post com objetos dentro (array de objetos)
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mateusrc-dev.png",
      name: "Mateus Carvalho",
      role: "Developer Web",
    },
    content: [
      //aqui é importante termos o conteúdo bruto sem html (porque alguém mal intencionado pode user isso pra fazer algum mal) - vamos colocar cada parágrafo do conteúdo em uma posição no array dentro de um objeto
      { type: "paragraph", content: "Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-12-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-12-15 20:00:00"),
  },
];

export function App() {
  //importante lembrar que não é possível ter vários elementos html ou componentes no return sem ter uma tag (ex. div, main) ou um componente (ex. Container) que abrace todos eles
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post key={String(post.id)}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main> 
      </div>
    </div>
  );
}

//export default App;
