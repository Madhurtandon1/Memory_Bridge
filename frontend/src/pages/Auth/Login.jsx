// import { useState } from "react";

// import {
//   useNavigate,
//   Link,
// } from "react-router-dom";

// import {
//   loginUser,
// } from "../../services/auth.api";

// import {
//   useAuth,
// } from "../../context/AuthContext";

// function Login() {

//   const navigate =
//     useNavigate();

//   const { login } =
//     useAuth();

//   const [email, setEmail] =
//     useState("");

//   const [password, setPassword] =
//     useState("");

//   const [error, setError] =
//     useState("");

//   const [loading, setLoading] =
//     useState(false);

//   const handleSubmit =
//     async (e) => {

//       e.preventDefault();

//       setError("");

//       try {

//         setLoading(true);

//         const res =
//           await loginUser({
//             email,
//             password,
//           });

//   login(
//   res.data.user,
//   res.data.accessToken
// );

//         navigate(
//           "/dashboard"
//         );

//       } catch (err) {

//   console.log("FULL ERROR:", err);

//   console.log(
//     "MESSAGE:",
//     err.message
//   );

//   console.log(
//     "RESPONSE:",
//     err.response
//   );

//   console.log(
//     "DATA:",
//     err.response?.data
//   );

//   setError(
//     err.message
//   );
// } finally {

//         setLoading(false);
//       }
//     };

//   return (

//     <div
//       className="
//       min-h-screen
//       flex
//       items-center
//       justify-center
//       bg-slate-950"
//     >

//       <form
//         onSubmit={handleSubmit}
//         className="
//         bg-slate-900
//         p-8
//         rounded-xl
//         w-full
//         max-w-md
//         space-y-4"
//       >

//         <h1
//           className="
//           text-white
//           text-3xl
//           font-bold"
//         >
//           Memory Bridge
//         </h1>

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) =>
//             setEmail(
//               e.target.value
//             )
//           }
//           className="
//           w-full
//           p-3
//           rounded"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) =>
//             setPassword(
//               e.target.value
//             )
//           }
//           className="
//           w-full
//           p-3
//           rounded"
//         />

//         {error && (

//           <p
//             className="
//             text-red-500"
//           >
//             {error}
//           </p>
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           className="
//           w-full
//           bg-blue-600
//           text-white
//           p-3
//           rounded"
//         >

//           {loading
//             ? "Logging in..."
//             : "Login"}

//         </button>

//         <Link
//           to="/register"
//           className="
//           text-blue-400
//           block"
//         >
//           Create Account
//         </Link>

//       </form>

//     </div>
//   );
// }

// export default Login;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Eye, EyeOff, ArrowRight } from "lucide-react";

// import { useAuth } from "../../context/AuthContext";
// import { loginUser } from "../../services/auth.api";

// export default function Login() {

//   const navigate = useNavigate();

//   const { login } = useAuth();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [showPass, setShowPass] =
//     useState(false);

//   const [loading, setLoading] =
//     useState(false);

//   const [error, setError] =
//     useState("");

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     setError("");

//     try {

//       setLoading(true);

//       const res =
//         await loginUser({
//           email: form.email,
//           password: form.password,
//         });

//       login(
//         res.data.user,
//         res.data.accessToken
//       );

//       navigate("/dashboard");

//     } catch (err) {

//       console.log(
//         "LOGIN ERROR:",
//         err
//       );

//       setError(
//         err.response?.data?.message ||
//         "Login failed"
//       );

//     } finally {

//       setLoading(false);
//     }
//   };

//   return (

//     <div className="min-h-screen bg-cream-100 flex">

//       {/* Left Panel */}

//       <div
//         className="
//         hidden
//         lg:flex
//         lg:w-1/2
//         bg-brownie
//         relative
//         overflow-hidden
//         flex-col
//         justify-between
//         p-12"
//       >

//         <div>

//           <div
//             className="
//             flex
//             items-center
//             gap-3
//             mb-16"
//           >

//             <div
//               className="
//               w-10
//               h-10
//               rounded-2xl
//               bg-white/10
//               flex
//               items-center
//               justify-center"
//             >
//               <span className="text-xl">
//                 🪞
//               </span>
//             </div>

//             <span
//               className="
//               font-display
//               text-cream
//               text-xl
//               font-medium"
//             >
//               Memory Bridge
//             </span>

//           </div>

//           <h1
//             className="
//             font-display
//             text-5xl
//             font-semibold
//             text-cream
//             leading-tight
//             mb-6"
//           >
//             Every moment
//             <br />
//             deserves to live
//             <br />
//             <em>forever.</em>
//           </h1>

//           <p
//             className="
//             text-cream/60
//             text-lg
//             leading-relaxed
//             max-w-sm"
//           >
//             Preserve the textures and
//             feelings of your most treasured
//             memories—not just the photos,
//             but the whole story.
//           </p>

//         </div>

//         <div className="space-y-3">

//           {[
//             {
//               emoji: "☀️",
//               title:
//                 "Fireflies on the Back Porch",
//               date: "July 1998",
//             },
//             {
//               emoji: "🌸",
//               title:
//                 "Mom's Apple Cake Recipe",
//               date: "November 2010",
//             },
//             {
//               emoji: "✨",
//               title:
//                 "First 5K Finish Line",
//               date: "April 2019",
//             },
//           ].map((card, i) => (

//             <div
//               key={i}
//               className={`
//               bg-white/10
//               backdrop-blur
//               rounded-2xl
//               px-4
//               py-3
//               flex
//               items-center
//               gap-3
//               border
//               border-white/10
//               ${
//                 i === 1
//                   ? "ml-8"
//                   : i === 2
//                   ? "ml-4"
//                   : ""
//               }
//               `}
//             >

//               <span className="text-2xl">
//                 {card.emoji}
//               </span>

//               <div>

//                 <p
//                   className="
//                   text-cream
//                   text-sm
//                   font-medium"
//                 >
//                   {card.title}
//                 </p>

//                 <p
//                   className="
//                   text-cream/50
//                   text-xs"
//                 >
//                   {card.date}
//                 </p>

//               </div>

//             </div>

//           ))}

//         </div>

