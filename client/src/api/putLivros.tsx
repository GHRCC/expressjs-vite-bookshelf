import { api } from "./api.js";
import { estadoProps } from "../Components/EstanteHb.js";

export type PutLivrosInput = {
  nome: string;
  autor: string;
  descricao: string;
};

export type PutLivrosOutput = {
  success: boolean;
  livro: estadoProps;
};

export async function putLivro(
  id: number,
  livro: PutLivrosInput
): Promise<PutLivrosOutput> {
  const response = await api.put(`/historia-brasil/${id}`, livro);
  return response.data;
}
