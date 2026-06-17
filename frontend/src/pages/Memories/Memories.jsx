// import {
//   useState,
//   useEffect
// } from "react";

// import {
//   useNavigate,
//   useSearchParams
// } from "react-router-dom";

// import {
//   Plus,
//   Grid,
//   List
// } from "lucide-react";

// import {
//   getMemories
// } from "../../services/memory.api";

// import {
//   getCollections
// } from "../../services/collection.api";

// import MemoryCard
//   from "../../components/memory/MemoryCard";

// import SearchBar
//   from "../../components/ui/SearchBar";

// import EmptyState
//   from "../../components/ui/EmptyState";

// import {
//   PageSkeleton
// } from "../../components/ui/Skeletons";

// export default function Memories() {

//   const navigate =
//     useNavigate();

//   const [searchParams] =
//     useSearchParams();

//   const [
//     memories,
//     setMemories
//   ] = useState([]);

//   const [
//     collections,
//     setCollections
//   ] = useState([]);

//   const [
//     loading,
//     setLoading
//   ] = useState(true);

//   const [
//     search,
//     setSearch
//   ] = useState(
//     searchParams.get("search") || ""
//   );

//   const [
//     selectedCollection,
//     setSelectedCollection
//   ] = useState("");

//   const [
//     view,
//     setView
//   ] = useState("grid");

//   useEffect(() => {

//     fetchData();

//   }, []);

//   const fetchData =
//     async () => {

//       try {

//         const [
//           memoriesRes,
//           collectionsRes
//         ] = await Promise.all([

//           getMemories(),

//           getCollections()

//         ]);

//         setMemories(
//         memoriesRes.data?.memories || []
//         );


//         setCollections(
//         collectionsRes.data || []
//         );

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setLoading(false);
//       }
//     };

//   if (loading) {

//     return <PageSkeleton />;
//   }

//   const filtered =
//     memories

//       .filter((memory) => {

//         const searchMatch =

//           !search ||

//           memory.title
//             ?.toLowerCase()
//             .includes(
//               search.toLowerCase()
//             ) ||

//           memory.summary
//             ?.toLowerCase()
//             .includes(
//               search.toLowerCase()
//             ) ||

//           memory.tags?.some(
//             (tag) =>
//               tag
//                 .toLowerCase()
//                 .includes(
//                   search.toLowerCase()
//                 )
//           );

//         const collectionMatch =

//           !selectedCollection ||

//           memory.collectionId ===
//             selectedCollection;

//         return (
//           searchMatch &&
//           collectionMatch
//         );
//       })

//       .sort(
//         (a, b) =>
//           new Date(
//             b.createdAt
//           ) -
//           new Date(
//             a.createdAt
//           )
//       );

//   return (

//     <div
//       className="
//       max-w-7xl
//       mx-auto
//       pb-10
//       space-y-6"
//     >

//       {/* Header */}

//       <div
//         className="
//         flex
//         flex-col
//         md:flex-row
//         md:items-center
//         justify-between
//         gap-4"
//       >

//         <div>

//           <h1
//             className="
//             font-display
//             text-4xl
//             font-semibold
//             text-brownie"
//           >
//             Your Memories
//           </h1>

//           <p
//             className="
//             text-coffee/60
//             mt-1"
//           >
//             {memories.length}
//             {" "}
//             memories stored
//           </p>

//         </div>

//         <button
//           onClick={() =>
//             navigate(
//               "/memories/create"
//             )
//           }
//           className="
//           btn-primary
//           flex
//           items-center
//           gap-2"
//         >

//           <Plus size={16} />

//           New Memory

//         </button>

//       </div>

//       {/* Search */}

//       <SearchBar
//         value={search}
//         onChange={setSearch}
//         placeholder="Search memories..."
//       />

//       {/* Filters */}

//       <div
//         className="
//         flex
//         flex-wrap
//         gap-3
//         items-center"
//       >

//         <select
//           value={
//             selectedCollection
//           }
//           onChange={(e) =>
//             setSelectedCollection(
//               e.target.value
//             )
//           }
//           className="
//           input-field
//           py-2
//           text-sm
//           w-auto"
//         >

//           <option value="">
//             All Collections
//           </option>

//           {collections.map(
//             (collection) => (

//               <option
//                 key={
//                   collection.id
//                 }
//                 value={
//                   collection.id
//                 }
//               >

//                 {collection.name}

//               </option>

//             )
//           )}

//         </select>

//         <div
//           className="
//           ml-auto
//           flex
//           gap-2"
//         >

//           <button
//             onClick={() =>
//               setView("grid")
//             }
//             className={`
//             p-2
//             rounded-xl
//             ${
//               view === "grid"
//                 ? "bg-brownie text-white"
//                 : "bg-white"
//             }
//             `}
//           >

//             <Grid size={16} />

//           </button>

//           <button
//             onClick={() =>
//               setView("list")
//             }
//             className={`
//             p-2
//             rounded-xl
//             ${
//               view === "list"
//                 ? "bg-brownie text-white"
//                 : "bg-white"
//             }
//             `}
//           >

//             <List size={16} />

//           </button>

//         </div>

//       </div>

//       {/* Content */}

//       {filtered.length === 0 ? (

//         <EmptyState
//           emoji="📖"
//           title="No memories found"
//           description="Try another search or create a new memory."
//           action="/memories/create"
//           actionLabel="Create Memory"
//         />

//       ) : (

//         <>

//           <p
//             className="
//             text-sm
//             text-caramel"
//           >
//             {filtered.length}
//             {" "}
//             memories found
//           </p>

//           <div
//             className={
//               view === "grid"

//                 ? `
//                   grid
//                   md:grid-cols-2
//                   lg:grid-cols-3
//                   gap-5
//                 `

//                 : `
//                   flex
//                   flex-col
//                   gap-4
//                 `
//             }
//           >

//             {filtered.map(
//               (memory) => (

//                 <MemoryCard
//                   key={memory.id}
//                   memory={memory}
//                 />

//               )
//             )}

//           </div>

//         </>

//       )}

//     </div>
//   );
// }






// import { useState, useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { Plus, Grid, List } from "lucide-react";
// import { getMemories } from "../../services/memory.api";
// import { getCollections } from "../../services/collection.api";
// import MemoryCard from "../../components/memory/MemoryCard";
// import SearchBar from "../../components/ui/SearchBar";
// import EmptyState from "../../components/ui/EmptyState";
// import { PageSkeleton } from "../../components/ui/Skeletons";

