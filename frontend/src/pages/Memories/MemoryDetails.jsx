

// import {
//   useEffect,
//   useState
// } from "react";

// import {
//   useParams,
//   useNavigate
// } from "react-router-dom";

// import {
//   Calendar,
//   Folder,
//   Sparkles,
//   Trash2,
//   ArrowLeft,
//   Users,
//   Heart,
//   PartyPopper
// } from "lucide-react";
// import toast from "react-hot-toast";

// import ConfirmModal
// from "../../components/ui/ConfirmModal";

// import {
//   getMemoryById,
//   deleteMemory
// } from "../../services/memory.api";

// import {
//   generateStory
// } from "../../services/story.api";

// export default function MemoryDetails() {

//   const { id } =
//     useParams();

//   const navigate =
//     useNavigate();

//   const [
//     memory,
//     setMemory
//   ] = useState(null);

//   const [
//     story,
//     setStory
//   ] = useState("");

//   const [
//     generating,
//     setGenerating
//   ] = useState(false);

//   const [
//     loading,
//     setLoading
//   ] = useState(true);

//   const [
//   showDeleteModal,
//   setShowDeleteModal
// ] = useState(false);

//   useEffect(() => {

//     fetchMemory();

//   }, [id]);

//   const fetchMemory =
//     async () => {

//       try {

//         const res =
//           await getMemoryById(id);

//         setMemory(
//           res.data
//         );

//         if (
//           res.data?.story?.content
//         ) {

//           setStory(
//             res.data.story.content
//           );

//         }

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setLoading(false);

//       }
//     };

//   const handleGenerateStory =
//     async () => {

//       try {

//         setGenerating(true);

//         const res =
//           await generateStory(id);

//         setStory(

//           res.data?.content ||

//           res.data?.story ||

//           ""

//         );

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setGenerating(false);

//       }
//     };
// const handleDelete =
//   async () => {

//     console.log(
//       "Deleting memory:",
//       id
//     );
//     console.log("ID:", id);

//     try {

//       await deleteMemory(id);

//       toast.success(
//         "Memory deleted successfully"
//       );

//       navigate("/memories");

//     } catch (error) {

//       console.log(
//         "DELETE ERROR:",
//         error.response?.data
//       );

//       console.log(error);

//     }

//   };

//   if (loading) {

//     return (
//       <div>
//         Loading...
//       </div>
//     );

//   }

//   if (!memory) {

//     return (
//       <div>
//         Memory not found
//       </div>
//     );

//   }

//   return (

//     <div
//       className="
//       max-w-5xl
//       mx-auto
//       pb-10
//       space-y-6"
//     >

//       {/* Back */}

//       <button
//         onClick={() =>
//           navigate(
//             "/memories"
//           )
//         }
//         className="
//         flex
//         items-center
//         gap-2
//         text-caramel"
//       >

//         <ArrowLeft
//           size={18}
//         />

//         Back

//       </button>

//       {/* Header */}

//       <div
//         className="
//         bg-white
//         rounded-3xl
//         border
//         p-8"
//       >

//         <div
//           className="
//           flex
//           justify-between
//           items-start"
//         >

//           <div>

//             <h1
//               className="
//               text-4xl
//               font-bold
//               text-brownie
//               mb-3"
//             >
//               {memory.title}
//             </h1>

//             <div
//               className="
//               flex
//               flex-wrap
//               gap-5
//               text-caramel"
//             >

//               <div
//                 className="
//                 flex
//                 items-center
//                 gap-2"
//               >

//                 <Calendar
//                   size={16}
//                 />

//                 {memory.memoryDate

//                   ? new Date(
//                       memory.memoryDate
//                     ).toLocaleDateString()

//                   : "Unknown date"}

//               </div>

//               <div
//                 className="
//                 flex
//                 items-center
//                 gap-2"
//               >

//                 <Folder
//                   size={16}
//                 />

//                 {
//                   memory.collection
//                     ?.name
//                 }

