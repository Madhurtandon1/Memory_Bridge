// // import {
// //   useEffect,
// //   useState
// // } from "react";

// // import {
// //   useParams,
// //   useNavigate
// // } from "react-router-dom";

// // import {
// //   ArrowLeft,
// //   Pencil,
// //   Trash2
// // } from "lucide-react";

// // import toast from "react-hot-toast";

// // import {
// //   getCollections,
// //   deleteCollection
// // } from "../../services/collection.api";

// // import {
// //   getMemories
// // } from "../../services/memory.api";

// // import MemoryCard
// // from "../../components/memory/MemoryCard";

// // import EmptyState
// // from "../../components/ui/EmptyState";

// // import ConfirmModal
// // from "../../components/ui/ConfirmModal";

// // export default function CollectionDetails() {

// //   const { id } =
// //     useParams();

// //   const navigate =
// //     useNavigate();

// //   const [
// //     collection,
// //     setCollection
// //   ] = useState(null);

// //   const [
// //     memories,
// //     setMemories
// //   ] = useState([]);

// //   const [
// //     showDeleteModal,
// //     setShowDeleteModal
// //   ] = useState(false);

// //   useEffect(() => {

// //     fetchData();

// //   }, [id]);

// //   const fetchData =
// //     async () => {

// //       try {

// //         const [
// //           collectionsRes,
// //           memoriesRes
// //         ] = await Promise.all([

// //           getCollections(),

// //           getMemories()

// //         ]);

// //         const foundCollection =
// //           collectionsRes.data.find(
// //             (c) =>
// //               c.id === id
// //           );

// //         setCollection(
// //           foundCollection
// //         );

// //         setMemories(

// //           memoriesRes.data?.memories?.filter(
// //             (memory) =>
// //               memory.collectionId === id
// //           ) || []

// //         );

// //       } catch (error) {

// //         console.log(error);

// //       }
// //     };

// //   const handleDelete =
// //     async () => {

// //       try {

// //         await deleteCollection(
// //           id
// //         );

// //         toast.success(
// //           "Collection deleted successfully"
// //         );

// //         navigate(
// //           "/collections"
// //         );

// //       } catch (error) {

// //         console.log(error);

// //         toast.error(
// //           error.response?.data?.message ||
// //           "Delete failed"
// //         );

// //       }
// //     };

// //   if (!collection) {

// //     return (

// //       <div
// //         className="
// //         text-center
// //         py-20"
// //       >

// //         Collection not found

// //       </div>

// //     );
// //   }

// //   return (

// //     <>

// //       <div
// //         className="
// //         max-w-7xl
// //         mx-auto
// //         pb-10
// //         space-y-6"
// //       >

// //         <button
// //           onClick={() =>
// //             navigate(
// //               "/collections"
// //             )
// //           }
// //           className="
// //           flex
// //           items-center
// //           gap-2
// //           text-caramel"
// //         >

// //           <ArrowLeft
// //             size={16}
// //           />

// //           Back

// //         </button>

// //         <div
// //           className="
// //           bg-brownie
// //           rounded-3xl
// //           p-8
// //           text-white"
// //         >

// //           <div
// //             className="
// //             flex
// //             justify-between
// //             items-start"
// //           >

// //             <div>

// //               <h1
// //                 className="
// //                 text-4xl
// //                 font-display
// //                 mb-3"
// //               >
// //                 {collection.name}
// //               </h1>

// //               <p
// //                 className="
// //                 text-white/70"
// //               >
// //                 {
// //                   collection.description
// //                 }
// //               </p>

// //             </div>

// //             <div
// //               className="
// //               flex
// //               gap-3"
// //             >

// //               <button
// //                 onClick={() =>
// //                   navigate(
// //                     `/collections/${id}/edit`
// //                   )
// //                 }
// //                 className="
// //                 bg-white/20
// //                 hover:bg-white/30
// //                 p-3
// //                 rounded-xl"
// //               >

// //                 <Pencil
// //                   size={18}
// //                 />

// //               </button>

// //               <button
// //                 onClick={() =>
// //                   setShowDeleteModal(
// //                     true
// //                   )
// //                 }
// //                 className="
// //                 bg-red-500
// //                 hover:bg-red-600
// //                 p-3
// //                 rounded-xl"
// //               >

// //                 <Trash2
// //                   size={18}
// //                 />

// //               </button>

// //             </div>

// //           </div>

// //         </div>

// //         <div>

