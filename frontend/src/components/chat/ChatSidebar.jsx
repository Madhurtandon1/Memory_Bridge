// export default function ChatSidebar({
//   sessions,
//   activeSession,
//   onSelectSession,
//   onNewChat
// }) {

//   return (

//     <div
//       className="
//       w-80
//       border-r
//       bg-white
//       flex
//       flex-col"
//     >

//       <div
//         className="
//         p-4
//         border-b"
//       >

//         <button
//           onClick={
//             onNewChat
//           }
//           className="
//           w-full
//           bg-purple-600
//           text-white
//           py-3
//           rounded-2xl"
//         >

//           + New Chat

//         </button>

//       </div>

//       <div
//         className="
//         flex-1
//         overflow-y-auto"
//       >

//         {sessions.map(
//           (session) => (

//             <button
//               key={
//                 session.id
//               }
//               onClick={() =>
//                 onSelectSession(
//                   session.id
//                 )
//               }
//               className={`
//                 w-full
//                 text-left
//                 p-4
//                 border-b

//                 ${
//                   activeSession ===
//                   session.id
//                     ? "bg-purple-50"
//                     : ""
//                 }
//               `}
//             >

//               Chat Session

//             </button>

//           )
//         )}

//       </div>

//     </div>
//   );
// }


// import { MessageSquare, Plus, X } from "lucide-react";

// export default function ChatSidebar({
//   sessions,
//   activeSession,
//   onSelectSession,
//   onNewChat,
//   isOpen,
//   onClose
// }) {
//   return (
//     <>
//       {/* 1. Mobile Layer Blur Backdrop Dimmer Overlay panel */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-brownie/30 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
//           onClick={onClose}
//         />
//       )}

//       {/* 2. Primary Navigation Session Panel Stream */}
//       <div
//         className={`
//           fixed top-0 bottom-0 left-0 w-72 bg-white border-r border-caramel/15 flex flex-col z-50 transition-transform duration-300 ease-in-out h-full
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//           md:relative md:translate-x-0 md:z-10 md:w-64 lg:w-72 flex-shrink-0
//         `}
//       >
//         {/* Sidebar Title Header panel inside */}
//         <div className="p-4 border-b border-caramel/10 flex items-center justify-between bg-neutral-50/50">
//           <span className="text-xs font-bold text-caramel tracking-wider uppercase pl-1">
//             Conversation History
//           </span>
//           {/* Close button: visible on mobile screens only */}
//           <button onClick={onClose} className="md:hidden p-1 text-brownie hover:bg-caramel/5 rounded-md">
//             <X size={16} />
//           </button>
//         </div>

//         {/* Trigger New Session Call Control Section */}
//         <div className="p-3 border-b border-caramel/10">
//           <button
//             onClick={onNewChat}
//             className="w-full bg-brownie text-white hover:bg-coffee py-2.5 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm tracking-wide transition-all active:scale-[0.98] shadow-md shadow-brownie/5"
//           >
//             <Plus size={16} />
//             <span>New Discussion</span>
//           </button>
//         </div>

//         {/* Sessions Scrolling Frame Box list */}
//         <div className="flex-1 overflow-y-auto p-2 space-y-1 bg-neutral-50/30">
//           {sessions.length === 0 ? (
//             <p className="text-center text-xs text-brownie/40 italic py-8">No chats logged yet</p>
//           ) : (
//             sessions.map((session, index) => {
//               const isActive = activeSession === session.id;
//               return (
//                 <button
//                   key={session.id}
//                   onClick={() => onSelectSession(session.id)}
//                   className={`
//                     w-full text-left px-3.5 py-3 rounded-xl text-sm font-medium flex items-center gap-2.5 transition-all duration-150 group
//                     ${isActive
//                       ? "bg-caramel/10 text-caramel border-l-4 border-caramel pl-2 rounded-l-none font-semibold"
//                       : "text-brownie/75 hover:bg-caramel/5 hover:text-brownie"
//                     }
//                   `}
//                 >
//                   <MessageSquare size={15} className={isActive ? "text-caramel" : "text-brownie/40 group-hover:text-brownie/70"} />
//                   <span className="truncate flex-1">
//                     {session.title || `Chat Session #${sessions.length - index}`}
//                   </span>
//                 </button>
//               );
//             })
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


import { useState } from "react";
import { MessageSquare, Plus, X, Pin, Trash2, Edit2, Check, Trash } from "lucide-react";

