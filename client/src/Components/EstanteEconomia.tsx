import { useState } from "react";
import mankiw from "../../public/mankiw.jpeg";
import { getDataEco } from "../api/getData.js";

export type estadoProps = {
  id: number;
  nome: string;
  autor: string;
  edicao: string;
  editora: string;
  "ISBN-10": number;
  descricao: string;
};

export function EstanteEco() {
  //criar uma função para fazer a requisição para o backend, depois setar o estado do componente no evento de click
  const [estado, setEstado] = useState<estadoProps[]>([]);

  async function pegarDados() {
    const dados = await getDataEco(1);
    setEstado(dados);
  }

  function limparDados() {
    setEstado([]);
  }

  return (
    <div className="my-12 h-2/4 bg-white">
      <div>
        <img
          src={mankiw}
          className="h-80 mx-3"
          onClick={estado.length ? limparDados : pegarDados}
        />
        <h1 className="top-16 mx-3">{estado[0]?.nome}</h1>
        <h1 className="top-16 mx-3">{estado[0]?.autor}</h1>
        <h1 className="top-16 mx-3">{estado[0]?.edicao}</h1>
        <h1 className="top-16 mx-3">{estado[0]?.editora}</h1>
        <h1 className="top-16 mx-3">{estado[0]?.["ISBN-10"]}</h1>
      </div>
      <h1 className="top-16 mx-3">{estado[0]?.descricao}</h1>
    </div>
  );
}