// //           <h2
// //             className="
// //             font-display
// //             text-2xl
// //             text-brownie
// //             mb-4"
// //           >
// //             Memories
// //           </h2>

// //           {memories.length === 0 ? (

// //             <EmptyState
// //               emoji="📖"
// //               title="No memories"
// //               description="No memories found in this collection."
// //             />

// //           ) : (

// //             <div
// //               className="
// //               grid
// //               md:grid-cols-2
// //               lg:grid-cols-3
// //               gap-5"
// //             >

// //               {memories.map(
// //                 (memory) => (

// //                   <MemoryCard
// //                     key={
// //                       memory.id
// //                     }
// //                     memory={
// //                       memory
// //                     }
// //                   />

// //                 )
// //               )}

// //             </div>

// //           )}

// //         </div>

// //       </div>

// //       <ConfirmModal
// //         isOpen={
// //           showDeleteModal
// //         }
// //         title="Delete Collection"
// //         message="Are you sure you want to delete this collection and all its memories?"
// //         confirmText="Delete"
// //         cancelText="Cancel"
// //         onConfirm={
// //           handleDelete
// //         }
// //         onCancel={() =>
// //           setShowDeleteModal(
// //             false
// //           )
// //         }
// //       />

// //     </>

// //   );
// // }




// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import { ArrowLeft, Pencil, Trash2 } from "lucide-react";

// import toast from "react-hot-toast";

// import {
//   getCollections,
//   deleteCollection
// } from "../../services/collection.api";

// import { getMemories } from "../../services/memory.api";

// import MemoryCard from "../../components/memory/MemoryCard";
// import EmptyState from "../../components/ui/EmptyState";
// import ConfirmModal from "../../components/ui/ConfirmModal";

// export default function CollectionDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [collection, setCollection] = useState(null);
//   const [memories, setMemories] = useState([]);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, [id]);

//   const fetchData = async () => {
//     try {
//       const [collectionsRes, memoriesRes] =
//         await Promise.all([
//           getCollections(),
//           getMemories()
//         ]);

//       const foundCollection =
//         collectionsRes.data?.find(
//           (c) => c.id === id
//         );

//       setCollection(foundCollection);

//       setMemories(
//         memoriesRes.data?.memories?.filter(
//           (memory) =>
//             memory.collectionId === id
//         ) || []
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await deleteCollection(id);

//       toast.success(
//         "Collection deleted successfully"
//       );

//       navigate("/collections");
//     } catch (error) {
//       console.log(error);

//       toast.error(
//         error.response?.data?.message ||
//           "Delete failed"
//       );
//     }
//   };

//   if (!collection) {
//     return (
//       <div className="text-center py-20">
//         Collection not found
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-10 space-y-6">
//         <button
//           onClick={() =>
//             navigate("/collections")
//           }
//           className="flex items-center gap-2 text-caramel"
//         >
//           <ArrowLeft size={16} />
//           Back
//         </button>

//         <div className="bg-brownie rounded-3xl p-8 text-white">
//           <div className="flex justify-between items-start">
//             <div>
//               <h1 className="text-4xl font-display mb-3">
//                 {collection.name}
//               </h1>

