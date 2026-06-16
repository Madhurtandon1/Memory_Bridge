// import { useAuth } from "../../context/AuthContext";

// function Dashboard() {

//   const { user } = useAuth();

//   const cards = [
//     {
//       title: "Total Memories",
//       value: "--",
//     },
//     {
//       title: "Stories",
//       value: "--",
//     },
//     {
//       title: "Collections",
//       value: "--",
//     },
//     {
//       title: "User",
//       value: user?.name,
//     },
//   ];

//   return (
//     <div className="space-y-8">

//       <div>

//         <h1
//           className="
//           text-5xl
//           font-bold
//           text-[#2F004F]
//           mb-2"
//         >
//           Dashboard
//         </h1>

//         <p
//           className="
//           text-[#A4508B]"
//         >
//           Your personal memory space
//         </p>

//       </div>

//       <div
//         className="
//         grid
//         md:grid-cols-2
//         xl:grid-cols-4
//         gap-6"
//       >

//         {cards.map((card) => (

//           <div
//             key={card.title}
//             className="
//             bg-white
//             rounded-3xl
//             p-6
//             shadow-sm
//             border
//             border-[#EABFCB]
//             hover:shadow-lg
//             transition"
//           >

//             <p
//               className="
//               text-[#A4508B]
//               text-sm"
//             >
//               {card.title}
//             </p>

//             <h2
//               className="
//               text-3xl
//               font-bold
//               text-[#2F004F]
//               mt-3"
//             >
//               {card.value}
//             </h2>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// }

// export default Dashboard;

// import {
//   useAuth,
// } from "../../context/AuthContext";

// import Card from "../../components/ui/Card";

// import PageHeader from "../../components/ui/PageHeader";

// import PrimaryButton from "../../components/ui/PrimaryButton";

// function Dashboard() {

//   const { user } = useAuth();

//   return (

//     <div
//       className="
//       max-w-7xl
//       mx-auto"
//     >

//       <PageHeader
//         title={`Good Evening, ${user?.name} ✨`}
//         subtitle="Continue building your memory bridge."
//       />

//       <div
//         className="
//         grid
//         md:grid-cols-3
//         gap-6
//         mb-10"
//       >

//         <Card>

//           <h3
//             className="
//             text-xl
//             font-semibold
//             text-[#2F004F]"
//           >
//             Record Memory
//           </h3>

//           <p
//             className="
//             mt-2
//             text-gray-500"
//           >
//             Capture a moment instantly.
//           </p>

//         </Card>

//         <Card>

//           <h3
//             className="
//             text-xl
//             font-semibold
//             text-[#2F004F]"
//           >
//             Upload Audio
//           </h3>

//           <p
//             className="
//             mt-2
//             text-gray-500"
//           >
//             Turn voice memories into stories.
//           </p>

//         </Card>

//         <Card>

//           <h3
//             className="
//             text-xl
//             font-semibold
//             text-[#2F004F]"
//           >
//             Ask Assistant
//           </h3>

//           <p
//             className="
//             mt-2
//             text-gray-500"
//           >
//             Chat with your memory archive.
//           </p>

//         </Card>

//       </div>

//       <Card className="mb-8">

//         <h2
//           className="
//           text-2xl
//           font-bold
//           text-[#2F004F]"
//         >
//           Recent Memories
//         </h2>

//         <p
//           className="
//           mt-2
//           text-gray-500"
//         >
//           Your latest preserved moments will appear here.
//         </p>

//       </Card>

//       <Card>

//         <h2
//           className="
//           text-2xl
//           font-bold
//           text-[#2F004F]"
//         >
//           AI Reflection
//         </h2>

//         <p
//           className="
//           mt-3
//           text-gray-500"
//         >
//           Ask anything about your memories.
//         </p>

//         <div className="mt-5">

//           <PrimaryButton>

//             Ask Memory Bridge

//           </PrimaryButton>

//         </div>

//       </Card>

//     </div>
//   );
// }

// export default Dashboard;



// function Dashboard() {
//   return (
//     <div>
//       <h1>Hello Dashboard</h1>
//     </div>
//   );
// }

