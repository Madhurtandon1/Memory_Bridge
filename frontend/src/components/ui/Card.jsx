function Card({
  children,
  className = "",
}) {

  return (

    <div
      className={`
      bg-white
      rounded-[24px]
      shadow-sm
      p-6
      ${className}
      `}
    >

      {children}

    </div>
  );
}

export default Card;