//               <p className="text-white/70">
//                 {collection.description}
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 onClick={() =>
//                   navigate(
//                     `/collections/${id}/edit`
//                   )
//                 }
//                 className="bg-white/20 hover:bg-white/30 p-3 rounded-xl"
//               >
//                 <Pencil size={18} />
//               </button>

//               <button
//                 onClick={() =>
//                   setShowDeleteModal(true)
//                 }
//                 className="bg-red-500 hover:bg-red-600 p-3 rounded-xl"
//               >
//                 <Trash2 size={18} />
//               </button>
//             </div>
//           </div>
//         </div>

//         <div>
//           <h2 className="font-display text-2xl text-brownie mb-4">
//             Memories
//           </h2>

//           {memories.length === 0 ? (
//             <EmptyState
//               emoji="📖"
//               title="No memories"
//               description="No memories found in this collection."
//             />
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//               {memories.map((memory) => (
//                 <MemoryCard
//                   key={memory.id}
//                   memory={memory}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <ConfirmModal
//         isOpen={showDeleteModal}
//         title="Delete Collection"
//         message="Are you sure you want to delete this collection and all its memories?"
//         confirmText="Delete"
//         cancelText="Cancel"
//         onConfirm={handleDelete}
//         onCancel={() =>
//           setShowDeleteModal(false)
//         }
//       />
//     </>
//   );
// }


import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

import { getCollections, deleteCollection } from "../../services/collection.api.js";
import { getMemories } from "../../services/memory.api.js";

import MemoryCard from "../../components/memory/MemoryCard.jsx";
import EmptyState from "../../components/ui/EmptyState.jsx";
import ConfirmModal from "../../components/ui/ConfirmModal.jsx";

export default function CollectionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [collection, setCollection] = useState(null);
  const [memories, setMemories] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [collectionsRes, memoriesRes] = await Promise.all([
        getCollections(),
        getMemories()
      ]);

      const foundCollection = collectionsRes.data?.find((c) => c.id === id);
      setCollection(foundCollection);

      setMemories(
        memoriesRes.data?.memories?.filter((memory) => memory.collectionId === id) || []
      );
    } catch (error) {
      console.error("Collection data recovery failure:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCollection(id);
      toast.success("Collection deleted successfully");
      navigate("/collections");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh] text-brownie font-medium">
        <div className="animate-pulse">Loading collection container contents...</div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="text-center py-16 bg-white border border-caramel/10 rounded-2xl max-w-md mx-auto mt-10 px-4">
        <p className="text-brownie font-semibold text-lg">Collection not found</p>
        <button onClick={() => navigate("/collections")} className="mt-4 text-sm text-caramel font-semibold hover:underline">
          Return to Collections
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-1 py-8 pb-12 space-y-6 sm:space-y-8 animate-fade-in">
        
        {/* Navigation Back Anchor */}
        <button
          onClick={() => navigate("/collections")}
          className="flex items-center gap-2 text-sm font-semibold text-caramel hover:text-caramel/80 transition-colors group px-1"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Collections</span>
        </button>

        {/* FIXED HERO BANNER: 
          Forced 'bg-brownie' to create a deep, high-contrast background stack.
          Changed text to 'text-cream-100' and 'text-cream-100/70' to guarantee high readability.
        */}
        <div className="bg-brownie rounded-3xl p-6 sm:p-8 md:p-10 text-cream-100 relative overflow-hidden shadow-lg shadow-brownie/20 border border-brownie">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(circle at top right, #C08552, transparent)"
            }}
          />
          
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-5">
            <div className="space-y-2 min-w-0">
              {/* Collection Name heading text */}
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight break-words">
                {collection.name}
              </h1>
              {/* Collection Description paragraph text */}
              <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed max-w-2xl break-words">
                {collection.description || "No description logged for this archive library."}
              </p>
            </div>

            {/* Action Buttons Layout Block */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto border-t border-white/10 sm:border-t-0 pt-4 sm:pt-0 justify-end flex-shrink-0">
              <button
                onClick={() => navigate(`/collections/${id}/edit`)}
                className="flex-1 sm:flex-initial flex items-center justify-center bg-white/10 hover:bg-white/20 active:scale-[0.98] p-2.5 rounded-xl transition-all border border-white/10 text-white"
                title="Edit Folder"
              >
                <Pencil size={16} />
                <span className="sm:hidden ml-2 text-sm font-medium">Edit Archive</span>
              </button>

              <button
                onClick={() => setShowDeleteModal(true)}
                className="bg-red-600 hover:bg-red-700 active:scale-[0.98] p-2.5 rounded-xl transition-all shadow-sm text-white"
                title="Delete Folder"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Nested Memory Archive Section */}
        <div className="space-y-4">
          <div className="px-1 border-b border-caramel/20 pb-2">
            <h2 className="font-display text-xl sm:text-2xl text-brownie font-bold tracking-tight">
              Archived Memories
            </h2>
            <p className="text-xs font-bold text-caramel tracking-wider uppercase mt-1">
              {memories.length} {memories.length === 1 ? "Logged Incident" : "Log Entries"} Filed
            </p>
          </div>

          {memories.length === 0 ? (
            <EmptyState
              emoji="📖"
              title="No memories cataloged"
              description="This collection folder is empty. Go to your dashboard or memories pool to file entries under this label heading."
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {memories.map((memory) => (
                <MemoryCard key={memory.id} memory={memory} />
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={showDeleteModal}
        title="Delete Collection"
        message="Are you sure you want to discard this collection archive mapping shell? Your memories themselves will remain safe inside your central database archive."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDelete}
        onCancel={() => setShowDeleteModal(false)}
      />
    </>
  );
}