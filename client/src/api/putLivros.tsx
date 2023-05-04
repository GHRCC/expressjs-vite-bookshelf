import { api } from "./api.js";
import { estadoProps } from "../Components/EstanteHb.js";

export type PutLivrosInput = {
  titulo: string;
  autor: string;
  edicao: string;
  editora: string;
  isbn: string;
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
  const response = await api.put(`/historia-brasil/4`, livro);
  return response.data;
}
