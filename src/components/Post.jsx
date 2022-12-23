import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns"; //importando função que vamos usar para formatar a data 'format'
import ptBR from "date-fns/locale/pt-BR"; //importando o idioma para usar na data
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  //vamos desestruturar - pescar de 'props' as propriedades que foram passadas para esse component
  const [comments, setComments] = useState(["Post muito massa, hein?!"]); //como um useState retorna um vetor, podemos desestruturar esse vetor - a função 'setComments' além de alterar o valor de 'comments' avisa para o react que o estado mudou
  const [newCommentText, setNewCommentText] = useState(""); //vamos armazenar o texto digitado no input, por isso o estado inicial é um string vazia
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  ); //colocamos como primeiro parâmetro nossa data e no segundo parâmetro o formato dessa data - as informações de como desejamos formatar a data está na documentação do 'fns' - os caracteres que não queremos formatar colocamos entre aspas simples - no terceiro parâmetro vamos colocar o idioma da nossa data

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  }); //essa função faz o cálculo da distância do dia atual em relação a data que está na variável do primeiro parâmetro - colocamos dentro do object o idioma e o addSuffix para aparecer 'há' na frente...

  function handleCreateNewComment() {
    event.preventDefault(); //para o comportamento padrão não ocorrer (redirecionar a página)
    //const newCommentText = event.target.comment.value //pegando o valor que está no textarea //target pega o elemento de onde vem o evento 'form' - comment é o nome da textarea (comment pega o elemento 'textarea') - programação imperativa
    setComments((prevState) => [...prevState, newCommentText]); //aqui estamos usando a imutabilidade (está sendo passado um novo valor em vez do valor ser alterado)
    //event.target.comment.value = '' //limpando o textarea após o usuário adicionar um comentário - programação imperativa
    setNewCommentText(""); //programação declarativa
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity(''); //temos que esvaziar a validação para ela não continuar aparecendo ao digitar algo no input 
    setNewCommentText(event.target.value); //programação declarativa
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório rapaz...!') //estamos customizando a mensagem de validação!
  }

  function deleteComment(commentToDelete) {
    //vamos passar como propriedade para o componente Comment essa função - forma de conectar dois componentes - no componente Comment vamos chamar essa função e passar um parâmetro para ela
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    }); //vamos usar o filter para tirar o comentário deletado -> quando o resultado do teste for false, o comment corrente não vai ser inserido na nova lista
    setComments(commentsWithoutDeletedOne); //imutabilidade - vamos criar um novo valor para a lista de comentários (isso é diferente de alterar a lista) sem o comentário deletado
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    //na class author vamos colocar os dados do autor como nome e cargo dentro de uma div para podermos fazer o alinhamento adequado ao lado do avatar!
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          //content é um array de objetos
          if (line.type === "paragraph") {
            //se o tipo da linha for igual a 'parágrafo' vai entrar nas chaves
            return <p key={String(line.content)}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={String(line.content)}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário!"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              onDeleteComment={deleteComment}
              content={comment}
              key={String(comment)}
            />
          );
        })}
      </div>
    </article>
  ); //no react, se nos atributos html tiver duas palavras iniciamos a segunda palavra com letra maiúscula (como visto em 'time') - no react espaços não contam na hora de mostrar na interface - temos que usar '{" "}' (um texto JS em branco) para dar espaço
}