//         <div
//           className="
//           absolute
//           -bottom-24
//           -right-24
//           w-64
//           h-64
//           rounded-full
//           bg-caramel/20
//           blur-3xl"
//         />

//       </div>

//       {/* Right Panel */}

//       <div
//         className="
//         flex-1
//         flex
//         items-center
//         justify-center
//         p-8"
//       >

//         <div
//           className="
//           w-full
//           max-w-sm"
//         >

//           <div
//             className="
//             lg:hidden
//             flex
//             items-center
//             gap-2
//             mb-8"
//           >

//             <span className="text-2xl">
//               🪞
//             </span>

//             <span
//               className="
//               font-display
//               text-brownie
//               text-xl
//               font-medium"
//             >
//               Memory Bridge
//             </span>

//           </div>

//           <h2
//             className="
//             font-display
//             text-3xl
//             font-semibold
//             text-brownie
//             mb-2"
//           >
//             Welcome back
//           </h2>

//           <p
//             className="
//             text-coffee/60
//             text-sm
//             mb-8"
//           >
//             Your memories are waiting
//             for you.
//           </p>

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-4"
//           >

//             <div>

//               <label
//                 className="
//                 block
//                 text-sm
//                 font-medium
//                 text-coffee
//                 mb-1.5"
//               >
//                 Email
//               </label>

//               <input
//                 type="email"
//                 required
//                 value={form.email}
//                 onChange={(e) =>
//                   setForm((prev) => ({
//                     ...prev,
//                     email:
//                       e.target.value,
//                   }))
//                 }
//                 placeholder="madhur@gmail.com"
//                 className="input-field"
//               />

//             </div>

//             <div>

//               <label
//                 className="
//                 block
//                 text-sm
//                 font-medium
//                 text-coffee
//                 mb-1.5"
//               >
//                 Password
//               </label>

//               <div className="relative">