// export default function Memories() {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   const [memories, setMemories] = useState([]);
//   const [collections, setCollections] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   const [search, setSearch] = useState(searchParams.get("search") || "");
//   const [selectedCollection, setSelectedCollection] = useState("");
//   const [view, setView] = useState("grid");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const [memoriesRes, collectionsRes] = await Promise.all([
//         getMemories(),
//         getCollections()
//       ]);
//       setMemories(memoriesRes.data?.memories || []);
//       setCollections(collectionsRes.data || []);
//     } catch (error) {
//       console.error("Data fetching failure:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <PageSkeleton />;
//   }

//   const filtered = memories
//     .filter((memory) => {
//       const searchMatch =
//         !search ||
//         memory.title?.toLowerCase().includes(search.toLowerCase()) ||
//         memory.summary?.toLowerCase().includes(search.toLowerCase()) ||
//         memory.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

//       const collectionMatch =
//         !selectedCollection || memory.collectionId === selectedCollection;

//       return searchMatch && collectionMatch;
//     })
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//   return (
//     <div className="max-w-7xl mx-auto pb-12 space-y-6 px-1 py-8 animate-fade-in">
      
//       {/* Dynamic Screen Header Frame */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-caramel/5 pb-4">
//         <div>
//           <h1 className="font-display text-3xl sm:text-4xl font-bold text-brownie tracking-tight">
//             Your Memories
//           </h1>
//           <p className="text-sm font-medium text-coffee/60 mt-0.5">
//             {memories.length} {memories.length === 1 ? "memory" : "memories"} safely archived
//           </p>
//         </div>

//         <button
//           onClick={() => navigate("/memories/create")}
//           className="flex items-center justify-center gap-2 bg-brownie text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-brownie/90 transition-colors shadow-sm w-full sm:w-auto flex-shrink-0"
//         >
//           <Plus size={18} />
//           <span>New Memory</span>
//         </button>
//       </div>

//       {/* Filter Component Interaction Strip */}
//       <div className="space-y-4 bg-white/40 p-4 rounded-2xl border border-caramel/5 backdrop-blur-sm">
//         <SearchBar
//           value={search}
//           onChange={setSearch}
//           placeholder="Search memories by title, text body, or tags..."
//         />

//         <div className="flex flex-col xs:flex-row gap-3 items-stretch xs:items-center justify-between">
//           <select
//             value={selectedCollection}
//             onChange={(e) => setSelectedCollection(e.target.value)}
//             className="bg-white border border-caramel/10 text-brownie px-4 py-2 rounded-xl text-sm font-medium focus:outline-none focus:border-caramel/40 transition-colors w-full xs:w-64 cursor-pointer"
//           >
//             <option value="">All Collections</option>
//             {collections.map((collection) => (
//               <option key={collection.id} value={collection.id}>
//                 {collection.name}
//               </option>
//             ))}
//           </select>

//           {/* Grid Layout Toggles: Automatically disappears on small screens to favor vertical rows */}
//           <div className="hidden xs:flex items-center gap-1.5 bg-neutral-100 p-1 rounded-xl border border-caramel/5 self-end xs:self-auto">
//             <button
//               onClick={() => setView("grid")}
//               className={`p-2 rounded-lg transition-all ${
//                 view === "grid"
//                   ? "bg-white text-brownie shadow-sm"
//                   : "text-brownie/50 hover:text-brownie"
//               }`}
//               title="Grid View"
//             >
//               <Grid size={16} />
//             </button>
//             <button
//               onClick={() => setView("list")}
//               className={`p-2 rounded-lg transition-all ${
//                 view === "list"
//                   ? "bg-white text-brownie shadow-sm"
//                   : "text-brownie/50 hover:text-brownie"
//               }`}
//               title="List View"
//             >
//               <List size={16} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Results Container */}
//       {filtered.length === 0 ? (
//         <EmptyState
//           emoji="📖"
//           title="No memories match"
//           description="Try broadening your search metrics or log a new memory milestone."
//           action="/memories/create"
//           actionLabel="Create Memory"
//         />
//       ) : (
//         <div className="space-y-3">
//           <p className="text-xs font-bold text-caramel tracking-wider uppercase px-1">
//             {filtered.length} {filtered.length === 1 ? "Result" : "Results"} Found
//           </p>

//           <div
//             className={`
//               transition-all duration-300
//               ${view === "grid" 
//                 ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" 
//                 : "flex flex-col gap-4"
//               }
//             `}
//           >
//             {filtered.map((memory) => (
//               <MemoryCard
//                 key={memory.id}
//                 memory={memory}
//                 displayVariant={view} // Pass view prop down cleanly
//               />
//             ))}
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }




// import { useState, useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { Plus, Grid, List, Smile, User, CalendarDays, Search, SlidersHorizontal, RefreshCw, X } from "lucide-react";
// import { 
//   getMemories, 
//   searchMemories, 
//   getMemoriesByPerson, 
//   getMemoriesByEmotion, 
//   getMemoriesByEvent 
// } from "../../services/memory.api";
// import { getCollections } from "../../services/collection.api";
// import MemoryCard from "../../components/memory/MemoryCard";
// import SearchBar from "../../components/ui/SearchBar";
// import EmptyState from "../../components/ui/EmptyState";
// import { PageSkeleton } from "../../components/ui/Skeletons";
// import toast from "react-hot-toast";

// export default function Memories() {
//   const navigate = useNavigate();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const [memories, setMemories] = useState([]);
//   const [collections, setCollections] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [apiSearching, setApiSearching] = useState(false);
  
//   const [search, setSearch] = useState(searchParams.get("search") || "");
//   const [selectedCollection, setSelectedCollection] = useState("");
//   const [view, setView] = useState("grid");

//   // INTELLIGENT ROUTE TRACKING CONTROLLERS
//   const [activeFilterType, setActiveFilterType] = useState("all"); // 'all' | 'keyword' | 'person' | 'emotion' | 'event'
//   const [filterValue, setFilterValue] = useState("");

//   // NEW: Inline input box toggle controls
//   const [showInlineInput, setShowInlineInput] = useState(false);
//   const [inlineInputValue, setInlineInputValue] = useState("");

