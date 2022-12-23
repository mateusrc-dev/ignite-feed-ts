import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react"; //importando um ícone da biblioteca phosphor-react
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    //não vamos colocar texto alternativo em 'img' porque será uma imagem escolhida pelo usuário - a mesma coisa em relação ao avatar
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/mateusrc-dev.png"/>
        <strong>Mateus Carvalho</strong>
        <span>Web Developer</span>
        <footer>
          <a href="#">
            <PencilLine size={20} /> Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  ); //como no editar perfil é um redirecionamento pra outra página vamos usar a tag de link 'a'
}