// export default Dashboard;


// import React from 'react';
// import { mockMemories, mockCollections } from '../mockData';
// import MemoryCard from '../components/MemoryCard';
// import CollectionCard from '../components/CollectionCard';
// import SearchBar from '../components/SearchBar';

// export default function Dashboard() {
//   return (
//     <div className="max-w-5xl mx-auto py-10 px-4 space-y-12 animate-fadeIn">
//       {/* Welcome Header Container */}
//       <div className="flex flex-col space-y-2">
//         <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-brownie)] tracking-tight">
//           Good afternoon, Archivist
//         </h1>
//         <p className="text-[var(--color-coffee)] font-light italic font-sans text-sm md:text-base">
//           "Quiet minds notice the beautiful intervals." Take a breath and capture an instant.
//         </p>
//       </div>

//       {/* Global Search Bar */}
//       <SearchBar />

//       {/* Recent Memories Section */}
//       <section>
//         <div className="flex justify-between items-end mb-6">
//           <h2 className="font-serif text-2xl font-bold text-[var(--color-brownie)]">
//             Recent Mindscapes
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 gap-6">
//           {mockMemories.slice(0, 2).map(mem => (
//             <MemoryCard key={mem.id} memory={mem} />
//           ))}
//         </div>
//       </section>

//       {/* Active Collections Grid */}
//       <section>
//         <div className="flex justify-between items-end mb-6">
//           <h2 className="font-serif text-2xl font-bold text-[var(--color-brownie)]">
//             Active Collections
//           </h2>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {mockCollections.map(col => (
//             <CollectionCard key={col.id} collection={col} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// import {
//   useEffect,
//   useState
// } from "react";

// import {
//   useNavigate
// } from "react-router-dom";

// import {
//   Plus,
//   BookOpen,
//   BookMarked,
//   Sparkles,
//   ArrowRight
// } from "lucide-react";

// import {
//   useAuth
// } from "../../context/AuthContext";

// import {
//   getMemories,
//   getInsights
// } from "../../services/memory.api";

// import {
//   getCollections
// } from "../../services/collection.api";

// import MemoryCard
//   from "../../components/memory/MemoryCard";

// import CollectionCard
//   from "../../components/collection/CollectionCard";

// import EmptyState
//   from "../../components/ui/EmptyState";
// import {
//   PageSkeleton
// } from "../../components/ui/Skeletons";

// export default function Dashboard() {

//   const navigate =
//     useNavigate();

//   const { user } =
//     useAuth();

//   const [
//     memories,
//     setMemories
//   ] = useState([]);

//   const [
//     collections,
//     setCollections
//   ] = useState([]);

//   const [
//     insights,
//     setInsights
//   ] = useState(null);

//   const [
//     loading,
//     setLoading
//   ] = useState(true);

//   useEffect(() => {

//     fetchDashboard();

//   }, []);

//   const fetchDashboard =
//     async () => {

//       try {

//         const [
//           memoriesRes,
//           collectionsRes,
//           insightsRes
//         ] = await Promise.all([

//           getMemories(),

//           getCollections(),

//           getInsights()

//         ]);

//         setMemories(
//           memoriesRes.data?.memories || []
//         );

//         setCollections(
//           collectionsRes.data || []
//         );

//         setInsights(
//           insightsRes.data || {}
//         );

//       } catch (error) {

//         console.log(
//           error
//         );

//       } finally {

//         setLoading(false);
//       }
//     };

//   if (loading) {

//     return <PageSkeleton />;
//   }

//   const today =
//     new Date();

//   const hour =
//     today.getHours();

//   const greeting =
//     hour < 12
//       ? "Good Morning"
//       : hour < 17
//       ? "Good Afternoon"
//       : "Good Evening";

//   const firstName =
//     user?.name?.split(" ")[0];

//   const recentMemories =
//     [...memories]

//       .sort(
//         (a, b) =>
//           new Date(
//             b.createdAt
//           ) -
//           new Date(
//             a.createdAt
//           )
//       )

//       .slice(0, 3);

//   return (

//     <div
//       className="
//       max-w-7xl
//       mx-auto
//       space-y-8"
//     >

