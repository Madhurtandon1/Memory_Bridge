// import { useNavigate }
// from "react-router-dom";

// import {
//   FolderOpen,
//   ChevronRight
// } from "lucide-react";

// export default function CollectionCard({
//   collection,
//   memoryCount = 0
// }) {

//   const navigate =
//     useNavigate();

//   return (

//     <div
//       onClick={() =>
//         navigate(
//           `/collections/${collection.id}`
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
//         justify-between
//         items-center
//         mb-4"
//       >

//         <div
//           className="
//           w-12
//           h-12
//           rounded-2xl
//           bg-caramel/10
//           flex
//           items-center
//           justify-center"
//         >

//           <FolderOpen
//             className="
//             text-caramel"
//           />

//         </div>

//         <div
//           className="
//           text-xs
//           bg-caramel/10
//           px-3
//           py-1
//           rounded-full
//           text-caramel"
//         >

//           {memoryCount}
//           {" "}
//           memories

//         </div>

//       </div>

//       <h3
//         className="
//         font-display
//         text-xl
//         text-brownie
//         font-semibold
//         mb-2"
//       >
//         {collection.name}
//       </h3>

//       <p
//         className="
//         text-sm
//         text-coffee/70
//         line-clamp-2
//         mb-4"
//       >
//         {collection.description ||
//           "No description"}
//       </p>

//       <div
//         className="
//         border-t
//         border-caramel/10
//         pt-3
//         flex
//         justify-end"
//       >

//         <ChevronRight
//           size={16}
//           className="
//           text-caramel"
//         />

//       </div>

//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";
import { FolderOpen, ChevronRight } from "lucide-react";

export default function CollectionCard({ collection, memoryCount = 0 }) {
  const navigate = useNavigate();

  // Safeguard counting properties to check for raw model arrays inside data maps
  const visualCount =collection._count?.memories ??collection.memories?.length ??memoryCount;

  return (
    <div
      onClick={() => navigate(`/collections/${collection.id}`)}
      className="bg-white border border-caramel/10 rounded-2xl p-5 sm:p-6 cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:border-caramel/25 transition-all duration-200 flex flex-col justify-between group"
    >
      <div>
        {/* Header Metadata Ribbon Section */}
        <div className="flex justify-between items-center mb-4 gap-2">
          <div className="w-11 h-11 rounded-xl bg-caramel/10 flex items-center justify-center text-caramel group-hover:bg-brownie group-hover:text-white transition-colors duration-200 flex-shrink-0">
            <FolderOpen size={20} />
          </div>

          <div className="text-xs font-semibold bg-caramel/10 px-3 py-1 rounded-lg text-caramel tracking-wide truncate">
            {visualCount} {visualCount === 1 ? "memory" : "memories"}
          </div>
        </div>

        {/* Text Area */}
        <h3 className="font-display text-lg font-bold text-brownie mb-1.5 truncate">
          {collection.name}
        </h3>

        <p className="text-sm text-coffee/75 line-clamp-2 mb-4 leading-relaxed font-sans">
          {collection.description || "No description logged for this collection entry."}
        </p>
      </div>

      {/* Action Line Anchor */}
      <div className="border-t border-caramel/5 pt-3 flex justify-end items-center">
        <span className="text-xs font-bold text-caramel/0 group-hover:text-caramel/100 group-hover:mr-1.5 transition-all duration-200">
          Open Collection
        </span>
        <ChevronRight
          size={15}
          className="text-caramel transform group-hover:translate-x-0.5 transition-transform"
        />
      </div>
    </div>
  );
}