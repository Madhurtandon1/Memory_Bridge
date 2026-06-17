// import {
//   useState
// } from "react";

// import {
//   useNavigate,
//   useLocation
// } from "react-router-dom";

// import {
//   Search,
//   Bell,
//   Menu,
//   X
// } from "lucide-react";

// import {
//   useAuth
// } from "../../context/AuthContext";

// import {
//   useUI
// } from "../../context/UIContext";

// const pageTitles = {

//   "/dashboard":
//     "Dashboard",

//   "/memories":
//     "Memories",

//   "/collections":
//     "Collections",

//   "/timeline":
//     "Timeline",

//   "/stories":
//     "Stories",

//   "/assistant":
//     "AI Assistant",

//   "/insights":
//     "Insights",

//   "/profile":
//     "Profile"
// };

// export default function Navbar() {

//   const {
//     user
//   } = useAuth();

//   const {
//     sidebarOpen,
//     setSidebarOpen
//   } = useUI();

//   const location =
//     useLocation();

//   const navigate =
//     useNavigate();

//   const [
//     searchOpen,
//     setSearchOpen
//   ] = useState(false);

//   const [
//     searchVal,
//     setSearchVal
//   ] = useState("");

//   const title =
//     pageTitles[
//       location.pathname
//     ] || "Memory Bridge";

//   const handleSearch =
//     (e) => {

//       e.preventDefault();

//       if (
//         searchVal.trim()
//       ) {

//         navigate(
//           `/memories?search=${encodeURIComponent(
//             searchVal
//           )}`
//         );

//         setSearchVal("");

//         setSearchOpen(false);
//       }
//     };

//   return (

//     <header
//       className="
//       h-16
//       bg-white/70
//       backdrop-blur-xl
//       border-b
//       border-caramel/10
//       flex
//       items-center
//       justify-between
//       px-4
//       md:px-6"
//     >

//       <div
//         className="
//         flex
//         items-center
//         gap-3"
//       >

//         <button
//           className="
//           lg:hidden"
//           onClick={() =>
//             setSidebarOpen(
//               !sidebarOpen
//             )
//           }
//         >

//           {sidebarOpen
//             ? <X size={20} />
//             : <Menu size={20} />}

//         </button>
// <h1
//   className="
//   font-display
//   text-lg
//   md:text-xl
//   text-brownie
//   truncate"
// >
//           {title}
//         </h1>

//       </div>

// <div
//   className="
//   flex
//   items-center
//   gap-1
//   sm:gap-2"
// >

//         {searchOpen ? (

//           <form
//             onSubmit={
//               handleSearch
//             }
//           >

//             <input
//               autoFocus
//               value={searchVal}
//               onChange={(e) =>
//                 setSearchVal(
//                   e.target.value
//                 )
//               }
//               placeholder="Search..."
//               className="
//               input-field
//               w-32
//               sm:w-48"
//             />

//           </form>

//         ) : (

//           <button
//             onClick={() =>
//               setSearchOpen(true)
//             }
//           >

//             <Search size={18} />

//           </button>

//         )}

//         <button>

//           <Bell size={18} />

//         </button>

//         <button
//           onClick={() =>
//             navigate(
//               "/profile"
//             )
//           }
//           className="
//           w-9
//           h-9
//           rounded-full
//           bg-brownie/15
//           flex
//           items-center
//           justify-center"
//         >

//           {user?.name?.charAt(0)}

//         </button>

//       </div>

//     </header>
//   );
// }

// import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Search, Bell, Menu, X, LogOut, User } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";
// import { logoutUser } from "../../services/auth.api";
// import toast from "react-hot-toast";
// import { useUI } from "../../context/UIContext";

// const pageTitles = {
//   "/dashboard": "Dashboard",
//   "/memories": "Memories",
//   "/collections": "Collections",
//   "/timeline": "Timeline",
//   "/stories": "Stories",
//   "/assistant": "AI Assistant",
//   "/insights": "Insights",
//   "/profile": "Profile"
// };

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const { sidebarOpen, setSidebarOpen } = useUI();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchVal, setSearchVal] = useState("");
//   const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  
//   const menuRef = useRef(null);
//   const title = pageTitles[location.pathname] || "Memory Bridge";

