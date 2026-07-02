function Button({ text, onClick }) {
  return (
  <button onClick={onClick} className=" bg-purple-600 p-4 rounded-xl text-3xl font-semibold text-white transition duration-300">
  {text}
</button>
  );
}

export default Button;