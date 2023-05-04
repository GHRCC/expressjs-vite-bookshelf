import { api } from "./api.js";

export async function getData(id: number): Promise<any> {
  const res = await api.get(`/historia-brasil/${id}`); //pegando a const que eu criei
  const textos = res.data;
  return textos;
}

export async function getDataEco(id: number): Promise<any> {
  const res = await api.get(`/economia/${id}`); //pegando a const que eu criei
  const textos = res.data;
  return textos;
}

export async function getDataPi(id: number): Promise<any> {
  const res = await api.get(`/politica-internacional/${id}`); //pegando a const que eu criei
  const textos = res.data;
  return textos;
}
