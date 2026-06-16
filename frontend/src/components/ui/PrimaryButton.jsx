function PrimaryButton({
  children,
  onClick,
}) {

  return (

    <button
      onClick={onClick}
      className="
      px-6
      py-3
      rounded-2xl
      bg-[#5F0A87]
      text-white
      font-medium
      hover:scale-[1.02]
      transition"
    >

      {children}

    </button>
  );
}

export default PrimaryButton;