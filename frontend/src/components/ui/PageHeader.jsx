function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        border
        border-caramel/10
        p-4
        sm:p-6
        shadow-sm
        hover:border-caramel/20
        transition-all
        duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;