//   // Gracefully close the dropdown menu when clicking anywhere outside of it
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setProfileMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchVal.trim()) {
//       navigate(`/memories?search=${encodeURIComponent(searchVal)}`);
//       setSearchVal("");
//       setSearchOpen(false);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       setProfileMenuOpen(false);
//       await logoutUser();
//       logout();
//       toast.success("Logged out successfully");
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout tracking error:", error);
//       toast.error("Logout failed");
//     }
//   };

//   return (
//     <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-white/70 backdrop-blur-xl border-b border-caramel/10 flex items-center justify-between px-4 md:px-6 z-40 transition-all duration-300">
      
//       {/* Left Area: Toggle Handle & Page Header title */}
//       <div className="flex items-center gap-3">
//         <button
//           className="lg:hidden p-1 rounded-md hover:bg-caramel/5 text-brownie transition-colors"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           aria-label="Toggle Menu"
//         >
//           {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>

//         <h1 className="font-display text-lg md:text-xl font-bold text-brownie truncate">
//           {title}
//         </h1>
//       </div>

//       {/* Right Area: Actions Strip */}
//       <div className="flex items-center gap-2 sm:gap-3">
        
//         {/* Expanded Form Search Field Container */}
//         {searchOpen ? (
//           <form onSubmit={handleSearch} className="flex items-center gap-1">
//             <input
//               autoFocus
//               value={searchVal}
//               onChange={(e) => setSearchVal(e.target.value)}
//               placeholder="Search memories..."
//               className="bg-white/80 border border-caramel/20 rounded-xl px-3 py-1.5 text-sm text-brownie outline-none focus:border-caramel w-36 sm:w-48 md:w-60 transition-all"
//             />
//             <button 
//               type="button" 
//               onClick={() => setSearchOpen(false)} 
//               className="p-1.5 text-brownie/60 hover:text-brownie transition-colors"
//             >
//               <X size={16} />
//             </button>
//           </form>
//         ) : (
//           <button
//             onClick={() => setSearchOpen(true)}
//             className="p-2 text-brownie/80 hover:text-brownie rounded-full hover:bg-caramel/10 transition-colors"
//             title="Open Search"
//           >
//             <Search size={18} />
//           </button>
//         )}

//         {/* Notifications Icon Button */}
//         <button className="p-2 text-brownie/80 hover:text-brownie rounded-full hover:bg-caramel/10 transition-colors" title="Notifications">
//           <Bell size={18} />
//         </button>

//         {/* User Workspace Profile Menu Anchor Box */}
//         <div className="relative" ref={menuRef}>
//           <button
//             onClick={() => setProfileMenuOpen(!profileMenuOpen)}
//             className="w-9 h-9 rounded-full bg-brownie/15 text-brownie font-bold flex items-center justify-center hover:bg-brownie/25 border border-caramel/10 transition-all duration-200 active:scale-95"
//             aria-label="Open User Menu"
//           >
//             {user?.name?.charAt(0)?.toUpperCase() || "M"}
//           </button>

//           {/* Absolute Dropdown Profile Stack Panel */}
//           {profileMenuOpen && (
//             <div className="absolute right-0 top-12 w-48 bg-white border border-caramel/15 rounded-xl shadow-md py-1.5 z-50 animate-fade-in">
//               <button
//                 onClick={() => {
//                   navigate("/profile");
//                   setProfileMenuOpen(false);
//                 }}
//                 className="w-full px-4 py-2.5 flex items-center gap-3 text-sm font-medium text-brownie hover:bg-caramel/5 transition-colors text-left"
//               >
//                 <User size={16} className="text-caramel" />
//                 <span>Profile Settings</span>
//               </button>

//               <div className="border-t border-caramel/5 my-1" />

//               <button
//                 onClick={handleLogout}
//                 className="w-full px-4 py-2.5 flex items-center gap-3 text-sm font-bold text-red-600 hover:bg-red-50/60 transition-colors text-left"
//               >
//                 <LogOut size={16} />
//                 <span>Sign Out</span>
//               </button>
//             </div>
//           )}
//         </div>

//       </div>
//     </header>
//   );
// }


import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, Bell, Menu, X, LogOut, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";
import { logoutUser } from "../../services/auth.api.js";
import toast from "react-hot-toast";
import { useUI } from "../../context/UIContext.jsx";

const pageTitles = {
  "/dashboard": "Dashboard",
  "/upload": "Upload Memory",
  "/memories": "Memories",
  "/collections": "Collections",
  "/timeline": "Timeline",
  "/stories": "Stories",
  "/assistant": "AI Assistant",
  "/insights": "Insights",
  "/profile": "Profile"
};

export default function Navbar() {
  const { user, logout } = useAuth();
  const { sidebarOpen, setSidebarOpen } = useUI();
  const location = useLocation();
  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  
  const menuRef = useRef(null);
  const title = pageTitles[location.pathname] || "Workspace";

  // Gracefully close the dropdown menu when clicking anywhere outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/memories?search=${encodeURIComponent(searchVal)}`);
      setSearchVal("");
      setSearchOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      setProfileMenuOpen(false);
      await logoutUser();
      logout();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Logout tracking error:", error);
      toast.error("Logout failed");
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-white/70 backdrop-blur-xl border-b border-caramel/10 flex items-center justify-between px-4 md:px-6 z-40 transition-all duration-300">
      
      {/* Left Area: Hamburger Toggle, Dynamic Mobile Branding & Page Header title */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          className="lg:hidden p-1 rounded-md hover:bg-caramel/5 text-brownie transition-colors flex-shrink-0"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle Menu"
        >
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* SMART RESPONSIVE BRANDING:
          - Visible on small screens, automatically hidden on desktop 'lg:hidden'
          - Prevents a blank header on mobile while avoiding duplicate logo names on widescreen layouts!
        */}
        <div className="flex items-center gap-2 truncate">
          <span className="lg:hidden font-display font-black text-sm sm:text-base text-brownie tracking-tight flex-shrink-0">
            Memory Bridge
          </span>
          
          {/* Subtle elegant line separator hidden on desktops */}
          <span className="lg:hidden text-caramel/30 font-light select-none text-xs sm:text-sm">/</span>
          
          {/* Main Context-Aware App Screen Page Title */}
          <h1 className="font-sans text-sm sm:text-base md:text-lg font-bold text-coffee truncate">
            {title}
          </h1>
        </div>
      </div>

      {/* Right Area: Actions Strip */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        
        {/* Expanded Form Search Field Container */}
        {searchOpen ? (
          <form onSubmit={handleSearch} className="flex items-center gap-1">
            <input
              autoFocus
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search memories..."
              className="bg-white/80 border border-caramel/20 rounded-xl px-3 py-1.5 text-sm text-brownie outline-none focus:border-caramel w-32 sm:w-48 md:w-60 transition-all"
            />
            <button 
              type="button" 
              onClick={() => setSearchOpen(false)} 
              className="p-1.5 text-brownie/60 hover:text-brownie transition-colors"
            >
              <X size={16} />
            </button>
          </form>
        ) : (
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 text-brownie/80 hover:text-brownie rounded-full hover:bg-caramel/10 transition-colors"
            title="Open Search"
          >
            <Search size={18} />
          </button>
        )}

        {/* Notifications Icon Button */}
        <button className="p-2 text-brownie/80 hover:text-brownie rounded-full hover:bg-caramel/10 transition-colors" title="Notifications">
          <Bell size={18} />
        </button>

        {/* User Workspace Profile Menu Anchor Box */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="w-9 h-9 rounded-full bg-brownie/15 text-brownie font-bold flex items-center justify-center hover:bg-brownie/25 border border-caramel/10 transition-all duration-200 active:scale-95"
            aria-label="Open User Menu"
          >
            {user?.name?.charAt(0)?.toUpperCase() || "M"}
          </button>

          {/* Absolute Dropdown Profile Stack Panel */}
          {profileMenuOpen && (
            <div className="absolute right-0 top-12 w-48 bg-white border border-caramel/15 rounded-xl shadow-md py-1.5 z-50 animate-fade-in">
              <button
                onClick={() => {
                  navigate("/profile");
                  setProfileMenuOpen(false);
                }}
                className="w-full px-4 py-2.5 flex items-center gap-3 text-sm font-medium text-brownie hover:bg-caramel/5 transition-colors text-left"
              >
                <User size={16} className="text-caramel" />
                <span>Profile Settings</span>
              </button>

              <div className="border-t border-caramel/5 my-1" />

              <button
                onClick={handleLogout}
                className="w-full px-4 py-2.5 flex items-center gap-3 text-sm font-bold text-red-600 hover:bg-red-50/60 transition-colors text-left"
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}