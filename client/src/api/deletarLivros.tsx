import { api } from "./api.js";
import { estadoProps } from "../Components/EstanteHb.js";

export type DeletarLivro = {
  success: boolean;
  livro: estadoProps;
};

export async function deletarLivro(id: number): Promise<DeletarLivro> {
  const res = await api.delete(`/historia-brasil/${id}`);
  const livro = res.data;
  return livro;
}
