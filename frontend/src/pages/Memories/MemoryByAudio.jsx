// import {
//   useState,
//   useEffect
// } from "react";

// import axios from "axios";

// import {
//   Upload,
//   Mic,
//   CheckCircle
// } from "lucide-react";

// import {
//   getCollections
// } from "../../services/collection.api";

// export default function UploadMemory() {

//   const [file, setFile] =
//     useState(null);

//   const [loading, setLoading] =
//     useState(false);

//   const [result, setResult] =
//     useState(null);

//   const [collections, setCollections] =
//     useState([]);

//   const [collectionId, setCollectionId] =
//     useState("");

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

//   const handleUpload =
//     async () => {

//       if (!collectionId) {

//         alert(
//           "Please select a collection"
//         );

//         return;
//       }

//       if (!file) {

//         alert(
//           "Please select an audio file"
//         );

//         return;
//       }

//       try {

//         setLoading(true);

//         const formData =
//           new FormData();

//         formData.append(
//           "audio",
//           file
//         );

//         formData.append(
//           "collectionId",
//           collectionId
//         );

//         const token =
//           localStorage.getItem(
//             "accessToken"
//           );

//         const res =
//           await axios.post(
//             "http://localhost:5000/api/v1/memories/audio",
//             formData,
//             {
//               headers: {
//                 Authorization:
//                   `Bearer ${token}`
//               }
//             }
//           );

//         console.log(
//           "UPLOAD RESPONSE:",
//           res.data
//         );

//         setResult(
//           res.data.data
//         );

//         alert(
//           "Memory created successfully!"
//         );

//       } catch (error) {

//         console.log(
//           "UPLOAD ERROR:",
//           error
//         );

//         console.log(
//           error.response?.data
//         );

//         alert(
//           error.response?.data?.message ||
//           "Upload failed"
//         );

//       } finally {

//         setLoading(false);
//       }
//     };

//   return (

//     <div
//       className="
//       max-w-5xl
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
//           Upload Audio Memory
//         </h1>

//         <p
//           className="
//           text-gray-500
//           mt-2"
//         >
//           Upload an audio recording and let AI create memories automatically.
//         </p>

//       </div>

//       <div
//         className="
//         bg-white
//         rounded-3xl
//         border
//         border-gray-200
//         p-10"
//       >

//         <div
//           className="
//           flex
//           flex-col
//           items-center
//           text-center"
//         >

//           <div
//             className="
//             w-20
//             h-20
//             rounded-full
//             bg-purple-100
//             flex
//             items-center
//             justify-center
//             mb-6"
//           >

//             <Mic
//               size={40}
//               className="
//               text-purple-600"
//             />

//           </div>

//           <h2
//             className="
//             text-2xl
//             font-semibold
//             mb-2"
//           >
//             Upload Audio
//           </h2>

//           <p
//             className="
//             text-gray-500
//             mb-6"
//           >
//             Select a collection and upload an audio file.
//           </p>

//           <select
//             value={collectionId}
//             onChange={(e) =>
//               setCollectionId(
//                 e.target.value
//               )
//             }
//             className="
//             border
//             border-gray-300
//             rounded-xl
//             p-3
//             mb-6
//             w-full
//             max-w-md"
//           >

//             <option value="">
//               Select Collection
//             </option>

//             {collections.map(
//               (collection) => (

//                 <option
//                   key={
//                     collection.id
//                   }
//                   value={
//                     collection.id
//                   }
//                 >

//                   {
//                     collection.name
//                   }

//                 </option>

//               )
//             )}

//           </select>

//           <input
//             type="file"
//             accept="
//             .mp3,
//             .wav,
//             .m4a,
//             .aac,
//             .3gp,
//             .mp4
//             "
//             onChange={(e) => {

//               const selected =
//                 e.target.files?.[0];

//               console.log(
//                 "FILE:",
//                 selected
//               );

//               setFile(
//                 selected
//               );
//             }}
//             className="
//             mb-4"
//           />

//           {file && (

//             <div
//               className="
//               text-sm
//               text-purple-600
//               mb-4"
//             >

//               Selected:
//               {" "}
//               {file.name}

//             </div>

//           )}

//           <button
//             onClick={
//               handleUpload
//             }
//             disabled={
//               loading
//             }
//             className="
//             bg-purple-600
//             hover:bg-purple-700
//             text-white
//             px-8
//             py-3
//             rounded-xl
//             flex
//             items-center
//             gap-2"
//           >

//             <Upload
//               size={18}
//             />

//             {
//               loading
//                 ? "Processing..."
//                 : "Upload Audio"
//             }

//           </button>

//         </div>

//       </div>

//       {result && (

//         <div
//           className="
//           mt-8
//           bg-green-50
//           border
//           border-green-200
//           rounded-3xl
//           p-8"
//         >