//               </div>

//             </div>

//           </div>

// <div
//   className="
//   flex
//   gap-3"
// >

//   <button
//     onClick={() =>
//       navigate(
//         `/memories/${id}/edit`
//       )
//     }
//     className="
//     bg-blue-500
//     hover:bg-blue-600
//     text-white
//     px-4
//     py-3
//     rounded-xl"
//   >

//     Edit

//   </button>
// <button
//   onClick={() =>
//     setShowDeleteModal(true)
//   }
//     className="
//     bg-red-500
//     hover:bg-red-600
//     text-white
//     p-3
//     rounded-xl"
//   >

//     <Trash2
//       size={18}
//     />

//   </button>

// </div>

//         </div>

//       </div>

//       {/* Summary */}

//       <div
//         className="
//         bg-white
//         rounded-3xl
//         border
//         p-8"
//       >

//         <h2
//           className="
//           text-2xl
//           font-semibold
//           mb-4"
//         >
//           Summary
//         </h2>

//         <p
//           className="
//           text-gray-700
//           leading-8"
//         >
//           {memory.summary}
//         </p>

//       </div>

//       {/* Tags */}

//       <div
//         className="
//         bg-white
//         rounded-3xl
//         border
//         p-8"
//       >

//         <h2
//           className="
//           text-2xl
//           font-semibold
//           mb-4"
//         >
//           Tags
//         </h2>

//         <div
//           className="
//           flex
//           flex-wrap
//           gap-2"
//         >

//           {memory.tags?.length > 0

//             ? memory.tags.map(
//                 (tag) => (

//                   <span
//                     key={tag}
//                     className="
//                     px-3
//                     py-1
//                     rounded-full
//                     bg-purple-100
//                     text-purple-700"
//                   >
//                     #{tag}
//                   </span>

//                 )
//               )

//             : (
//                 <p>
//                   No tags
//                 </p>
//               )}

//         </div>

//       </div>

//       {/* People */}

//       {memory.people?.length > 0 && (

//         <div
//           className="
//           bg-white
//           rounded-3xl
//           border
//           p-8"
//         >

//           <h2
//             className="
//             text-2xl
//             font-semibold
//             mb-4
//             flex
//             items-center
//             gap-2"
//           >

//             <Users size={22} />

//             People

//           </h2>

//           <div
//             className="
//             flex
//             flex-wrap
//             gap-3"
//           >

//             {memory.people.map(
//               (person) => (

//                 <span
//                   key={person}
//                   className="
//                   px-4
//                   py-2
//                   rounded-full
//                   bg-blue-100
//                   text-blue-700"
//                 >
//                   👤 {person}
//                 </span>

//               )
//             )}

//           </div>

//         </div>

//       )}

//       {/* Emotions */}

//       {memory.emotions?.length > 0 && (

//         <div
//           className="
//           bg-white
//           rounded-3xl
//           border
//           p-8"
//         >

//           <h2
//             className="
//             text-2xl
//             font-semibold
//             mb-4
//             flex
//             items-center
//             gap-2"
//           >

//             <Heart size={22} />

//             Emotions

//           </h2>

//           <div
//             className="
//             flex
//             flex-wrap
//             gap-3"
//           >

//             {memory.emotions.map(
//               (emotion) => (

//                 <span
//                   key={emotion}
//                   className="
//                   px-4
//                   py-2
//                   rounded-full
//                   bg-pink-100
//                   text-pink-700"
//                 >
//                   ❤️ {emotion}
//                 </span>

//               )
//             )}

//           </div>

//         </div>

//       )}

//       {/* Events */}

//       {memory.events?.length > 0 && (

//         <div
//           className="
//           bg-white
//           rounded-3xl
//           border
//           p-8"
//         >

//           <h2
//             className="
//             text-2xl
//             font-semibold
//             mb-4
//             flex
//             items-center
//             gap-2"
//           >

//             <PartyPopper
//               size={22}
//             />

