import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../api/getData.js";
import { putLivro } from "../api/putLivros.js";
import { toast, ToastContainer } from "react-toastify";
import { TextArea } from "../Components/TextArea.js";
import { TextField } from "../Components/TextField.js";

const texts = {
  titulo: "Editar livro",
  autorPlaceholder: "Autor",
  edicaoPlaceholder: "Edição",
  editoraPlaceholder: "Editora",
  isbnPlaceholder: "ISBN-10",
  createLivroSucess: "o livro foi editado com sucesso",
  creatLivroFailure: "houve um erro ao editar o livro :(",
  tituloPlaceholder: "Digite o titulo",
  conteudoPlaceholder: "Digite o conteudo",
  submitButtonLabel: "Enviar",
};

const initialEditLivro = {
  titulo: "",
  autor: "",
  edicao: "",
  editora: "",
  isbn: "",
  descricao: "",
};

export function EditarLivro() {
  const params = useParams();
  const navigate = useNavigate();

  const livroId = Number(params.id);
  const [form, setForm] = useState(initialEditLivro);
  useEffect(() => {
    getData(livroId).then((livro) => setForm(livro));
  }, [livroId]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await putLivro(livroId, form);
    if (response.success) {
      toast(texts.createLivroSucess);
    } else {
      toast(texts.creatLivroFailure);
    }
  }

  return (
    <div className=" bg-pink-400 flex flex-col items-center ">
      <h1>{texts.titulo}</h1>
      <form
        className="flex flex-col gap-2 w-1/2"
        noValidate
        onSubmit={onSubmit}
      >
        <TextField
          placeholder={texts.tituloPlaceholder}
          value={form.titulo}
          onChange={(titulo) => setForm({ ...form, titulo })}
        />
        <TextField
          placeholder={texts.autorPlaceholder}
          value={form.autor}
          onChange={(autor) => setForm({ ...form, autor })}
        />
        <TextField
          placeholder={texts.edicaoPlaceholder}
          value={form.edicao}
          onChange={(edicao) => setForm({ ...form, edicao })}
        />

        <TextField
          placeholder={texts.editoraPlaceholder}
          value={form.editora}
          onChange={(editora) => setForm({ ...form, editora })}
        />
        <TextField
          placeholder={texts.isbnPlaceholder}
          value={form.isbn}
          onChange={(isbn) => setForm({ ...form, isbn })}
        />
        <TextArea
          placeholder={texts.conteudoPlaceholder}
          value={form.descricao}
          onChange={(descricao) => setForm({ ...form, descricao })}
        />
        <button type="submit">{texts.submitButtonLabel}</button>
      </form>
    </div>
  );
}
