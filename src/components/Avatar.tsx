import styles from "./Avatar.module.css";

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string; //ponto de interrogação significa que o dado é opcional (não é obrigatório passar essa propriedade ao colocar o componente em outro componente)
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
  //podemos usar desestruturação nas propriedades e pescar o que desejamos dentro de 'props' - podemos definir valores default na desestruturação, se não tiver nada em hasBorder, ele vai ser true

  //const hasBorder = props.hasBorder !== false; //se a propriedade hasBorder que vem do parâmetro for diferente de false (ou seja,for verdadeiro ou nulo), vai ser true, se for igual a false vai ser false...

  return (
    //vamos usar propriedades para esse componente se tornar dinâmico - no ternário se 'hasBorder' for true ser usada a primeira classe, caso contrário, a segunda
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
