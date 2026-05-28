import { useForm } from "react-hook-form";
import Header from "../components/Header";

function RequerimentoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const salvar = (data) => {
    console.log(data);
    reset();
  };

  const regras = {
    tipo: {
      required: "Tipo é obrigatório",
    },
    descricao: {
      required: "Descrição é obrigatório",
      minLength: 10,
    },
  };

  return (
    <>
      <Header
        titulo="Meus requerimentos"
        subtitulo="Faça solicitações online para a secretaria"
      />
      <form id="meuFormulario" onSubmit={handleSubmit(salvar)}>
        <div className="flex flex-col">
          <label htmlFor="tipo">Tipo de Requerimento</label>
          <select
            id="tipo"
            className="mb-2 w-1/5 border-1 border-tertiary rounded-t-sm rounded-b-sm"
            {...register("tipo", regras.tipo)}
          >
            {" "}
            rounded-t-sm rounded-b-sm
            <option value="">Selecione um tipo...</option>
            <option value="boleto">Boleto</option>
            <option value="matricula">Matricula</option>
          </select>
        </div>
        {errors?.tipo && <p className="text-red-600">{errors.tipo.message}</p>}
        <div className="flex flex-col">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            name="descricao"
            id="descricao"
            className="mb-2 w-1/2 border-1 border-tertiary rounded-t-sm rounded-b-sm"
            {...register("descricao", regras.descricao)}
          ></textarea>
        </div>
        {errors?.descricao && (
          <p className="text-red-600">{errors.descricao.message}</p>
        )}
        <div className="flex flex-row mb-3">
          <label htmlFor="data-requerimento" className="mr-3">
            Data do Requerimento
          </label>
          <input
            type="date"
            className="border-1 border-tertiary rounded-t-sm rounded-b-sm"
            {...register("data-requerimento")}
          />
        </div>
        <button
          type="reset"
          value="Cancelar"
          className="mr-2 p-1 border-1 border-tertiary rounded-t-sm rounded-b-sm"
        >
          Cancelar
        </button>
        <button
          type="submit"
          value="Salvar"
          className="p-1 border-1 border-tertiary rounded-t-sm rounded-b-sm"
        >
          Salvar
        </button>
      </form>
    </>
  );
}

export default RequerimentoForm;
