import chapeu from "../assets/learn.svg";

function AsideHeader() {
  return (
    <>
      <header className="flex flex-row items-center gap-2 pb-12 pt-3 pl-2">
        <img src={chapeu} alt="Chapéu de formatura" className="w-14" />
        <h1 className="font-bold text-2xl justify-center items-center">
          Aluno Online
        </h1>
      </header>
    </>
  );
}

export default AsideHeader;
