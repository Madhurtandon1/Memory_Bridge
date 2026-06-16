// export function MemoryCardSkeleton() {

//   return (

//     <div
//       className="
//       card
//       p-6
//       animate-pulse
//       space-y-3"
//     >

//       <div
//         className="
//         h-4
//         bg-gray-200
//         rounded"
//       />

//       <div
//         className="
//         h-6
//         bg-gray-200
//         rounded"
//       />

//       <div
//         className="
//         h-4
//         bg-gray-200
//         rounded"
//       />

//       <div
//         className="
//         h-4
//         bg-gray-200
//         rounded"
//       />

//     </div>
//   );
// }

// export function PageSkeleton() {

//   return (

//     <div
//       className="
//       space-y-6"
//     >

//       <div
//         className="
//         h-10
//         bg-gray-200
//         rounded
//         animate-pulse"
//       />

//       <div
//         className="
//         grid
//         md:grid-cols-2
//         lg:grid-cols-3
//         gap-5"
//       >

//         {[...Array(6)].map(
//           (_, i) => (

//             <MemoryCardSkeleton
//               key={i}
//             />

//           )
//         )}

//       </div>

//     </div>
//   );
// }


export function MemoryCardSkeleton() {
  return (
    <div
      className="
        bg-white 
        border 
        border-caramel/10 
        rounded-2xl 
        p-5 
        sm:p-6 
        animate-pulse 
        space-y-4"
    >
      {/* Date Pill Placeholder */}
      <div className="h-3.5 bg-caramel/10 rounded-lg w-1/4" />

      {/* Title Header Placeholder */}
      <div className="h-5 bg-caramel/15 rounded-xl w-3/4 mt-2" />

      {/* Summary Description Lines Placeholders */}
      <div className="space-y-2 pt-1">
        <div className="h-3.5 bg-caramel/10 rounded-lg w-full" />
        <div className="h-3.5 bg-caramel/10 rounded-lg w-5/6" />
      </div>

      {/* Metadata Bottom Tags Ribbon Placeholder */}
      <div className="flex justify-between items-center pt-3 border-t border-caramel/5">
        <div className="h-6 bg-caramel/10 rounded-lg w-16" />
        <div className="h-6 bg-caramel/10 rounded-lg w-16" />
      </div>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="space-y-6 md:space-y-8 px-1 py-2">
      {/* Page Title Header Bar Placeholder */}
      <div 
        className="
          h-10 
          bg-caramel/15 
          rounded-xl 
          animate-pulse 
          w-48 sm:w-64" 
      />

      {/* Responsive Grid Structure mirroring your active archive states */}
      <div 
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-5"
      >
        {[...Array(6)].map((_, i) => (
          <MemoryCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}