//             Events

//           </h2>

//           <div
//             className="
//             flex
//             flex-wrap
//             gap-3"
//           >

//             {memory.events.map(
//               (event) => (

//                 <span
//                   key={event}
//                   className="
//                   px-4
//                   py-2
//                   rounded-full
//                   bg-yellow-100
//                   text-yellow-700"
//                 >
//                   🎉 {event}
//                 </span>

//               )
//             )}

//           </div>

//         </div>

//       )}

//       {/* AI Story */}

//       <div
//         className="
//         bg-white
//         rounded-3xl
//         border
//         p-8"
//       >

//         <div
//           className="
//           flex
//           justify-between
//           items-center
//           mb-6"
//         >

//           <h2
//             className="
//             text-2xl
//             font-semibold"
//           >
//             AI Story
//           </h2>

//           {!story && (

//             <button
//               onClick={
//                 handleGenerateStory
//               }
//               disabled={
//                 generating
//               }
//               className="
//               bg-purple-600
//               text-white
//               px-5
//               py-2
//               rounded-xl
//               flex
//               items-center
//               gap-2"
//             >

//               <Sparkles
//                 size={16}
//               />

//               {generating
//                 ? "Generating..."
//                 : "Generate"}

//             </button>

//           )}

//         </div>

//         {story ? (

//           <div
//             className="
//             whitespace-pre-wrap
//             leading-8
//             text-gray-700"
//           >
//             {story}
//           </div>

//         ) : (

//           <p
//             className="
//             text-gray-500"
//           >
//             Generate a story from this memory.
//           </p>

//         )}

//       </div>

//       {/* Uploads */}

//       {memory.uploads?.length > 0 && (

//         <div
//           className="
//           bg-white
//           rounded-3xl
//           border
//           p-8"
//         >

//           <h2
//             className="
//             text-2xl
//             font-semibold
//             mb-5"
//           >
//             Uploads
//           </h2>

//           {memory.uploads.map(
//             (upload) => (

//               <div
//                 key={upload.id}
//                 className="mb-6"
//               >

//                 <audio
//                   controls
//                   className="
//                   w-full"
//                 >

//                   <source
//                     src={
//                       upload.fileUrl
//                     }
//                   />

//                 </audio>

//               </div>

//             )
//           )}

//         </div>

//       )}
//       <ConfirmModal

//   isOpen={
//     showDeleteModal
//   }

//   title="Delete Memory"

//   message="
//   Are you sure you want to delete this memory?
//   This action cannot be undone.
//   "

//   confirmText="Delete"

//   cancelText="Cancel"

//   onConfirm={
//     handleDelete
//   }

//   onCancel={() =>
//     setShowDeleteModal(false)
//   }

// />

//     </div>

//   );

// }





// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Calendar,
//   Folder,
//   Sparkles,
//   Trash2,
//   ArrowLeft,
//   Users,
//   Heart,
//   PartyPopper,
//   Edit3
// } from "lucide-react";
// import toast from "react-hot-toast";
// import ConfirmModal from "../../components/ui/ConfirmModal";
// import { getMemoryById, deleteMemory } from "../../services/memory.api";
// import { generateStory } from "../../services/story.api";

// export default function MemoryDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [memory, setMemory] = useState(null);
//   const [story, setStory] = useState("");
//   const [generating, setGenerating] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   useEffect(() => {
//     fetchMemory();
//   }, [id]);

//   const fetchMemory = async () => {
//     try {
//       const res = await getMemoryById(id);
//       setMemory(res.data);
//       if (res.data?.story?.content) {
//         setStory(res.data.story.content);
//       }
//     } catch (error) {
//       console.error("Error loading memory context:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGenerateStory = async () => {
//     try {
//       setGenerating(true);
//       const res = await generateStory(id);
//       setStory(res.data?.content || res.data?.story || "");
//       toast.success("AI Story synthesized successfully!");
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to generate story framework.");
//     } finally {
//       setGenerating(false);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await deleteMemory(id);
//       toast.success("Memory deleted successfully");
//       navigate("/memories");
//     } catch (error) {
//       console.error("DELETE ERROR:", error.response?.data || error);
//       toast.error("Could not drop target data entry");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-[50vh] text-brownie font-medium">
//         <div className="animate-pulse flex items-center gap-2">✨ Recalling Memory...</div>
//       </div>
//     );
//   }

