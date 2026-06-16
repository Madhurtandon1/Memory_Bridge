
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// import api from "../../services/api";
// import {
//   updateProfile,
//   changePassword
// } from "../../services/auth.api";

// export default function Profile() {

//   const [loading, setLoading] =
//     useState(true);

//   const [user, setUser] =
//     useState(null);

//   const [profileData, setProfileData] =
//     useState({
//       name: "",
//       avatar: ""
//     });

//   const [passwordData, setPasswordData] =
//     useState({
//       oldPassword: "",
//       newPassword: ""
//     });

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile =
//     async () => {

//       try {

//         const res =
//           await api.get("/auth/me");

//         const currentUser =
//           res.data.data;

//         setUser(currentUser);

//         setProfileData({
//           name:
//             currentUser.name || "",
//           avatar:
//             currentUser.avatar || ""
//         });

//       } catch (error) {

//         console.log(error);

//         toast.error(
//           "Failed to load profile"
//         );

//       } finally {

//         setLoading(false);

//       }
//     };

//   const handleProfileChange =
//     (e) => {

//       setProfileData({
//         ...profileData,
//         [e.target.name]:
//           e.target.value
//       });

//     };

//   const handlePasswordChange =
//     (e) => {

//       setPasswordData({
//         ...passwordData,
//         [e.target.name]:
//           e.target.value
//       });

//     };

//   const handleProfileSubmit =
//     async (e) => {

//       e.preventDefault();

//       try {

//         const res =
//           await updateProfile(
//             profileData
//           );

//         setUser(res.data);

//         toast.success(
//           "Profile updated successfully"
//         );

//       } catch (error) {

//         console.log(error);

//         toast.error(
//           error.response?.data?.message ||
//           "Failed to update profile"
//         );

//       }
//     };

//   const handlePasswordSubmit =
//     async (e) => {

//       e.preventDefault();

//       try {

//         await changePassword(
//           passwordData
//         );

//         toast.success(
//           "Password changed successfully"
//         );

//         setPasswordData({
//           oldPassword: "",
//           newPassword: ""
//         });

//       } catch (error) {

//         console.log(error);

//         toast.error(
//           error.response?.data?.message ||
//           "Failed to change password"
//         );

//       }

//     };

//   if (loading) {

//     return (
//       <div className="text-center py-20">
//         Loading profile...
//       </div>
//     );

//   }

//   return (

//     <div
//       className="
//       max-w-5xl
//       mx-auto
//       pb-10
//       py-8
//       space-y-8"
//     >

//       <div>

//         <h1
//           className="
//           text-4xl
//           font-display
//           font-semibold
//           text-brownie"
//         >
//           Profile
//         </h1>

//         <p
//           className="
//           text-coffee/60
//           mt-2"
//         >
//           Manage your account settings
//         </p>

//       </div>

//       {/* User Summary */}

//       <div
//         className="
//         bg-white
//         rounded-3xl
//         border
//         p-8"
//       >

//         <div
//           className="
//           flex
//           flex-col
//           md:flex-row
//           items-center
//           gap-6"
//         >

//           <div
//             className="
//             w-24
//             h-24
//             rounded-full
//             bg-brownie/15
//             flex
//             items-center
//             justify-center
//             text-3xl
//             font-bold
//             text-brownie"
//           >
//             {user?.name?.charAt(0)}
//           </div>

//           <div>

//             <h2
//               className="
//               text-2xl
//               font-semibold"
//             >
//               {user?.name}
//             </h2>

//             <p
//               className="
//               text-gray-500"
//             >
//               {user?.email}
//             </p>

//             <p
//               className="
//               text-sm
//               text-caramel
//               mt-1"
//             >
//               {user?.role}
//             </p>

//           </div>

//         </div>

//       </div>

//       {/* Account Information */}

//       <div
//         className="
//         bg-white
//         rounded-3xl
//         border
//         p-8"
//       >

//         <h2
//           className="
//           text-2xl
//           font-semibold
//           mb-6"
//         >
//           Account Information
//         </h2>

//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-6"
//         >

//           <div>
//             <p className="text-sm text-gray-500">
//               Name
//             </p>
//             <p className="font-medium">
//               {user?.name}
//             </p>
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">
//               Email
//             </p>
//             <p className="font-medium">
//               {user?.email}
//             </p>
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">
//               Role
//             </p>
//             <p className="font-medium">
//               {user?.role}
//             </p>
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">
//               User ID
//             </p>
//             <p className="text-xs break-all">
//               {user?.id}
//             </p>
//           </div>

//         </div>

//       </div>

//       {/* Update Profile */}

//       <div
//         className="
//         bg-white
//         rounded-3xl
//         border
//         p-8"
//       >

//         <h2
//           className="
//           text-2xl
//           font-semibold
//           mb-6"
//         >
//           Edit Profile
//         </h2>

//         <form
//           onSubmit={handleProfileSubmit}
//           className="space-y-5"
//         >

//           <div>

//             <label className="block mb-2">
//               Name
//             </label>

