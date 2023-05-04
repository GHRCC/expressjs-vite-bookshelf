import { api } from "./api.js";
import { estadoProps } from "../Components/EstanteHb.js";

export type PostLivrosInput = {
  nome: string;
  autor: string;
  descricao: string;
};

export type PostLivrosOutput = {
  success: boolean;
  livro: estadoProps;
};

export async function postarLivros(
  livro: PostLivrosInput
): Promise<PostLivrosOutput> {
  const response = await api.post("/livro", livro);
  return response.data;
}