//       {/* Hero */}

//       <div
//         className="
//         bg-brownie
//         rounded-3xl
//         p-8
//         md:p-12
//         text-cream
//         relative
//         overflow-hidden"
//       >

//         <div
//           className="
//           absolute
//           inset-0
//           opacity-20"
//           style={{
//             background:
//               "radial-gradient(circle at top right,#C08552,transparent)"
//           }}
//         />

//         <div
//           className="
//           relative
//           z-10"
//         >

//           <p
//             className="
//             text-cream/70
//             mb-2"
//           >
//             {today.toLocaleDateString()}
//           </p>

//           <h1
//             className="
//             text-4xl
//             md:text-5xl
//             font-display
//             font-semibold
//             mb-4"
//           >
//             {greeting},
//             {" "}
//             {firstName}
//             {" "}
//             ✨
//           </h1>

//           <p
//             className="
//             max-w-xl
//             text-cream/80
//             mb-6"
//           >

//             Preserve your memories,
//             revisit meaningful moments,
//             and transform them into
//             beautiful stories.

//           </p>

//           <button
//             onClick={() =>
//               navigate(
//                 "/memories/create"
//               )
//             }
//             className="
//             flex
//             items-center
//             gap-2
//             bg-caramel
//             px-5
//             py-3
//             rounded-2xl
//             text-white"
//           >

//             <Plus size={18} />

//             New Memory

//           </button>

//         </div>

//       </div>

//       {/* Stats */}

//       <div
//         className="
//         grid
//         grid-cols-2
//         md:grid-cols-4
//         gap-4"
//       >

//         <div className="card p-5">

//           <BookOpen
//             className="
//             text-caramel
//             mb-3"
//           />

//           <h2
//             className="
//             text-3xl
//             font-bold
//             text-brownie"
//           >
//             {insights?.totalMemories || 0}
//           </h2>

//           <p
//             className="
//             text-coffee/70"
//           >
//             Memories
//           </p>

//         </div>

//         <div className="card p-5">

//           <Sparkles
//             className="
//             text-caramel
//             mb-3"
//           />

//           <h2
//             className="
//             text-3xl
//             font-bold
//             text-brownie"
//           >
//             {insights?.totalStories || 0}
//           </h2>

//           <p
//             className="
//             text-coffee/70"
//           >
//             Stories
//           </p>

//         </div>

//         <div className="card p-5">

//           <BookMarked
//             className="
//             text-caramel
//             mb-3"
//           />

//           <h2
//             className="
//             text-3xl
//             font-bold
//             text-brownie"
//           >
//             {collections.length}
//           </h2>

//           <p
//             className="
//             text-coffee/70"
//           >
//             Collections
//           </p>

//         </div>

//         <div className="card p-5">

//           <Sparkles
//             className="
//             text-caramel
//             mb-3"
//           />

//           <h2
//             className="
//             text-xl
//             font-semibold
//             text-brownie"
//           >
//             AI Ready
//           </h2>

//           <p
//             className="
//             text-coffee/70"
//           >
//             Memory Assistant
//           </p>

//         </div>

//       </div>

//       {/* Recent Memories */}

//       <section>

//         <div
//           className="
//           flex
//           justify-between
//           items-center
//           mb-4"
//         >

//           <h2
//             className="
//             font-display
//             text-2xl
//             text-brownie"
//           >
//             Recent Memories
//           </h2>

//           <button
//             onClick={() =>
//               navigate(
//                 "/memories"
//               )
//             }
//             className="
//             flex
//             items-center
//             gap-2
//             text-caramel"
//           >

//             View All

//             <ArrowRight
//               size={16}
//             />

//           </button>

//         </div>

//         {recentMemories.length === 0 ? (

//           <EmptyState
//             emoji="📖"
//             title="No memories yet"
//             description="Create your first memory and start building your archive."
//             action="/memories/create"
//             actionLabel="Create Memory"
//           />

//         ) : (

//           <div
//             className="
//             grid
//             md:grid-cols-2
//             lg:grid-cols-3
//             gap-5"
//           >

//             {recentMemories.map(
//               (memory) => (

