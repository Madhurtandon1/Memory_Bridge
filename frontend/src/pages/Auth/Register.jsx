// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ArrowRight, Check } from "lucide-react";

// import { registerUser } from "../../services/auth.api";

// const features = [
//   "Unlimited memory storage",
//   "AI-powered storytelling",
//   "Timeline & Collections",
//   "Memory Chat with AI",
// ];

// export default function Register() {

//   const navigate = useNavigate();

//   const [form, setForm] =
//     useState({
//       name: "",
//       email: "",
//       password: "",
//     });

//   const [loading, setLoading] =
//     useState(false);

//   const [error, setError] =
//     useState("");

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     setError("");

//     try {

//       setLoading(true);

//       await registerUser({
//         name: form.name,
//         email: form.email,
//         password: form.password,
//       });

//       navigate("/login");

//     } catch (err) {

//       setError(
//         err.response?.data?.message ||
//         "Registration failed"
//       );

//     } finally {

//       setLoading(false);
//     }
//   };

//   return (

//     <div className="min-h-screen bg-cream-100 flex">

//       <div
//         className="
//         hidden
//         lg:flex
//         lg:w-1/2
//         bg-gradient-to-b
//         from-brownie
//         to-coffee
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
//               🪞
//             </div>

//             <span
//               className="
//               font-display
//               text-cream
//               text-xl"
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
//             Start building
//             <br />
//             your memory
//             <br />
//             <em>archive.</em>
//           </h1>

//           <p
//             className="
//             text-cream/60
//             text-lg
//             mb-10"
//           >
//             Join thousands of people
//             preserving life's beautiful
//             moments.
//           </p>

//           <div className="space-y-3">

//             {features.map((feature) => (

//               <div
//                 key={feature}
//                 className="
//                 flex
//                 items-center
//                 gap-3"
//               >

//                 <div
//                   className="
//                   w-5
//                   h-5
//                   rounded-full
//                   bg-caramel/30
//                   flex
//                   items-center
//                   justify-center"
//                 >
//                   <Check
//                     size={10}
//                     className="
//                     text-cream"
//                   />
//                 </div>

//                 <span
//                   className="
//                   text-cream/80
//                   text-sm"
//                 >
//                   {feature}
//                 </span>

//               </div>

//             ))}

//           </div>

//         </div>

//       </div>

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

//           <h2
//             className="
//             font-display
//             text-3xl
//             font-semibold
//             text-brownie
//             mb-2"
//           >
//             Create your archive
//           </h2>

//           <p
//             className="
//             text-coffee/60
//             text-sm
//             mb-8"
//           >
//             Free forever.
//           </p>

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-4"
//           >

//             <input
//               type="text"
//               required
//               placeholder="Full Name"
//               value={form.name}
//               onChange={(e) =>
//                 setForm((prev) => ({
//                   ...prev,
//                   name:
//                     e.target.value,
//                 }))
//               }
//               className="input-field"
//             />

//             <input
//               type="email"
//               required
//               placeholder="Email"
//               value={form.email}
//               onChange={(e) =>
//                 setForm((prev) => ({
//                   ...prev,
//                   email:
//                     e.target.value,
//                 }))
//               }
//               className="input-field"
//             />

//             <input
//               type="password"
//               required
//               placeholder="Password"
//               value={form.password}
//               onChange={(e) =>
//                 setForm((prev) => ({
//                   ...prev,
//                   password:
//                     e.target.value,
//                 }))
//               }
//               className="input-field"
//             />

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
//               gap-2"
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
//                   Create Account
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

//             Already have an account?{" "}

//             <Link
//               to="/login"
//               className="
//               text-brownie
//               font-medium
//               hover:underline"
//             >
//               Sign in
//             </Link>

//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }




import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Check, Sparkles, History, Activity, Fingerprint } from "lucide-react";

import { registerUser } from "../../services/auth.api";

const features = [
  "Unlimited memory storage",
  "AI-powered storytelling",
  "Timeline & Collections",
  "Memory Chat with AI",
];

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      await registerUser({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      });
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brownie flex flex-col justify-between antialiased font-sans selection:bg-caramel selection:text-white select-none">
      
      {/* 1. Navbar */}
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between border-b border-white/5 sticky top-0 bg-brownie/90 backdrop-blur-md z-50">
        <div>
          <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
            Memory Bridge
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="text-sm font-semibold text-cream/80 hover:text-white transition-colors"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* 2. Main Content Grid Wrapper */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Premium Value Pitch Banner */}
          <div className="lg:col-span-7 bg-[#23140E] border border-white/5 rounded-3xl p-6 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl min-h-[340px] lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-brownie/20 via-transparent to-caramel/5 pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 bg-caramel/10 border border-caramel/20 px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider text-caramel">
                <Sparkles size={12} />
                <span>Join the Vault Platform</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-display font-bold text-white leading-tight tracking-tight">
                Start building <br />
                your personal <br />
                <span className="italic font-serif font-normal text-caramel">memory archive.</span>
              </h1>
              
              <p className="text-cream/70 text-sm sm:text-base max-w-md pt-2 font-sans">
                Join thousands of people preserving life's fleeting segments and organizing personal experiences safely.
              </p>
            </div>

            {/* Feature Check List */}
            <div className="space-y-3 pt-8 relative z-10 border-t border-white/5 mt-6">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-caramel/20 flex items-center justify-center text-caramel flex-shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-cream/90 text-sm font-medium tracking-wide">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Pure Custom Light Registration Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-cream rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-caramel/20 text-brownie h-full flex flex-col justify-center">
              <div>
                <h3 className="font-display text-2xl font-bold text-brownie tracking-tight">
                  Create your archive
                </h3>
                <p className="text-xs sm:text-sm font-medium text-coffee/80 mt-1">
                  Free forever. Establish your master access profile.
                </p>
              </div>

              {/* Form Input Rows */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brownie/70 mb-1.5 pl-0.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Madhur Tandon"
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-white/70 border border-caramel/30 rounded-xl px-4 py-3 text-sm text-brownie placeholder:text-coffee/40 outline-none transition-all focus:border-brownie focus:bg-white focus:ring-2 focus:ring-brownie/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brownie/70 mb-1.5 pl-0.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="madhur@gmail.com"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-white/70 border border-caramel/30 rounded-xl px-4 py-3 text-sm text-brownie placeholder:text-coffee/40 outline-none transition-all focus:border-brownie focus:bg-white focus:ring-2 focus:ring-brownie/10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brownie/70 mb-1.5 pl-0.5">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                    className="w-full bg-white/70 border border-caramel/30 rounded-xl px-4 py-3 text-sm text-brownie placeholder:text-coffee/40 outline-none transition-all focus:border-brownie focus:bg-white focus:ring-2 focus:ring-brownie/10"
                  />
                </div>

                {error && (
                  <div className="text-red-700 bg-red-50 border border-red-200/40 px-3 py-2 rounded-xl text-xs font-medium">
                    ⚠️ {error}
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brownie text-white hover:bg-coffee px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.99] shadow-md shadow-brownie/15 flex items-center justify-center gap-2 disabled:bg-coffee/30 disabled:text-coffee/50"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Create Account</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </form>

              <p className="text-center text-xs sm:text-sm text-coffee/80 pt-1 font-sans">
                Already have an account?{" "}
                <Link to="/login" className="text-caramel font-bold hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* 3. Footer */}
      <footer className="w-full border-t border-white/5 bg-brownie py-6 text-center text-xs font-medium text-cream/30">
        <p>© 2026 Memory Bridge AI. Keeping stories alive forever.</p>
      </footer>

    </div>
  );
}