function BotaoSubmit({ children }) {
  return (
    <button
      type="submit"
      className="w-full bg-gray-300 h-11 text-lg rounded-md"
    >
      {children}
    </button>
  );
}

export default BotaoSubmit;
