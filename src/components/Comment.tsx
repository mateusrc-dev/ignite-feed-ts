import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    onDeleteComment(content); //vamos chamar a função que foi enviada como propriedade e colocar como argumento o conteúdo do comentário que está sendo enviado para esse componente também como propriedade
  }
  
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    //quando mandamos como valor de uma propriedade um boolean, temos que mandar entre chaves
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/mateusrc-dev.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:12:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  ); //quando colocamos um button que é um ícone, é interessante colocar um title - quando começamos a digitar o nome do ícone, é sugerido abaixo o ícone a ser importado e a importação ocorre automaticamente - lembrando que podemos colocar propriedades nos ícones dessa biblioteca
}
