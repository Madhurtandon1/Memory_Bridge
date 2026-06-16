// import { useEffect, useState } from "react";

// import SearchBar from "../../components/ui/SearchBar";
// import EmptyState from "../../components/ui/EmptyState";
// import { getTimeline } from "../../services/memory.api";

// export default function Timeline() {
//   const [timeline, setTimeline] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchTimeline();
//   }, []);

//   const fetchTimeline = async () => {
//     try {
//       const res = await getTimeline();

//       console.log("TIMELINE:", res);

//       setTimeline(res.data || []);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-8 text-coffee">
//         Loading timeline...
//       </div>
//     );
//   }

//   const filtered = timeline.filter((memory) => {
//     const query = search.toLowerCase();

//     return (
//       memory.title?.toLowerCase().includes(query) ||
//       memory.summary?.toLowerCase().includes(query) ||
//       memory.people?.some((p) =>
//         p.toLowerCase().includes(query)
//       ) ||
//       memory.events?.some((e) =>
//         e.toLowerCase().includes(query)
//       )
//     );
//   });

//   const grouped = filtered.reduce((acc, memory) => {
//     const year = memory.memoryDate
//       ? new Date(memory.memoryDate).getFullYear()
//       : "Unknown";

//     if (!acc[year]) {
//       acc[year] = [];
//     }

//     acc[year].push(memory);

//     return acc;
//   }, {});

//   const years = Object.keys(grouped).sort((a, b) => {
//     if (a === "Unknown") return 1;
//     if (b === "Unknown") return -1;

//     return Number(b) - Number(a);
//   });
// console.log("timeline state =", timeline);
// console.log("filtered =", filtered);
// console.log("grouped =", grouped);
//   return (
//     <div className="max-w-6xl mx-auto pb-10 space-y-6">
//       {/* Header */}

//       <div>
//         <h1 className="font-display text-4xl font-semibold text-brownie">
//           Timeline
//         </h1>

//         <p className="text-coffee/60 mt-1">
//           Explore your memories through time
//         </p>
//       </div>

//       {/* Search */}

//       <SearchBar
//         value={search}
//         onChange={setSearch}
//         placeholder="Search timeline..."
//       />

//       {/* Empty State */}

//       {filtered.length === 0 ? (
//         <EmptyState
//           emoji="📅"
//           title="No memories found"
//           description="Create memories to build your timeline."
//         />
//       ) : (
//         <div className="space-y-10">
//           {years.map((year) => (
//             <div key={year}>
//               {/* Year Header */}

//               <div className="flex items-center gap-4 mb-6">
//                 <h2 className="text-3xl font-display font-bold text-brownie">
//                   {year}
//                 </h2>

//                 <div className="flex-1 h-px bg-caramel/30" />
//               </div>

//               {/* Memories */}

//               <div className="space-y-5">
//                 {grouped[year].map((memory) => (
//                   <div
//                     key={memory.id}
//                     className="bg-white rounded-3xl border border-caramel/20 p-6 shadow-sm"
//                   >
//                     <div className="flex justify-between items-start gap-4">
//                       <div>
//                         <h3 className="text-xl font-semibold text-brownie">
//                           {memory.title}
//                         </h3>

//                         <p className="text-coffee/70 mt-2">
//                           {memory.summary}
//                         </p>

//                         {/* Tags */}

//                         {memory.tags?.length > 0 && (
//                           <div className="flex flex-wrap gap-2 mt-4">
//                             {memory.tags.map((tag) => (
//                               <span
//                                 key={tag}
//                                 className="px-3 py-1 rounded-full bg-caramel/10 text-caramel text-xs"
//                               >
//                                 {tag}
//                               </span>
//                             ))}
//                           </div>
//                         )}

//                         {/* People */}

//                         {memory.people?.length > 0 && (
//                           <div className="mt-4">
//                             <p className="text-xs text-caramel mb-1">
//                               People
//                             </p>