//             <input
//               type="text"
//               name="name"
//               value={profileData.name}
//               onChange={handleProfileChange}
//               className="
//               w-full
//               border
//               rounded-xl
//               p-4"
//             />

//           </div>

//           <div>

//             <label className="block mb-2">
//               Avatar URL
//             </label>

//             <input
//               type="text"
//               name="avatar"
//               value={profileData.avatar}
//               onChange={handleProfileChange}
//               className="
//               w-full
//               border
//               rounded-xl
//               p-4"
//             />

//           </div>

//           <button
//             type="submit"
//             className="
//             w-full
//             bg-caramel
//             text-white
//             py-4
//             rounded-xl
//             font-medium"
//           >
//             Save Profile Changes
//           </button>

//         </form>

//       </div>

//       {/* Security */}

//       <div
//         className="
//         bg-white
//         rounded-3xl
//         border
//         p-8"
//       >

//         <h2
//           className="
//           text-2xl
//           font-semibold
//           mb-2"
//         >
//           Security
//         </h2>

//         <p
//           className="
//           text-gray-500
//           mb-6"
//         >
//           Change your account password
//         </p>

//         <form
//           onSubmit={handlePasswordSubmit}
//           className="space-y-5"
//         >

//           <div>

//             <label className="block mb-2">
//               Current Password
//             </label>

//             <input
//               type="password"
//               name="oldPassword"
//               value={passwordData.oldPassword}
//               onChange={handlePasswordChange}
//               placeholder="Enter current password"
//               className="
//               w-full
//               border
//               rounded-xl
//               p-4"
//             />

//           </div>

//           <div>

//             <label className="block mb-2">
//               New Password
//             </label>

//             <input
//               type="password"
//               name="newPassword"
//               value={passwordData.newPassword}
//               onChange={handlePasswordChange}
//               placeholder="Enter new password"
//               className="
//               w-full
//               border
//               rounded-xl
//               p-4"
//             />

//           </div>

//           <button
//             type="submit"
//             className="
//             w-full
//             bg-brownie
//             text-white
//             py-4
//             rounded-xl
//             font-medium"
//           >
//             Update Password
//           </button>

//         </form>

//       </div>

//     </div>

//   );

// }



import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ShieldAlert, Trash2, KeyRound } from "lucide-react";

import api from "../../services/api";
import {
  updateProfile,
  changePassword,
  deleteAccount
} from "../../services/auth.api";
import { useAuth } from "../../context/AuthContext";
import ConfirmModal from "../../components/ui/ConfirmModal";

