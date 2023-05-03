import { Link } from "react-router-dom"; //importando react-router-dom para criar rotas

type LinkButtonProps = {
  //criando as propriedades de linkbutton
  to: string; //o link
  children: React.ReactNode; //esse link pode receber um elemento do react
};

export default function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      to={props.to}
      className="bg-white w-24 flex justify-center border-none rounded-md"
    >
      {props.children}
    </Link>
  );
}