//                             <div className="flex flex-wrap gap-2">
//                               {memory.people.map((person) => (
//                                 <span
//                                   key={person}
//                                   className="px-3 py-1 rounded-full bg-brownie/10 text-brownie text-xs"
//                                 >
//                                   {person}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         )}

//                         {/* Emotions */}

//                         {memory.emotions?.length > 0 && (
//                           <div className="mt-4">
//                             <p className="text-xs text-caramel mb-1">
//                               Emotions
//                             </p>

//                             <div className="flex flex-wrap gap-2">
//                               {memory.emotions.map((emotion) => (
//                                 <span
//                                   key={emotion}
//                                   className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs"
//                                 >
//                                   {emotion}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         )}
//                       </div>

//                       <div className="text-sm text-caramel whitespace-nowrap">
//                         {memory.memoryDate
//                           ? new Date(
//                               memory.memoryDate
//                             ).toLocaleDateString()
//                           : "Unknown Date"}
//                       </div>
//                     </div>

//                     {/* Story Exists */}

//                     {memory.story && (
//                       <div className="mt-5 p-4 rounded-2xl bg-cream border border-caramel/20">
//                         <p className="text-xs uppercase tracking-wide text-caramel mb-2">
//                           Generated Story
//                         </p>

//                         <p className="text-coffee line-clamp-3">
//                           {memory.story.content}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { getTimeline } from "../../services/memory.api";

// export default function Timeline() {
//   const [timeline, setTimeline] = useState([]);

//   useEffect(() => {
//     const fetchTimeline = async () => {
//       try {
//         const res = await getTimeline();

//         console.log(res);

//         setTimeline(res.data || []);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchTimeline();
//   }, []);

//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>Timeline Page</h1>

//       <p>Total Memories: {timeline.length}</p>

//       {timeline.map((memory) => (
//         <div
//           key={memory.id}
//           style={{
//             border: "1px solid #ccc",
//             padding: "15px",
//             marginBottom: "15px",
//           }}
//         >
//           <h3>{memory.title}</h3>

//           <p>{memory.summary}</p>

//           <p>
//             Date:
//             {" "}
//             {memory.memoryDate || "Unknown"}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import SearchBar from "../../components/ui/SearchBar";
import EmptyState from "../../components/ui/EmptyState";
import { getTimeline } from "../../services/memory.api";