//                 <input
//                   type={
//                     showPass
//                       ? "text"
//                       : "password"
//                   }
//                   required
//                   value={form.password}
//                   onChange={(e) =>
//                     setForm((prev) => ({
//                       ...prev,
//                       password:
//                         e.target.value,
//                     }))
//                   }
//                   placeholder="••••••••"
//                   className="
//                   input-field
//                   pr-10"
//                 />

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setShowPass(
//                       !showPass
//                     )
//                   }
//                   className="
//                   absolute
//                   right-3
//                   top-1/2
//                   -translate-y-1/2
//                   text-caramel
//                   hover:text-brownie"
//                 >

//                   {showPass ? (
//                     <EyeOff size={16} />
//                   ) : (
//                     <Eye size={16} />
//                   )}

//                 </button>

//               </div>

//             </div>

//             {error && (

//               <div
//                 className="
//                 text-red-500
//                 text-sm"
//               >
//                 {error}
//               </div>

//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className="
//               w-full
//               btn-primary
//               flex
//               items-center
//               justify-center
//               gap-2
//               disabled:opacity-70"
//             >

//               {loading ? (

//                 <div
//                   className="
//                   w-4
//                   h-4
//                   border-2
//                   border-cream/30
//                   border-t-cream
//                   rounded-full
//                   animate-spin"
//                 />

//               ) : (

//                 <>
//                   Sign in
//                   <ArrowRight size={16} />
//                 </>

//               )}

//             </button>

//           </form>

//           <p
//             className="
//             text-center
//             text-sm
//             text-coffee/60
//             mt-6"
//           >

//             Don't have an account?{" "}

//             <Link
//               to="/register"
//               className="
//               text-brownie
//               font-medium
//               hover:underline"
//             >
//               Create one
//             </Link>

//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }




// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Eye, EyeOff, ArrowRight } from "lucide-react";

// import { useAuth } from "../../context/AuthContext";
// import { loginUser } from "../../services/auth.api";

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [showPass, setShowPass] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       setLoading(true);
//       const res = await loginUser({
//         email: form.email.trim(),
//         password: form.password,
//       });

//       login(res.data.user, res.data.accessToken);
//       navigate("/dashboard");
//     } catch (err) {
//       console.error("LOGIN ERROR:", err);
//       setError(
//         err.response?.data?.message || "Login failed. Please verify credentials."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-cream-100 flex animate-fade-in">
      
//       {/* 1. Left Feature Panel - Locked on Desktops (hidden lg:flex) */}
//       <div className="hidden lg:flex lg:w-1/2 bg-brownie relative overflow-hidden flex-col justify-between p-12 shadow-inner">
        
//         {/* Subtle Decorative Background Glow */}
//         <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-caramel/15 blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
//         <div>
//           {/* Brand Header Label */}
//           <div className="flex items-center gap-3 mb-16">
//             <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/5 shadow-sm">
//               <span className="text-xl">🪞</span>
//             </div>
//             <span className="font-display text-white text-xl font-bold tracking-wide">
//               Memory Bridge
//             </span>
//           </div>

//           {/* Core Vision Headline */}
//           <h1 className="font-display text-4xl xl:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
//             Every moment <br />
//             deserves to live <br />
//             <span className="italic font-normal text-caramel-light">forever.</span>
//           </h1>

//           <p className="max-w-sm text-white/75 text-base xl:text-lg leading-relaxed font-sans">
//             Preserve the textures and feelings of your most treasured memories—not just the photos, but the whole story.
//           </p>
//         </div>

//         {/* Cinematic Preview Cards Stack */}
//         <div className="space-y-3.5 z-10 relative">
//           {[
//             { emoji: "☀️", title: "Fireflies on the Back Porch", date: "July 1998" },
//             { emoji: "🌸", title: "Mom's Apple Cake Recipe", date: "November 2010" },
//             { emoji: "✨", title: "First 5K Finish Line", date: "April 2019" },
//           ].map((card, i) => (
//             <div
//               key={i}
//               className={`
//                 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3.5 flex items-center gap-3.5 border border-white/10 shadow-sm transition-transform duration-300 hover:translate-x-1
//                 ${i === 1 ? "ml-8" : i === 2 ? "ml-4" : ""}
//               `}
//             >
//               <span className="text-2xl select-none">{card.emoji}</span>
//               <div className="min-w-0">
//                 <p className="text-white text-sm font-semibold truncate">{card.title}</p>
//                 <p className="text-white/60 text-xs font-medium mt-0.5">{card.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Ambient Corner Radial Blur Vector Spot */}
//         <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-caramel/20 blur-3xl pointer-events-none" />
//       </div>

//       {/* 2. Right Interactive Form Column Pane Viewport */}
//       <div className="flex-1 flex items-center justify-center p-6 sm:p-12 md:p-16">
//         <div className="w-full max-w-sm space-y-6">
          
//           {/* Adaptive Brand Title Header for Mobile/Tablets viewports (lg:hidden) */}
//           <div className="lg:hidden flex items-center gap-2.5 mb-8">
//             <span className="text-2xl">🪞</span>
//             <span className="font-display text-brownie text-xl font-bold tracking-wide">
//               Memory Bridge
//             </span>
//           </div>

//           <div>
//             <h2 className="font-display text-3xl font-bold text-brownie tracking-tight">
//               Welcome back
//             </h2>
//             <p className="text-sm font-medium text-coffee/60 mt-1">
//               Your memories are waiting for you inside.
//             </p>
//           </div>

//           {/* Form Node Element Stack */}
//           <form onSubmit={handleSubmit} className="space-y-4">
            
//             {/* Email Field Layout Input Box */}
//             <div>
//               <label className="block text-xs font-bold uppercase tracking-wider text-brownie/80 mb-1.5 pl-0.5">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 required
//                 value={form.email}
//                 onChange={(e) =>
//                   setForm((prev) => ({
//                     ...prev,
//                     email: e.target.value,
//                   }))
//                 }
//                 placeholder="madhur@gmail.com"
//                 className="w-full bg-white border border-caramel/20 rounded-xl px-4 py-3 text-sm text-brownie placeholder:text-brownie/30 outline-none transition-all focus:border-caramel focus:ring-2 focus:ring-caramel/10"
//               />
//             </div>

//             {/* Password Field Layout Input Box */}
//             <div>
//               <label className="block text-xs font-bold uppercase tracking-wider text-brownie/80 mb-1.5 pl-0.5">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPass ? "text" : "password"}
//                   required
//                   value={form.password}
//                   onChange={(e) =>
//                     setForm((prev) => ({
//                       ...prev,
//                       password: e.target.value,
//                     }))
//                   }
//                   placeholder="••••••••"
//                   className="w-full bg-white border border-caramel/20 rounded-xl pl-4 pr-11 py-3 text-sm text-brownie placeholder:text-brownie/30 outline-none transition-all focus:border-caramel focus:ring-2 focus:ring-caramel/10"
//                 />
                
//                 {/* Reveal Text Password Visibility Toggle button */}
//                 <button
//                   type="button"
//                   onClick={() => setShowPass(!showPass)}
//                   className="absolute right-3.5 top-1/2 -translate-y-1/2 text-caramel/70 hover:text-brownie p-1 rounded-md transition-colors"
//                   aria-label="Toggle Password Visibility"
//                 >
//                   {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
//                 </button>
//               </div>
//             </div>

//             {/* Error Notification Alert Segment Box */}
//             {error && (
//               <div className="text-red-600 bg-red-50 border border-red-200/50 px-3 py-2 rounded-xl text-xs font-medium animate-shake">
//                 ⚠️ {error}
//               </div>
//             )}

//             {/* Submitting Actions Button Anchor with Contrast Controls */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-brownie text-white hover:bg-coffee px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.99] shadow-md shadow-brownie/10 flex items-center justify-center gap-2 disabled:bg-neutral-300 disabled:text-neutral-500 disabled:shadow-none disabled:scale-100"
//             >
//               {loading ? (
//                 <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//               ) : (
//                 <>
//                   <span>Sign in</span>
//                   <ArrowRight size={15} />
//                 </>
//               )}
//             </button>
//           </form>

//           {/* Redirection Links Block Footer Anchor */}
//           <p className="text-center text-sm text-coffee/70 pt-2 font-sans">
//             Don't have an account?{" "}
//             <Link
//               to="/register"
//               className="text-brownie font-bold hover:underline transition-all"
//             >
//               Create one
//             </Link>
//           </p>

//         </div>
//       </div>

//     </div>
//   );
// }


//best noew
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { 
//   BookOpen, 
//   FolderHeart, 
//   Sparkles, 
//   Clock, 
//   BrainCircuit, 
//   ShieldCheck,
//   ArrowRight,
//   Eye,
//   EyeOff
// } from "lucide-react";

// import { useAuth } from "../../context/AuthContext";
// import { loginUser } from "../../services/auth.api";

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   // Form States
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [showPass, setShowPass] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       setLoading(true);
//       const res = await loginUser({
//         email: form.email.trim(),
//         password: form.password,
//       });

//       login(res.data.user, res.data.accessToken);
//       navigate("/dashboard");
//     } catch (err) {
//       console.error("LOGIN ERROR:", err);
//       setError(err.response?.data?.message || "Login failed. Please check your credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const coreFeatures = [
//     { icon: BookOpen, title: "Capture Moments", desc: "Preserve written notes, personal reflections, and audio voice diaries seamlessly." },
//     { icon: FolderHeart, title: "Organize Collections", desc: "Group related logs together under tailored anchors like Childhood, Travel, or Family Stories." },
//     { icon: BrainCircuit, title: "AI Memory Extraction", desc: "Let AI automatically isolate key insights, emotions, and people from raw inputs." },
//     { icon: Clock, title: "Interactive Timeline", desc: "Explore your growth and life milestones through a beautifully mapped chronological line." },
//     { icon: Sparkles, title: "AI Story Generation", desc: "Synthesize scattered individual entries into integrated emotional narratives worth keeping." },
//     { icon: ShieldCheck, title: "Secure Legacy Archive", desc: "Build a lifetime vault of your journey, safely preserved for generations to come." }
//   ];

//   return (
//     /* 
//       FIXED HIGHEST PRIORITY Z-INDEX & BG CONTRAST:
//       - Force 'z-50' on the main outer wrapper to physically push the entire landing page 
//         ABOVE the ghost translucent layer that's stuck on your screen.
//       - Enforced 'bg-[#1A110B]' (an intense dark brownie tone) to make the text contrast completely unmissable.
//     */
//     <div className="relative z-50 min-h-screen bg-[#1A110B] text-white flex flex-col justify-between overflow-x-hidden antialiased font-sans">
      
//       {/* 1. Global Navigation Bar */}
//       <nav className="max-w-7xl w-full mx-auto px-6 h-20 flex items-center justify-between border-b border-white/10 bg-[#1A110B]/95 backdrop-blur-md sticky top-0 z-50">
//         <div className="flex items-center gap-2.5">
//           <div className="w-9 h-9 rounded-xl bg-[#C08552] flex items-center justify-center shadow-md">
//             <span className="text-lg select-none">🪞</span>
//           </div>
//           <span className="font-display font-bold text-xl text-white tracking-wide">
//             Memory Bridge
//           </span>
//         </div>

//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => document.getElementById("login-card-section").scrollIntoView({ behavior: "smooth" })}
//             className="bg-[#C08552] text-white hover:bg-[#A06D3B] px-5 py-2 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
//           >
//             Sign In
//           </button>
//         </div>
//       </nav>

//       {/* 2. Main High-Contrast Hero & Form Body Panel */}
//       <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-24 sm:space-y-32">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[calc(100vh-220px)]">
          
//           {/* Left Text Column Block */}
//           <div className="flex-1 space-y-6 text-center lg:text-left">
//             <div className="inline-flex items-center gap-2 bg-[#C08552]/20 border border-[#C08552]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#C08552]">
//               ✨ Your Personal AI Memory Companion
//             </div>
            
//             <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-black text-white leading-tight tracking-tight">
//               Every moment <br className="hidden sm:block" />
//               deserves to live <br />
//               <span className="italic font-serif font-normal text-[#C08552]">forever.</span>
//             </h1>

//             <p className="max-w-xl mx-auto lg:mx-0 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
//               Memory Bridge is an AI-powered platform designed to convert text entries, voice recordings, and conversations into an intelligent, searchable digital legacy archive.
//             </p>
//           </div>

//           {/* Right Column: Crisp, High-Contrast Login Card Section */}
//           <div id="login-card-section" className="w-full max-w-md flex-shrink-0 relative scroll-mt-24">
//             <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-[#C08552]/20 text-[#2B1B10]">
//               <div>
//                 <h3 className="font-display text-2xl font-bold text-[#2B1B10] tracking-tight">
//                   Welcome back
//                 </h3>
//                 <p className="text-sm font-medium text-neutral-500 mt-1">
//                   Enter your credentials to enter your memory vaults.
//                 </p>
//               </div>

//               {/* Login Action Form */}
//               <form onSubmit={handleLoginSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1B10]/80 mb-1.5 pl-0.5">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={form.email}
//                     onChange={handleInputChange}
//                     placeholder="madhur@gmail.com"
//                     className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-[#2B1B10] placeholder:text-neutral-400 outline-none transition-all focus:border-[#C08552] focus:bg-white focus:ring-2 focus:ring-[#C08552]/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1B10]/80 mb-1.5 pl-0.5">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={showPass ? "text" : "password"}
//                       name="password"
//                       required
//                       value={form.password}
//                       onChange={handleInputChange}
//                       placeholder="••••••••"
//                       className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-4 pr-11 py-3 text-sm text-[#2B1B10] placeholder:text-neutral-400 outline-none transition-all focus:border-[#C08552] focus:bg-white focus:ring-2 focus:ring-[#C08552]/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPass(!showPass)}
//                       className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-[#2B1B10] p-1 rounded-md transition-colors"
//                     >
//                       {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="text-red-600 bg-red-50 border border-red-100 px-3 py-2 rounded-xl text-xs font-medium">
//                     ⚠️ {error}
//                   </div>
//                 )}

//                 {/* Main Submit Action Button */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-[#2B1B10] text-white hover:bg-[#422A19] px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.99] shadow-md flex items-center justify-center gap-2 disabled:bg-neutral-200 disabled:text-neutral-400"
//                 >
//                   {loading ? (
//                     <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                   ) : (
//                     <>
//                       <span>Sign in to Dashboard</span>
//                       <ArrowRight size={15} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <p className="text-center text-sm text-neutral-600 pt-1 font-sans">
//                 Don't have an account?{" "}
//                 <Link to="/register" className="text-[#C08552] font-bold hover:underline">
//                   Create one here
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* 3. Features Showcase Grid Section */}
//         <section className="space-y-12 pt-4">
//           <div className="text-center max-w-xl mx-auto space-y-2">
//             <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
//               What Can You Do With Memory Bridge?
//             </h3>
//             <div className="w-24 h-0.5 bg-[#C08552]/40 mx-auto rounded" />
//             <p className="text-sm text-neutral-300 leading-relaxed font-sans">
//               Transforming scattered text entries and voice recording files into intelligent structured archives.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {coreFeatures.map((feat, i) => {
//               const Icon = feat.icon;
//               return (
//                 <div
//                   key={i}
//                   className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:border-[#C08552]/60 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-start space-y-3"
//                 >
//                   <div className="w-10 h-10 rounded-xl bg-[#C08552]/20 text-[#C08552] flex items-center justify-center transition-colors group-hover:bg-[#C08552] group-hover:text-white flex-shrink-0">
//                     <Icon size={18} />
//                   </div>
//                   <div className="space-y-1">
//                     <h4 className="text-base font-bold text-white tracking-wide">{feat.title}</h4>
//                     <p className="text-sm text-neutral-300 leading-relaxed font-sans">{feat.desc}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       </main>

//       {/* 4. Footer Area */}
//       <footer className="w-full border-t border-white/10 bg-[#1A110B] py-6 text-center text-xs font-medium text-white/40">
//         <p>© 2026 Memory Bridge AI Platform. Keeping stories alive for generations.</p>
//       </footer>

//     </div>
//   );
// }




// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { 
//   ArrowRight,
//   Eye,
//   EyeOff,
//   PenTool,
//   Mic,
//   Brain,
//   Sparkles,
//   Heart
// } from "lucide-react";

// import { useAuth } from "../../context/AuthContext";
// import { loginUser } from "../../services/auth.api";

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   // Form States
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [showPass, setShowPass] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       setLoading(true);
//       const res = await loginUser({
//         email: form.email.trim(),
//         password: form.password,
//       });

//       login(res.data.user, res.data.accessToken);
//       navigate("/dashboard");
//     } catch (err) {
//       console.error("LOGIN ERROR:", err);
//       setError(err.response?.data?.message || "Invalid email or password.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-brownie text-cream flex flex-col justify-between antialiased font-sans selection:bg-caramel selection:text-white">
      
//       {/* 1. HEADER: Memory Bridge Left | Navigation Right */}
//       <nav className="w-full max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between border-b border-white/5 sticky top-0 bg-brownie/90 backdrop-blur-md z-50">
//         <div>
//           <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
//             Memory Bridge
//           </span>
//         </div>

//         <div className="flex items-center gap-6">
//           <button
//             onClick={() => navigate("/register")}
//             className="text-sm font-semibold text-cream/80 hover:text-white transition-colors"
//           >
//             Register
//           </button>
//           <button
//             onClick={() => document.getElementById("login-input").focus()}
//             className="bg-caramel text-white hover:bg-caramel/90 px-4 py-2 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98]"
//           >
//             Sign In
//           </button>
//         </div>
//       </nav>

//       {/* 2. MAIN CONTAINER: Split Hero Segment (Screen-Adaptive Leveling) */}
//       <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-10 lg:space-y-32">
        
//         {/* Desktop: Same Level Row | Mobile: Stacking Column (Description top, Login below) */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
//           {/* Human-Centric Description Column */}
//           <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
//             <div className="inline-flex items-center gap-2 bg-caramel/10 border border-caramel/20 px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider text-caramel">
//               ✨ Beyond Digital Archiving
//             </div>
            
//             <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-bold text-white leading-tight tracking-tight">
//               Every moment <br />
//               deserves to live <br />
//               <span className="italic font-serif font-normal text-caramel">forever.</span>
//             </h1>

//             <p className="max-w-xl mx-auto lg:mx-0 text-cream/90 text-base sm:text-lg leading-relaxed font-sans">
//               Most memories fade over time. Photos get lost in camera rolls, small details are forgotten, and important life experiences simply drift away. 
//             </p>
            
//             <p className="max-w-xl mx-auto lg:mx-0 text-cream/75 text-sm sm:text-base leading-relaxed font-sans">
//               Memory Bridge is built to prevent that. It functions as a secure digital vault for your life story, taking raw reflections and voice logs and connecting them into an interactive, deeply personal chronological history. It preserves not just what happened, but exactly how it felt.
//             </p>
//           </div>

//           {/* High-Contrast Interactive Login Form Box */}
//           <div className="lg:col-span-5 w-full max-w-md mx-auto relative">
//             <div className="bg-cream rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-caramel/20 text-brownie">
//               <div>
//                 <h3 className="font-display text-2xl font-bold text-brownie tracking-tight">
//                   Welcome back
//                 </h3>
//                 <p className="text-xs sm:text-sm font-medium text-coffee/80 mt-1">
//                   Enter your credentials to access your memory vaults.
//                 </p>
//               </div>

//               <form onSubmit={handleLoginSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-brownie/70 mb-1.5 pl-0.5">
//                     Email Address
//                   </label>
//                   <input
//                     id="login-input"
//                     type="email"
//                     name="email"
//                     required
//                     value={form.email}
//                     onChange={handleInputChange}
//                     placeholder="madhur@gmail.com"
//                     className="w-full bg-white/70 border border-caramel/30 rounded-xl px-4 py-3 text-sm text-brownie placeholder:text-coffee/40 outline-none transition-all focus:border-brownie focus:bg-white focus:ring-2 focus:ring-brownie/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-brownie/70 mb-1.5 pl-0.5">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={showPass ? "text" : "password"}
//                       name="password"
//                       required
//                       value={form.password}
//                       onChange={handleInputChange}
//                       placeholder="••••••••"
//                       className="w-full bg-white/70 border border-caramel/30 rounded-xl pl-4 pr-11 py-3 text-sm text-brownie placeholder:text-coffee/40 outline-none transition-all focus:border-brownie focus:bg-white focus:ring-2 focus:ring-brownie/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPass(!showPass)}
//                       className="absolute right-3.5 top-1/2 -translate-y-1/2 text-coffee/60 hover:text-brownie p-1 rounded-md transition-colors"
//                     >
//                       {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="text-red-700 bg-red-50 border border-red-200/40 px-3 py-2 rounded-xl text-xs font-medium">
//                     ⚠️ {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-brownie text-white hover:bg-coffee px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.99] shadow-md flex items-center justify-center gap-2 disabled:bg-coffee/30 disabled:text-coffee/50"
//                 >
//                   {loading ? (
//                     <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                   ) : (
//                     <>
//                       <span>Sign in to Dashboard</span>
//                       <ArrowRight size={15} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <p className="text-center text-xs sm:text-sm text-coffee/80 pt-1 font-sans">
//                 Don't have an account?{" "}
//                 <Link to="/register" className="text-caramel font-bold hover:underline">
//                   Create one here
//                 </Link>
//               </p>
//             </div>
//           </div>

//         </div>

//         {/* 3. CINEMATIC WORKFLOW: Emotional Aspect & Minimum Text Processing Stream */}
//         <section className="space-y-16 pt-12 border-t border-white/5">
//           <div className="text-center max-w-xl mx-auto space-y-3">
//             <div className="mx-auto w-10 h-10 rounded-full bg-caramel/10 flex items-center justify-center text-caramel">
//               <Heart size={18} fill="currentColor" />
//             </div>
//             <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
//               How Your Stories Breathe
//             </h2>
//             <p className="text-sm sm:text-base text-cream/60 leading-relaxed font-sans">
//               A minimalist look at the deep architecture transforming scattered fragments into timeless memory legacy.
//             </p>
//           </div>

//           {/* Flow Steps Layout Block */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
//             {/* Step 1 */}
//             <div className="space-y-4 relative group">
//               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300">
//                 <PenTool size={20} />
//               </div>
//               <div className="space-y-1.5">
//                 <span className="text-[11px] font-bold tracking-wider text-caramel uppercase">01 / Capture</span>
//                 <h4 className="text-base font-bold text-white">Log the Sentiment</h4>
//                 <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
//                   Write unstructured notes, personal reflections, or record raw audio diaries right as they unfold.
//                 </p>
//               </div>
//             </div>

//             {/* Step 2 */}
//             <div className="space-y-4 relative group">
//               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300">
//                 <Mic size={20} />
//               </div>
//               <div className="space-y-1.5">
//                 <span className="text-[11px] font-bold tracking-wider text-caramel uppercase">02 / Extract</span>
//                 <h4 className="text-base font-bold text-white">Isolate Context</h4>
//                 <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
//                   Our intelligence engine processes the language context to map people, key events, and underlying emotional patterns automatically.
//                 </p>
//               </div>
//             </div>

//             {/* Step 3 */}
//             <div className="space-y-4 relative group">
//               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300">
//                 <Brain size={20} />
//               </div>
//               <div className="space-y-1.5">
//                 <span className="text-[11px] font-bold tracking-wider text-caramel uppercase">03 / Synthesize</span>
//                 <h4 className="text-base font-bold text-white">Weave Narratives</h4>
//                 <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
//                   Isolated entry fragments align into coherent, fluid life summaries, timelines, and searchable legacy logs.
//                 </p>
//               </div>
//             </div>

//             {/* Step 4 */}
//             <div className="space-y-4 relative group">
//               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300">
//                 <Sparkles size={20} />
//               </div>
//               <div className="space-y-1.5">
//                 <span className="text-[11px] font-bold tracking-wider text-caramel uppercase">04 / Revisit</span>
//                 <h4 className="text-base font-bold text-white">Conversational Search</h4>
//                 <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
//                   Talk directly with your memory assistant. Instantly bring up forgotten fragments through clean, natural conversations.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </section>

//       </main>

//       {/* 4. FOOTER: Privacy Information & Legal Links Row */}
//       <footer className="w-full border-t border-white/5 bg-[#140C08] py-8 mt-12">
//         <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-cream/40">
//           <p>© 2026 Memory Bridge Platform. Built to preserve meaningful histories.</p>
          
//           <div className="flex items-center gap-6">
//             <a href="#privacy" className="hover:text-cream transition-colors">Privacy Policy</a>
//             <a href="#terms" className="hover:text-cream transition-colors">Terms of Service</a>
//             <a href="#security" className="hover:text-cream transition-colors">Data Security Vault</a>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { 
//   ArrowRight,
//   Eye,
//   EyeOff,
//   PenTool,
//   Mic,
//   Brain,
//   Sparkles,
//   Heart
// } from "lucide-react";

// import { useAuth } from "../../context/AuthContext";
// import { loginUser } from "../../services/auth.api";

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   // Form States
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [showPass, setShowPass] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       setLoading(true);
//       const res = await loginUser({
//         email: form.email.trim(),
//         password: form.password,
//       });

//       login(res.data.user, res.data.accessToken);
//       navigate("/dashboard");
//     } catch (err) {
//       console.error("LOGIN ERROR:", err);
//       setError(err.response?.data?.message || "Invalid email or password.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-brownie text-cream flex flex-col justify-between antialiased font-sans selection:bg-caramel selection:text-white">
      
//       {/* 1. HEADER */}
//       <nav className="w-full max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between border-b border-white/5 sticky top-0 bg-brownie/90 backdrop-blur-md z-50">
//         <div>
//           <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
//             Memory Bridge
//           </span>
//         </div>

//         <div className="flex items-center gap-4 sm:gap-6">
//           <button
//             onClick={() => navigate("/register")}
//             className="text-sm font-semibold text-cream/80 hover:text-white transition-colors"
//           >
//             Register
//           </button>
//           <button
//             onClick={() => document.getElementById("login-input").focus()}
//             className="bg-caramel text-white hover:bg-caramel/90 px-4 py-2 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98]"
//           >
//             Sign In
//           </button>
//         </div>
//       </nav>

//       {/* 
//         2. RESPONSIVE CONTAINER:
//         - Swapped 'space-y-32' to a fluid 'space-y-14 lg:space-y-32' layout reset.
//         - This compresses empty voids on mobile devices while keeping spacious desktop layouts.
//       */}
//       <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-14 lg:space-y-32">
        
//         {/* Split Hero Segment (Screen-Adaptive Leveling) */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
//           {/* Human-Centric Description Column */}
//           <div className="lg:col-span-7 space-y-4 lg:space-y-6 text-center lg:text-left">
//             <div className="inline-flex items-center gap-2 bg-caramel/10 border border-caramel/20 px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider text-caramel">
//               ✨ Beyond Digital Archiving
//             </div>
            
//             <h1 className="text-3xl sm:text-5xl xl:text-6xl font-display font-bold text-white leading-tight tracking-tight">
//               Every moment <br />
//               deserves to live <br />
//               <span className="italic font-serif font-normal text-caramel">forever.</span>
//             </h1>

//             <p className="max-w-xl mx-auto lg:mx-0 text-cream/90 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
//               Most memories fade over time. Photos get lost in camera rolls, small details are forgotten, and important life experiences simply drift away. 
//             </p>
            
//             <p className="max-w-xl mx-auto lg:mx-0 text-cream/75 text-xs sm:text-sm md:text-base leading-relaxed font-sans hidden sm:block">
//               Memory Bridge is built to prevent that. It functions as a secure digital vault for your life story, taking raw reflections and voice logs and connecting them into an interactive, deeply personal chronological history. It preserves not just what happened, but exactly how it felt.
//             </p>
//           </div>

//           {/* High-Contrast Interactive Login Form Box */}
//           <div className="lg:col-span-5 w-full max-w-md mx-auto relative mt-2 lg:mt-0">
//             <div className="bg-cream rounded-3xl p-6 sm:p-8 space-y-5 sm:space-y-6 shadow-2xl border border-caramel/20 text-brownie">
//               <div>
//                 <h3 className="font-display text-xl sm:text-2xl font-bold text-brownie tracking-tight">
//                   Welcome back
//                 </h3>
//                 <p className="text-xs sm:text-sm font-medium text-coffee/80 mt-1">
//                   Enter your credentials to access your memory vaults.
//                 </p>
//               </div>

//               <form onSubmit={handleLoginSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-[11px] font-bold uppercase tracking-wider text-brownie/70 mb-1.5 pl-0.5">
//                     Email Address
//                   </label>
//                   <input
//                     id="login-input"
//                     type="email"
//                     name="email"
//                     required
//                     value={form.email}
//                     onChange={handleInputChange}
//                     placeholder="madhur@gmail.com"
//                     className="w-full bg-white/70 border border-caramel/30 rounded-xl px-4 py-3 text-sm text-brownie placeholder:text-coffee/40 outline-none transition-all focus:border-brownie focus:bg-white focus:ring-2 focus:ring-brownie/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-[11px] font-bold uppercase tracking-wider text-brownie/70 mb-1.5 pl-0.5">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={showPass ? "text" : "password"}
//                       name="password"
//                       required
//                       value={form.password}
//                       onChange={handleInputChange}
//                       placeholder="••••••••"
//                       className="w-full bg-white/70 border border-caramel/30 rounded-xl pl-4 pr-11 py-3 text-sm text-brownie placeholder:text-coffee/40 outline-none transition-all focus:border-brownie focus:bg-white focus:ring-2 focus:ring-brownie/10"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPass(!showPass)}
//                       className="absolute right-3.5 top-1/2 -translate-y-1/2 text-coffee/60 hover:text-brownie p-1 rounded-md transition-colors"
//                     >
//                       {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="text-red-700 bg-red-50 border border-red-200/40 px-3 py-2 rounded-xl text-xs font-medium">
//                     ⚠️ {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-brownie text-white hover:bg-coffee px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.99] shadow-md flex items-center justify-center gap-2 disabled:bg-coffee/30 disabled:text-coffee/50"
//                 >
//                   {loading ? (
//                     <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                   ) : (
//                     <>
//                       <span>Sign in to Dashboard</span>
//                       <ArrowRight size={15} />
//                     </>
//                   )}
//                 </button>
//               </form>

//               <p className="text-center text-xs sm:text-sm text-coffee/80 pt-1 font-sans">
//                 Don't have an account?{" "}
//                 <Link to="/register" className="text-caramel font-bold hover:underline">
//                   Create one here
//                 </Link>
//               </p>
//             </div>
//           </div>

//         </div>

//         {/* 3. CINEMATIC WORKFLOW: Tighter responsive gap sizing updates */}
//         <section className="space-y-10 lg:space-y-16 pt-10 border-t border-white/5">
//           <div className="text-center max-w-xl mx-auto space-y-3">
//             <div className="mx-auto w-10 h-10 rounded-full bg-caramel/10 flex items-center justify-center text-caramel">
//               <Heart size={18} fill="currentColor" />
//             </div>
//             <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
//               How Your Stories Breathe
//             </h2>
//             <p className="text-xs sm:text-sm text-cream/60 leading-relaxed font-sans">
//               A minimalist look at the deep architecture transforming scattered fragments into timeless memory legacy.
//             </p>
//           </div>

//           {/* Flow Steps Layout Block */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
            
//             {/* Step 1 */}
//             <div className="space-y-3 group">
//               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300">
//                 <PenTool size={20} />
//               </div>
//               <div className="space-y-1">
//                 <span className="text-[10px] font-bold tracking-wider text-caramel uppercase">01 / Capture</span>
//                 <h4 className="text-base font-bold text-white">Log the Sentiment</h4>
//                 <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
//                   Write unstructured notes, personal reflections, or record raw audio diaries right as they unfold.
//                 </p>
//               </div>
//             </div>

//             {/* Step 2 */}
//             <div className="space-y-3 group">
//               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300">
//                 <Mic size={20} />
//               </div>
//               <div className="space-y-1">
//                 <span className="text-[10px] font-bold tracking-wider text-caramel uppercase">02 / Extract</span>
//                 <h4 className="text-base font-bold text-white">Isolate Context</h4>
//                 <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
//                   Our intelligence engine processes the language context to map people, key events, and underlying emotional patterns automatically.
//                 </p>
//               </div>
//             </div>

//             {/* Step 3 */}
//             <div className="space-y-3 group">
//               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300">
//                 <Brain size={20} />
//               </div>
//               <div className="space-y-1">
//                 <span className="text-[10px] font-bold tracking-wider text-caramel uppercase">03 / Synthesize</span>
//                 <h4 className="text-base font-bold text-white">Weave Narratives</h4>
//                 <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
//                   Isolated entry fragments align into coherent, fluid life summaries, timelines, and searchable legacy logs.
//                 </p>
//               </div>
//             </div>

//             {/* Step 4 */}
//             <div className="space-y-3 group">
//               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300">
//                 <Sparkles size={20} />
//               </div>
//               <div className="space-y-1">
//                 <span className="text-[10px] font-bold tracking-wider text-caramel uppercase">04 / Revisit</span>
//                 <h4 className="text-base font-bold text-white">Conversational Search</h4>
//                 <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
//                   Talk directly with your memory assistant. Instantly bring up forgotten fragments through clean, natural conversations.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </section>

//       </main>

//       {/* 4. FOOTER */}
//       <footer className="w-full border-t border-white/5 bg-[#140C08] py-6 sm:py-8 mt-6">
//         <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-cream/40">
//           <p>© 2026 Memory Bridge Platform. Built to preserve meaningful histories.</p>
          
// <div className="flex items-center gap-6">
//   <Link to="/legal#privacy" className="hover:text-cream transition-colors">
//     Privacy Policy
//   </Link>
//   <Link to="/legal#terms" className="hover:text-cream transition-colors">
//     Terms of Service
//   </Link>
//   <Link to="/legal#security" className="hover:text-cream transition-colors">
//     Data Security Vault
//   </Link>
// </div>
//         </div>
//       </footer>

//     </div>
//   );
// }



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowRight,
  Eye,
  EyeOff,
  PenTool,
  Mic,
  Brain,
  Sparkles,
  Heart
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../services/auth.api";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Form States
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const res = await loginUser({
        email: form.email.trim(),
        password: form.password,
      });

      login(res.data.user, res.data.accessToken);
      navigate("/dashboard");
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      setError(err.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brownie text-cream flex flex-col justify-between antialiased font-sans selection:bg-caramel selection:text-white">
      
      {/* 1. HEADER */}
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between border-b border-white/5 sticky top-0 bg-brownie/90 backdrop-blur-md z-50">
        <div>
          <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
            Memory Bridge
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => navigate("/register")}
            className="text-sm font-semibold text-cream/80 hover:text-white transition-colors"
          >
            Register
          </button>
          <button
            onClick={() => document.getElementById("login-input").focus()}
            className="bg-caramel text-white hover:bg-caramel/90 px-4 py-2 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98]"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* 2. RESPONSIVE CONTAINER */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-14 lg:space-y-32">
        
        {/* Split Hero Segment (Screen-Adaptive Leveling) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Human-Centric Description Column */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-caramel/10 border border-caramel/20 px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider text-caramel">
              ✨ Beyond Digital Archiving
            </div>
            
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-display font-bold text-white leading-tight tracking-tight">
              Every moment <br />
              deserves to live <br />
              <span className="italic font-serif font-normal text-caramel">forever.</span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-cream/90 text-sm sm:text-base md:text-lg leading-relaxed font-sans">
              Most memories fade over time. Photos get lost in camera rolls, small details are forgotten, and important life experiences simply drift away. 
            </p>
            
            <p className="max-w-xl mx-auto lg:mx-0 text-cream/75 text-xs sm:text-sm md:text-base leading-relaxed font-sans hidden sm:block">
              Memory Bridge is built to prevent that. It functions as a secure digital vault for your life story, taking raw reflections and voice logs and connecting them into an interactive, deeply personal chronological history. It preserves not just what happened, but exactly how it felt.
            </p>
          </div>

          {/* High-Contrast Interactive Login Form Box */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto relative mt-2 lg:mt-0">
            <div className="bg-cream rounded-3xl p-6 sm:p-8 space-y-5 sm:space-y-6 shadow-2xl border border-caramel/20 text-brownie">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-brownie tracking-tight">
                  Welcome back
                </h3>
                <p className="text-xs sm:text-sm font-medium text-coffee/80 mt-1">
                  Enter your credentials to access your memory vaults.
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-brownie/70 mb-1.5 pl-0.5">
                    Email Address
                  </label>
                  <input
                    id="login-input"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="madhur@gmail.com"
                    className="w-full bg-white/70 border border-caramel/30 rounded-xl px-4 py-3 text-sm text-brownie placeholder:text-coffee/40 outline-none transition-all focus:border-brownie focus:bg-white focus:ring-2 focus:ring-brownie/10"
                  />
                </div>

                <div>
                  {/* FIXED FORGOT PASSWORD ANCHOR INSERTION:
                    - Replaced simple tracking string with explicit layout spacing wrapper.
                    - Positioned high-contrast anchor label inline on right canvas boundary.
                  */}
                  <div className="flex items-center justify-between mb-1.5 pl-0.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-brownie/70">
                      Password
                    </label>
                    <Link 
                      to="/forgot-password" 
                      className="text-xs font-bold text-caramel hover:underline transition-colors"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      required
                      value={form.password}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className="w-full bg-white/70 border border-caramel/30 rounded-xl pl-4 pr-11 py-3 text-sm text-brownie placeholder:text-coffee/40 outline-none transition-all focus:border-brownie focus:bg-white focus:ring-2 focus:ring-brownie/10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-coffee/60 hover:text-brownie p-1 rounded-md transition-colors"
                    >
                      {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="text-red-700 bg-red-50 border border-red-200/40 px-3 py-2 rounded-xl text-xs font-medium">
                    ⚠️ {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brownie text-white hover:bg-coffee px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.99] shadow-md flex items-center justify-center gap-2 disabled:bg-coffee/30 disabled:text-coffee/50"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Sign in to Dashboard</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </form>

              <p className="text-center text-xs sm:text-sm text-coffee/80 pt-1 font-sans">
                Don't have an account?{" "}
                <Link to="/register" className="text-caramel font-bold hover:underline">
                  Create one here
                </Link>
              </p>
            </div>
          </div>

        </div>

        {/* 3. CINEMATIC WORKFLOW */}
        <section className="space-y-10 lg:space-y-16 pt-10 border-t border-white/5">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div className="mx-auto w-10 h-10 rounded-full bg-caramel/10 flex items-center justify-center text-caramel">
              <Heart size={18} fill="currentColor" />
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              How Your Stories Breathe
            </h2>
            <p className="text-xs sm:text-sm text-cream/60 leading-relaxed font-sans">
              A minimalist look at the deep architecture transforming scattered fragments into timeless memory legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300">
                <PenTool size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-caramel uppercase">01 / Capture</span>
                <h4 className="text-base font-bold text-white">Log the Sentiment</h4>
                <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                  Write unstructured notes, personal reflections, or record raw audio diaries right as they unfold.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300">
                <Mic size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-caramel uppercase">02 / Extract</span>
                <h4 className="text-base font-bold text-white">Isolate Context</h4>
                <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                  Our intelligence engine processes the language context to map people, key events, and underlying emotional patterns automatically.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300">
                <Brain size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-caramel uppercase">03 / Synthesize</span>
                <h4 className="text-base font-bold text-white">Weave Narratives</h4>
                <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                  Isolated entry fragments align into coherent, fluid life summaries, timelines, and searchable legacy logs.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-caramel group-hover:bg-caramel group-hover:text-white transition-all duration-300">
                <Sparkles size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-caramel uppercase">04 / Revisit</span>
                <h4 className="text-base font-bold text-white">Conversational Search</h4>
                <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                  Talk directly with your memory assistant. Instantly bring up forgotten fragments through clean, natural conversations.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 4. FOOTER */}
      <footer className="w-full border-t border-white/5 bg-[#140C08] py-6 sm:py-8 mt-6">
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-cream/40">
          <p>© 2026 Memory Bridge Platform. Built to preserve meaningful histories.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/legal#privacy" className="hover:text-cream transition-colors">
              Privacy Policy
            </Link>
            <Link to="/legal#terms" className="hover:text-cream transition-colors">
              Terms of Service
            </Link>
            <Link to="/legal#security" className="hover:text-cream transition-colors">
              Data Security Vault
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}