export default function Profile() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [profileData, setProfileData] = useState({
    name: "",
    avatar: ""
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: ""
  });

  // Account Deletion States
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await api.get("/auth/me");
      const currentUser = res.data.data;
      setUser(currentUser);

      setProfileData({
        name: currentUser.name || "",
        avatar: currentUser.avatar || ""
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateProfile(profileData);
      setUser(res.data);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to update profile"
      );
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      await changePassword(passwordData);
      toast.success("Password changed successfully");
      setPasswordData({
        oldPassword: "",
        newPassword: ""
      });
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to change password"
      );
    }
  };

  const handleAccountDeletion = async () => {
    if (!confirmPasswordInput) {
      toast.error("Verification credentials required.");
      return;
    }

    try {
      setDeleting(true);
      await deleteAccount(confirmPasswordInput);
      
      toast.success("Your account has been deleted successfully.");
      setDeleteConfirmOpen(false);
      
      logout();
      navigate("/login");
    } catch (error) {
      console.error("DELETION FAILURE:", error);
      toast.error(error.response?.data?.message || "Incorrect password.");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-sm font-semibold tracking-wide text-brownie/60">
        Loading profile settings...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-16 py-6 space-y-8 animate-fade-in text-brownie">
      
      {/* 1. Header Frame */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-brownie tracking-tight">
          Profile Settings
        </h1>
        <p className="text-sm text-coffee/60 mt-1 font-sans">
          Manage your account profile and password credentials.
        </p>
      </div>

      {/* 2. User Card Identity Summary Container */}
      <div className="bg-white rounded-3xl border border-caramel/15 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-20 h-20 rounded-full bg-brownie/15 border-2 border-caramel/20 flex items-center justify-center text-3xl font-bold select-none flex-shrink-0">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div className="space-y-1 min-w-0">
            <h2 className="text-xl font-bold tracking-tight truncate">{user?.name}</h2>
            <p className="text-sm font-medium text-coffee/60 truncate">{user?.email}</p>
            <div className="inline-block bg-caramel/10 border border-caramel/20 rounded-md text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 text-caramel mt-1">
              {user?.role || "Memory Keeper"}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Account Specifications Matrix Panel */}
      <div className="bg-white rounded-3xl border border-caramel/15 p-6 sm:p-8 shadow-sm space-y-5">
        <h3 className="text-lg font-bold tracking-tight border-b border-caramel/10 pb-3">
          Account Specifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm font-sans">
          <div>
            <span className="text-xs font-bold text-coffee/50 uppercase tracking-wider block">Profile Name</span>
            <span className="font-semibold">{user?.name}</span>
          </div>
          <div>
            <span className="text-xs font-bold text-coffee/50 uppercase tracking-wider block">Email Address</span>
            <span className="font-semibold">{user?.email}</span>
          </div>
          <div>
            <span className="text-xs font-bold text-coffee/50 uppercase tracking-wider block">Account ID</span>
            <span className="text-xs font-mono bg-neutral-50 px-2 py-1 rounded border border-caramel/5 select-all break-all block mt-1">
              {user?.id}
            </span>
          </div>
        </div>
      </div>

      {/* 4. Edit Profile Panel */}
      <div className="bg-white rounded-3xl border border-caramel/15 p-6 sm:p-8 shadow-sm">
        <h3 className="text-lg font-bold tracking-tight mb-6">Edit Profile</h3>
        <form onSubmit={handleProfileSubmit} className="space-y-5 font-sans">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-brownie/80 pl-0.5">Name</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleProfileChange}
                className="w-full bg-cream/20 border border-caramel/20 rounded-xl px-4 py-3 text-sm outline-none transition-all focus:border-caramel focus:bg-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-brownie/80 pl-0.5">Avatar URL</label>
              <input
                type="text"
                name="avatar"
                value={profileData.avatar}
                onChange={handleProfileChange}
                className="w-full bg-cream/20 border border-caramel/20 rounded-xl px-4 py-3 text-sm outline-none transition-all focus:border-caramel focus:bg-white"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-caramel text-white font-bold text-sm tracking-wide px-6 py-3 rounded-xl transition-all shadow-sm shadow-caramel/10 hover:bg-brownie active:scale-[0.98]"
          >
            Save Profile Changes
          </button>
        </form>
      </div>

      {/* 5. Password Authentication Modifier */}
      <div className="bg-white rounded-3xl border border-caramel/15 p-6 sm:p-8 shadow-sm">
        <h3 className="text-lg font-bold tracking-tight">Security</h3>
        <p className="text-xs text-coffee/60 mt-0.5 mb-6 font-sans">Change your account password below.</p>
        
        <form onSubmit={handlePasswordSubmit} className="space-y-5 font-sans">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-brownie/80 pl-0.5">Current Password</label>
              <input
                type="password"
                name="oldPassword"
                value={passwordData.oldPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full bg-cream/20 border border-caramel/20 rounded-xl px-4 py-3 text-sm outline-none transition-all focus:border-caramel focus:bg-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-brownie/80 pl-0.5">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full bg-cream/20 border border-caramel/20 rounded-xl px-4 py-3 text-sm outline-none transition-all focus:border-caramel focus:bg-white"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-brownie text-white font-bold text-sm tracking-wide px-6 py-3 rounded-xl transition-all shadow-sm shadow-brownie/10 hover:bg-coffee active:scale-[0.98]"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* 6. Danger Zone Panel */}
      <div className="bg-red-50/40 border border-red-200/60 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-red-100 text-red-700 flex-shrink-0 mt-0.5">
            <ShieldAlert size={20} />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-red-900 tracking-tight">Danger Zone</h3>
            <p className="text-xs sm:text-sm text-red-700 font-medium font-sans leading-relaxed">
              Taking this action will completely delete your account. This instantly erases your profile parameters, logged histories, timelines, and all uploaded audio files from our servers. This action cannot be undone.
            </p>
          </div>
        </div>
        <div className="pt-2 flex justify-start pl-12">
          <button
            type="button"
            onClick={() => {
              setConfirmPasswordInput("");
              setDeleteConfirmOpen(true);
            }}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-sm transition-all active:scale-[0.98]"
          >
            <Trash2 size={14} />
            <span>Delete Your Account</span>
          </button>
        </div>
      </div>

      {/* 7. Confirm Deletion Modal */}
      <ConfirmModal
        isOpen={deleteConfirmOpen}
        title="Delete Your Account?"
        confirmText={deleting ? "Deleting..." : "Permanently Delete Account"}
        cancelText="Keep My Account"
        onCancel={() => {
          if (!deleting) setDeleteConfirmOpen(false);
        }}
        onConfirm={handleAccountDeletion}
        message={
          <div className="space-y-4 font-sans text-left">
            <p>
              To authorize this change, please enter your password below to confirm it's really you.
            </p>
            <div className="space-y-1.5 pt-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-brownie/75 pl-0.5 flex items-center gap-1.5">
                <KeyRound size={12} className="text-caramel" />
                <span>Confirm Password</span>
              </label>
              <input
                type="password"
                required
                disabled={deleting}
                value={confirmPasswordInput}
                onChange={(e) => setConfirmPasswordInput(e.target.value)}
                placeholder="Enter your password to confirm"
                className="w-full bg-neutral-50 border border-caramel/20 rounded-xl px-4 py-3 text-sm text-brownie placeholder:text-coffee/40 outline-none transition-all focus:border-brownie focus:bg-white focus:ring-2 focus:ring-brownie/10 disabled:opacity-50"
              />
            </div>
          </div>
        }
      />

    </div>
  );
}