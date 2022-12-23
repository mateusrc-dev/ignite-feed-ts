import styles from "./Header.module.css"; //ao importar um 'css.module' é preciso dar um nome para o estilo - 'styles'
import igniteLogo from '../assets/Ignite-logo.svg' //importando imagem - no react importamos o arquivo de imagem a patir do JS

//console.log(igniteLogo) //no console vai ser exibido o caminho da imagem

//no react não utilizamos 'class' na tag html - utilizamos 'className' para o react não confundir com 'class' do JS

export function Header() {
  //exportando o componente Header - todo componente deve começar com a letra maiúscula para não confundir com elementos do próprio HTML
  return (
    //para pegar a classe do 'styles' vamos usar as chaves porque o 'styles' é uma variável JS 
    <header className={styles.header}>
      <img src={igniteLogo} alt="logo do ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}