//   if (!memory) {
//     return (
//       <div className="text-center py-12 bg-white rounded-2xl border border-caramel/10 max-w-md mx-auto mt-10">
//         <p className="text-brownie font-semibold text-lg">Memory not found</p>
//         <button onClick={() => navigate("/memories")} className="mt-4 text-sm text-caramel font-medium hover:underline">
//           Return to Archive
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto pb-16 space-y-6 px-1 sm:px-2 py-8 animate-fade-in">
      
//       {/* Back Button Action */}
//       <button
//         onClick={() => navigate("/memories")}
//         className="flex items-center gap-2 text-sm font-semibold text-caramel hover:text-caramel/80 transition-colors group px-1"
//       >
//         <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
//         <span>Back to Memories</span>
//       </button>

//       {/* Main Responsive Header Block */}
//       <div className="bg-white rounded-2xl border border-caramel/10 p-5 sm:p-8 shadow-sm">
//         <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
//           <div className="space-y-2.5 min-w-0">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brownie tracking-tight break-words">
//               {memory.title}
//             </h1>
            
//             <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-caramel/90">
//               <div className="flex items-center gap-1.5">
//                 <Calendar size={14} className="text-caramel/70" />
//                 <span>{memory.memoryDate ? new Date(memory.memoryDate).toLocaleDateString("en-US", { dateStyle: 'long' }) : "Unknown date"}</span>
//               </div>
//               {memory.collection?.name && (
//                 <div className="flex items-center gap-1.5">
//                   <Folder size={14} className="text-caramel/70" />
//                   <span className="truncate max-w-[150px]">{memory.collection.name}</span>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Fixed Action Control Group */}
//           <div className="flex items-center gap-2 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 justify-end flex-shrink-0">
//             <button
//               onClick={() => navigate(`/memories/${id}/edit`)}
//               className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-neutral-100 hover:bg-caramel/10 text-brownie px-4 py-2.5 rounded-xl font-medium text-sm transition-colors border border-caramel/5"
//             >
//               <Edit3 size={15} />
//               <span>Edit</span>
//             </button>
//             <button
//               onClick={() => setShowDeleteModal(true)}
//               className="bg-red-50 hover:bg-red-100 text-red-600 p-2.5 rounded-xl border border-red-200/40 transition-colors"
//               title="Delete Memory"
//             >
//               <Trash2 size={16} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Summary Box */}
//       <div className="bg-white rounded-2xl border border-caramel/10 p-5 sm:p-8 shadow-sm">
//         <h2 className="text-lg sm:text-xl font-display font-bold text-brownie mb-3">Summary</h2>
//         <p className="text-sm sm:text-base text-coffee/85 leading-relaxed font-sans whitespace-pre-wrap">
//           {memory.summary || "No description logged for this milestone item."}
//         </p>
//       </div>

//       {/* Tags Block Area */}
//       <div className="bg-white rounded-2xl border border-caramel/10 p-5 sm:p-8 shadow-sm">
//         <h2 className="text-lg sm:text-xl font-display font-bold text-brownie mb-3">Tags</h2>
//         <div className="flex flex-wrap gap-2">
//           {memory.tags?.length > 0 ? (
//             memory.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="px-3 py-1 rounded-lg bg-caramel/10 text-xs font-semibold text-caramel tracking-wide"
//               >
//                 #{tag}
//               </span>
//             ))
//           ) : (
//             <p className="text-sm italic text-brownie/40">No tags added yet</p>
//           )}
//         </div>
//       </div>