//                 <MemoryCard
//                   key={
//                     memory.id
//                   }
//                   memory={
//                     memory
//                   }
//                 />

//               )
//             )}

//           </div>

//         )}

//       </section>

//       {/* Collections */}

//       <section>

//         <div
//           className="
//           flex
//           justify-between
//           items-center
//           mb-4"
//         >

//           <h2
//             className="
//             font-display
//             text-2xl
//             text-brownie"
//           >
//             Collections
//           </h2>

//           <button
//             onClick={() =>
//               navigate(
//                 "/collections"
//               )
//             }
//             className="
//             text-caramel"
//           >
//             View All
//           </button>

//         </div>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           lg:grid-cols-3
//           gap-5"
//         >

//           {collections
//             .slice(0, 3)
//             .map(
//               (
//                 collection
//               ) => (

//                 <CollectionCard
//                   key={
//                     collection.id
//                   }
//                   collection={
//                     collection
//                   }
//                 />

//               )
//             )}

//         </div>

//       </section>

//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus, BookOpen, BookMarked, Sparkles, ArrowRight } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";
// import { getMemories, getInsights } from "../../services/memory.api";
// import { getCollections } from "../../services/collection.api";
// import MemoryCard from "../../components/memory/MemoryCard";
// import CollectionCard from "../../components/collection/CollectionCard";
// import EmptyState from "../../components/ui/EmptyState";
// import { PageSkeleton } from "../../components/ui/Skeletons";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   const [memories, setMemories] = useState([]);
//   const [collections, setCollections] = useState([]);
//   const [insights, setInsights] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   const fetchDashboard = async () => {
//     try {
//       const [memoriesRes, collectionsRes, insightsRes] = await Promise.all([
//         getMemories(),
//         getCollections(),
//         getInsights()
//       ]);

//       setMemories(memoriesRes.data?.memories || []);
//       setCollections(collectionsRes.data || []);
//       setInsights(insightsRes.data || {});
//     } catch (error) {
//       console.error("Dashboard fetching failure:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <PageSkeleton />;
//   }

//   const today = new Date();
//   const hour = today.getHours();
//   const greeting =
//     hour < 12
//       ? "Good Morning"
//       : hour < 17
//       ? "Good Afternoon"
//       : "Good Evening";

//   const firstName = user?.name?.split(" ")[0] || "Keeper";

//   const recentMemories = [...memories]
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//     .slice(0, 3);

//   return (
//     <div className="max-w-7xl mx-auto space-y-6 md:space-y-10 px-1  py-8 animate-fade-in">
      
//       {/* 1. Enhanced Responsive Hero Banner Frame */}
//       <div className="bg-brownie rounded-3xl p-6 sm:p-8 md:p-12 text-cream relative overflow-hidden shadow-lg shadow-brownie/15">
//         <div
//           className="absolute inset-0 opacity-25"
//           style={{
//             background: "radial-gradient(circle at top right, #C08552, transparent)"
//           }}
//         />
        
//         <div className="relative z-10">
//           <p className="text-cream/60 text-xs sm:text-sm font-medium tracking-wide mb-2 uppercase">
//             {today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//           </p>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 tracking-tight leading-tight">
//             {greeting}, {firstName} ✨
//           </h1>

//           <p className="max-w-md sm:max-w-xl text-cream/80 text-sm sm:text-base mb-6 font-sans leading-relaxed">
//             Preserve your memories, revisit meaningful moments, and transform them into beautiful stories.
//           </p>

//           <button
//             onClick={() => navigate("/memories/create")}
//             className="flex items-center justify-center gap-2 bg-caramel hover:bg-caramel/90 active:scale-[0.98] px-5 py-3 rounded-xl text-white font-medium text-sm sm:text-base shadow-md transition-all w-full sm:w-auto"
//           >
//             <Plus size={18} />
//             <span>New Memory</span>
//           </button>
//         </div>
//       </div>