//   useEffect(() => {
//     const initialSearch = searchParams.get("search");
//     if (initialSearch) {
//       executeBackendQuery("keyword", initialSearch);
//     } else {
//       fetchInitialData();
//     }
//   }, [searchParams]);

//   const fetchInitialData = async () => {
//     try {
//       setLoading(true);
//       const [memoriesRes, collectionsRes] = await Promise.all([
//         getMemories(),
//         getCollections()
//       ]);
//       setMemories(memoriesRes.data?.memories || []);
//       setCollections(collectionsRes.data || []);
//       setActiveFilterType("all");
//       setFilterValue("");
//       setShowInlineInput(false);
//     } catch (error) {
//       console.error("Data fetching failure:", error);
//       toast.error("Failed to sync archive logs");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const executeBackendQuery = async (type, value) => {
//     if (!value.trim() && type !== "all") return;
    
//     try {
//       setApiSearching(true);
//       setActiveFilterType(type);
//       setFilterValue(value);
//       setShowInlineInput(false); // Close the sub-input bar after submission

//       let response;
//       switch (type) {
//         case "keyword":
//           response = await searchMemories(value.trim());
//           break;
//         case "person":
//           response = await getMemoriesByPerson(value.trim());
//           break;
//         case "emotion":
//           response = await getMemoriesByEmotion(value.trim());
//           break;
//         case "event":
//           response = await getMemoriesByEvent(value.trim());
//           break;
//         default:
//           response = await getMemories();
//           setActiveFilterType("all");
//           setFilterValue("");
//       }

//       const results = response.data?.memories || response.data || [];
//       setMemories(results);
//     } catch (error) {
//       console.error(`API filter execution error (${type}):`, error);
//       toast.error(error.response?.data?.message || "No records matching context found");
//     } finally {
//       setApiSearching(false);
//     }
//   };

//   const handleFilterBadgeClick = (type) => {
//     if (type === "all") {
//       handleSearchClearReset();
//       return;
//     }
//     setInlineInputValue("");
//     setActiveFilterType(type);
//     setShowInlineInput(true);
//   };

//   const handleInlineInputSubmit = (e) => {
//     e.preventDefault();
//     if (inlineInputValue.trim()) {
//       executeBackendQuery(activeFilterType, inlineInputValue.trim());
//     }
//   };

//   const handleSearchClearReset = () => {
//     setSearch("");
//     setInlineInputValue("");
//     setShowInlineInput(false);
//     setSearchParams({});
//     executeBackendQuery("all", "");
//   };

//   if (loading) {
//     return <PageSkeleton />;
//   }

//   const finalFilteredDisplay = memories
//     .filter((memory) => {
//       const collectionMatch = !selectedCollection || memory.collectionId === selectedCollection;
//       return collectionMatch;
//     })
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//   // Dynamic placeholder copy configurations
//   const getInlinePlaceholder = () => {
//     if (activeFilterType === "person") return "Enter person's name (e.g., Mahi, Samina)...";
//     if (activeFilterType === "emotion") return "Enter emotion tag (e.g., Joy, Shringar, Hasya)...";
//     if (activeFilterType === "event") return "Enter event identifier (e.g., Birthday, Hackathon)...";
//     return "Filter details...";
//   };

//   return (
//     <div className="max-w-7xl mx-auto pb-12 space-y-6 px-1 py-8 animate-fade-in text-brownie">
      
//       {/* Page Header Area */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-caramel/5 pb-4">
//         <div>
//           <h1 className="font-display text-3xl sm:text-4xl font-bold text-brownie tracking-tight">
//             Your Memories
//           </h1>
//           <p className="text-sm font-medium text-coffee/60 mt-0.5 font-sans">
//             {activeFilterType !== "all" ? `Filtered by ${activeFilterType}: "${filterValue}"` : `${memories.length} memories safely archived`}
//           </p>
//         </div>

//         <button
//           onClick={() => navigate("/memories/create")}
//           className="flex items-center justify-center gap-2 bg-brownie text-white px-5 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-coffee transition-all shadow-md shadow-brownie/10 w-full sm:w-auto flex-shrink-0 active:scale-95"
//         >
//           <Plus size={16} />
//           <span>New Memory</span>
//         </button>
//       </div>

//       {/* Primary Configuration & Input Search Block */}
//       <div className="space-y-4 bg-white/60 p-4 sm:p-5 rounded-2xl border border-caramel/10 backdrop-blur-sm shadow-sm">
//         <div className="relative">
//           <SearchBar
//             value={search}
//             onChange={(val) => {
//               setSearch(val);
//               if(!val) handleSearchClearReset();
//             }}
//             placeholder="Search memories by title, text body, or tags..."
//           />
//           <button
//             onClick={() => executeBackendQuery("keyword", search)}
//             disabled={!search.trim() || apiSearching}
//             className="absolute right-2 top-1/2 -translate-y-1/2 bg-brownie text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-coffee transition-colors disabled:opacity-40"
//           >
//             <Search size={12} />
//             <span>Search</span>
//           </button>
//         </div>

//         {/* AI CONTEXT ROW BADGES */}
//         <div className="pt-1.5 space-y-3">
//           <div className="flex items-center gap-2 text-xs font-bold text-caramel tracking-wider uppercase pl-0.5">
//             <SlidersHorizontal size={12} />
//             <span>AI Context Query Engines</span>
//           </div>

//           <div className="flex flex-wrap items-center gap-2 font-sans">
//             <button
//               onClick={() => handleFilterBadgeClick("all")}
//               className={`px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all border ${
//                 activeFilterType === "all"
//                   ? "bg-brownie text-white border-brownie shadow-sm"
//                   : "bg-white border-caramel/15 text-brownie/80 hover:bg-caramel/5"
//               }`}
//             >
//               All Archives
//             </button>

//             <button
//               onClick={() => handleFilterBadgeClick("person")}
//               className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all border ${
//                 activeFilterType === "person"
//                   ? "bg-caramel text-white border-caramel shadow-sm font-semibold"
//                   : "bg-white border-caramel/15 text-brownie/80 hover:bg-caramel/5"
//               }`}
//             >
//               <User size={12} />
//               <span>By Person {activeFilterType === "person" && filterValue && `("${filterValue}")`}</span>
//             </button>