//       {/* Metadata Dynamic Section Blocks Grid: Responsive columns for People/Emotions/Events */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
//         {/* People Container */}
//         {memory.people?.length > 0 && (
//           <div className="bg-white rounded-2xl border border-caramel/10 p-5 sm:p-6 shadow-sm">
//             <h2 className="text-base sm:text-lg font-display font-bold text-brownie mb-3 flex items-center gap-2">
//               <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234A3728' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><path d='M22 21v-2a4 4 0 0 0-3-3.87'/><path d='M16 3.13a4 4 0 0 1 0 7.75'/></svg>" alt="" />
//               <span>People Involved</span>
//             </h2>
//             <div className="flex flex-wrap gap-2">
//               {memory.people.map((person) => (
//                 <span key={person} className="px-3 py-1 rounded-lg bg-neutral-50 border border-caramel/10 text-xs font-medium text-brownie/80">
//                   👤 {person}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Emotions Container */}
//         {memory.emotions?.length > 0 && (
//           <div className="bg-white rounded-2xl border border-caramel/10 p-5 sm:p-6 shadow-sm">
//             <h2 className="text-base sm:text-lg font-display font-bold text-brownie mb-3 flex items-center gap-2">
//               <Heart size={18} className="text-caramel fill-caramel/10" />
//               <span>Emotions</span>
//             </h2>
//             <div className="flex flex-wrap gap-2">
//               {memory.emotions.map((emotion) => (
//                 <span key={emotion} className="px-3 py-1 rounded-lg bg-neutral-50 border border-caramel/10 text-xs font-medium text-brownie/80">
//                   ❤️ {emotion}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Events Container */}
//         {memory.events?.length > 0 && (
//           <div className="bg-white rounded-2xl border border-caramel/10 p-5 sm:p-6 shadow-sm md:col-span-2">
//             <h2 className="text-base sm:text-lg font-display font-bold text-brownie mb-3 flex items-center gap-2">
//               <PartyPopper size={18} className="text-caramel" />
//               <span>Milestone Events</span>
//             </h2>
//             <div className="flex flex-wrap gap-2">
//               {memory.events.map((event) => (
//                 <span key={event} className="px-3 py-1 rounded-lg bg-neutral-50 border border-caramel/10 text-xs font-medium text-brownie/80">
//                   🎉 {event}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* AI Story Section Frame */}
//       <div className="bg-white rounded-2xl border border-caramel/10 p-5 sm:p-8 shadow-sm">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-3 border-b border-caramel/5">
//           <h2 className="text-lg sm:text-xl font-display font-bold text-brownie flex items-center gap-2">
//             <Sparkles size={18} className="text-purple-500 fill-purple-500/10" />
//             <span>AI Narrative Story</span>
//           </h2>

//           {!story && (
//             <button
//               onClick={handleGenerateStory}
//               disabled={generating}
//               className="bg-brownie text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-brownie/90 disabled:opacity-50 transition-all w-full sm:w-auto shadow-sm"
//             >
//               <Sparkles size={14} />
//               <span>{generating ? "Synthesizing..." : "Generate Story"}</span>
//             </button>
//           )}
//         </div>

//         {story ? (
//           <div className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base text-coffee/90 font-serif bg-neutral-50/60 p-4 rounded-xl border border-caramel/5">
//             {story}
//           </div>
//         ) : (
//           <p className="text-sm italic text-brownie/50 font-sans">
//             No story compiled yet. Click generate to transform these details into an integrated emotional narrative.
//           </p>
//         )}
//       </div>

