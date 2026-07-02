function Chip({ label, selected, onClick}) {

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-xl font-semibold transition duration-300
       ${
          selected
            ? "bg-yellow-400 text-black"
            : "bg-purple-600 text-white hover:bg-purple-700"
        }
      `}
    >
      {label}
    </button>
  );
}
export default Chip;