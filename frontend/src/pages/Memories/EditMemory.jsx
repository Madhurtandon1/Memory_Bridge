// import {
//   useEffect,
//   useState
// } from "react";

// import {
//   useParams,
//   useNavigate
// } from "react-router-dom";
// import toast
// from "react-hot-toast";

// import {
//   getMemoryById,
//   updateMemory
// } from "../../services/memory.api";

// import {
//   getCollections
// } from "../../services/collection.api";

// export default function EditMemory() {

//   const { id } =
//     useParams();

//   const navigate =
//     useNavigate();

//   const [
//     loading,
//     setLoading
//   ] = useState(true);

//   const [
//     collections,
//     setCollections
//   ] = useState([]);

//   const [
//     formData,
//     setFormData
//   ] = useState({
//     title: "",
//     summary: "",
//     memoryDate: "",
//     tags: "",
//     collectionId: ""
//   });

//   useEffect(() => {

//     fetchData();

//   }, [id]);

//   const fetchData =
//     async () => {

//       try {

//         const [
//           memoryRes,
//           collectionsRes
//         ] = await Promise.all([

//           getMemoryById(id),

//           getCollections()

//         ]);

//         const memory =
//           memoryRes.data;

//         setCollections(
//           collectionsRes.data || []
//         );

//         setFormData({

//           title:
//             memory.title || "",

//           summary:
//             memory.summary || "",

//           memoryDate:
//             memory.memoryDate
//               ? memory.memoryDate
//                   .split("T")[0]
//               : "",

//           tags:
//             memory.tags?.join(", ") || "",

//           collectionId:
//             memory.collectionId || ""

//         });

//       } catch (error) {

//         console.log(error);

//       } finally {

//         setLoading(false);

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

//         const payload = {

//           title:
//             formData.title,

//           summary:
//             formData.summary,

//           collectionId:
//             formData.collectionId

//         };

//         if (
//           formData.memoryDate
//         ) {

//           payload.memoryDate =
//             new Date(
//               formData.memoryDate
//             ).toISOString();
//         }

//         if (
//           formData.tags.trim()
//         ) {

//           payload.tags =
//             formData.tags

//               .split(",")

//               .map((tag) =>
//                 tag.trim()
//               )

//               .filter(Boolean);
//         }

//         await updateMemory(
//           id,
//           payload
//         );

//         toast.success(
//         "Memory updated successfully"
//         );

//         navigate(
//           `/memories/${id}`
//         );

//       } catch (error) {

//         console.log(error);

//         toast.error(
//           error.response?.data?.message ||
//           "Update failed"
//         );

//       }
//     };

//   if (loading) {

//     return (
//       <div>
//         Loading...
//       </div>
//     );
//   }

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
//           font-bold"
//         >
//           Edit Memory
//         </h1>

//       </div>

//       <form
//         onSubmit={
//           handleSubmit
//         }
//         className="
//         bg-white
//         border
//         rounded-3xl
//         p-8
//         space-y-6"
//       >

//         <div>

//           <label
//             className="
//             block
//             mb-2
//             font-medium"
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
//             className="
//             w-full
//             border
//             rounded-xl
//             p-3"
//           />

//         </div>

//         <div>

//           <label
//             className="
//             block
//             mb-2
//             font-medium"
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
//             className="
//             w-full
//             border
//             rounded-xl
//             p-3"
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
//               font-medium"
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
//               rounded-xl
//               p-3"
//             />

//           </div>

//           <div>

//             <label
//               className="
//               block
//               mb-2
//               font-medium"
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
//               className="
//               w-full
//               border
//               rounded-xl
//               p-3"
//             >

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
//             font-medium"
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
//             className="
//             w-full
//             border
//             rounded-xl
//             p-3"
//           />

//         </div>

//         <button
//           type="submit"
//           className="
//           bg-purple-600
//           text-white
//           px-8
//           py-3
//           rounded-xl"
//         >

//           Save Changes

//         </button>

//       </form>

//     </div>

//   );
// }



import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getMemoryById, updateMemory } from "../../services/memory.api.js";
import { getCollections } from "../../services/collection.api.js";

export default function EditMemory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    memoryDate: "",
    tags: "",
    collectionId: ""
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const [memoryRes, collectionsRes] = await Promise.all([
        getMemoryById(id),
        getCollections()
      ]);

      const memory = memoryRes.data;
      setCollections(collectionsRes.data || []);

      setFormData({
        title: memory.title || "",
        summary: memory.summary || "",
        memoryDate: memory.memoryDate ? memory.memoryDate.split("T")[0] : "",
        tags: memory.tags?.join(", ") || "",
        collectionId: memory.collectionId || ""
      });
    } catch (error) {
      console.error("Error patching input records:", error);
      toast.error("Failed to recover target memory state.");
    } finally {
      setLoading(false);
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
      const payload = {
        title: formData.title.trim(),
        summary: formData.summary.trim(),
        collectionId: formData.collectionId
      };

      if (formData.memoryDate) {
        payload.memoryDate = new Date(formData.memoryDate).toISOString();
      }

      if (formData.tags.trim()) {
        payload.tags = formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean);
      }

      await updateMemory(id, payload);
      toast.success("Memory updated successfully");
      navigate(`/memories/${id}`);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh] text-brownie font-medium">
        <div className="animate-pulse">Loading memory context entries...</div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pb-12 px-2 sm:px-4 py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-6 md:mb-8 px-1 flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-brownie tracking-tight">
            Edit Memory
          </h1>
          <p className="text-sm text-coffee/60 mt-0.5">Modify logged historical records</p>
        </div>
        <button
          type="button"
          onClick={() => navigate(`/memories/${id}`)}
          className="text-xs sm:text-sm font-semibold text-caramel hover:underline"
        >
          Cancel Changes
        </button>
      </div>

      {/* Main Structural Form Formats */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-caramel/10 rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-sm"
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
            className="w-full bg-neutral-50/50 border border-caramel/20 rounded-xl p-3 text-sm text-brownie outline-none transition-all focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/10 resize-none leading-relaxed"
          />
        </div>

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
              Collection
            </label>
            <select
              name="collectionId"
              value={formData.collectionId}
              onChange={handleChange}
              required
              className="w-full bg-neutral-50/50 border border-caramel/20 rounded-xl p-3 text-sm text-brownie outline-none transition-all focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/10 cursor-pointer"
            >
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
            className="w-full bg-neutral-50/50 border border-caramel/20 rounded-xl p-3 text-sm text-brownie outline-none transition-all focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/10"
          />
        </div>

        <div className="pt-2 border-t border-caramel/5 flex justify-end">
          <button
            type="submit"
            disabled={!formData.title.trim() || !formData.summary.trim()}
            className="w-full sm:w-auto bg-brownie hover:bg-brownie/90 disabled:bg-neutral-300 disabled:text-neutral-500 disabled:scale-100 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all active:scale-[0.99] shadow-sm"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}