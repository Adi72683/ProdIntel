function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick} className="bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-3 rounded-xl text-3xl font-semibold text-white hover:scale-105 transition"
    >
      {text}
    </button>
  );
}

export default Button;