function Button({ text }) {
  return (
    <button className="border-none flex items-center justify-center bg-primary-5 rounded-2xl px-3 py-4 font-semibold shadow-custom cursor-pointer duration-300 ease-in hover:bg-primary-3">
      {text}
    </button>
  );
}

export default Button;
