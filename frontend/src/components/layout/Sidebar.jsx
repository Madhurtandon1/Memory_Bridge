// import {
//   NavLink,
//   useNavigate
// } from "react-router-dom";

// import {
//   Grid3X3,
//   BookOpen,
//   BookMarked,
//   Clock,
//   Sparkles,
//   BarChart2,
//   User,
//   PlusCircle,
//   X
// } from "lucide-react";

// import {
//   useAuth
// } from "../../context/AuthContext";

// import {
//   useUI
// } from "../../context/UIContext";

// const navItems = [

//   {
//     to: "/dashboard",
//     icon: Grid3X3,
//     label: "Dashboard"
//   },

//   {
//     to: "/memories",
//     icon: BookOpen,
//     label: "Memories"
//   },

//   {
//     to: "/collections",
//     icon: BookMarked,
//     label: "Collections"
//   },

//   {
//     to: "/timeline",
//     icon: Clock,
//     label: "Timeline"
//   },

//   {
//     to: "/stories",
//     icon: BookOpen,
//     label: "Stories"
//   },

//   {
//     to: "/assistant",
//     icon: Sparkles,
//     label: "Assistant"
//   },

//   {
//     to: "/insights",
//     icon: BarChart2,
//     label: "Insights"
//   },
//   {
//     to: "/upload",
//     icon: PlusCircle,
//     label: "Upload"
//   }

// ];

// export default function Sidebar() {

//   const {
//     user
//   } = useAuth();

//   const {
//     sidebarOpen,
//     setSidebarOpen
//   } = useUI();

//   const navigate =
//     useNavigate();

//   return (

//     <aside
//  className={`
//   fixed
//   top-0
//   left-0
//   h-screen
//   bg-white
//   border-r
//   border-caramel/10
//   z-30
//   transition-transform
//   duration-300

//   w-64

//   ${
//     sidebarOpen
//       ? "translate-x-0"
//       : "-translate-x-full"
//   }

//   lg:translate-x-0
//   `}
//     >

//       <div
//         className="
//         h-16
//         px-4
//         flex
//         items-center
//         border-b
//         border-caramel/10"
//       >

//         <span
//           className="
//           text-2xl"
//         >
//           🪞
//         </span>

//         {sidebarOpen && (

//           <span
//             className="
//             ml-3
//             font-display
//             text-lg
//             text-brownie
//             font-semibold"
//           >
//             Memory Bridge
//           </span>

//         )}

//         <button
//           className="
//           ml-auto
//           lg:hidden"
//           onClick={() =>
//             setSidebarOpen(false)
//           }
//         >

//           <X size={16} />

//         </button>

//       </div>

//       <div className="p-4">

//         <button
//           onClick={() =>
//             navigate(
//               "/memories/create"
//             )
//           }
//           className="
//           w-full
//           bg-brownie
//           text-white
//           py-3
//           rounded-2xl
//           flex
//           items-center
//           justify-center
//           gap-2"
//         >

//           <PlusCircle size={16} />

//           {sidebarOpen &&
//             "New Memory"}

//         </button>

//       </div>

//       <nav
//         className="
//         px-3
//         space-y-2"
//       >

//         {navItems.map(
//           ({
//             to,
//             icon: Icon,
//             label
//           }) => (

//             <NavLink
//               key={to}
//               to={to}
//               className="
//               flex
//               items-center
//               gap-3
//               px-3
//               py-3
//               rounded-xl
//               hover:bg-caramel/10"
//             >

//               <Icon size={18} />

//               {sidebarOpen &&
//                 label}

//             </NavLink>

//           )
//         )}

//       </nav>

//       <div
//         className="
//         absolute
//         bottom-4
//         left-0
//         right-0
//         px-4"
//       >

//         <NavLink
//           to="/profile"
//           className="
//           flex
//           items-center
//           gap-3"
//         >

//           <div
//             className="
//             w-10
//             h-10
//             rounded-full
//             bg-brownie/15
//             flex
//             items-center
//             justify-center"
//           >

//             {user?.name?.charAt(0)}

//           </div>

//           {sidebarOpen && (

//             <div>