//             <button
//               onClick={() => handleFilterBadgeClick("emotion")}
//               className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all border ${
//                 activeFilterType === "emotion"
//                   ? "bg-caramel text-white border-caramel shadow-sm font-semibold"
//                   : "bg-white border-caramel/15 text-brownie/80 hover:bg-caramel/5"
//               }`}
//             >
//               <Smile size={12} />
//               <span>By Emotion {activeFilterType === "emotion" && filterValue && `("${filterValue}")`}</span>
//             </button>

//             <button
//               onClick={() => handleFilterBadgeClick("event")}
//               className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all border ${
//                 activeFilterType === "event"
//                   ? "bg-caramel text-white border-caramel shadow-sm font-semibold"
//                   : "bg-white border-caramel/15 text-brownie/80 hover:bg-caramel/5"
//               }`}
//             >
//               <CalendarDays size={12} />
//               <span>By Event {activeFilterType === "event" && filterValue && `("${filterValue}")`}</span>
//             </button>
//           </div>

//           {/* NEW CUSTOM INLINE MODAL INPUT DRAWER (Replaces the unpolished native javascript window prompt!) */}
//           {showInlineInput && (
//             <form 
//               onSubmit={handleInlineInputSubmit} 
//               className="flex items-center gap-2 bg-cream/30 border border-caramel/20 rounded-xl p-2 max-w-xl animate-fade-in mt-2"
//             >
//               <input
//                 autoFocus
//                 type="text"
//                 value={inlineInputValue}
//                 onChange={(e) => setInlineInputValue(e.target.value)}
//                 placeholder={getInlinePlaceholder()}
//                 className="flex-1 bg-white border border-caramel/10 rounded-lg px-3 py-2 text-xs text-brownie outline-none focus:border-caramel/40"
//               />
//               <button
//                 type="submit"
//                 disabled={!inlineInputValue.trim()}
//                 className="bg-brownie text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-coffee transition-colors disabled:opacity-50 flex-shrink-0"
//               >
//                 Apply Filter
//               </button>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowInlineInput(false);
//                   if (filterValue === "") setActiveFilterType("all");
//                 }}
//                 className="p-2 text-coffee/60 hover:text-brownie rounded-lg hover:bg-caramel/5"
//               >
//                 <X size={14} />
//               </button>
//             </form>
//           )}
//         </div>

//         {/* Dropdown directory selection bar */}
//         <div className="flex flex-col xs:flex-row gap-3 items-stretch xs:items-center justify-between pt-2 border-t border-caramel/5">
//           <select
//             value={selectedCollection}
//             onChange={(e) => setSelectedCollection(e.target.value)}
//             className="bg-white border border-caramel/15 text-brownie px-4 py-2.5 rounded-xl text-sm font-semibold text-brownie/90 focus:outline-none focus:border-caramel/40 transition-colors w-full xs:w-64 cursor-pointer outline-none"
//           >
//             <option value="">Filter by Directory Context...</option>
//             {collections.map((collection) => (
//               <option key={collection.id} value={collection.id}>
//                 {collection.name}
//               </option>
//             ))}
//           </select>

//           {/* Grid Layout Toggles */}
//           <div className="hidden xs:flex items-center gap-1.5 bg-neutral-100 p-1 rounded-xl border border-caramel/5 self-end xs:self-auto flex-shrink-0">
//             <button
//               onClick={() => setView("grid")}
//               className={`p-2 rounded-lg transition-all ${
//                 view === "grid" ? "bg-white text-brownie shadow-sm" : "text-brownie/50 hover:text-brownie"
//               }`}
//               title="Grid View"
//             >
//               <Grid size={15} />
//             </button>
//             <button
//               onClick={() => setView("list")}
//               className={`p-2 rounded-lg transition-all ${
//                 view === "list" ? "bg-white text-brownie shadow-sm" : "text-brownie/50 hover:text-brownie"
//               }`}
//               title="List View"
//             >
//               <List size={15} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Render Stream */}
//       {apiSearching ? (
//         <div className="py-24 text-center flex flex-col items-center justify-center gap-3 font-sans text-sm font-semibold text-brownie/60">
//           <RefreshCw size={24} className="animate-spin text-caramel" />
//           <span>AI Query Engines Syncing Vaults...</span>
//         </div>
//       ) : finalFilteredDisplay.length === 0 ? (
//         <EmptyState
//           emoji={activeFilterType !== "all" ? "🔍" : "📖"}
//           title={activeFilterType !== "all" ? "No Query Results Found" : "No memories match"}
//           description={
//             activeFilterType !== "all" 
//               ? `No logs match the criteria context layer for "${filterValue}". Try clearing the filter block.`
//               : "Try broadening your input search filters or create a new memory entry context folder snapshot."
//           }
//           action={activeFilterType !== "all" ? handleSearchClearReset : "/memories/create"}
//           actionLabel={activeFilterType !== "all" ? "Clear Search Filters" : "Create Memory"}
//         />
//       ) : (
//         <div className="space-y-3">
//           <div className="flex items-center justify-between px-1">
//             <p className="text-xs font-bold text-caramel tracking-wider uppercase">
//               {finalFilteredDisplay.length} {finalFilteredDisplay.length === 1 ? "Result" : "Results"} Found
//             </p>
//             {activeFilterType !== "all" && (
//               <button 
//                 onClick={handleSearchClearReset} 
//                 className="text-xs font-bold text-brownie/50 hover:text-red-600 transition-colors flex items-center gap-1 font-sans"
//               >
//                 <span>Clear Filters</span>
//                 <X size={12} />
//               </button>
//             )}
//           </div>

//           <div
//             className={`
//               transition-all duration-300
//               ${view === "grid" 
//                 ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" 
//                 : "flex flex-col gap-4"
//               }
//             `}
//           >
//             {finalFilteredDisplay.map((memory) => (
//               <MemoryCard
//                 key={memory.id}
//                 memory={memory}
//                 displayVariant={view}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { Plus, Grid, List, Smile, User, CalendarDays, Search, SlidersHorizontal, RefreshCw, X, PenTool, Mic } from "lucide-react";
// import { 
//   getMemories, 
//   searchMemories, 
//   getMemoriesByPerson, 
//   getMemoriesByEmotion, 
//   getMemoriesByEvent 
// } from "../../services/memory.api";
// import { getCollections } from "../../services/collection.api";
// import MemoryCard from "../../components/memory/MemoryCard";
// import SearchBar from "../../components/ui/SearchBar";
// import EmptyState from "../../components/ui/EmptyState";
// import { PageSkeleton } from "../../components/ui/Skeletons";
// import ConfirmModal from "../../components/ui/ConfirmModal"; 
// import toast from "react-hot-toast";