//       {/* Audio Uploads Player Frame Section */}
//       {memory.uploads?.length > 0 && (
//         <div className="bg-white rounded-2xl border border-caramel/10 p-5 sm:p-8 shadow-sm">
//           <h2 className="text-lg sm:text-xl font-display font-bold text-brownie mb-4">Audio Diaries</h2>
//           <div className="space-y-3">
//             {memory.uploads.map((upload) => (
//               <div key={upload.id} className="bg-neutral-50 p-3 rounded-xl border border-caramel/5">
//                 <audio controls className="w-full h-9 focus:outline-none">
//                   <source src={upload.fileUrl} />
//                 </audio>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Confirm Modal Confirmation Anchor */}
//       <ConfirmModal
//         isOpen={showDeleteModal}
//         title="Delete Memory"
//         message="Are you sure you want to delete this memory? This action cannot be undone."
//         confirmText="Delete"
//         cancelText="Cancel"
//         onConfirm={handleDelete}
//         onCancel={() => setShowDeleteModal(false)}
//       />

//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  Folder,
  Sparkles,
  Trash2,
  ArrowLeft,
  Users,
  Heart,
  PartyPopper,
  Edit3,
  Volume2,
  Headphones,
  Music,
  AudioLines
} from "lucide-react";
import toast from "react-hot-toast";
import ConfirmModal from "../../components/ui/ConfirmModal";
import { getMemoryById, deleteMemory } from "../../services/memory.api";
import { generateStory, generateStoryAudio } from "../../services/story.api";

const voiceOptions = [
  { value: "narrator", label: "🌤 Warm Narrator" },
  { value: "female", label: "👩 Female Narrator" },
  { value: "storyteller", label: "📖 Storyteller" }
];

