import { Link } from "react-router-dom"; //importando react-router-dom para criar rotas

type LinkButtonProps = {
  //criando as propriedades de linkbutton
  to: string; //o link
  children: string; //o nome do botão
};

export default function LinkButton(props: LinkButtonProps) {
  return (
    <Link to={props.to} className="bg-white">
      {props.children}
    </Link>
  );
}