// export default function Memories() {
//   const navigate = useNavigate();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const [memories, setMemories] = useState([]);
//   const [collections, setCollections] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [apiSearching, setApiSearching] = useState(false);
  
//   const [search, setSearch] = useState(searchParams.get("search") || "");
//   const [selectedCollection, setSelectedCollection] = useState("");
//   const [view, setView] = useState("grid");

//   // Filter Tracking States
//   const [activeFilterType, setActiveFilterType] = useState("all"); 
//   const [filterValue, setFilterValue] = useState("");
//   const [showInlineInput, setShowInlineInput] = useState(false);
//   const [inlineInputValue, setInlineInputValue] = useState("");

//   // Entry Method Modal Controller state
//   const [creationModalOpen, setCreationModalOpen] = useState(false);

//   useEffect(() => {
//     const initialSearch = searchParams.get("search");
//     if (initialSearch) {
//       executeBackendQuery("keyword", initialSearch);
//     } else {
//       fetchInitialData();
//     }
//   }, [searchParams]);

//   const fetchInitialData = async () => {
//     try {
//       setLoading(true);
//       const [memoriesRes, collectionsRes] = await Promise.all([
//         getMemories(),
//         getCollections()
//       ]);
//       setMemories(memoriesRes.data?.memories || []);
//       setCollections(collectionsRes.data || []);
//       setActiveFilterType("all");
//       setFilterValue("");
//       setShowInlineInput(false);
//     } catch (error) {
//       console.error("Data fetching failure:", error);
//       toast.error("Failed to sync archive logs");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const executeBackendQuery = async (type, value) => {
//     if (!value.trim() && type !== "all") return;
    
//     try {
//       setApiSearching(true);
//       setActiveFilterType(type);
//       setFilterValue(value);
//       setShowInlineInput(false);

//       let response;
//       switch (type) {
//         case "keyword": response = await searchMemories(value.trim()); break;
//         case "person": response = await getMemoriesByPerson(value.trim()); break;
//         case "emotion": response = await getMemoriesByEmotion(value.trim()); break;
//         case "event": response = await getMemoriesByEvent(value.trim()); break;
//         default: response = await getMemories(); setActiveFilterType("all"); setFilterValue("");
//       }

//       const results = response.data?.memories || response.data || [];
//       setMemories(results);
//     } catch (error) {
//       console.error(error);
//       toast.error("No records matching context found");
//     } finally {
//       setApiSearching(false);
//     }
//   };

//   const handleSearchClearReset = () => {
//     setSearch("");
//     setInlineInputValue("");
//     setShowInlineInput(false);
//     setSearchParams({});
//     executeBackendQuery("all", "");
//   };

//   const handleFilterBadgeClick = (type) => {
//     if (type === "all") {
//       handleSearchClearReset();
//       return;
//     }
//     setInlineInputValue("");
//     setActiveFilterType(type);
//     setShowInlineInput(true);
//   };

//   const finalFilteredDisplay = memories
//     .filter((memory) => !selectedCollection || memory.collectionId === selectedCollection)
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//   return (
//     <div className="max-w-7xl mx-auto pb-12 space-y-6 px-1 py-8 animate-fade-in text-brownie">
      
//       {/* Page Header Area */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-caramel/5 pb-4">
//         <div>
//           <h1 className="font-display text-3xl sm:text-4xl font-bold text-brownie tracking-tight">
//             Your Memories
//           </h1>
//           <p className="text-sm font-medium text-coffee/60 mt-0.5 font-sans">
//             {activeFilterType !== "all" ? `Filtered by ${activeFilterType}: "${filterValue}"` : `${memories.length} memories safely archived`}
//           </p>
//         </div>

//         <button
//           onClick={() => setCreationModalOpen(true)}
//           className="flex items-center justify-center gap-2 bg-brownie text-white px-5 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-coffee transition-all shadow-md shadow-brownie/10 w-full sm:w-auto flex-shrink-0 active:scale-95"
//         >
//           <Plus size={16} />
//           <span>New Memory</span>
//         </button>
//       </div>

//       {/* Input Search Box panel */}
//       <div className="space-y-4 bg-white/60 p-4 sm:p-5 rounded-2xl border border-caramel/10 backdrop-blur-sm shadow-sm">
//         <div className="relative">
//           <SearchBar
//             value={search}
//             onChange={(val) => { setSearch(val); if(!val) handleSearchClearReset(); }}
//             placeholder="Search memories by title, text body, or tags..."
//           />
//           <button
//             onClick={() => executeBackendQuery("keyword", search)}
//             disabled={!search.trim() || apiSearching}
//             className="absolute right-2 top-1/2 -translate-y-1/2 bg-brownie text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-coffee transition-colors disabled:opacity-40"
//           >
//             <Search size={12} />
//             <span>Search</span>
//           </button>
//         </div>

//         {/* AI Context Badges */}
//         <div className="pt-1.5 space-y-3">
//           <div className="flex items-center gap-2 text-xs font-bold text-caramel tracking-wider uppercase pl-0.5">
//             <SlidersHorizontal size={12} />
//             <span>AI Context Query Engines</span>
//           </div>

//           <div className="flex flex-wrap items-center gap-2 font-sans">
//             <button onClick={() => handleFilterBadgeClick("all")} className={`px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all border ${activeFilterType === "all" ? "bg-brownie text-white border-brownie shadow-sm" : "bg-white border-caramel/15 text-brownie/80 hover:bg-caramel/5"}`}>
//               All Archives
//             </button>

//             <button onClick={() => handleFilterBadgeClick("person")} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide border ${activeFilterType === "person" ? "bg-caramel text-white border-caramel shadow-sm font-semibold" : "bg-white border-caramel/15 text-brownie/80 hover:bg-caramel/5"}`}>
//               <User size={12} />
//               <span>By Person {activeFilterType === "person" && filterValue && `("${filterValue}")`}</span>
//             </button>