export default function MemoryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [memory, setMemory] = useState(null);
  const [story, setStory] = useState("");
  const [storyId, setStoryId] = useState(null); 
  const [storyAudioUrl, setStoryAudioUrl] = useState(""); 

  const [generating, setGenerating] = useState(false);
  const [generatingAudio, setGeneratingAudio] = useState(false);
  
  // FIXED: Added the missing state tracker rule here!
  const [selectedVoice, setSelectedVoice] = useState("narrator");

  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    fetchMemory();
  }, [id]);

  const fetchMemory = async () => {
    try {
      const res = await getMemoryById(id);
      setMemory(res.data);
      if (res.data?.story?.content) {
        setStory(res.data.story.content);
        setStoryId(res.data.story.id);
      }
      if (res.data?.story?.audioUrl) {
        setStoryAudioUrl(res.data.story.audioUrl);
      }
    } catch (error) {
      console.error("Error loading memory context:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateStory = async () => {
    try {
      setGenerating(true);
      const res = await generateStory(id);
      const storyData = res.data?.story || res.data || {};
      setStory(storyData.content || "");
      setStoryId(storyData.id || null);
      toast.success("AI Story synthesized successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate story framework.");
    } finally {
      setGenerating(false);
    }
  };

  const handleGenerateVoice = async () => {
    if (!storyId) {
      toast.error("A text story framework must exist first.");
      return;
    }

    try {
      setGeneratingAudio(true);
      const res = await generateStoryAudio(storyId, selectedVoice);
      const audioUrlResult = res.data?.audioUrl || res.audioUrl || "";
      setStoryAudioUrl(audioUrlResult);
      toast.success("Voice diary synthesis complete!");
    } catch (error) {
      console.error("AUDIO SYNTHESIS FAILURE:", error.response?.data);
      toast.error(error.response?.data?.message || "Failed to generate audio narrative.");
    } finally {
      setGeneratingAudio(false);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteMemory(id);
      toast.success("Memory deleted successfully");
      navigate("/memories");
    } catch (error) {
      console.error("DELETE ERROR:", error.response?.data || error);
      toast.error("Could not drop target data entry");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-brownie font-medium">
        <div className="animate-pulse flex items-center gap-2">✨ Recalling Memory...</div>
      </div>
    );
  }

  if (!memory) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-caramel/10 max-w-md mx-auto mt-10">
        <p className="text-brownie font-semibold text-lg">Memory not found</p>
        <button onClick={() => navigate("/memories")} className="mt-4 text-sm text-caramel font-medium hover:underline">
          Return to Archive
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-16 space-y-6 px-1 sm:px-2 py-8 animate-fade-in text-brownie">
      
      {/* Back Button */}
      <button
        onClick={() => navigate("/memories")}
        className="inline-flex items-center gap-2 text-sm font-semibold text-caramel hover:text-brownie transition-colors group px-1"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
        <span>Back to Memories</span>
      </button>

      {/* Header Block */}
      <div className="bg-white rounded-2xl border border-caramel/15 p-5 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-2.5 min-w-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brownie tracking-tight break-words">
              {memory.title}
            </h1>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-caramel">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-caramel/70" />
                <span>{memory.memoryDate ? new Date(memory.memoryDate).toLocaleDateString("en-US", { dateStyle: 'long' }) : "Unknown date"}</span>
              </div>
              {memory.collection?.name && (
                <div className="flex items-center gap-1.5">
                  <Folder size={14} className="text-caramel/70" />
                  <span className="truncate max-w-[150px]">{memory.collection.name}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 justify-end flex-shrink-0">
            <button
              onClick={() => navigate(`/memories/${id}/edit`)}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-cream/20 hover:bg-caramel/10 text-brownie px-4 py-2.5 rounded-xl font-bold text-sm transition-colors border border-caramel/10"
            >
              <Edit3 size={15} />
              <span>Edit</span>
            </button>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="bg-red-50 hover:bg-red-100 text-red-600 p-2.5 rounded-xl border border-red-200/40 transition-colors"
              title="Delete Memory"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-2xl border border-caramel/15 p-5 sm:p-8 shadow-sm">
        <h2 className="text-lg sm:text-xl font-display font-bold text-brownie mb-3">Summary</h2>
        <p className="text-sm sm:text-base text-coffee/85 leading-relaxed font-sans whitespace-pre-wrap">
          {memory.summary || "No description logged for this milestone item."}
        </p>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-2xl border border-caramel/15 p-5 sm:p-8 shadow-sm">
        <h2 className="text-lg sm:text-xl font-display font-bold text-brownie mb-3">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {memory.tags?.length > 0 ? (
            memory.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-caramel/10 text-xs font-semibold text-caramel tracking-wide"
              >
                #{tag}
              </span>
            ))
          ) : (
            <p className="text-sm italic text-brownie/40 font-sans">No tags added yet</p>
          )}
        </div>
      </div>

      {/* Metadata Containers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {memory.people?.length > 0 && (
          <div className="bg-white rounded-2xl border border-caramel/15 p-5 sm:p-6 shadow-sm">
            <h2 className="text-base sm:text-lg font-display font-bold text-brownie mb-3 flex items-center gap-2">
              <Users size={16} className="text-caramel" />
              <span>People Involved</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {memory.people.map((person) => (
                <span key={person} className="px-3 py-1 rounded-lg bg-neutral-50 border border-caramel/10 text-xs font-medium text-brownie/80 font-sans">
                  👤 {person}
                </span>
              ))}
            </div>
          </div>
        )}

        {memory.emotions?.length > 0 && (
          <div className="bg-white rounded-2xl border border-caramel/15 p-5 sm:p-6 shadow-sm">
            <h2 className="text-base sm:text-lg font-display font-bold text-brownie mb-3 flex items-center gap-2">
              <Heart size={16} className="text-caramel fill-caramel/10" />
              <span>Emotions</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {memory.emotions.map((emotion) => (
                <span key={emotion} className="px-3 py-1 rounded-lg bg-neutral-50 border border-caramel/10 text-xs font-medium text-brownie/80 font-sans">
                  ❤️ {emotion}
                </span>
              ))}
            </div>
          </div>
        )}

        {memory.events?.length > 0 && (
          <div className="bg-white rounded-2xl border border-caramel/15 p-5 sm:p-6 shadow-sm md:col-span-2">
            <h2 className="text-base sm:text-lg font-display font-bold text-brownie mb-3 flex items-center gap-2">
              <PartyPopper size={16} className="text-caramel" />
              <span>Milestone Events</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {memory.events.map((event) => (
                <span key={event} className="px-3 py-1 rounded-lg bg-neutral-50 border border-caramel/10 text-xs font-medium text-brownie/80 font-sans">
                  🎉 {event}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* AI STORY CONTAINER WITH VOICE SYNTHESIS DOCK */}
      <div className="bg-white rounded-2xl border border-caramel/15 p-5 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-caramel/5 pb-3">
          <h2 className="text-lg sm:text-xl font-display font-bold text-brownie flex items-center gap-2">
            <Sparkles size={18} className="text-purple-500 fill-purple-500/10" />
            <span>AI Narrative Story</span>
          </h2>

          {!story && (
            <button
              onClick={handleGenerateStory}
              disabled={generating}
              className="bg-brownie text-white px-4 py-2 rounded-xl text-sm font-bold tracking-wide flex items-center justify-center gap-2 hover:bg-coffee disabled:opacity-50 transition-all w-full sm:w-auto shadow-sm"
            >
              <Sparkles size={14} />
              <span>{generating ? "Synthesizing..." : "Generate Story"}</span>
            </button>
          )}
        </div>

        {story ? (
          <div className="space-y-5">
            <div className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base text-coffee/90 font-serif bg-neutral-50/60 p-4 sm:p-5 rounded-xl border border-caramel/5">
              {story}
            </div>

            {/* AUDIO SYNTHESIS MODULE */}
            <div className="bg-cream/20 border border-caramel/15 rounded-xl p-4 space-y-4 font-sans">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-caramel">
                <Headphones size={13} />
                <span>Audio Diary Synthesis</span>
              </div>

              {storyAudioUrl ? (
                <div className="space-y-2 animate-fade-in">
                  <div className="flex items-center gap-2 text-xs font-semibold text-coffee/70 px-0.5">
                    <AudioLines size={12} className="text-green-600 animate-pulse" />
                    <span>AI Audio Narrative Ready</span>
                  </div>
                  <audio controls className="w-full h-10 outline-none bg-white rounded-xl border border-caramel/10 p-1">
                    <source src={storyAudioUrl} type="audio/mpeg" />
                  </audio>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
                  <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    disabled={generatingAudio}
                    className="bg-white border border-caramel/20 rounded-xl px-3 py-2 text-sm font-semibold outline-none focus:border-caramel cursor-pointer min-w-[180px]"
                  >
                    {voiceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={handleGenerateVoice}
                    disabled={generatingAudio}
                    className="bg-caramel hover:bg-brownie font-bold text-white text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all disabled:opacity-40 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Volume2 size={14} className={generatingAudio ? "animate-bounce" : ""} />
                    <span>{generatingAudio ? "Rendering Voice..." : "Generate Audio Diary"}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-sm italic text-brownie/50 font-sans">
            No story compiled yet. Click generate to transform these details into an integrated emotional narrative.
          </p>
        )}
      </div>

      {/* Raw Audio Diaries Component (If any exist) */}
      {memory.uploads?.length > 0 && (
        <div className="bg-white rounded-2xl border border-caramel/15 p-5 sm:p-8 shadow-sm">
          <h2 className="text-lg sm:text-xl font-display font-bold text-brownie mb-4 flex items-center gap-2">
            <Music size={16} className="text-caramel" />
            <span>Raw Audio Diaries</span>
          </h2>
          <div className="space-y-3">
            {memory.uploads.map((upload) => (
              <div key={upload.id} className="bg-neutral-50 p-2.5 rounded-xl border border-caramel/5">
                <audio controls className="w-full h-9 focus:outline-none">
                  <source src={upload.fileUrl} />
                </audio>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Centered Deletion Modal */}
      <ConfirmModal
        isOpen={showDeleteModal}
        title="Delete Memory?"
        message="Are you sure you want to permanently clear this memory entry? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDelete}
        onCancel={() => setShowDeleteModal(false)}
      />

    </div>
  );
}