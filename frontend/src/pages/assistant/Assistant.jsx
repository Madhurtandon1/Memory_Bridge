// // import { useEffect, useState } from "react";

// // import {
// //   createChatSession,
// //   getChatSessions,
// //   getMessages,
// //   sendMessage
// // } from "../../services/chat.api";

// // import ChatSidebar from "../../components/chat/ChatSidebar";
// // import ChatBubble from "../../components/chat/ChatBubble";
// // import ChatInput from "../../components/chat/ChatInput";

// // export default function Assistant() {

// //   const [sessions, setSessions] =
// //     useState([]);

// //   const [activeSession, setActiveSession] =
// //     useState(null);

// //   const [messages, setMessages] =
// //     useState([]);

// //   const [loading, setLoading] =
// //     useState(false);

// //   useEffect(() => {

// //     loadSessions();

// //   }, []);

// //   const loadSessions =
// //     async () => {

// //       try {

// //         const res =
// //           await getChatSessions();

// //         const sessionList =
// //           res.data || [];

// //         setSessions(
// //           sessionList
// //         );

// //         if (
// //           sessionList.length > 0
// //         ) {

// //           loadMessages(
// //             sessionList[0].id
// //           );
// //         }

// //       } catch (error) {

// //         console.log(error);
// //       }
// //     };

// //   const loadMessages =
// //     async (sessionId) => {

// //       try {

// //         setActiveSession(
// //           sessionId
// //         );

// //         const res =
// //           await getMessages(
// //             sessionId
// //           );

// //         setMessages(
// //           res.data || []
// //         );

// //       } catch (error) {

// //         console.log(error);
// //       }
// //     };

// //   const handleNewChat =
// //     async () => {

// //       try {

// //         const res =
// //           await createChatSession();

// //         const newSession =
// //           res.data;

// //         setSessions(
// //           (prev) => [
// //             newSession,
// //             ...prev
// //           ]
// //         );

// //         setActiveSession(
// //           newSession.id
// //         );

// //         setMessages([]);

// //       } catch (error) {

// //         console.log(error);
// //       }
// //     };

// //   const handleSend =
// //     async (message) => {

// //       if (
// //         !activeSession
// //       ) {

// //         await handleNewChat();
// //       }

// //       const sessionId =
// //         activeSession ||
// //         sessions[0]?.id;

// //       const userMessage = {

// //         id:
// //           Date.now(),

// //         role:
// //           "user",

// //         content:
// //           message
// //       };

// //       setMessages(
// //         (prev) => [
// //           ...prev,
// //           userMessage
// //         ]
// //       );

// //       try {

// //         setLoading(true);

// //         const res =
// //           await sendMessage(
// //             sessionId,
// //             message
// //           );

// //         const assistantMessage = {

// //           id:
// //             Date.now() + 1,

// //           role:
// //             "assistant",

// //           content:
// //             res.data.answer
// //         };

// //         setMessages(
// //           (prev) => [
// //             ...prev,
// //             assistantMessage
// //           ]
// //         );

// //       } catch (error) {

// //         console.log(error);

// //       } finally {

// //         setLoading(false);
// //       }
// //     };

// //   return (

// //     <div
// //       className="
// //       h-[calc(100vh-120px)]
// //       flex
// //       bg-white
// //       rounded-3xl
// //       overflow-hidden
// //       border"
// //     >

// //       <ChatSidebar
// //         sessions={sessions}
// //         activeSession={
// //           activeSession
// //         }
// //         onSelectSession={
// //           loadMessages
// //         }
// //         onNewChat={
// //           handleNewChat
// //         }
// //       />

// //       <div
// //         className="
// //         flex-1
// //         flex
// //         flex-col"
// //       >

// //         <div
// //           className="
// //           p-5
// //           border-b"
// //         >

// //           <h1
// //             className="
// //             text-2xl
// //             font-bold"
// //           >
// //             Memory Assistant
// //           </h1>

// //         </div>

// //         <div
// //           className="
// //           flex-1
// //           overflow-y-auto
// //           p-6
// //           space-y-4"
// //         >

// //           {messages.length === 0 && (

// //             <div
// //               className="
// //               text-center
// //               text-gray-500
// //               mt-20"
// //             >

// //               Ask anything about your memories