//           <div
//             className="
//             flex
//             items-center
//             gap-3
//             mb-4"
//           >

//             <CheckCircle
//               className="
//               text-green-600"
//             />

//             <h2
//               className="
//               text-2xl
//               font-semibold"
//             >
//               Memory Created
//             </h2>

//           </div>

//           <pre
//             className="
//             whitespace-pre-wrap
//             text-sm"
//           >
//             {JSON.stringify(
//               result,
//               null,
//               2
//             )}
//           </pre>

//         </div>

//       )}

//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Upload, Mic, CheckCircle, FolderHeart, Music } from "lucide-react";
// import { getCollections } from "../../services/collection.api";

// export default function MemoryByAudio() {
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [collections, setCollections] = useState([]);
//   const [collectionId, setCollectionId] = useState("");

//   useEffect(() => {
//     fetchCollections();
//   }, []);

//   const fetchCollections = async () => {
//     try {
//       const res = await getCollections();
//       setCollections(res.data || []);
//     } catch (error) {
//       console.error("COLLECTION FETCH ERROR:", error);
//     }
//   };

//   const handleUpload = async () => {
//     if (!collectionId) {
//       alert("Please select a collection context.");
//       return;
//     }
//     if (!file) {
//       alert("Please choose or record an audio log first.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append("audio", file);
//       formData.append("collectionId", collectionId);

//       const token = localStorage.getItem("accessToken");
      
//       const res = await axios.post(
//         "http://localhost:5000/api/v1/memories/audio",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       console.log("UPLOAD RESPONSE:", res.data);
//       setResult(res.data.data);
//       alert("Memory created successfully!");
//     } catch (error) {
//       console.error("UPLOAD ERROR:", error);
//       alert(error.response?.data?.message || "Audio processing failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto pb-12  py-8 animate-fade-in">
      
//       {/* Page Heading Section */}
//       <div className="mb-8">
//         <h1 className="font-display text-3xl sm:text-4xl font-bold text-brownie tracking-tight">
//           Upload Audio Memory
//         </h1>
//         <p className="text-sm sm:text-base text-coffee/80 mt-1.5 max-w-xl font-sans">
//           Upload an audio recording or voice log, and let the AI companion automatically transcribe and organize the moments that matter.
//         </p>
//       </div>

//       {/* Main Dropzone & Configuration Form Grid Layout */}
//       <div className="bg-white rounded-3xl border border-caramel/10 p-6 sm:p-10 shadow-xl space-y-6">
        
//         {/* Collection Selector Input block */}
//         <div className="max-w-md mx-auto w-full space-y-2">
//           <label className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brownie/80 pl-1">
//             <FolderHeart size={14} className="text-caramel" />
//             <span>Select Archive Target Collection</span>
//           </label>
//           <select
//             value={collectionId}
//             onChange={(e) => setCollectionId(e.target.value)}
//             className="w-full bg-cream/30 border border-caramel/20 rounded-xl p-3.5 text-sm text-brownie outline-none focus:border-caramel focus:ring-2 focus:ring-caramel/10 transition-all cursor-pointer"
//           >
//             <option value="">Choose a folder context...</option>
//             {collections.map((collection) => (
//               <option key={collection.id} value={collection.id}>
//                 {collection.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Tactile Audio File Custom Upload Window Box Panel */}
//         <div className="flex flex-col items-center justify-center text-center">
//           <label 
//             className="w-full max-w-xl border-2 border-dashed border-caramel/20 bg-cream/10 hover:bg-cream/20 hover:border-caramel/40 rounded-2xl p-8 transition-all duration-200 cursor-pointer flex flex-col items-center group relative overflow-hidden"
//           >
//             <input
//               type="file"
//               accept=".mp3,.wav,.m4a,.aac,.3gp,.mp4"
//               onChange={(e) => setFile(e.target.files?.[0] || null)}
//               className="absolute inset-0 opacity-0 cursor-pointer"
//             />
            
//             <div className="w-16 h-16 rounded-2xl bg-caramel/10 text-caramel flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
//               <Mic size={28} />
//             </div>

//             <h3 className="text-base font-bold text-brownie mb-1">
//               Select your Audio Recording
//             </h3>
//             <p className="text-xs text-coffee/70 max-w-xs leading-relaxed font-sans">
//               Click to browse your device files. Supports MP3, WAV, M4A, or AAC audio logs.
//             </p>
//           </label>

//           {/* Render selected audio metadata block strip preview */}
//           {file && (
//             <div className="mt-4 flex items-center gap-2.5 bg-caramel/10 border border-caramel/20 px-4 py-2.5 rounded-xl text-sm font-semibold text-brownie animate-fade-in max-w-md truncate">
//               <Music size={15} className="text-caramel flex-shrink-0" />
//               <span className="truncate">Selected: {file.name}</span>
//             </div>
//           )}

