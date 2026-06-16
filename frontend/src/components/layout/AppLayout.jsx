// import {
//   useEffect
// } from "react";

// import {
//   Outlet,
//   useLocation
// } from "react-router-dom";

// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// import {
//   useUI
// } from "../../context/UIContext";

// export default function AppLayout() {

//   const {
//     sidebarOpen,
//     setSidebarOpen
//   } = useUI();

//   const location =
//     useLocation();

//   useEffect(() => {

//     if (
//       window.innerWidth < 1024
//     ) {

//       setSidebarOpen(false);
//     }

//   }, [location.pathname]);

//   return (

//     <div
//       className="
//       min-h-screen
//       bg-cream-100
//       flex"
//     >

//       {sidebarOpen && (

//         <div
//           className="
//           fixed
//           inset-0
//           bg-brownie/30
//           backdrop-blur-sm
//           z-20
//           lg:hidden"
//           onClick={() =>
//             setSidebarOpen(false)
//           }
//         />

//       )}

//       <Sidebar />

//       <div
//         className="
//         flex-1
//         flex
//         flex-col
//         min-h-screen
//         w-full
//         lg:ml-64"
//       >

//         <Navbar />

//       <main
//         className="
//         flex-1
//         px-4
//         py-4
//         sm:px-6
//         lg:px-8
//         overflow-y-auto
//         overflow-x-hidden"
//       >

//           <Outlet />

//         </main>

//       </div>

//     </div>
//   );
// }


import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useUI } from "../../context/UIContext";

export default function AppLayout() {
  const { sidebarOpen, setSidebarOpen } = useUI();
  const location = useLocation();

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cream-100 flex relative">
      
      {/* 
        Mobile Overlay Backdrop 
        Raised z-index to 40 so it covers the main content and navbar, 
        but sits right underneath the mobile sidebar drawer (z-50)
      */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-brownie/30 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Persistent on Desktop, Absolute Drawer on Mobile */}
      <Sidebar />

      {/* Main Wrapper Content Structure */}
      <div
        className="flex-1 flex flex-col min-h-screen w-full lg:ml-64 transition-all duration-300"
      >
        {/* Top Floating App bar */}
        <Navbar />

        {/* 
          Main Dynamic Page Area 
          Added `pt-16` (64px padding-top) so page elements render 
          safely beneath the fixed Navbar instead of hiding behind it.
        */}
        <main
          className="flex-1 pt-16 px-4 py-6 sm:px-6 lg:px-8 overflow-y-auto overflow-x-hidden max-w-7xl w-full mx-auto"
        >
          <Outlet />
        </main>

      </div>
    </div>
  );
}