// //             </div>

// //           )}

// //           {messages.map(
// //             (message) => (

// //               <ChatBubble
// //                 key={
// //                   message.id
// //                 }
// //                 message={
// //                   message.content
// //                 }
// //                 isUser={
// //                   message.role ===
// //                   "user"
// //                 }
// //               />

// //             )
// //           )}

// //           {loading && (

// //             <ChatBubble
// //               message="Thinking..."
// //               isUser={false}
// //             />

// //           )}

// //         </div>

// //         <ChatInput
// //           onSend={
// //             handleSend
// //           }
// //           disabled={
// //             loading
// //           }
// //         />

// //       </div>

// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import { Menu } from "lucide-react"; // Imported menu icon for mobile sidebar toggles
// import {
//   createChatSession,
//   getChatSessions,
//   getMessages,
//   sendMessage
// } from "../../services/chat.api";

// import ChatSidebar from "../../components/chat/ChatSidebar";
// import ChatBubble from "../../components/chat/ChatBubble";
// import ChatInput from "../../components/chat/ChatInput";

// export default function Assistant() {
//   const [sessions, setSessions] = useState([]);
//   const [activeSession, setActiveSession] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false); // Mobile UI context controller

//   useEffect(() => {
//     loadSessions();
//   }, []);

//   const loadSessions = async () => {
//     try {
//       const res = await getChatSessions();
//       const sessionList = res.data || [];
//       setSessions(sessionList);

//       if (sessionList.length > 0) {
//         loadMessages(sessionList[0].id);
//       }
//     } catch (error) {
//       console.error("Failed to load chat records:", error);
//     }
//   };