//               <p
//                 className="
//                 text-sm
//                 font-medium"
//               >
//                 {user?.name}
//               </p>

//               <p
//                 className="
//                 text-xs
//                 text-caramel"
//               >
//                 Memory Keeper
//               </p>

//             </div>

//           )}

//         </NavLink>

//       </div>

//     </aside>
//   );
// }

// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   Grid3X3,
//   BookOpen,
//   BookMarked,
//   Clock,
//   Sparkles,
//   BarChart2,
//   PlusCircle,
//   X
// } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";
// import { useUI } from "../../context/UIContext";

// const navItems = [
//   { to: "/dashboard", icon: Grid3X3, label: "Dashboard" },
//   { to: "/memories", icon: BookOpen, label: "Memories" }, // This will now show up cleanly
//   { to: "/collections", icon: BookMarked, label: "Collections" },
//   { to: "/timeline", icon: Clock, label: "Timeline" },
//   { to: "/stories", icon: BookOpen, label: "Stories" },
//   { to: "/assistant", icon: Sparkles, label: "Assistant" },
//   { to: "/insights", icon: BarChart2, label: "Insights" },
//   { to: "/upload", icon: PlusCircle, label: "Upload" }
// ];

// export default function Sidebar() {
//   const { user } = useAuth();
//   const { sidebarOpen, setSidebarOpen } = useUI();
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//     setSidebarOpen(false); 
//   };

//   return (
//     <>
//       {/* 1. Mobile Backdrop Overlay Panel */}
//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-brownie/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* 2. Main Structural Sidebar Container */}
//       <aside
//         className={`
//           fixed top-0 bottom-0 left-0 h-screen bg-white border-r border-caramel/10 w-64 flex flex-col z-50 transition-transform duration-300 ease-in-out
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           lg:translate-x-0 lg:z-30
//         `}
//       >
//         {/* Brand Header */}
//         <div className="h-16 px-5 flex items-center justify-between border-b border-caramel/10 flex-shrink-0">
//           <div className="flex items-center">
            
//             <span className="ml-3 font-display text-lg text-brownie font-bold block tracking-wide">
//               Memory Bridge
//             </span>
//           </div>

//           {/* Close Handle Button for Mobile */}
//           <button
//             className="p-1.5 rounded-lg hover:bg-caramel/10 text-brownie lg:hidden transition-colors"
//             onClick={() => setSidebarOpen(false)}
//             aria-label="Close Menu"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         {/* Action Call Button Area */}
//         <div className="p-4 flex-shrink-0">
//           <button
//             onClick={() => handleNavigation("/memories/create")}
//             className="w-full bg-brownie text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold hover:bg-brownie/90 active:scale-[0.98] transition-all shadow-sm"
//           >
//             <PlusCircle size={18} />
//             <span className="block font-medium">New Memory</span>
//           </button>
//         </div>

//         {/* Primary Interactive Navigation Links */}
//         <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
//           {navItems.map(({ to, icon: Icon, label }) => (
//             <NavLink
//               key={to}
//               to={to}
//               onClick={() => setSidebarOpen(false)} 
//               className={({ isActive }) => `
//                 flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 w-full
//                 ${isActive 
//                   ? "bg-brownie text-white shadow-md shadow-brownie/10" 
//                   : "text-brownie/75 hover:bg-caramel/10 hover:text-brownie"
//                 }
//               `}
//             >
//               <Icon size={18} className="flex-shrink-0" />
//               {/* Force label display using block utility so it never hides on desktop screens */}
//               <span className="block font-medium tracking-wide">{label}</span>
//             </NavLink>
//           ))}
//         </nav>

//         {/* User Workspace Profile Footer Panel */}
//         <div className="p-4 border-t border-caramel/10 bg-neutral-50/70 flex-shrink-0">
//           <button
//             onClick={() => handleNavigation("/profile")}
//             className="flex items-center gap-3 w-full text-left p-1.5 rounded-xl hover:bg-caramel/10 transition-all duration-200"
//           >
//             <div className="w-10 h-10 rounded-full bg-brownie/10 text-brownie font-bold flex items-center justify-center border border-caramel/20 flex-shrink-0">
//               {user?.name?.charAt(0)?.toUpperCase() || "M"}
//             </div>

