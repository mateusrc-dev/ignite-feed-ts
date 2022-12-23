import styles from "./Avatar.module.css";
import { ImgHTMLAttributes } from "react" //podemos importar uma interface do TS com todas as propriedades que a tag 'img' pode ter - vamos importar para fazer uma extensão do TS

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> { //é preciso passar um generic - HTMLImageElement é uma interface global, não precisamos importar de nenhum lugar - não vamos precisar mais importar algumas das propriedades abaixo porque elas já existem na interface que importamos - com isso podemos passar para o componente Avatar quantas propriedades desejarmos
  hasBorder?: boolean;
  //src: string;
  //alt?: string; //ponto de interrogação significa que o dado é opcional (não é obrigatório passar essa propriedade ao colocar o componente em outro componente - com isso o TS não vai indicar erro caso não inserirmos esse dado no component)
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) { //vamos usar um rest operator para não precisar ficar citando cada propriedade que vamos passar, pois props tem todas as nossas propriedades
  //podemos usar desestruturação nas propriedades e pescar o que desejamos dentro de 'props' - podemos definir valores default na desestruturação, se não tiver nada em hasBorder, ele vai ser true

  //const hasBorder = props.hasBorder !== false; //se a propriedade hasBorder que vem do parâmetro for diferente de false (ou seja,for verdadeiro ou nulo), vai ser true, se for igual a false vai ser false...

  return (
    //vamos usar propriedades para esse componente se tornar dinâmico - no ternário se 'hasBorder' for true ser usada a primeira classe, caso contrário, a segunda
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props} //passando cada propriedades dentro de props pra tag 'img'
      //src={src}
      //alt={alt}
      //title={title}
    />
  );
}