export default function ChatSidebar({
  sessions,
  activeSession,
  onSelectSession,
  onNewChat,
  onRenameSession,
  onDeleteRequest,
  onClearAllRequest,
  onPinSession,
  isOpen,
  onClose
}) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const startEditing = (e, session) => {
    e.stopPropagation(); 
    setEditingId(session.id);
    setEditTitle(session.title || "");
  };

  const saveEdit = (e, id) => {
    e.stopPropagation();
    if (editTitle.trim()) {
      onRenameSession(id, editTitle.trim());
    }
    setEditingId(null);
  };

  return (
    <>
      {/* 1. Mobile Layer Blur Overlay panel */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-brownie/30 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
          onClick={onClose}
        />
      )}

      {/* 2. Primary Side Navigation Stack */}
      <div
        className={`
          fixed top-0 bottom-0 left-0 w-72 bg-white border-r border-caramel/15 flex flex-col z-50 transition-transform duration-300 ease-in-out h-full
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:z-10 md:w-64 lg:w-72 flex-shrink-0
        `}
      >
        <div className="p-4 border-b border-caramel/10 flex items-center justify-between bg-neutral-50/50 flex-shrink-0">
          <span className="text-xs font-bold text-caramel tracking-wider uppercase pl-1">
            Conversation History
          </span>
          <button onClick={onClose} className="md:hidden p-1 text-brownie hover:bg-caramel/5 rounded-md">
            <X size={16} />
          </button>
        </div>

        {/* Global Action Modifiers */}
        <div className="p-3 border-b border-caramel/10 flex gap-2 flex-shrink-0 bg-white">
          <button
            onClick={onNewChat}
            className="flex-1 bg-brownie text-white hover:bg-coffee py-2 rounded-xl flex items-center justify-center gap-2 font-bold text-xs tracking-wide transition-all active:scale-[0.98] shadow-sm"
          >
            <Plus size={14} />
            <span>New Chat</span>
          </button>
          
          {sessions.length > 0 && (
            <button
              onClick={onClearAllRequest} // Linked seamlessly to custom modal execution portal
              className="px-3 border border-red-200 text-red-600 hover:bg-red-50 rounded-xl transition-all flex items-center justify-center animate-fade-in"
              title="Clear All History"
            >
              <Trash size={14} />
            </button>
          )}
        </div>

        {/* Sessions Scrolling Frame Box list */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 bg-neutral-50/30">
          {sessions.length === 0 ? (
            <p className="text-center text-xs text-brownie/40 italic py-8 font-sans">No chats logged yet</p>
          ) : (
            sessions.map((session, index) => {
              const isActive = activeSession === session.id;
              const isEditing = editingId === session.id;
              
              return (
                <div
                  key={session.id}
                  onClick={() => !isEditing && onSelectSession(session.id)}
                  className={`
                    w-full px-3 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between gap-2 transition-all duration-150 group relative
                    ${isActive
                      ? "bg-caramel/10 text-caramel border-l-4 border-caramel pl-2 rounded-l-none font-semibold"
                      : "text-brownie/75 hover:bg-caramel/5 hover:text-brownie cursor-pointer"
                    }
                  `}
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <MessageSquare size={14} className={isActive ? "text-caramel flex-shrink-0" : "text-brownie/40 flex-shrink-0"} />
                    
                    {isEditing ? (
                      <input
                        autoFocus
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.key === "Enter" && saveEdit(e, session.id)}
                        className="bg-white border border-caramel/30 text-xs rounded px-1.5 py-0.5 text-brownie outline-none w-full font-sans"
                      />
                    ) : (
                      <span className="truncate pr-2 font-sans">
                        {session.title || `Chat Session #${sessions.length - index}`}
                      </span>
                    )}
                  </div>

                  {/* Context Micro Hover Action Triggers */}
                  <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity bg-gradient-to-l from-white via-white pl-2 h-full absolute right-2 top-0 rounded-r-xl">
                    {isEditing ? (
                      <button
                        onClick={(e) => saveEdit(e, session.id)}
                        className="p-1 text-green-600 hover:bg-green-50 rounded"
                        title="Save Title"
                      >
                        <Check size={13} />
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); onPinSession(session.id); }}
                          className={`p-1 rounded transition-colors ${session.isPinned ? 'text-caramel bg-caramel/10' : 'text-brownie/40 hover:text-brownie hover:bg-caramel/5'}`}
                          title={session.isPinned ? "Unpin Chat" : "Pin Chat"}
                        >
                          <Pin size={13} className={session.isPinned ? "fill-caramel" : ""} />
                        </button>
                        
                        <button
                          onClick={(e) => startEditing(e, session)}
                          className="p-1 text-brownie/40 hover:text-brownie hover:bg-caramel/5 rounded"
                          title="Rename"
                        >
                          <Edit2 size={13} />
                        </button>
                        
                        <button
                          onClick={(e) => { e.stopPropagation(); onDeleteRequest(session.id); }} // Linked cleanly to custom modal portal
                          className="p-1 text-brownie/40 hover:text-red-600 hover:bg-red-50 rounded"
                          title="Delete"
                        >
                          <Trash2 size={13} />
                        </button>
                      </>
                    )}
                  </div>

                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}