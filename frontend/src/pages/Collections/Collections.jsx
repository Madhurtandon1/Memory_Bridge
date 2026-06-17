// // import {
// //   useState,
// //   useEffect
// // } from "react";

// // import {
// //   Plus
// // } from "lucide-react";

// // import {
// //   getCollections
// // } from "../../services/collection.api";

// // import CollectionCard
// //   from "../../components/collection/CollectionCard";

// // import SearchBar
// //   from "../../components/ui/SearchBar";

// // import EmptyState
// //   from "../../components/ui/EmptyState";

// // import {
// //   PageSkeleton
// // } from "../../components/ui/Skeletons";

// // export default function Collections() {

// //   const [
// //     collections,
// //     setCollections
// //   ] = useState([]);

// //   const [
// //     loading,
// //     setLoading
// //   ] = useState(true);

// //   const [
// //     search,
// //     setSearch
// //   ] = useState("");

// //   useEffect(() => {

// //     fetchCollections();

// //   }, []);

// //   const fetchCollections =
// //     async () => {

// //       try {

// //         const res =
// //           await getCollections();

// //         setCollections(
// //           res.data || []
// //         );

// //       } catch (error) {

// //         console.log(error);

// //       } finally {

// //         setLoading(false);
// //       }
// //     };

// //   if (loading) {

// //     return <PageSkeleton />;
// //   }

// //   const filtered =
// //     collections.filter(
// //       (collection) =>

// //         collection.name
// //           ?.toLowerCase()
// //           .includes(
// //             search.toLowerCase()
// //           ) ||

// //         collection.description
// //           ?.toLowerCase()
// //           .includes(
// //             search.toLowerCase()
// //           )
// //     );

// //   return (

// //     <div
// //       className="
// //       max-w-7xl
// //       mx-auto
// //       pb-10
// //       space-y-6"
// //     >

// //       <div
// //         className="
// //         flex
// //         justify-between
// //         items-center"
// //       >

// //         <div>

// //           <h1
// //             className="
// //             font-display
// //             text-4xl
// //             font-semibold
// //             text-brownie"
// //           >
// //             Collections
// //           </h1>

// //           <p
// //             className="
// //             text-coffee/60"
// //           >
// //             {
// //               collections.length
// //             }
// //             {" "}
// //             collections
// //           </p>

// //         </div>

// //         <button
// //           className="
// //           btn-primary
// //           flex
// //           items-center
// //           gap-2"
// //         >

// //           <Plus size={16} />

// //           New Collection

// //         </button>

// //       </div>

// //       <SearchBar
// //         value={search}
// //         onChange={setSearch}
// //         placeholder="Search collections..."
// //       />

// //       {filtered.length === 0 ? (

// //         <EmptyState
// //           emoji="📁"
// //           title="No collections found"
// //           description="Create your first collection."
// //         />

// //       ) : (

// //         <div
// //           className="
// //           grid
// //           md:grid-cols-2
// //           lg:grid-cols-3
// //           gap-5"
// //         >

// //           {filtered.map(
// //             (
// //               collection
// //             ) => (

// //               <CollectionCard
// //                 key={
// //                   collection.id
// //                 }
// //                 collection={
// //                   collection
// //                 }
// //               />

// //             )
// //           )}

// //         </div>

// //       )}

// //     </div>
// //   );
// // }


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus } from "lucide-react";

// import { getCollections } from "../../services/collection.api";

// import CollectionCard from "../../components/collection/CollectionCard";
// import SearchBar from "../../components/ui/SearchBar";
// import EmptyState from "../../components/ui/EmptyState";
// import { PageSkeleton } from "../../components/ui/Skeletons";

// export default function Collections() {
//   const navigate = useNavigate();

//   const [collections, setCollections] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchCollections();
//   }, []);

//   const fetchCollections = async () => {
//     try {
//       const res = await getCollections();

//       setCollections(res.data || []);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <PageSkeleton />;
//   }

//   const filtered = collections.filter(
//     (collection) =>
//       collection.name
//         ?.toLowerCase()
//         .includes(search.toLowerCase()) ||
//       collection.description
//         ?.toLowerCase()
//         .includes(search.toLowerCase())
//   );

//   return (
//     <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-10 space-y-6">
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="font-display text-4xl font-semibold text-brownie">
//             Collections
//           </h1>

//           <p className="text-coffee/60">
//             {collections.length} collections
//           </p>
//         </div>

//         <button
//           onClick={() => navigate("/collections/new")}
//           className="btn-primary flex items-center gap-2"
//         >
//           <Plus size={16} />
//           New Collection
//         </button>
//       </div>

//       <SearchBar
//         value={search}
//         onChange={setSearch}
//         placeholder="Search collections..."
//       />

//       {filtered.length === 0 ? (
//         <EmptyState
//           emoji="📁"
//           title="No collections found"
//           description="Create your first collection."
//         />
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {filtered.map((collection) => (
//             <CollectionCard
//               key={collection.id}
//               collection={collection}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }






import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { getCollections } from "../../services/collection.api.js";
import CollectionCard from "../../components/collection/CollectionCard.jsx";
import SearchBar from "../../components/ui/SearchBar.jsx";
import EmptyState from "../../components/ui/EmptyState.jsx";
import { PageSkeleton } from "../../components/ui/Skeletons.jsx";

export default function Collections() {
  const navigate = useNavigate();

  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    try {
      const res = await getCollections();
      setCollections(res.data || []);
    } catch (error) {
      console.error("Collections fetch error tracking:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageSkeleton />;
  }

  const filtered = collections.filter(
    (collection) =>
      collection.name?.toLowerCase().includes(search.toLowerCase()) ||
      collection.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-1 py-8 pb-12 space-y-6 animate-fade-in">
      
      {/* Dynamic Header Block Context */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-caramel/5 pb-4">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-brownie tracking-tight">
            Collections
          </h1>
          <p className="text-sm font-medium text-coffee/60 mt-0.5">
            {collections.length} {collections.length === 1 ? "group wrapper" : "archives"} active
          </p>
        </div>

        {/* Create Action: Scales up to w-full on mobile, drops to compact flow on desktop */}
        <button
          onClick={() => navigate("/collections/new")}
          className="flex items-center justify-center gap-2 bg-brownie hover:bg-brownie/90 active:scale-[0.99] text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all shadow-sm w-full sm:w-auto flex-shrink-0"
        >
          <Plus size={18} />
          <span>New Collection</span>
        </button>
      </div>

      {/* Search Layout Box Area */}
      <div className="bg-white/40 p-4 rounded-2xl border border-caramel/5 backdrop-blur-sm">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search collections by label or text info..."
        />
      </div>

      {/* Grid Iteration Render Tree */}
      {filtered.length === 0 ? (
        <EmptyState
          emoji="📁"
          title="No collections match"
          description="Refine your text parameters or build an independent new collection folder."
          action="/collections/new"
          actionLabel="Create Collection"
        />
      ) : (
        <div className="space-y-3">
          <p className="text-xs font-bold text-caramel tracking-wider uppercase px-1">
            {filtered.length} {filtered.length === 1 ? "Folder Collection" : "Folders"} Found
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((collection) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}