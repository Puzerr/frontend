import { useParams } from "react-router";
import { useForm } from "react-hook-form";

function Perfil() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const salvar = (data) => console.log(data);

  const regras = {
    nome: {
      required: "Nome é obrigatório",
      minLength: { value: 3, message: "Nome tem no mínimo 2 caracteres" },
      maxLength: { value: 100, message: "Nome tem no máximo 100 caracteres" },
    },
    email: {
      required: "Email é obrigatório",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Email inválido",
      },
    },
    nascimento: {
      validate: {
        dataMinima: (value) =>
          Date.parse(`${value} 00:00:00 UTC`) > new Date("01/01/1900 00:00:00 UTC").getTime() || "Data inválida",
        dataMaxima: (value) =>
          Date.parse(`${value} 00:00:00 UTC`) < new Date().getTime() || "Data inválida",
      },
    },
    telefone: {
      min: { value: 0, message: "Telefone inválido" },
      pattern: {
        value: /^(\(?\d{2}\)?[\s.-]?)?(\d{4,5})[\s.-]?(\d{4})$/,
        message: "Telefone inválido",
      },
    },
  };

  return (
    <>
      <h1>Perfil do Usuário {id}</h1>
      <form onSubmit={handleSubmit(salvar)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input id="nome" type="text" {...register("nome", regras.nome)} />
        </div>
        {errors?.nome && <p>{errors.nome.message}</p>}
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register("email", regras.email)} />
        </div>
        {errors?.email && <p>{errors.email.message}</p>}
        <div>
          <label htmlFor="nascimento">Data de nascimento</label>
          <input
            id="nascimento"
            type="date"
            {...register("nascimento", regras.nascimento)}
          />
        </div>
        {errors?.nascimento && <p>{errors.nascimento.message}</p>}
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            type="tel"
            {...register("telefone", regras.telefone)}
          />
        </div>
        {errors?.telefone && <p>{errors.telefone.message}</p>}
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default Perfil;
