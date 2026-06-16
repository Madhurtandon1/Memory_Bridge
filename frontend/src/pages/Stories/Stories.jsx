// import { useEffect, useState } from "react";

// import { getTimeline } from "../../services/memory.api";

// export default function Stories() {
//   const [stories, setStories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchStories();
//   }, []);

//   const fetchStories = async () => {
//     try {
//       const res = await getTimeline();

//       const storiesOnly =
//         (res.data || []).filter(
//           (memory) => memory.story
//         );

//       setStories(storiesOnly);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-8">
//         Loading stories...
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto pb-10">
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold">
//           Stories
//         </h1>

//         <p className="text-gray-500 mt-2">
//           AI generated stories from your memories
//         </p>
//       </div>

//       {stories.length === 0 ? (
//         <div className="bg-white rounded-2xl p-8 border">
//           No stories generated yet.
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {stories.map((memory) => (
//             <div
//               key={memory.id}
//               className="
//               bg-white
//               rounded-3xl
//               p-6
//               border
//               shadow-sm
//               "
//             >
//               <div className="mb-4">
//                 <h2 className="text-2xl font-semibold">
//                   {memory.title}
//                 </h2>

//                 <p className="text-gray-500 mt-2">
//                   {memory.summary}
//                 </p>
//               </div>

//               <div
//                 className="
//                 bg-purple-50
//                 rounded-2xl
//                 p-5
//                 border
//                 "
//               >
//                 <h3 className="font-semibold mb-3">
//                   Generated Story
//                 </h3>

//                 <p className="leading-7 whitespace-pre-line text-gray-700">
//                   {memory.story.content}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { getTimeline } from "../../services/memory.api";
import EmptyState from "../../components/ui/EmptyState";

export default function Stories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const res = await getTimeline();

      const storiesOnly = (res.data || []).filter(
        (memory) => memory.story
      );

      setStories(storiesOnly);
    } catch (error) {
      console.error("Error pulling story logs:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh] text-brownie font-medium">
        <div className="animate-pulse flex items-center gap-2">
          <BookOpen size={18} className="animate-spin text-caramel" />
          <span>Weaving your stories together...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-12 px-2 sm:px-4 space-y-6 md:space-y-8 py-8 animate-fade-in">
      
      {/* Page Header */}
      <div className="px-1 border-b border-caramel/5 pb-4">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-brownie tracking-tight">
          Stories
        </h1>
        <p className="text-sm text-coffee/60 mt-0.5">
          AI generated narratives synthesized from your saved moments
        </p>
      </div>

      {/* Main Content Layout */}
      {stories.length === 0 ? (
        <EmptyState
          emoji="✨"
          title="No stories generated yet"
          description="Open any logged milestone memory from your archive and select 'Generate Story' to watch AI transform your details."
        />
      ) : (
        <div className="space-y-6 md:space-y-8">
          {stories.map((memory) => (
            <div
              key={memory.id}
              className="bg-white rounded-2xl border border-caramel/10 p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 sm:space-y-6"
            >
              {/* Origin Memory Content Snippet Header */}
              <div className="space-y-1 border-l-4 border-caramel/20 pl-4">
                <h2 className="text-xl sm:text-2xl font-display font-bold text-brownie tracking-tight">
                  {memory.title}
                </h2>
                <p className="text-sm text-coffee/70 font-sans line-clamp-2 leading-relaxed">
                  {memory.summary}
                </p>
              </div>

              {/* High-Contrast AI Narrative Block */}
              <div className="bg-neutral-50/80 rounded-xl p-4 sm:p-6 border border-caramel/10 relative overflow-hidden">
                {/* Decorative Visual Subtle Sparkle Tag */}
                <div className="absolute top-0 right-0 p-1 bg-neutral-100 text-[10px] text-caramel font-bold uppercase tracking-wider rounded-bl-lg border-l border-b border-caramel/10 flex items-center gap-1">
                  <Sparkles size={10} />
                  <span>AI Narrative</span>
                </div>

                <h3 className="font-display font-bold text-sm text-caramel uppercase tracking-wider mb-3">
                  Generated Narrative
                </h3>

                <p className="leading-relaxed whitespace-pre-line text-sm sm:text-base text-coffee/90 font-serif">
                  {memory.story.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}