// // import {
// //   useEffect,
// //   useState
// // } from "react";

// // import {
// //   useParams,
// //   useNavigate
// // } from "react-router-dom";

// // import toast
// // from "react-hot-toast";

// // import {
// //   getCollections,
// //   updateCollection
// // } from "../../services/collection.api";

// // export default function EditCollection() {

// //   const { id } =
// //     useParams();

// //   const navigate =
// //     useNavigate();

// //   const [
// //     loading,
// //     setLoading
// //   ] = useState(true);

// //   const [
// //     formData,
// //     setFormData
// //   ] = useState({
// //     name: "",
// //     description: ""
// //   });

// //   useEffect(() => {

// //     fetchCollection();

// //   }, [id]);

// //   const fetchCollection =
// //     async () => {

// //       try {

// //         const res =
// //           await getCollections();

// //         const collection =
// //           res.data.find(
// //             (c) =>
// //               c.id === id
// //           );

// //         if (!collection) {

// //           navigate(
// //             "/collections"
// //           );

// //           return;
// //         }

// //         setFormData({
// //           name:
// //             collection.name || "",
// //           description:
// //             collection.description || ""
// //         });

// //       } catch (error) {

// //         console.log(error);

// //       } finally {

// //         setLoading(false);
// //       }
// //     };

// //   const handleChange =
// //     (e) => {

// //       setFormData({

// //         ...formData,

// //         [e.target.name]:
// //           e.target.value

// //       });
// //     };

// //   const handleSubmit =
// //     async (e) => {

// //       e.preventDefault();

// //       try {

// //         await updateCollection(
// //           id,
// //           formData
// //         );

// //         toast.success(
// //           "Collection updated successfully"
// //         );

// //         navigate(
// //           `/collections/${id}`
// //         );

// //       } catch (error) {

// //         toast.error(
// //           error.response?.data?.message ||
// //           "Update failed"
// //         );
// //       }
// //     };

// //   if (loading) {

// //     return (
// //       <div>
// //         Loading...
// //       </div>
// //     );
// //   }

// //   return (

// //     <div
// //       className="
// //       max-w-4xl
// //       mx-auto
// //       pb-10"
// //     >

// //       <h1
// //         className="
// //         text-4xl
// //         font-bold
// //         mb-8"
// //       >
// //         Edit Collection
// //       </h1>

// //       <form
// //         onSubmit={handleSubmit}
// //         className="
// //         bg-white
// //         border
// //         rounded-3xl
// //         p-8
// //         space-y-6"
// //       >

// //         <div>

// //           <label>
// //             Name
// //           </label>

// //           <input
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             className="
// //             w-full
// //             border
// //             rounded-xl
// //             p-3"
// //           />

// //         </div>

// //         <div>

// //           <label>
// //             Description
// //           </label>

// //           <textarea
// //             rows="5"
// //             name="description"
// //             value={
// //               formData.description
// //             }
// //             onChange={
// //               handleChange
// //             }
// //             className="
// //             w-full
// //             border
// //             rounded-xl
// //             p-3"
// //           />

// //         </div>

// //         <button
// //           type="submit"
// //           className="
// //           bg-purple-600
// //           text-white
// //           px-8
// //           py-3
// //           rounded-xl"
// //         >

// //           Save Changes

// //         </button>

// //       </form>

// //     </div>
// //   );
// // }



// import { useEffect, useState } from "react";

// import {
//   useParams,
//   useNavigate
// } from "react-router-dom";

// import toast from "react-hot-toast";

// import {
//   getCollections,
//   updateCollection
// } from "../../services/collection.api";

// export default function EditCollection() {
//   const { id } = useParams();

//   const navigate = useNavigate();

//   const [loading, setLoading] =
//     useState(true);

//   const [formData, setFormData] =
//     useState({
//       name: "",
//       description: ""
//     });

//   useEffect(() => {
//     fetchCollection();
//   }, [id]);

//   const fetchCollection =
//     async () => {
//       try {
//         const res =
//           await getCollections();

//         const collection =
//           res.data?.find(
//             (c) =>
//               c.id === id
//           );

//         if (!collection) {
//           navigate(
//             "/collections"
//           );
//           return;
//         }

//         setFormData({
//           name:
//             collection.name || "",
//           description:
//             collection.description ||
//             ""
//         });
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

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
//         await updateCollection(
//           id,
//           formData
//         );

//         toast.success(
//           "Collection updated successfully"
//         );

//         navigate(
//           `/collections/${id}`
//         );
//       } catch (error) {
//         toast.error(
//           error.response?.data
//             ?.message ||
//             "Update failed"
//         );
//       }
//     };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto pb-10">
//       <h1 className="text-4xl font-bold mb-8">
//         Edit Collection
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
//           />
//         </div>

//         <div>
//           <label>Description</label>

//           <textarea
//             rows="5"
//             name="description"
//             value={
//               formData.description
//             }
//             onChange={
//               handleChange
//             }
//             className="w-full border rounded-xl p-3"
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-purple-600 text-white px-8 py-3 rounded-xl"
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
import { getCollections, updateCollection } from "../../services/collection.api.js";

export default function EditCollection() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

  useEffect(() => {
    fetchCollection();
  }, [id]);

  const fetchCollection = async () => {
    try {
      setLoading(true);
      const res = await getCollections();
      const collection = res.data?.find((c) => c.id === id);

      if (!collection) {
        toast.error("Collection workspace not found");
        navigate("/collections");
        return;
      }

      setFormData({
        name: collection.name || "",
        description: collection.description || ""
      });
    } catch (error) {
      console.error("Error patching collection inputs:", error);
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
    if (!formData.name.trim()) return;

    try {
      setSubmitting(true);
      await updateCollection(id, {
        name: formData.name.trim(),
        description: formData.description.trim()
      });

      toast.success("Collection updated successfully");
      navigate(`/collections/${id}`);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Update failed"
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh] text-brownie font-medium">
        <div className="animate-pulse">Loading collection details...</div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pb-12 px-2 sm:px-4 py-8animate-fade-in">
      {/* Header Layout */}
      <div className="mb-6 md:mb-8 px-1 flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-brownie tracking-tight">
            Edit Collection
          </h1>
          <p className="text-sm text-coffee/60 mt-0.5">Modify folder titles or description notes</p>
        </div>
        <button
          type="button"
          onClick={() => navigate(`/collections/${id}`)}
          className="text-xs sm:text-sm font-bold text-caramel hover:text-brownie transition-colors"
        >
          Cancel
        </button>
      </div>

      {/* Form Card Container */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-caramel/10 rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-sm"
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
            className="w-full bg-neutral-50/50 border border-caramel/20 rounded-xl p-3 text-sm text-brownie outline-none transition-all focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/10 resize-none leading-relaxed"
          />
        </div>

        {/* HIGH CONTRAST ACTION BUTTON STRIP */}
        <div className="pt-4 border-t border-caramel/10 flex justify-end">
          <button
            type="submit"
            disabled={submitting || !formData.name.trim()}
            className="w-full sm:w-auto bg-brownie text-white hover:bg-coffee px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.99] shadow-md shadow-brownie/10 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:shadow-none"
          >
            {submitting ? "Saving Changes..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}