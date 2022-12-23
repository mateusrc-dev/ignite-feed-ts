import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  //podemos usar desestruturação nas propriedades e pescar o que desejamos dentro de 'props' - podemos definir valores default na desestruturação, se não tiver nada em hasBorder, ele vai ser true

  //const hasBorder = props.hasBorder !== false; //se a propriedade hasBorder que vem do parâmetro for diferente de false (ou seja,for verdadeiro ou nulo), vai ser true, se for igual a false vai ser false...

  return (
    //vamos usar propriedades para esse componente se tornar dinâmico - no ternário se 'hasBorder' for true ser usada a primeira classe, caso contrário, a segunda
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
