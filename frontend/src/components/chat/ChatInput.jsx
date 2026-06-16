// import {
//   useState
// } from "react";

// import {
//   Send
// } from "lucide-react";

// export default function ChatInput({
//   onSend,
//   disabled
// }) {

//   const [
//     message,
//     setMessage
//   ] = useState("");

//   const handleSubmit =
//     (e) => {

//       e.preventDefault();

//       if (
//         !message.trim()
//       ) {
//         return;
//       }

//       onSend(
//         message
//       );

//       setMessage("");
//     };

//   return (

//     <form
//       onSubmit={
//         handleSubmit
//       }
//       className="
//       flex
//       gap-3
//       p-4
//       border-t
//       bg-white"
//     >

//       <input
//         value={message}
//         onChange={(e) =>
//           setMessage(
//             e.target.value
//           )
//         }
//         placeholder="Ask about your memories..."
//         className="
//         flex-1
//         border
//         rounded-2xl
//         px-4
//         py-3
//         outline-none"
//       />

//       <button
//         type="submit"
//         disabled={
//           disabled
//         }
//         className="
//         bg-purple-600
//         text-white
//         px-5
//         rounded-2xl"
//       >

//         <Send
//           size={18}
//         />

//       </button>

//     </form>
//   );
// }


import { useState } from "react";
import { Send } from "lucide-react";

export default function ChatInput({ onSend, disabled }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    onSend(message.trim());
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 p-3 sm:p-4 border-t border-caramel/15 bg-white items-center"
    >
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={disabled}
        placeholder="Type a request (e.g., 'What did I do last summer?')..."
        className="flex-1 bg-neutral-50 border border-caramel/20 rounded-xl px-4 py-3 text-sm text-brownie outline-none transition-all placeholder:text-brownie/40 focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/10 disabled:opacity-60"
      />

      <button
        type="submit"
        disabled={disabled || !message.trim()}
        className="bg-caramel text-white p-3 rounded-xl hover:bg-brownie disabled:bg-neutral-200 disabled:text-neutral-400 font-semibold transition-all active:scale-[0.97] flex-shrink-0 shadow-sm shadow-caramel/10"
        title="Send Prompt Message"
      >
        <Send size={16} />
      </button>
    </form>
  );
}