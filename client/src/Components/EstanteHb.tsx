import { useState } from "react";
import Boris from "../../public/hb-boris-fausto.jpg";
import { getData } from "../api/getData.js";

export type estadoProps = {
  id: number;
  nome: string;
  autor: string;
  edicao: string;
  editora: string;
  "ISBN-10": number;
  descricao: string;
};

export function EstanteHB() {
  //criar uma função para fazer a requisição para o backend, depois setar o estado do componente no evento de click
  const [estado, setEstado] = useState<estadoProps[]>([]);

  async function pegarDados() {
    const dados = await getData(1);
    setEstado(dados);
  }
  return (
    <div className="my-12 h-96">
      <h1>{estado[0]?.autor}</h1>
      <h1>Estante</h1>
      <img src={Boris} className="h-80" onClick={pegarDados} />
      {/* <span>{JSON.stringify(estado, "", null)}</span> */}
    </div>
  );
}
