// import { useNavigate } from "react-router-dom";
// import {
//   Calendar,
//   Users,
//   Sparkles
// } from "lucide-react";

// export default function MemoryCard({
//   memory
// }) {

//   const navigate =
//     useNavigate();

//   const formatDate =
//     (date) => {

//       if (!date)
//         return "Unknown date";

//       return new Date(
//         date
//       ).toLocaleDateString(
//         "en-US",
//         {
//           month: "long",
//           day: "numeric",
//           year: "numeric"
//         }
//       );
//     };

//   return (

//     <div
//       onClick={() =>
//         navigate(
//           `/memories/${memory.id}`
//         )
//       }
//       className="
//       card
//       p-6
//       cursor-pointer
//       hover:-translate-y-1
//       transition-all"
//     >

//       <div
//         className="
//         flex
//         items-center
//         gap-2
//         text-xs
//         text-caramel
//         mb-3"
//       >

//         <Calendar size={12} />

//         <span>
//           {formatDate(
//             memory.memoryDate
//           )}
//         </span>

//       </div>

//       <h3
//         className="
//         font-display
//         text-xl
//         font-semibold
//         text-brownie
//         mb-2"
//       >
//         {memory.title}
//       </h3>

//       <p
//         className="
//         text-sm
//         text-coffee/70
//         line-clamp-3
//         mb-4"
//       >
//         {memory.summary ||
//           "No summary available"}
//       </p>

//       <div
//         className="
//         flex
//         flex-wrap
//         gap-2
//         mb-4"
//       >

//         {memory.tags
//           ?.slice(0, 3)
//           .map((tag) => (

//             <span
//               key={tag}
//               className="
//               px-2
//               py-1
//               rounded-full
//               bg-caramel/10
//               text-xs
//               text-caramel"
//             >
//               {tag}
//             </span>

//           ))}

//       </div>

//       <div
//         className="
//         flex
//         items-center
//         justify-between"
//       >

//         <div
//           className="
//           flex
//           items-center
//           gap-1
//           text-xs
//           text-caramel"
//         >

//           <Users size={12} />

//           <span>
//             {
//               memory.people
//                 ?.length
//             }
//           </span>

//         </div>

//         <div
//           className="
//           flex
//           items-center
//           gap-1
//           text-xs
//           text-caramel"
//         >

//           <Sparkles
//             size={12}
//           />

//           <span>
//             {
//               memory.emotions
//                 ?.length
//             }
//           </span>

//         </div>

//       </div>

//     </div>
//   );
// }





import { useNavigate } from "react-router-dom";
import { Calendar, Users, Sparkles } from "lucide-react";

export default function MemoryCard({ memory, displayVariant = "grid" }) {
  const navigate = useNavigate();

  const formatDate = (date) => {
    if (!date) return "Unknown date";
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };

  const isList = displayVariant === "list";

  return (
    <div
      onClick={() => navigate(`/memories/${memory.id}`)}
      className={`
        bg-white border border-caramel/10 rounded-2xl p-5 cursor-pointer 
        hover:-translate-y-0.5 hover:shadow-md hover:border-caramel/25 
        transition-all duration-200 flex flex-col justify-between w-full
        ${isList ? "md:flex-row md:items-center md:gap-6" : ""}
      `}
    >
      {/* Primary Text Content Group */}
      <div className={isList ? "flex-1 min-w-0" : ""}>
        {/* Date Container */}
        <div className="flex items-center gap-1.5 text-xs text-caramel/90 font-medium mb-2.5">
          <Calendar size={13} className="flex-shrink-0" />
          <span>{formatDate(memory.memoryDate)}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg sm:text-xl font-bold text-brownie mb-1.5 truncate">
          {memory.title}
        </h3>

        {/* Summary Description */}
        <p className="text-sm text-coffee/75 line-clamp-2 md:line-clamp-3 mb-3 font-sans leading-relaxed">
          {memory.summary || "No summary available"}
        </p>

        {/* Tags Block Area */}
        <div className="flex flex-wrap gap-1.5 mb-4 md:mb-0">
          {memory.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-caramel/10 text-xs font-medium text-caramel tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics Row Section */}
      <div 
        className={`
          flex items-center gap-4 text-xs font-semibold text-caramel border-t border-caramel/5 pt-3
          ${isList ? "md:border-t-0 md:pt-0 md:flex-col md:items-end md:justify-center md:gap-2 flex-shrink-0" : "justify-between"}
        `}
      >
        <div className="flex items-center gap-1.5 bg-neutral-50 px-2.5 py-1 rounded-lg border border-caramel/5">
          <Users size={13} className="text-caramel/70" />
          <span className="text-brownie/80">{memory.people?.length || 0} People</span>
        </div>

        <div className="flex items-center gap-1.5 bg-neutral-50 px-2.5 py-1 rounded-lg border border-caramel/5">
          <Sparkles size={13} className="text-caramel/70" />
          <span className="text-brownie/80">{memory.emotions?.length || 0} Emotions</span>
        </div>
      </div>

    </div>
  );
}