//             <button onClick={() => handleFilterBadgeClick("emotion")} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide border ${activeFilterType === "emotion" ? "bg-caramel text-white border-caramel shadow-sm font-semibold" : "bg-white border-caramel/15 text-brownie/80 hover:bg-caramel/5"}`}>
//               <Smile size={12} />
//               <span>By Emotion {activeFilterType === "emotion" && filterValue && `("${filterValue}")`}</span>
//             </button>

//             <button onClick={() => handleFilterBadgeClick("event")} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide border ${activeFilterType === "event" ? "bg-caramel text-white border-caramel shadow-sm font-semibold" : "bg-white border-caramel/15 text-brownie/80 hover:bg-caramel/5"}`}>
//               <CalendarDays size={12} />
//               <span>By Event {activeFilterType === "event" && filterValue && `("${filterValue}")`}</span>
//             </button>
//           </div>

//           {showInlineInput && (
//             <form onSubmit={(e) => { e.preventDefault(); if (inlineInputValue.trim()) executeBackendQuery(activeFilterType, inlineInputValue.trim()); }} className="flex items-center gap-2 bg-cream/30 border border-caramel/20 rounded-xl p-2 max-w-xl animate-fade-in mt-2">
//               <input autoFocus type="text" value={inlineInputValue} onChange={(e) => setInlineInputValue(e.target.value)} placeholder={activeFilterType === "person" ? "Enter name..." : activeFilterType === "emotion" ? "Enter emotion..." : "Enter event type..."} className="flex-1 bg-white border border-caramel/10 rounded-lg px-3 py-2 text-xs text-brownie outline-none focus:border-caramel/40" />
//               <button type="submit" disabled={!inlineInputValue.trim()} className="bg-brownie text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-coffee">Apply Filter</button>
//               <button type="button" onClick={() => { setShowInlineInput(false); if (filterValue === "") setActiveFilterType("all"); }} className="p-2 text-coffee/60"><X size={14} /></button>
//             </form>
//           )}
//         </div>

