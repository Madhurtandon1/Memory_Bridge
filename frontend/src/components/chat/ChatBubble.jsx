// export default function ChatBubble({
//   message,
//   isUser
// }) {

//   return (

//     <div
//       className={`
//         flex
//         ${isUser
//           ? "justify-end"
//           : "justify-start"}
//       `}
//     >

//       <div
//         className={`
//           max-w-3xl
//           px-5
//           py-4
//           rounded-3xl
//           whitespace-pre-wrap
//           leading-7

//           ${
//             isUser
//               ? "bg-purple-600 text-white"
//               : "bg-white border border-gray-200 text-gray-800"
//           }
//         `}
//       >

//         {message}

//       </div>

//     </div>
//   );
// }


import { Sparkles } from "lucide-react";

export default function ChatBubble({ message, isUser, isLoadingState = false }) {
  return (
    <div className={`flex w-full py-8 ${isUser ? "justify-end pl-8" : "justify-start pr-8"} animate-fade-in`}>
      <div className={`flex gap-2.5 max-w-2xl items-start ${isUser ? "flex-row-reverse" : "flex-row"}`}>
        
        {/* Assistant Sparkle Icon */}
        {!isUser && (
          <div className="w-7 h-7 rounded-lg bg-caramel text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
            <Sparkles size={13} className={isLoadingState ? "animate-pulse" : ""} />
          </div>
        )}

        {/* 
          FIXED BUBBLE STYLING:
          - Added an explicit text color to BOTH sides so parent styles can't leak in.
          - User messages: Force 'bg-brownie text-white' to ensure maximum high contrast.
          - Assistant messages: Force 'bg-white border border-caramel/15 text-coffee' for sharp readability.
        */}
        <div
          className={`
            px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl whitespace-pre-wrap leading-relaxed text-sm sm:text-base transition-all shadow-sm
            ${isUser
              ? "bg-brownie text-white font-medium rounded-tr-none shadow-brownie/5"
              : "bg-white border border-caramel/15 text-coffee rounded-tl-none font-sans"
            }
          `}
        >
          {message}
        </div>
      </div>
    </div>
  );
}