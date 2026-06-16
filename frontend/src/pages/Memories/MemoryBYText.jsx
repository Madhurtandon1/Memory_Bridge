// import { useState, useEffect } from "react";

// import { useNavigate } from "react-router-dom";

// import { createMemory } from "../../services/memory.api";

// import { getCollections } from "../../services/collection.api";

// export default function CreateMemory() {

//   const navigate = useNavigate();

//   const [collections, setCollections] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(false);

//   const [formData, setFormData] =
//     useState({
//       title: "",
//       summary: "",
//       memoryDate: "",
//       tags: "",
//       collectionId: ""
//     });

//   useEffect(() => {

//     fetchCollections();

//   }, []);

//   const fetchCollections =
//     async () => {

//       try {

//         const res =
//           await getCollections();

//         setCollections(
//           res.data || []
//         );

//       } catch (error) {

//         console.log(error);
//       }
//     };

//   const handleChange =
//     (e) => {

//       setFormData({
//         ...formData,
//         [e.target.name]:
//           e.target.value
//       });
//     };

//   const handleSubmit =
//     async (e) => {

//       e.preventDefault();

//       try {

//         setLoading(true);

//         const payload = {

//           title:
//             formData.title.trim(),

//           summary:
//             formData.summary.trim(),

//           collectionId:
//             formData.collectionId
//         };

//         if (
//           formData.memoryDate
//         ) {

//           payload.memoryDate =
//             formData.memoryDate;
//         }

//         if (
//           formData.tags.trim()
//         ) {

//           payload.tags =
//             formData.tags
//               .split(",")
//               .map(tag =>
//                 tag.trim()
//               )
//               .filter(Boolean);
//         }

//         console.log(
//           "PAYLOAD:",
//           payload
//         );

//         const res =
//           await createMemory(
//             payload
//           );

//         console.log(
//           "CREATED:",
//           res
//         );

//         navigate(
//           "/memories"
//         );

//       } catch (error) {

//         console.log(
//           "CREATE ERROR:",
//           error
//         );

//         console.log(
//           error.response?.data
//         );

//       } finally {

//         setLoading(false);
//       }
//     };

//   return (

//     <div
//       className="
//       max-w-4xl
//       mx-auto
//       pb-10"
//     >

//       <div
//         className="
//         mb-8"
//       >

//         <h1
//           className="
//           text-4xl
//           font-bold
//           text-gray-900"
//         >
//           Create Memory
//         </h1>

//         <p
//           className="
//           text-gray-500
//           mt-2"
//         >
//           Capture an important moment
//         </p>

//       </div>

//       <form
//         onSubmit={
//           handleSubmit
//         }
//         className="
//         bg-white
//         rounded-3xl
//         border
//         border-gray-200
//         p-8
//         space-y-6
//         shadow-sm"
//       >

//         <div>

//           <label
//             className="
//             block
//             mb-2
//             font-medium
//             text-gray-700"
//           >
//             Title
//           </label>

//           <input
//             type="text"
//             name="title"
//             value={
//               formData.title
//             }
//             onChange={
//               handleChange
//             }
//             required
//             className="
//             w-full
//             border
//             border-gray-300
//             rounded-xl
//             p-3
//             outline-none
//             focus:ring-2
//             focus:ring-purple-500"
//           />

//         </div>

//         <div>

//           <label
//             className="
//             block
//             mb-2
//             font-medium
//             text-gray-700"
//           >
//             Summary
//           </label>

//           <textarea
//             rows="6"
//             name="summary"
//             value={
//               formData.summary
//             }
//             onChange={
//               handleChange
//             }
//             required
//             className="
//             w-full
//             border
//             border-gray-300
//             rounded-xl
//             p-3
//             outline-none
//             focus:ring-2
//             focus:ring-purple-500"
//           />

//         </div>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-6"
//         >

//           <div>

//             <label
//               className="
//               block
//               mb-2
//               font-medium
//               text-gray-700"
//             >
//               Memory Date
//             </label>

//             <input
//               type="date"
//               name="memoryDate"
//               value={
//                 formData.memoryDate
//               }
//               onChange={
//                 handleChange
//               }
//               className="
//               w-full
//               border
//               border-gray-300
//               rounded-xl
//               p-3
//               outline-none
//               focus:ring-2
//               focus:ring-purple-500"
//             />

//           </div>

//           <div>

//             <label
//               className="
//               block
//               mb-2
//               font-medium
//               text-gray-700"
//             >
//               Collection
//             </label>

//             <select
//               name="collectionId"
//               value={
//                 formData.collectionId
//               }
//               onChange={
//                 handleChange
//               }
//               required
//               className="
//               w-full
//               border
//               border-gray-300
//               rounded-xl
//               p-3
//               outline-none
//               focus:ring-2
//               focus:ring-purple-500"
//             >

//               <option value="">
//                 Select Collection
//               </option>

//               {collections.map(
//                 (
//                   collection
//                 ) => (

//                   <option
//                     key={
//                       collection.id
//                     }
//                     value={
//                       collection.id
//                     }
//                   >

//                     {
//                       collection.name
//                     }

//                   </option>

//                 )
//               )}

//             </select>

//           </div>