//       {/* 2. Responsive Stats Row: Fluid from Mobile (1 col) -> Tablet (2 cols) -> Laptop (4 cols) */}
//       <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
//         <div className="bg-white border border-caramel/10 p-5 rounded-2xl shadow-sm hover:border-caramel/30 transition-all group">
//           <BookOpen className="text-caramel mb-3 group-hover:scale-105 transition-transform" size={22} />
//           <h2 className="text-3xl font-bold text-brownie tracking-tight">
//             {insights?.totalMemories || 0}
//           </h2>
//           <p className="text-sm font-medium text-brownie/60 mt-0.5">Memories Archived</p>
//         </div>

//         <div className="bg-white border border-caramel/10 p-5 rounded-2xl shadow-sm hover:border-caramel/30 transition-all group">
//           <Sparkles className="text-caramel mb-3 group-hover:scale-105 transition-transform" size={22} />
//           <h2 className="text-3xl font-bold text-brownie tracking-tight">
//             {insights?.totalStories || 0}
//           </h2>
//           <p className="text-sm font-medium text-brownie/60 mt-0.5">Stories Synthesized</p>
//         </div>

//         <div className="bg-white border border-caramel/10 p-5 rounded-2xl shadow-sm hover:border-caramel/30 transition-all group">
//           <BookMarked className="text-caramel mb-3 group-hover:scale-105 transition-transform" size={22} />
//           <h2 className="text-3xl font-bold text-brownie tracking-tight">
//             {collections.length}
//           </h2>
//           <p className="text-sm font-medium text-brownie/60 mt-0.5">Active Collections</p>
//         </div>

//         <div className="bg-white border border-caramel/10 p-5 rounded-2xl shadow-sm hover:border-caramel/30 transition-all group">
//           <Sparkles className="text-caramel mb-3 animate-pulse" size={22} />
//           <h2 className="text-lg font-bold text-brownie tracking-wide uppercase mt-1">
//             AI Ready
//           </h2>
//           <p className="text-sm font-medium text-brownie/60 mt-1">Memory Assistant</p>
//         </div>

//       </div>

//       {/* 3. Recent Memories Section */}
//       <section className="pt-2">
//         <div className="flex items-center justify-between mb-4 px-1">
//           <h2 className="font-display text-xl sm:text-2xl text-brownie font-bold tracking-tight">
//             Recent Memories
//           </h2>
//           <button
//             onClick={() => navigate("/memories")}
//             className="flex items-center gap-1.5 text-sm font-semibold text-caramel hover:text-caramel/80 transition-colors"
//           >
//             <span>View All</span>
//             <ArrowRight size={16} />
//           </button>
//         </div>