//         {/* Directory selection strip */}
//         <div className="flex flex-col xs:flex-row gap-3 items-stretch xs:items-center justify-between pt-2 border-t border-caramel/5">
//           <select value={selectedCollection} onChange={(e) => setSelectedCollection(e.target.value)} className="bg-white border border-caramel/15 text-brownie px-4 py-2.5 rounded-xl text-sm font-semibold text-brownie/90 focus:outline-none focus:border-caramel/40 transition-colors w-full xs:w-64 cursor-pointer outline-none">
//             <option value="">Filter by Directory Context...</option>
//             {collections.map((collection) => (
//               <option key={collection.id} value={collection.id}>
//                 {collection.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Main Stream Results View */}
//       {apiSearching ? (
//         <div className="py-24 text-center flex flex-col items-center justify-center gap-3 font-sans text-sm font-semibold text-brownie/60">
//           <RefreshCw size={24} className="animate-spin text-caramel" />
//           <span>AI Query Engines Syncing Vaults...</span>
//         </div>
//       ) : finalFilteredDisplay.length === 0 ? (
//         <EmptyState emoji="📖" title="No memories match" description="Log a new memory milestone." action={() => setCreationModalOpen(true)} actionLabel="Create Memory" />
//       ) : (
//         <div className="space-y-3">
//           <div className="flex items-center justify-between px-1">
//             <p className="text-xs font-bold text-caramel tracking-wider uppercase">
//               {finalFilteredDisplay.length} {finalFilteredDisplay.length === 1 ? "Result" : "Results"} Found
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {finalFilteredDisplay.map((memory) => (
//               <MemoryCard key={memory.id} memory={memory} displayVariant={view} />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* PREMIUM CAPTURE METHOD SELECTOR MODAL:
//         - Points directly to your clean explicit routing architecture destinations
//       */}
//       <ConfirmModal
//         isOpen={creationModalOpen}
//         title="Capture a New Memory"
//         cancelText="Close"
//         confirmText="" 
//         onCancel={() => setCreationModalOpen(false)}
//         message={
//           <div className="space-y-4 font-sans text-center pb-2">
//             <p className="text-sm text-coffee/70 leading-relaxed max-w-xs mx-auto">
//               How would you like to log this moment into your personal history archive vaults?
//             </p>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
//               {/* Write Option -> MemoryByText */}
//               <button
//                 onClick={() => {
//                   setCreationModalOpen(false);
//                   navigate("/memories/create/text");
//                 }}
//                 className="flex flex-col items-center justify-center p-5 rounded-2xl border border-caramel/20 bg-cream/10 hover:bg-caramel/5 text-brownie transition-all group hover:scale-[1.02]"
//               >
//                 <div className="w-10 h-10 rounded-xl bg-brownie text-white flex items-center justify-center mb-3 shadow-md group-hover:bg-coffee">
//                   <PenTool size={16} />
//                 </div>
//                 <span className="font-bold text-sm">Write Journal</span>
//                 <span className="text-[11px] text-coffee/60 mt-1 font-normal">Unstructured notes & logs</span>
//               </button>

//               {/* Record/Audio Option -> MemoryByAudio */}
//               <button
//                 onClick={() => {
//                   setCreationModalOpen(false);
//                   navigate("/memories/create/audio");
//                 }}
//                 className="flex flex-col items-center justify-center p-5 rounded-2xl border border-caramel/20 bg-cream/10 hover:bg-caramel/5 text-brownie transition-all group hover:scale-[1.02]"
//               >
//                 <div className="w-10 h-10 rounded-xl bg-caramel text-white flex items-center justify-center mb-3 shadow-md group-hover:bg-caramel/90">
//                   <Mic size={16} />
//                 </div>
//                 <span className="font-bold text-sm">Voice Diary</span>
//                 <span className="text-[11px] text-coffee/60 mt-1 font-normal">Audio diaries & files processing</span>
//               </button>
//             </div>
//           </div>
//         }
//       />

//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Plus, Grid, List, Smile, User, CalendarDays, Search, SlidersHorizontal, RefreshCw, X, PenTool, Mic } from "lucide-react";
import { 
  getMemories, 
  searchMemories, 
  getMemoriesByPerson, 
  getMemoriesByEmotion, 
  getMemoriesByEvent 
} from "../../services/memory.api.js";
import { getCollections } from "../../services/collection.api.js";
import MemoryCard from "../../components/memory/MemoryCard.jsx";
import SearchBar from "../../components/ui/SearchBar.jsx";
import EmptyState from "../../components/ui/EmptyState.jsx";
import { PageSkeleton } from "../../components/ui/Skeletons.jsx";
import ConfirmModal from "../../components/ui/ConfirmModal.jsx"; 
import toast from "react-hot-toast";

export default function Memories() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [memories, setMemories] = useState([]);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiSearching, setApiSearching] = useState(false);
  
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [selectedCollection, setSelectedCollection] = useState("");
  const [view, setView] = useState("grid");

  // Filter Tracking States
  const [activeFilterType, setActiveFilterType] = useState("all"); 
  const [filterValue, setFilterValue] = useState("");
  const [showInlineInput, setShowInlineInput] = useState(false);
  const [inlineInputValue, setInlineInputValue] = useState("");

  // Entry Method Modal Controller state
  const [creationModalOpen, setCreationModalOpen] = useState(false);

  useEffect(() => {
    const initialSearch = searchParams.get("search");
    if (initialSearch) {
      executeBackendQuery("keyword", initialSearch);
    } else {
      fetchInitialData();
    }
  }, [searchParams]);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const [memoriesRes, collectionsRes] = await Promise.all([
        getMemories(),
        getCollections()
      ]);
      setMemories(memoriesRes.data?.memories || []);
      setCollections(collectionsRes.data || []);
      setActiveFilterType("all");
      setFilterValue("");
      setShowInlineInput(false);
    } catch (error) {
      console.error("Data fetching failure:", error);
      toast.error("Failed to sync archive logs");
    } finally {
      setLoading(false);
    }
  };

  const executeBackendQuery = async (type, value) => {
    if (!value.trim() && type !== "all") return;
    
    try {
      setApiSearching(true);
      setActiveFilterType(type);
      setFilterValue(value);
      setShowInlineInput(false);

      let response;
      switch (type) {
        case "keyword": response = await searchMemories(value.trim()); break;
        case "person": response = await getMemoriesByPerson(value.trim()); break;
        case "emotion": response = await getMemoriesByEmotion(value.trim()); break;
        case "event": response = await getMemoriesByEvent(value.trim()); break;
        default: response = await getMemories(); setActiveFilterType("all"); setFilterValue("");
      }

      const results = response.data?.memories || response.data || [];
      setMemories(results);
    } catch (error) {
      console.error(error);
      toast.error("No records matching context found");
    } finally {
      setApiSearching(false);
    }
  };

  const handleSearchClearReset = () => {
    setSearch("");
    setInlineInputValue("");
    setShowInlineInput(false);
    setSearchParams({});
    executeBackendQuery("all", "");
  };

  const handleFilterBadgeClick = (type) => {
    if (type === "all") {
      handleSearchClearReset();
      return;
    }
    setInlineInputValue("");
    setActiveFilterType(type);
    setShowInlineInput(true);
  };

  const handleInlineInputSubmit = (e) => {
    e.preventDefault();
    if (inlineInputValue.trim()) {
      executeBackendQuery(activeFilterType, inlineInputValue.trim());
    }
  };

  const finalFilteredDisplay = memories
    .filter((memory) => !selectedCollection || memory.collectionId === selectedCollection)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const getInlinePlaceholder = () => {
    if (activeFilterType === "person") return "Enter person's name (e.g., Mahi, Samina)...";
    if (activeFilterType === "emotion") return "Enter emotion tag (e.g., Joy, Shringar, Hasya)...";
    if (activeFilterType === "event") return "Enter event identifier (e.g., Birthday, Hackathon)...";
    return "Filter details...";
  };

  return (
    <div className="max-w-7xl mx-auto pb-12 space-y-6 px-1 py-8 animate-fade-in text-brownie">
      
      {/* Page Header Area */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-caramel/5 pb-4">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-brownie tracking-tight">
            Your Memories
          </h1>
          <p className="text-sm font-medium text-coffee/60 mt-0.5 font-sans">
            {activeFilterType !== "all" ? `Filtered by ${activeFilterType}: "${filterValue}"` : `${memories.length} memories safely archived`}
          </p>
        </div>

        <button
          onClick={() => setCreationModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-brownie text-white px-5 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-coffee transition-all shadow-md shadow-brownie/10 w-full sm:w-auto flex-shrink-0 active:scale-95"
        >
          <Plus size={16} />
          <span>New Memory</span>
        </button>
      </div>

      {/* Primary Configuration & Input Search Block */}
      <div className="space-y-4 bg-white/60 p-4 sm:p-5 rounded-2xl border border-caramel/10 backdrop-blur-sm shadow-sm">
        <div className="relative">
          <SearchBar
            value={search}
            onChange={(val) => { setSearch(val); if(!val) handleSearchClearReset(); }}
            placeholder="Search memories by title, text body, or tags..."
          />
          <button
            onClick={() => executeBackendQuery("keyword", search)}
            disabled={!search.trim() || apiSearching}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-brownie text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-coffee transition-colors disabled:opacity-40"
          >
            <Search size={12} />
            <span>Search</span>
          </button>
        </div>

        {/* AI Context Badges */}
        <div className="pt-1.5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-caramel tracking-wider uppercase pl-0.5">
            <SlidersHorizontal size={12} />
            <span>AI Context Query Engines</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-sans">
            <button onClick={() => handleFilterBadgeClick("all")} className={`px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all border ${activeFilterType === "all" ? "bg-brownie text-white border-brownie shadow-sm" : "bg-white border-caramel/15 text-brownie/80 hover:bg-caramel/5"}`}>
              All Archives
            </button>
            <button onClick={() => handleFilterBadgeClick("person")} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide border ${activeFilterType === "person" ? "bg-caramel text-white border-caramel shadow-sm font-semibold" : "bg-white border-caramel/15 text-brownie/80 hover:bg-caramel/5"}`}>
              <User size={12} />
              <span>By Person {activeFilterType === "person" && filterValue && `("${filterValue}")`}</span>
            </button>
            <button onClick={() => handleFilterBadgeClick("emotion")} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide border ${activeFilterType === "emotion" ? "bg-caramel text-white border-caramel shadow-sm font-semibold" : "bg-white border-caramel/15 text-brownie/80 hover:bg-caramel/5"}`}>
              <Smile size={12} />
              <span>By Emotion {activeFilterType === "emotion" && filterValue && `("${filterValue}")`}</span>
            </button>
            <button onClick={() => handleFilterBadgeClick("event")} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide border ${activeFilterType === "event" ? "bg-caramel text-white border-caramel shadow-sm font-semibold" : "bg-white border-caramel/15 text-brownie/80 hover:bg-caramel/5"}`}>
              <CalendarDays size={12} />
              <span>By Event {activeFilterType === "event" && filterValue && `("${filterValue}")`}</span>
            </button>
          </div>

          {showInlineInput && (
            <form onSubmit={handleInlineInputSubmit} className="flex items-center gap-2 bg-cream/30 border border-caramel/20 rounded-xl p-2 max-w-xl animate-fade-in mt-2">
              <input autoFocus type="text" value={inlineInputValue} onChange={(e) => setInlineInputValue(e.target.value)} placeholder={getInlinePlaceholder()} className="flex-1 bg-white border border-caramel/10 rounded-lg px-3 py-2 text-xs text-brownie outline-none focus:border-caramel/40" />
              <button type="submit" disabled={!inlineInputValue.trim()} className="bg-brownie text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-coffee">Apply Filter</button>
              <button type="button" onClick={() => { setShowInlineInput(false); if (filterValue === "") setActiveFilterType("all"); }} className="p-2 text-coffee/60"><X size={14} /></button>
            </form>
          )}
        </div>

        {/* Dropdown Layout & View Controllers Strip */}
        <div className="flex flex-col xs:flex-row gap-3 items-stretch xs:items-center justify-between pt-2 border-t border-caramel/5">
          <select value={selectedCollection} onChange={(e) => setSelectedCollection(e.target.value)} className="bg-white border border-caramel/15 text-brownie px-4 py-2.5 rounded-xl text-sm font-semibold text-brownie/90 focus:outline-none focus:border-caramel/40 transition-colors w-full xs:w-64 cursor-pointer outline-none">
            <option value="">Filter by Directory Context...</option>
            {collections.map((collection) => (
              <option key={collection.id} value={collection.id}>{collection.name}</option>
            ))}
          </select>

          {/* Fixed Background Tokens to avoid pure unstyled grays */}
          <div className="hidden xs:flex items-center gap-1.5 bg-cream/40 p-1 rounded-xl border border-caramel/10 self-end xs:self-auto flex-shrink-0">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-lg transition-all ${view === "grid" ? "bg-white text-brownie shadow-sm" : "text-brownie/50 hover:text-brownie"}`}
              title="Grid View"
            >
              <Grid size={15} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-lg transition-all ${view === "list" ? "bg-white text-brownie shadow-sm" : "text-brownie/50 hover:text-brownie"}`}
              title="List View"
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Content Rendering Stream */}
      {apiSearching ? (
        <div className="py-24 text-center flex flex-col items-center justify-center gap-3 font-sans text-sm font-semibold text-brownie/60">
          <RefreshCw size={24} className="animate-spin text-caramel" />
          <span>AI Query Engines Syncing Vaults...</span>
        </div>
      ) : finalFilteredDisplay.length === 0 ? (
        <EmptyState
          emoji={activeFilterType !== "all" ? "🔍" : "📖"}
          title={activeFilterType !== "all" ? "No Query Results Found" : "No memories match"}
          description={activeFilterType !== "all" ? `No logs match the criteria context layer for "${filterValue}".` : "Log a new memory milestone."}
          action={activeFilterType !== "all" ? handleSearchClearReset : () => setCreationModalOpen(true)}
          actionLabel={activeFilterType !== "all" ? "Clear Search Filters" : "Create Memory"}
        />
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <p className="text-xs font-bold text-caramel tracking-wider uppercase">
              {finalFilteredDisplay.length} {finalFilteredDisplay.length === 1 ? "Result" : "Results"} Found
            </p>
            {activeFilterType !== "all" && (
              <button onClick={handleSearchClearReset} className="text-xs font-bold text-brownie/50 hover:text-red-600 transition-colors flex items-center gap-1 font-sans">
                <span>Clear Filters</span>
                <X size={12} />
              </button>
            )}
          </div>

          <div className={`transition-all duration-300 ${view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" : "flex flex-col gap-4"}`}>
            {finalFilteredDisplay.map((memory) => (
              <MemoryCard key={memory.id} memory={memory} displayVariant={view} />
            ))}
          </div>
        </div>
      )}

      {/* POPUP POPUP SELECTION MODAL: FLOATS RIGHT IN THE DEAD CENTER OF VIEWPORT */}
      <ConfirmModal
        isOpen={creationModalOpen}
        title="Capture a New Memory"
        cancelText="Close"
        confirmText="" 
        onCancel={() => setCreationModalOpen(false)}
        message={
          <div className="space-y-4 font-sans text-center pb-2">
            <p className="text-sm text-coffee/70 leading-relaxed max-w-xs mx-auto">
              How would you like to log this moment into your personal history archive vaults?
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <button
                onClick={() => {
                  setCreationModalOpen(false);
                  navigate("/memories/create/text");
                }}
                className="flex flex-col items-center justify-center p-5 rounded-2xl border border-caramel/20 bg-cream/10 hover:bg-caramel/5 text-brownie transition-all group hover:scale-[1.02]"
              >
                <div className="w-10 h-10 rounded-xl bg-brownie text-white flex items-center justify-center mb-3 shadow-md group-hover:bg-coffee">
                  <PenTool size={16} />
                </div>
                <span className="font-bold text-sm">Write Journal</span>
                <span className="text-[11px] text-coffee/60 mt-1 font-normal">Unstructured notes & logs</span>
              </button>

              <button
                onClick={() => {
                  setCreationModalOpen(false);
                  navigate("/memories/create/audio");
                }}
                className="flex flex-col items-center justify-center p-5 rounded-2xl border border-caramel/20 bg-cream/10 hover:bg-caramel/5 text-brownie transition-all group hover:scale-[1.02]"
              >
                <div className="w-10 h-10 rounded-xl bg-caramel text-white flex items-center justify-center mb-3 shadow-md group-hover:bg-caramel/90">
                  <Mic size={16} />
                </div>
                <span className="font-bold text-sm">Voice Diary</span>
                <span className="text-[11px] text-coffee/60 mt-1 font-normal">Audio diaries & files processing</span>
              </button>
            </div>
          </div>
        }
      />

    </div>
  );
}