//           {/* Main Action Trigger Submit Button Button wrapper layout execution control */}
//           <div className="pt-6 w-full max-w-xs">
//             <button
//               onClick={handleUpload}
//               disabled={loading}
//               className="w-full bg-brownie text-white hover:bg-coffee px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-md shadow-brownie/10 flex items-center justify-center gap-2.5 transition-all active:scale-[0.99] disabled:bg-neutral-200 disabled:text-neutral-400 disabled:shadow-none"
//             >
//               <Upload size={16} />
//               <span>{loading ? "AI Processing Recording..." : "Upload & Extract Memory"}</span>
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* 3. PREMIUM RESULTS SECTION: Render Structured Response Instead of Blank Raw JSON */}
//       {result && (
//         <div className="mt-8 bg-cream border border-caramel/20 rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in text-brownie shadow-md">
          
//           <div className="flex items-center gap-3 pb-4 border-b border-caramel/10">
//             <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
//               <CheckCircle size={18} />
//             </div>
//             <div>
//               <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
//                 AI Processing Complete
//               </h2>
//               <p className="text-xs text-coffee/80">Memory successfully parsed into your vault logs.</p>
//             </div>
//           </div>

//           {/* Formatted metadata showcase presentation modules */}
//           <div className="space-y-4 font-sans">
//             <div>
//               <h4 className="text-xs font-bold uppercase tracking-wider text-caramel">Transcribed Title Summary</h4>
//               <p className="text-base font-bold text-brownie mt-0.5">
//                 {result.title || "Untitled Memory Snapshot"}
//               </p>
//             </div>

//             {result.transcript && (
//               <div>
//                 <h4 className="text-xs font-bold uppercase tracking-wider text-caramel">Extracted Audio Transcript</h4>
//                 <p className="text-sm text-coffee leading-relaxed mt-1 bg-white/70 border border-caramel/5 rounded-xl p-4 italic">
//                   "{result.transcript}"
//                 </p>
//               </div>
//             )}

//             {/* Render any additional raw processing fields neatly inside a collapsed framework */}
//             <div className="pt-2">
//               <h4 className="text-xs font-bold uppercase tracking-wider text-caramel mb-1.5">Raw Intelligence Payload</h4>
//               <div className="bg-[#2B1B10] text-cream rounded-xl p-4 text-xs font-mono max-h-48 overflow-y-auto overflow-x-hidden shadow-inner leading-relaxed">
//                 <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
//               </div>
//             </div>
//           </div>

//         </div>
//       )}

//     </div>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
import { Upload, Mic, CheckCircle, FolderHeart, Music, AlertCircle, Sparkles, Tag } from "lucide-react";
import { getCollections } from "../../services/collection.api";