//   const loadMessages = async (sessionId) => {
//     try {
//       setActiveSession(sessionId);
//       setMobileSidebarOpen(false); // Responsive bonus: Auto-close sidebar panel on selection
//       const res = await getMessages(sessionId);
//       setMessages(res.data || []).reverse(); // Flip records chronological order if needed
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleNewChat = async () => {
//     try {
//       const res = await createChatSession();
//       const newSession = res.data;
//       setSessions((prev) => [newSession, ...prev]);
//       setActiveSession(newSession.id);
//       setMessages([]);
//       setMobileSidebarOpen(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSend = async (message) => {
//     if (!activeSession) {
//       await handleNewChat();
//     }

//     const sessionId = activeSession || sessions[0]?.id;
//     const userMessage = {
//       id: Date.now(),
//       role: "user",
//       content: message
//     };

//     setMessages((prev) => [...prev, userMessage]);

//     try {
//       setLoading(true);
//       const res = await sendMessage(sessionId, message);

//       const assistantMessage = {
//         id: Date.now() + 1,
//         role: "assistant",
//         content: res.data.answer
//       };

//       setMessages((prev) => [...prev, assistantMessage]);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-[calc(100vh-140px)] flex bg-white rounded-2xl overflow-hidden border py-8  border-caramel/15 shadow-sm relative">
      
//       {/* 1. Responsive Sidebar Component Drawer Context */}
//       <ChatSidebar
//         sessions={sessions}
//         activeSession={activeSession}
//         onSelectSession={loadMessages}
//         onNewChat={handleNewChat}
//         isOpen={mobileSidebarOpen}
//         onClose={() => setMobileSidebarOpen(false)}
//       />

//       {/* 2. Primary Dialogue Pane Shell */}
//       <div className="flex-1 flex flex-col min-w-0 bg-neutral-50/30">
        
//         {/* Chat Inner Header Area */}
//         <div className="p-4 sm:p-5 border-b border-caramel/10 bg-white flex items-center gap-3">
//           {/* Toggle Button: Visible on Mobile/Tablet screens up to md breakpoint */}
//           <button
//             onClick={() => setMobileSidebarOpen(true)}
//             className="md:hidden p-1.5 rounded-lg text-brownie hover:bg-caramel/5 border border-caramel/10"
//             title="Open Conversations"
//           >
//             <Menu size={18} />
//           </button>
          
//           <div>
//             <h1 className="text-lg sm:text-xl font-display font-bold text-brownie tracking-tight">
//               Memory Assistant
//             </h1>
//             <p className="text-xs text-coffee/60 font-sans hidden sm:block">
//               Consult the AI engine over logged memory entries
//             </p>
//           </div>
//         </div>

//         {/* Message Thread Scroll Box */}
//         <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-[#FAF7F2]/40">
//           {messages.length === 0 && (
//             <div className="text-center text-brownie/40 mt-20 text-sm font-medium font-sans px-4">
//               <span className="text-3xl block mb-2">🧠</span>
//               Ask anything about your memories, people, or milestone events...
//             </div>
//           )}

//           {messages.map((message) => (
//             <ChatBubble
//               key={message.id}
//               message={message.content}
//               isUser={message.role === "user"}
//             />
//           ))}

//           {loading && (
//             <ChatBubble
//               message="Processing memory links..."
//               isUser={false}
//               isLoadingState={true}
//             />
//           )}
//         </div>

//         {/* User text input dock panel framework */}
//         <ChatInput onSend={handleSend} disabled={loading} />

//       </div>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import { Menu } from "lucide-react"; 
// import {
//   createChatSession,
//   getChatSessions,
//   getMessages,
//   sendMessage
// } from "../../services/chat.api";

// import ChatSidebar from "../../components/chat/ChatSidebar";
// import ChatBubble from "../../components/chat/ChatBubble";
// import ChatInput from "../../components/chat/ChatInput";

// export default function Assistant() {
//   const [sessions, setSessions] = useState([]);
//   const [activeSession, setActiveSession] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false); 

//   useEffect(() => {
//     loadSessions();
//   }, []);

//   const loadSessions = async () => {
//     try {
//       const res = await getChatSessions();
//       const sessionList = res.data || [];
//       setSessions(sessionList);

//       if (sessionList.length > 0) {
//         loadMessages(sessionList[0].id);
//       }
//     } catch (error) {
//       console.error("Failed to load chat records:", error);
//     }
//   };

//   const loadMessages = async (sessionId) => {
//     try {
//       setActiveSession(sessionId);
//       setMobileSidebarOpen(false); 
//       const res = await getMessages(sessionId);
//       setMessages(res.data || []); 
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleNewChat = async () => {
//     try {
//       const res = await createChatSession();
//       const newSession = res.data;
//       setSessions((prev) => [newSession, ...prev]);
//       setActiveSession(newSession.id);
//       setMessages([]);
//       setMobileSidebarOpen(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSend = async (message) => {
//     if (!activeSession) {
//       await handleNewChat();
//     }

//     const sessionId = activeSession || sessions[0]?.id;
//     const userMessage = {
//       id: Date.now(),
//       role: "user",
//       content: message
//     };

//     setMessages((prev) => [...prev, userMessage]);

//     try {
//       setLoading(true);
//       const res = await sendMessage(sessionId, message);

//       const assistantMessage = {
//         id: Date.now() + 1,
//         role: "assistant",
//         content: res.data.answer
//       };

//       setMessages((prev) => [...prev, assistantMessage]);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     /* MASTER WRAPPER PANEL FIXED:
//       - Removed internal layout padding constraints completely.
//       - Isolated layout padding ('pt-6 pb-6' or 'py-6') onto an outer wrapper node block.
//       - This pushes the panel box away from the fixed navbar ceiling.
//     */
//     <div className="w-full h-[calc(100vh-64px)] pt-6 pb-6 flex flex-col justify-stretch animate-fade-in">
      
//       {/* Primary Structural Chat Workspace Card Box Panel */}
//       <div className="flex-1 flex bg-white rounded-3xl overflow-hidden border border-caramel/15 shadow-sm relative min-h-0">
        
//         {/* 1. Sidebar Panel Drawer Container */}
//         <ChatSidebar
//           sessions={sessions}
//           activeSession={activeSession}
//           onSelectSession={loadMessages}
//           onNewChat={handleNewChat}
//           isOpen={mobileSidebarOpen}
//           onClose={() => setMobileSidebarOpen(false)}
//         />

//         {/* 2. Chat Conversation Execution Box Frame */}
//         <div className="flex-1 flex flex-col min-w-0 bg-neutral-50/30">
          
//           {/* Header Bar Area */}
//           <div className="p-4 sm:p-5 border-b border-caramel/10 bg-white flex items-center gap-3 flex-shrink-0">
//             <button
//               onClick={() => setMobileSidebarOpen(true)}
//               className="md:hidden p-1.5 rounded-lg text-brownie hover:bg-caramel/5 border border-caramel/10 flex-shrink-0"
//               title="Open Conversations"
//             >
//               <Menu size={18} />
//             </button>
            
//             <div className="truncate">
//               <h1 className="text-lg sm:text-xl font-display font-bold text-brownie tracking-tight truncate">
//                 Memory Assistant
//               </h1>
//               <p className="text-xs text-coffee/60 font-sans hidden sm:block truncate mt-0.5">
//                 Consult the AI engine over logged memory entries
//               </p>
//             </div>
//           </div>

//           {/* Messages Thread Stream Window Area */}
//           <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-[#FAF7F2]/40 min-h-0">
//             {messages.length === 0 && (
//               <div className="text-center text-brownie/40 mt-20 text-sm font-medium font-sans px-4">
//                 <span className="text-3xl block mb-2">🧠</span>
//                 Ask anything about your memories, people, or milestone events...
//               </div>
//             )}

//             {messages.map((message) => (
//               <ChatBubble
//                 key={message.id}
//                 message={message.content}
//                 isUser={message.role === "user"}
//               />
//             ))}

//             {loading && (
//               <ChatBubble
//                 message="Processing memory links..."
//                 isUser={false}
//                 isLoadingState={true}
//               />
//             )}
//           </div>

//           {/* Action Input Box Area Strip */}
//           <div className="flex-shrink-0 bg-white border-t border-caramel/5">
//             <ChatInput onSend={handleSend} disabled={loading} />
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { Menu } from "lucide-react"; 
import {
  createChatSession,
  getChatSessions,
  getMessages,
  sendMessage,
  renameChat,
  deleteChat,
  deleteAllChats,
  pinChat
} from "../../services/chat.api.js";

import ChatSidebar from "../../components/chat/ChatSidebar.jsx";
import ChatBubble from "../../components/chat/ChatBubble.jsx";
import ChatInput from "../../components/chat/ChatInput.jsx";
import ConfirmModal from "../../components/ui/ConfirmModal.jsx"; // Make sure path matches your file structure
import toast from "react-hot-toast";

export default function Assistant() {
  const [sessions, setSessions] = useState([]);
  const [activeSession, setActiveSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false); 

  // CUSTOM MODAL BACKDROP STATE CORES
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: "",
    message: "",
    onConfirm: () => {}
  });

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async (fallbackSessionId = null) => {
    try {
      const res = await getChatSessions();
      const sessionList = res.data || [];
      setSessions(sessionList);

      if (sessionList.length > 0) {
        const targetId = fallbackSessionId || sessionList[0].id;
        const exists = sessionList.some(s => s.id === targetId);
        loadMessages(exists ? targetId : sessionList[0].id);
      } else {
        setActiveSession(null);
        setMessages([]);
      }
    } catch (error) {
      console.error("Failed to load chat records:", error);
    }
  };

  const loadMessages = async (sessionId) => {
    try {
      setActiveSession(sessionId);
      setMobileSidebarOpen(false); 
      const res = await getMessages(sessionId);
      setMessages(res.data || []); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewChat = async () => {
    try {
      const res = await createChatSession();
      const newSession = res.data;
      setSessions((prev) => [newSession, ...prev]);
      setActiveSession(newSession.id);
      setMessages([]);
      setMobileSidebarOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSend = async (message) => {
    if (!activeSession) {
      await handleNewChat();
    }

    const sessionId = activeSession || sessions[0]?.id;
    const userMessage = {
      id: Date.now(),
      role: "user",
      content: message
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      setLoading(true);
      const res = await sendMessage(sessionId, message);

      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: res.data.answer
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRenameSession = async (sessionId, newTitle) => {
    try {
      await renameChat(sessionId, newTitle);
      setSessions(prev => prev.map(s => s.id === sessionId ? { ...s, title: newTitle } : s));
      toast.success("Discussion renamed");
    } catch (error) {
      console.error(error);
      toast.error("Failed to rename chat");
    }
  };

  // TRIGGER CONFIRMATION MODAL: Delete Single Chat Session
  const triggerDeleteConfirm = (sessionId) => {
    setModalConfig({
      isOpen: true,
      title: "Delete Conversation?",
      message: "This will permanently wipe this discussion record and all associated contextual message strings from your archive vaults.",
      onConfirm: () => executeDeleteSession(sessionId)
    });
  };

  const executeDeleteSession = async (sessionId) => {
    try {
      await deleteChat(sessionId);
      toast.success("Discussion deleted");
      
      const updatedList = sessions.filter(s => s.id !== sessionId);
      setSessions(updatedList);
      
      if (activeSession === sessionId) {
        if (updatedList.length > 0) {
          loadMessages(updatedList[0].id);
        } else {
          setActiveSession(null);
          setMessages([]);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete chat");
    } finally {
      closeConfirmModal();
    }
  };

  // TRIGGER CONFIRMATION MODAL: Clear Absolute Vault Histories
  const triggerClearAllConfirm = () => {
    setModalConfig({
      isOpen: true,
      title: "Clear Entire Chat History?",
      message: "Are you absolutely sure? This processing execution completely purges every logged discussion session forever. This action is irreversible.",
      onConfirm: executeClearAllHistory
    });
  };

  const executeClearAllHistory = async () => {
    try {
      await deleteAllChats();
      setSessions([]);
      setActiveSession(null);
      setMessages([]);
      toast.success("All conversation metrics cleared");
    } catch (error) {
      console.error(error);
      toast.error("Clear action failed");
    } finally {
      closeConfirmModal();
    }
  };

  const handlePinSession = async (sessionId) => {
    try {
      await pinChat(sessionId);
      await loadSessions(activeSession);
      toast.success("Pin status updated");
    } catch (error) {
      console.error(error);
    }
  };

  const closeConfirmModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="w-full h-[calc(100vh-64px)] pt-6 pb-6 flex flex-col justify-stretch animate-fade-in">
      <div className="flex-1 flex bg-white rounded-3xl overflow-hidden border border-caramel/15 shadow-sm relative min-h-0">
        
        <ChatSidebar
          sessions={sessions}
          activeSession={activeSession}
          onSelectSession={loadMessages}
          onNewChat={handleNewChat}
          onRenameSession={handleRenameSession}
          onDeleteRequest={triggerDeleteConfirm} // Routed through the modal trigger logic wrapper hook
          onClearAllRequest={triggerClearAllConfirm} // Routed through the modal trigger logic wrapper hook
          onPinSession={handlePinSession}
          isOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col min-w-0 bg-neutral-50/30">
          <div className="p-4 sm:p-5 border-b border-caramel/10 bg-white flex items-center justify-between gap-3 flex-shrink-0">
            <div className="flex items-center gap-3 truncate">
              <button
                onClick={() => setMobileSidebarOpen(true)}
                className="md:hidden p-1.5 rounded-lg text-brownie hover:bg-caramel/5 border border-caramel/10 flex-shrink-0"
                title="Open Conversations"
              >
                <Menu size={18} />
              </button>
              
              <div className="truncate">
                <h1 className="text-lg sm:text-xl font-display font-bold text-brownie tracking-tight truncate">
                  Memory Assistant
                </h1>
                <p className="text-xs text-coffee/60 font-sans hidden sm:block truncate mt-0.5">
                  Consult the AI engine over logged memory entries
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-[#FAF7F2]/40 min-h-0">
            {messages.length === 0 && (
              <div className="text-center text-brownie/40 mt-20 text-sm font-medium font-sans px-4">
                <span className="text-3xl block mb-2">🧠</span>
                Ask anything about your memories, people, or milestone events...
              </div>
            )}

            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                message={message.content}
                isUser={message.role === "user"}
              />
            ))}

            {loading && (
              <ChatBubble
                message="Processing memory links..."
                isUser={false}
                isLoadingState={true}
              />
            )}
          </div>

          <div className="flex-shrink-0 bg-white border-t border-caramel/5">
            <ChatInput onSend={handleSend} disabled={loading} />
          </div>
        </div>

      </div>

      {/* 3. YOUR REFACTORED CUSTOM CONFIRMATION MODAL PORTAL */}
      <ConfirmModal
        isOpen={modalConfig.isOpen}
        title={modalConfig.title}
        message={modalConfig.message}
        onConfirm={modalConfig.onConfirm}
        onCancel={closeConfirmModal}
      />

    </div>
  );
}