//         </div>

//         <div>

//           <label
//             className="
//             block
//             mb-2
//             font-medium
//             text-gray-700"
//           >
//             Tags
//           </label>

//           <input
//             type="text"
//             name="tags"
//             value={
//               formData.tags
//             }
//             onChange={
//               handleChange
//             }
//             placeholder="
//             childhood, family, school
//             "
//             className="
//             w-full
//             border
//             border-gray-300
//             rounded-xl
//             p-3
//             outline-none
//             focus:ring-2
//             focus:ring-purple-500"
//           />

//           <p
//             className="
//             text-sm
//             text-gray-500
//             mt-2"
//           >
//             Separate tags with commas
//           </p>

//         </div>

//         <button
//           type="submit"
//           disabled={
//             loading ||
//             !formData.title.trim() ||
//             !formData.summary.trim() ||
//             !formData.collectionId
//           }
//           className="
//           bg-purple-600
//           hover:bg-purple-700
//           disabled:bg-gray-400
//           text-white
//           px-8
//           py-3
//           rounded-xl
//           transition-all"
//         >

//           {loading
//             ? "Creating..."
//             : "Create Memory"}

//         </button>

//       </form>

//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createMemory } from "../../services/memory.api";
import { getCollections } from "../../services/collection.api";

export default function MemoryByText() {
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    memoryDate: "",
    tags: "",
    collectionId: ""
  });

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    try {
      const res = await getCollections();
      setCollections(res.data || []);
    } catch (error) {
      console.error("Failed to parse collections:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const payload = {
        title: formData.title.trim(),
        summary: formData.summary.trim(),
        collectionId: formData.collectionId
      };

      if (formData.memoryDate) {
        payload.memoryDate = formData.memoryDate;
      }

      if (formData.tags.trim()) {
        payload.tags = formData.tags
          .split(",")
          .map(tag => tag.trim())
          .filter(Boolean);
      }

      await createMemory(payload);
      navigate("/memories");
    } catch (error) {
      console.error("CREATE ERROR:", error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto pb-12 px-2 sm:px-4 py-8 animate-fade-in">
      {/* Page Header Layout matching other dashboard views */}
      <div className="mb-6 md:mb-8 px-1">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-brownie tracking-tight">
          Create Memory
        </h1>
        <p className="text-sm text-coffee/60 mt-1">
          Capture an important moment into your digital archive
        </p>
      </div>

      {/* Main Form Block with matching brown border overlay */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl border border-caramel/10 p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-sm"
      >
        <div>
          <label className="block mb-1.5 font-semibold text-sm text-brownie/90">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Give this moment a title..."
            className="w-full bg-neutral-50/50 border border-caramel/20 rounded-xl p-3 text-sm text-brownie outline-none transition-all focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/10"
          />
        </div>

        <div>
          <label className="block mb-1.5 font-semibold text-sm text-brownie/90">
            Summary
          </label>
          <textarea
            rows="6"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            required
            placeholder="What made this moment significant? Describe the memory details here..."
            className="w-full bg-neutral-50/50 border border-caramel/20 rounded-xl p-3 text-sm text-brownie outline-none transition-all focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/10 resize-none leading-relaxed"
          />
        </div>

        {/* Responsive inputs column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <label className="block mb-1.5 font-semibold text-sm text-brownie/90">
              Memory Date
            </label>
            <input
              type="date"
              name="memoryDate"
              value={formData.memoryDate}
              onChange={handleChange}
              className="w-full bg-neutral-50/50 border border-caramel/20 rounded-xl p-3 text-sm text-brownie outline-none transition-all focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/10 cursor-pointer"
            />
          </div>

          <div>
            <label className="block mb-1.5 font-semibold text-sm text-brownie/90">
              Collection Assignment
            </label>
            <select
              name="collectionId"
              value={formData.collectionId}
              onChange={handleChange}
              required
              className="w-full bg-neutral-50/50 border border-caramel/20 rounded-xl p-3 text-sm text-brownie outline-none transition-all focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/10 cursor-pointer"
            >
              <option value="">Select Collection</option>
              {collections.map((collection) => (
                <option key={collection.id} value={collection.id}>
                  {collection.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-1.5 font-semibold text-sm text-brownie/90">
            Tags
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="childhood, family, travel, school"
            className="w-full bg-neutral-50/50 border border-caramel/20 rounded-xl p-3 text-sm text-brownie outline-none transition-all focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/10"
          />
          <p className="text-xs text-caramel/80 font-medium mt-1.5 pl-0.5">
            💡 Separate tags with commas
          </p>
        </div>

        {/* Action Button Strip matching your dashboard's theme accents */}
        <div className="pt-2 border-t border-caramel/5 flex justify-end">
          <button
            type="submit"
            disabled={loading || !formData.title.trim() || !formData.summary.trim() || !formData.collectionId}
            className="w-full sm:w-auto bg-brownie hover:bg-brownie/90 disabled:bg-neutral-300 disabled:text-neutral-500 disabled:scale-100 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all active:scale-[0.99] shadow-sm"
          >
            {loading ? "Archiving Memory..." : "Create Memory"}
          </button>
        </div>
      </form>
    </div>
  );
}