export default function MemoryByAudio() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [collections, setCollections] = useState([]);
  const [collectionId, setCollectionId] = useState("");
  
  // Custom state validation banners (Replaces native unpolished window.alert elements)
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setErrorMessageSuccess] = useState(false);

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    try {
      const res = await getCollections();
      setCollections(res.data || []);
    } catch (error) {
      console.error("COLLECTION FETCH ERROR:", error);
    }
  };

  const handleUpload = async () => {
    setErrorMessage("");
    setErrorMessageSuccess(false);

    if (!collectionId) {
      setErrorMessage("Please select an archive collection context target folder first.");
      return;
    }
    if (!file) {
      setErrorMessage("Please choose or drag a valid audio recording file to process.");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("audio", file);
      formData.append("collectionId", collectionId);

      const token = localStorage.getItem("accessToken");
      
      const res = await axios.post(
        "http://localhost:5000/api/v1/memories/audio",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log("UPLOAD RESPONSE:", res.data);
      setResult(res.data.data);
      setErrorMessageSuccess(true);
    } catch (error) {
      console.error("UPLOAD ERROR:", error);
      setErrorMessage(error.response?.data?.message || "Audio processing node failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-12 py-8 animate-fade-in text-brownie">
      
      {/* Page Heading Section */}
      <div className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-brownie tracking-tight">
          Upload Audio Memory
        </h1>
        <p className="text-sm sm:text-base text-coffee/80 mt-1.5 max-w-xl font-sans">
          Upload an audio recording or voice log, and let the AI companion automatically transcribe and organize the moments that matter.
        </p>
      </div>

      {/* Main Dropzone & Configuration Form Grid Layout */}
      <div className="bg-white rounded-3xl border border-caramel/10 p-6 sm:p-10 shadow-xl space-y-6">
        
        {/* PREMIUM INLINE ERROR WARNING DISPLAY */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 flex items-center gap-3 text-sm font-medium font-sans animate-fade-in">
            <AlertCircle size={16} className="text-red-600 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Collection Selector Input block */}
        <div className="max-w-md mx-auto w-full space-y-2">
          <label className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brownie/80 pl-1">
            <FolderHeart size={14} className="text-caramel" />
            <span>Select Archive Target Collection</span>
          </label>
          <select
            value={collectionId}
            onChange={(e) => {
              setCollectionId(e.target.value);
              setErrorMessage("");
            }}
            className="w-full bg-cream/30 border border-caramel/20 rounded-xl p-3.5 text-sm text-brownie outline-none focus:border-caramel focus:ring-2 focus:ring-caramel/10 transition-all cursor-pointer font-sans"
          >
            <option value="">Choose a folder context...</option>
            {collections.map((collection) => (
              <option key={collection.id} value={collection.id}>
                {collection.name}
              </option>
            ))}
          </select>
        </div>

        {/* Tactile Audio File Custom Upload Window Box Panel */}
        <div className="flex flex-col items-center justify-center text-center">
          <label 
            className="w-full max-w-xl border-2 border-dashed border-caramel/20 bg-cream/10 hover:bg-cream/20 hover:border-caramel/40 rounded-2xl p-8 transition-all duration-200 cursor-pointer flex flex-col items-center group relative overflow-hidden"
          >
            <input
              type="file"
              accept=".mp3,.wav,.m4a,.aac,.3gp,.mp4"
              onChange={(e) => {
                setFile(e.target.files?.[0] || null);
                setErrorMessage("");
              }}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            
            <div className="w-16 h-16 rounded-2xl bg-caramel/10 text-caramel flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Mic size={28} />
            </div>

            <h3 className="text-base font-bold text-brownie mb-1">
              Select your Audio Recording
            </h3>
            <p className="text-xs text-coffee/70 max-w-xs leading-relaxed font-sans">
              Click to browse your device files. Supports MP3, WAV, M4A, or AAC audio logs.
            </p>
          </label>

          {/* Render selected audio metadata block strip preview */}
          {file && (
            <div className="mt-4 flex items-center gap-2.5 bg-caramel/10 border border-caramel/20 px-4 py-2.5 rounded-xl text-sm font-semibold text-brownie animate-fade-in max-w-md truncate">
              <Music size={15} className="text-caramel flex-shrink-0" />
              <span className="truncate">Selected: {file.name}</span>
            </div>
          )}

          {/* Main Action Trigger Submit Button */}
          <div className="pt-6 w-full max-w-xs">
            <button
              onClick={handleUpload}
              disabled={loading}
              className="w-full bg-brownie text-white hover:bg-coffee px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-md shadow-brownie/10 flex items-center justify-center gap-2.5 transition-all active:scale-[0.99] disabled:bg-neutral-200 disabled:text-neutral-400 disabled:shadow-none"
            >
              <Upload size={16} />
              <span>{loading ? "AI Synchronizing Records..." : "Upload & Extract Story"}</span>
            </button>
          </div>
        </div>

      </div>

      {/* FIXED RESULTS LAYOUT SECTION: Completely removed raw Postman-style JSON dumps */}
      {result && (
        <div className="mt-8 bg-cream border border-caramel/20 rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-in text-brownie shadow-md">
          
          <div className="flex items-center gap-3 pb-4 border-b border-caramel/10">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
              <CheckCircle size={18} />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                AI Memory Synthesis Complete
              </h2>
              <p className="text-xs text-coffee/70 font-sans mt-0.5">The audio log has been unpacked cleanly into your secure vault.</p>
            </div>
          </div>

          {/* Elegant Readable Story Layout Fields */}
          <div className="space-y-5 font-sans">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-caramel flex items-center gap-1.5 mb-1">
                <Sparkles size={12} />
                <span>Transcribed Title Summary</span>
              </h4>
              <p className="text-base sm:text-lg font-bold text-brownie">
                {result.title || "Untitled Memory Snapshot"}
              </p>
            </div>

            {result.transcript && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-caramel mb-1">Extracted Audio Transcript</h4>
                <div className="text-sm text-coffee leading-relaxed bg-white/80 border border-caramel/10 rounded-xl p-4 italic shadow-inner">
                  "{result.transcript}"
                </div>
              </div>
            )}

            {/* Optional Segment: Clean tag looping mapping grid if returning inside payload arrays */}
            {result.tags && result.tags.length > 0 && (
              <div className="pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-caramel flex items-center gap-1.5 mb-2">
                  <Tag size={12} />
                  <span>Extracted Emotion Vectors</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {result.tags.map((tag) => (
                    <span key={tag} className="bg-brownie/5 border border-caramel/10 text-brownie text-xs px-2.5 py-1 rounded-lg font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
}