// import { useNavigate } from "react-router-dom";

// export default function EmptyState({
//   emoji = "📖",
//   title,
//   description,
//   action,
//   actionLabel
// }) {

//   const navigate =
//     useNavigate();

//   return (

//     <div
//       className="
//       flex
//       flex-col
//       items-center
//       justify-center
//       py-20
//       text-center"
//     >

//       <div
//         className="
//         text-5xl
//         mb-5"
//       >
//         {emoji}
//       </div>

//       <h3
//         className="
//         text-2xl
//         font-semibold
//         text-brownie
//         mb-3"
//       >
//         {title}
//       </h3>

//       <p
//         className="
//         text-coffee/70
//         max-w-sm
//         mb-6"
//       >
//         {description}
//       </p>

//       {action && (

//         <button
//           onClick={() =>
//             navigate(action)
//           }
//           className="
//           btn-primary"
//         >

//           {actionLabel}

//         </button>

//       )}

//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";

export default function EmptyState({
  emoji = "📖",
  title,
  description,
  action,
  actionLabel
}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-16 sm:py-24 px-4 text-center bg-white/40 rounded-2xl border border-dashed border-caramel/20 backdrop-blur-sm max-w-xl mx-auto w-full animate-fade-in">
      
      {/* Visual Marker Box */}
      <div className="text-4xl sm:text-5xl mb-4 select-none animate-bounce duration-1000">
        {emoji}
      </div>

      {/* Heading Title */}
      <h3 className="font-display text-xl sm:text-2xl font-bold text-brownie mb-2 tracking-tight">
        {title}
      </h3>

      {/* Descriptive Paragraph Text */}
      <p className="text-sm text-coffee/75 max-w-sm mb-6 leading-relaxed font-sans">
        {description}
      </p>

      {/* Optional Interactive CTA Button Action */}
      {action && (
        <button
          onClick={() => navigate(action)}
          className="w-full sm:w-auto bg-brownie text-white hover:bg-brownie/90 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] shadow-sm"
        >
          {actionLabel}
        </button>
      )}

    </div>
  );
}