export default function Timeline() {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTimeline();
  }, []);

  const fetchTimeline = async () => {
    try {
      const res = await getTimeline();
      setTimeline(res.data || []);
    } catch (error) {
      console.error("Timeline retrieval error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh] text-brownie font-medium">
        <div className="animate-pulse flex items-center gap-2">📅 Charting timeline paths...</div>
      </div>
    );
  }

  const filtered = timeline.filter((memory) => {
    const query = search.toLowerCase();
    return (
      memory.title?.toLowerCase().includes(query) ||
      memory.summary?.toLowerCase().includes(query) ||
      memory.people?.some((p) => p.toLowerCase().includes(query)) ||
      memory.events?.some((e) => e.toLowerCase().includes(query))
    );
  });

  const grouped = filtered.reduce((acc, memory) => {
    const year = memory.memoryDate
      ? new Date(memory.memoryDate).getFullYear()
      : "Unknown";

    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(memory);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => {
    if (a === "Unknown") return 1;
    if (b === "Unknown") return -1;
    return Number(b) - Number(a);
  });

  return (
    <div className="max-w-4xl mx-auto pb-12 px-2 sm:px-4 space-y-6 py-8  md:space-y-8 animate-fade-in">
      {/* Header Layout */}
      <div className="px-1 border-b border-caramel/5 pb-4">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-brownie tracking-tight">
          Timeline
        </h1>
        <p className="text-sm text-coffee/60 mt-0.5">
          Explore your historical milestones through chronological steps
        </p>
      </div>

      {/* Search Input Box Area */}
      <div className="bg-white/40 p-4 rounded-2xl border border-caramel/5 backdrop-blur-sm">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search items by title, metadata keywords, or tags..."
        />
      </div>

      {/* Primary Timeline Nodes Layout */}
      {filtered.length === 0 ? (
        <EmptyState
          emoji="📅"
          title="No timeline events match"
          description="Refine your search parameters or write a new historical memory."
        />
      ) : (
        <div className="space-y-12 pl-2 sm:pl-4 relative border-l-2 border-caramel/15 ml-2 sm:ml-4">
          {years.map((year) => (
            <div key={year} className="relative space-y-6">
              
              {/* Year Dot Marker and Dynamic Anchor Header */}
              <div className="absolute -left-[19px] sm:-left-[27px] top-0.5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-caramel border-4 border-cream-100 ring-4 ring-caramel/10 z-10" />
              </div>

              <div className="mb-4 pl-4 sm:pl-6">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-brownie tracking-tight">
                  {year}
                </h2>
              </div>

              {/* Memories List Nesting */}
              <div className="space-y-6 pl-4 sm:pl-6">
                {grouped[year].map((memory) => (
                  <div
                    key={memory.id}
                    className="bg-white rounded-2xl border border-caramel/10 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-caramel/20 transition-all duration-200"
                  >
                    {/* Header: Title and Date handles split dynamically across viewports */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-caramel/5 pb-3 mb-3">
                      <h3 className="text-base sm:text-lg font-bold text-brownie tracking-tight break-words">
                        {memory.title}
                      </h3>
                      <div className="text-xs font-semibold text-caramel/80 bg-caramel/5 px-2.5 py-1 rounded-md self-start sm:self-auto flex-shrink-0">
                        {memory.memoryDate ? new Date(memory.memoryDate).toLocaleDateString("en-US", { dateStyle: 'medium' }) : "Unknown Date"}
                      </div>
                    </div>

                    {/* Summary Body Text */}
                    <p className="text-sm text-coffee/80 leading-relaxed font-sans mb-4">
                      {memory.summary}
                    </p>

                    {/* Meta Indicators Grid System */}
                    <div className="space-y-3.5 pt-2">
                      {/* Tags */}
                      {memory.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {memory.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-md bg-caramel/10 text-caramel text-xs font-medium tracking-wide"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Unified Sub-groups Box */}
                      {(memory.people?.length > 0 || memory.emotions?.length > 0) && (
                        <div className="flex flex-wrap gap-4 pt-1 text-xs font-semibold text-brownie/70 border-t border-dashed border-caramel/10">
                          {/* People */}
                          {memory.people?.length > 0 && (
                            <div className="flex items-center gap-1.5 bg-neutral-50 px-2 py-1 rounded-lg border border-caramel/5">
                              <span>👥</span>
                              <span>{memory.people.join(", ")}</span>
                            </div>
                          )}

                          {/* Emotions */}
                          {memory.emotions?.length > 0 && (
                            <div className="flex items-center gap-1.5 bg-neutral-50 px-2 py-1 rounded-lg border border-caramel/5">
                              <span>❤️</span>
                              <span className="text-caramel">{memory.emotions.join(", ")}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* AI Story Attached Segment Container */}
                    {memory.story?.content && (
                      <div className="mt-5 p-4 rounded-xl bg-neutral-50/70 border border-caramel/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-1 bg-purple-50 text-[10px] text-purple-600 font-bold uppercase tracking-wider rounded-bl-lg border-l border-b border-purple-100">
                          Narrative
                        </div>
                        <p className="text-xs uppercase tracking-wider font-bold text-purple-500/80 mb-1.5">
                          Synthesized AI Story
                        </p>
                        <p className="text-xs sm:text-sm text-coffee/90 leading-relaxed font-serif line-clamp-3">
                          {memory.story.content}
                        </p>
                      </div>
                    )}

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}