//         {recentMemories.length === 0 ? (
//           <EmptyState
//             emoji="📖"
//             title="No memories yet"
//             description="Create your first memory and start building your archive."
//             action="/memories/create"
//             actionLabel="Create Memory"
//           />
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {recentMemories.map((memory) => (
//               <MemoryCard key={memory.id} memory={memory} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* 4. Collections Section */}
//       <section className="pt-2">
//         <div className="flex items-center justify-between mb-4 px-1">
//           <h2 className="font-display text-xl sm:text-2xl text-brownie font-bold tracking-tight">
//             Collections
//           </h2>
//           <button
//             onClick={() => navigate("/collections")}
//             className="flex items-center gap-1.5 text-sm font-semibold text-caramel hover:text-caramel/80 transition-colors"
//           >
//             <span>View All</span>
//             <ArrowRight size={16} />
//           </button>
//         </div>

//         {collections.length === 0 ? (
//           <div className="bg-white/50 border border-dashed border-caramel/20 rounded-2xl p-8 text-center text-brownie/50 text-sm">
//             No active collections found. Organize memories by grouping them together.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {collections.slice(0, 3).map((collection) => (
//               <CollectionCard key={collection.id} collection={collection} />
//             ))}
//           </div>
//         )}
//       </section>

//     </div>
//   );
// }






import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, BookOpen, BookMarked, Sparkles, ArrowRight, Heart, Users, Compass } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { getMemories, getInsights } from "../../services/memory.api";
import { getCollections } from "../../services/collection.api";
import { getLifeSummary } from "../../services/life.api"; // Imported your new endpoint
import MemoryCard from "../../components/memory/MemoryCard";
import CollectionCard from "../../components/collection/CollectionCard";
import EmptyState from "../../components/ui/EmptyState";
import { PageSkeleton } from "../../components/ui/Skeletons";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [memories, setMemories] = useState([]);
  const [collections, setCollections] = useState([]);
  const [insights, setInsights] = useState(null);
  const [lifeSummary, setLifeSummary] = useState(null); // Added local storage state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const [memoriesRes, collectionsRes, insightsRes, lifeSummaryRes] = await Promise.all([
        getMemories(),
        getCollections(),
        getInsights(),
        getLifeSummary() // Fetching your smart narrative metrics concurrently
      ]);

      setMemories(memoriesRes.data?.memories || []);
      setCollections(collectionsRes.data || []);
      setInsights(insightsRes.data || {});
      setLifeSummary(lifeSummaryRes.data || lifeSummaryRes); // Supports variable payload bindings
    } catch (error) {
      console.error("Dashboard fetching failure:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageSkeleton />;
  }

  const today = new Date();
  const hour = today.getHours();
  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const firstName = user?.name?.split(" ")[0] || "Keeper";

  const recentMemories = [...memories]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto space-y-6 md:space-y-10 px-1 py-8 animate-fade-in text-brownie">
      
      {/* 1. Enhanced Responsive Hero Banner Frame */}
      <div className="bg-brownie rounded-3xl p-6 sm:p-8 md:p-12 text-cream relative overflow-hidden shadow-lg shadow-brownie/15">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background: "radial-gradient(circle at top right, #C08552, transparent)"
          }}
        />
        
        <div className="relative z-10">
          <p className="text-cream/60 text-xs sm:text-sm font-bold tracking-wider mb-2 uppercase font-sans">
            {today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-3 tracking-tight leading-tight text-white">
            {greeting}, {firstName} ✨
          </h1>

          <p className="max-w-md sm:max-w-xl text-cream/80 text-sm sm:text-base mb-6 font-sans leading-relaxed">
            Preserve your memories, revisit meaningful moments, and transform them into beautiful stories.
          </p>

          <button
            onClick={() => navigate("/memories/create")}
            className="flex items-center justify-center gap-2 bg-caramel hover:bg-caramel/90 active:scale-[0.98] px-5 py-3 rounded-xl text-white font-bold text-sm tracking-wide shadow-md transition-all w-full sm:w-auto"
          >
            <Plus size={16} />
            <span>New Memory</span>
          </button>
        </div>
      </div>

      {/* 2. HIGHLY PERSONALIZED BENTO BLOCK: "My Story So Far" 
          - Dynamically loops over your automated backend summary logs.
          - Maps structural sub-grids for Themes, Top People, and Core Emotions.
      */}
      <section className="bg-[#23140E] border border-white/5 rounded-3xl p-6 sm:p-8 text-cream shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-caramel/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-2 text-caramel text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-4 mb-5">
          <Sparkles size={14} className="animate-pulse" />
          <span>My Story So Far</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Generation Blurb */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-display text-2xl font-bold text-white tracking-tight leading-snug">
              ✨ {lifeSummary?.themes?.slice(0, 2).join(" & ") || "My Story So Far"}
            </h3>

            <p className="text-cream/70 text-sm leading-relaxed font-sans mt-3">
              {lifeSummary?.summary ||
                "Start creating memories to build your life story."}
            </p>

            <p className="text-xs text-cream/50 mt-3">
              Updated{" "}
              {lifeSummary?.updatedAt
                ? new Date(lifeSummary.updatedAt).toLocaleDateString()
                : "Today"}
            </p>
          </div>

          {/* Extracted Core Analytical Elements Block */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
            
            {/* Column A: Key Themes */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-caramel">
                <Compass size={13} />
                <span>Core Themes</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {(lifeSummary?.themes || ["Family", "Celebration", "Growth"]).map((theme) => (
                  <span key={theme} className="bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg text-xs font-semibold text-white tracking-wide">
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Column B: Top Interacting People */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-caramel">
                <Users size={13} />
                <span>Top People</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {(lifeSummary?.topPeople || []).map((person) => (
                  <span key={person} className="bg-caramel/10 border border-caramel/20 px-2.5 py-1 rounded-lg text-xs font-bold text-caramel tracking-wide">
                    {person}
                  </span>
                ))}
              </div>
            </div>

            {/* Column C: Tracked Emotional Weights */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-caramel">
                <Heart size={13} />
                <span>Top Emotions</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {(lifeSummary?.topEmotions || []).map((emotion) => (
                  <span key={emotion} className="bg-[#FAF7F2]/10 border border-white/10 px-2.5 py-1 rounded-lg text-xs font-medium text-cream tracking-wide">
                    {emotion}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Responsive Stats Row Counter Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-caramel/10 p-5 rounded-2xl shadow-sm hover:border-caramel/30 transition-all group">
          <BookOpen className="text-caramel mb-3 group-hover:scale-105 transition-transform" size={22} />
          <h2 className="text-3xl font-black text-brownie tracking-tight">
            {insights?.totalMemories || memories.length || 0}
          </h2>
          <p className="text-xs font-bold text-brownie/60 uppercase tracking-wider mt-0.5">Memories Archived</p>
        </div>

        <div className="bg-white border border-caramel/10 p-5 rounded-2xl shadow-sm hover:border-caramel/30 transition-all group">
          <Sparkles className="text-caramel mb-3 group-hover:scale-105 transition-transform" size={22} />
          <h2 className="text-3xl font-black text-brownie tracking-tight">
            {insights?.totalStories || 0}
          </h2>
          <p className="text-xs font-bold text-brownie/60 uppercase tracking-wider mt-0.5">Stories Synthesized</p>
        </div>

        <div className="bg-white border border-caramel/10 p-5 rounded-2xl shadow-sm hover:border-caramel/30 transition-all group">
          <BookMarked className="text-caramel mb-3 group-hover:scale-105 transition-transform" size={22} />
          <h2 className="text-3xl font-black text-brownie tracking-tight">
            {collections.length}
          </h2>
          <p className="text-xs font-bold text-brownie/60 uppercase tracking-wider mt-0.5">Active Collections</p>
        </div>

        <div className="bg-white border border-caramel/10 p-5 rounded-2xl shadow-sm hover:border-caramel/30 transition-all group cursor-pointer" onClick={() => navigate("/assistant")}>
          <Sparkles className="text-caramel mb-3 animate-pulse" size={22} />
          <h2 className="text-lg font-black text-brownie tracking-wide uppercase mt-1">
            AI Active
          </h2>
          <p className="text-xs font-bold text-brownie/60 uppercase tracking-wider mt-0.5">Memory Assistant</p>
        </div>
      </div>

      {/* 4. Recent Memories Section */}
      <section className="pt-2">
        <div className="flex items-center justify-between mb-4 px-1">
          <h2 className="font-display text-xl sm:text-2xl text-brownie font-bold tracking-tight">
            Recent Memories
          </h2>
          <button
            onClick={() => navigate("/memories")}
            className="flex items-center gap-1.5 text-sm font-bold text-caramel hover:text-brownie transition-colors"
          >
            <span>View All</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {recentMemories.length === 0 ? (
          <EmptyState
            emoji="📖"
            title="No memories yet"
            description="Create your first memory and start building your archive."
            action="/memories/create"
            actionLabel="Create Memory"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recentMemories.map((memory) => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        )}
      </section>

      {/* 5. Collections Section */}
      <section className="pt-2">
        <div className="flex items-center justify-between mb-4 px-1">
          <h2 className="font-display text-xl sm:text-2xl text-brownie font-bold tracking-tight">
            Collections
          </h2>
          <button
            onClick={() => navigate("/collections")}
            className="flex items-center gap-1.5 text-sm font-bold text-caramel hover:text-brownie transition-colors"
          >
            <span>View All</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {collections.length === 0 ? (
          <div className="bg-white/50 border border-dashed border-caramel/20 rounded-2xl p-8 text-center text-brownie/50 text-sm font-medium font-sans">
            No active collections found. Organize memories by grouping them together.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {collections.slice(0, 3).map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        )}
      </section>

    </div>
  );
}