//             <div className="truncate block flex-1">
//               <p className="text-sm font-bold text-brownie truncate">
//                 {user?.name || "Madhur"}
//               </p>
//               <p className="text-xs text-caramel/80 font-medium truncate">
//                 Memory Keeper
//               </p>
//             </div>
//           </button>
//         </div>

//       </aside>
//     </>
//   );
// }



import { NavLink, useNavigate } from "react-router-dom";
import {
  Grid3X3,
  BookOpen,
  BookMarked,
  Clock,
  Sparkles,
  BarChart2,
  PlusCircle,
  X
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useUI } from "../../context/UIContext";

const navItems = [
  { to: "/dashboard", icon: Grid3X3, label: "Dashboard" },
  { to: "/memories", icon: BookOpen, label: "Memories" },
  { to: "/collections", icon: BookMarked, label: "Collections" },
  { to: "/timeline", icon: Clock, label: "Timeline" },
  { to: "/stories", icon: BookOpen, label: "Stories" },
  { to: "/assistant", icon: Sparkles, label: "Assistant" },
  { to: "/insights", icon: BarChart2, label: "Insights" },
];

export default function Sidebar() {
  const { user } = useAuth();
  const { sidebarOpen, setSidebarOpen } = useUI();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setSidebarOpen(false); 
  };

  return (
    <>
      {/* 1. Mobile Backdrop Overlay Panel */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-brownie/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 2. Main Structural Sidebar Container */}
      <aside
        className={`
          fixed top-0 bottom-0 left-0 h-screen bg-white border-r border-caramel/10 w-64 flex flex-col z-50 transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:z-30
        `}
      >
        {/* 
          PREMIUM HIGH-CONTRAST BRAND HEADER:
          - Upgraded font scaling to 'text-2xl' for immediate hierarchy.
          - Styled using your custom serif 'font-display' with 'font-black'.
        */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-caramel/10 flex-shrink-0">
          <div className="flex items-center min-w-0">
            <span className="font-display text-2xl font-black text-brownie tracking-tight block truncate select-none">
              Memory Bridge
            </span>
          </div>

          {/* Close Handle Button for Mobile */}
          <button
            className="p-1.5 rounded-lg hover:bg-caramel/10 text-brownie lg:hidden transition-colors flex-shrink-0"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Action Call Button Area */}
        <div className="p-4 flex-shrink-0">
          <button
            onClick={() => handleNavigation("/memories/create")}
            className="w-full bg-brownie text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm tracking-wide hover:bg-coffee active:scale-[0.98] transition-all shadow-md shadow-brownie/10"
          >
            <PlusCircle size={16} />
            <span>New Memory</span>
          </button>
        </div>

        {/* Primary Interactive Navigation Links */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto py-2">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)} 
              className={({ isActive }) => `
                flex items-center gap-3.5 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 w-full
                ${isActive 
                  ? "bg-brownie text-white shadow-md shadow-brownie/15" 
                  : "text-brownie/75 hover:bg-caramel/10 hover:text-brownie"
                }
              `}
            >
              <Icon size={18} className="flex-shrink-0" />
              <span className="block tracking-wide">{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* User Workspace Profile Footer Panel */}
        <div className="p-4 border-t border-caramel/10 bg-neutral-50/80 flex-shrink-0">
          <button
            onClick={() => handleNavigation("/profile")}
            className="flex items-center gap-3 w-full text-left p-1.5 rounded-xl hover:bg-caramel/10 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-brownie/15 text-brownie font-bold flex items-center justify-center border border-caramel/20 flex-shrink-0">
              {user?.name?.charAt(0)?.toUpperCase() || "M"}
            </div>

            <div className="truncate block flex-1 pl-0.5">
              <p className="text-sm font-bold text-brownie truncate leading-tight">
                {user?.name || "Madhur"}
              </p>
              <p className="text-[11px] text-caramel/90 font-bold uppercase tracking-wider mt-0.5">
                Memory Keeper
              </p>
            </div>
          </button>
        </div>

      </aside>
    </>
  );
}