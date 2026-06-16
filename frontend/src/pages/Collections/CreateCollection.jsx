// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// import {
//   createCollection
// } from "../../services/collection.api";

// export default function CreateCollection() {

//   const navigate =
//     useNavigate();

//   const [formData, setFormData] =
//     useState({
//       name: "",
//       description: ""
//     });

//   const handleChange = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]:
//         e.target.value
//     });

//   };

//   const handleSubmit =
//     async (e) => {

//       e.preventDefault();

//       try {

//         const res =
//           await createCollection(
//             formData
//           );

//         toast.success(
//           "Collection created successfully"
//         );

//         navigate(
//           `/collections/${res.data.id}`
//         );

//       } catch (error) {

//         toast.error(
//           error.response?.data?.message ||
//           "Failed to create collection"
//         );

//       }

//     };

//   return (

//     <div className="max-w-4xl mx-auto pb-10">

//       <h1 className="text-4xl font-bold mb-8">
//         Create Collection
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white border rounded-3xl p-8 space-y-6"
//       >

//         <div>
//           <label>Name</label>

//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border rounded-xl p-3"
//             required
//           />
//         </div>

//         <div>
//           <label>Description</label>

//           <textarea
//             rows="5"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full border rounded-xl p-3"
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-purple-600 text-white px-8 py-3 rounded-xl"
//         >
//           Create Collection
//         </button>

//       </form>

//     </div>

//   );

// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createCollection } from "../../services/collection.api";

export default function CreateCollection() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    try {
      setLoading(true);
      const res = await createCollection({
        name: formData.name.trim(),
        description: formData.description.trim()
      });

      toast.success("Collection created successfully");
      navigate(`/collections/${res.data.id}`);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create collection"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto pb-12 px-2 sm:px-4 py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-6 md:mb-8 px-1">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-brownie tracking-tight">
          Create Collection
        </h1>
        <p className="text-sm text-coffee/60 mt-1">
          Group your memories into a dedicated archive folder
        </p>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl border border-caramel/10 p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-sm"
      >
        <div>
          <label className="block mb-1.5 font-semibold text-sm text-brownie/90">
            Collection Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="e.g., Summer Travels, Family Traditions..."
            className="w-full bg-neutral-50/50 border border-caramel/20 rounded-xl p-3 text-sm text-brownie outline-none transition-all focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/10"
          />
        </div>

        <div>
          <label className="block mb-1.5 font-semibold text-sm text-brownie/90">
            Description
          </label>
          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Briefly describe what kinds of moments live inside this collection..."
            className="w-full bg-neutral-50/50 border border-caramel/20 rounded-xl p-3 text-sm text-brownie outline-none transition-all focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/10 resize-none leading-relaxed"
          />
        </div>

        {/* Action Button Section with High-Contrast Text Clarity */}
        <div className="pt-4 border-t border-caramel/10 flex justify-end">
          <button
            type="submit"
            disabled={loading || !formData.name.trim()}
            className="w-full sm:w-auto bg-brownie text-white hover:bg-coffee px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.98] shadow-md shadow-brownie/10 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:scale-100 disabled:shadow-none"
          >
            {loading ? "Creating..." : "Create Collection"}
          </button>
        </div>
      </form>
    </div>
  );
}