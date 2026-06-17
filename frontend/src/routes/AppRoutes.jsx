import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";

import Dashboard from "../pages/dashboard/Dashboard.jsx";

import Memories from "../pages/memories/Memories.jsx";
import Collections from "../pages/collections/Collections.jsx";
import CollectionDetails from "../pages/collections/CollectionDetails.jsx";
import Timeline from "../pages/timeline/Timeline.jsx";
import Stories from "../pages/stories/Stories.jsx";
import Insights from "../pages/insights/Insights.jsx";
import Assistant from "../pages/assistant/Assistant.jsx";
import MemoryDetails from "../pages/memories/MemoryDetails.jsx";
import EditMemory from "../pages/memories/EditMemory.jsx";
import EditCollection from "../pages/collections/EditCollection.jsx";
import CreateCollection from "../pages/collections/CreateCollection.jsx";
import LegalAndSecurity from "../pages/legal/LegalAndSecurity.jsx";
import Profile from "../pages/profile/Profile.jsx";
import ForgotPassword from "../pages/auth/ForgotPassword.jsx";
import MemoryByText from "../pages/memories/MemoryBYText.jsx";
import MemoryByAudio from "../pages/memories/MemoryByAudio.jsx";


import ProtectedRoute from "./ProtectedRoute.jsx";

import AppRoute from "../components/layout/AppLayout.jsx";

const AppRoutes = () => {

  return (

    <Routes>

      {/* Public Routes */}

      <Route
        path="/"
        element={
          <Navigate
            to="/login"
          />
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />
      <Route path="/legal" element={<LegalAndSecurity />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/reset-password/:token" element={<ForgotPassword />} />
      {/* Protected Routes */}

      <Route
        element={
          <ProtectedRoute>
            <AppRoute />
          </ProtectedRoute>
        }
      >

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/collections"
          element={<Collections />}
        />
        <Route
  path="/collections/new"
  element={<CreateCollection />}
/>

        <Route
          path="/collections/:id"
          element={<CollectionDetails />}
        />
        <Route
  path="/collections/:id/edit"
  element={
    <EditCollection />
  }
/>

        <Route
          path="/memories"
          element={<Memories />}
        />

        <Route
  path="/memories/:id"
  element={<MemoryDetails />}
/>

     <Route
      path="/timeline"
      element={<Timeline />}
    />

 <Route
  path="/stories"
  element={<Stories />}
/>

<Route
  path="/insights"
  element={<Insights />}
/>

<Route
  path="/assistant"
  element={<Assistant />}
/>
<Route path="/memories/create/text" element={<MemoryByText />} />
      <Route path="/memories/create/audio" element={<MemoryByAudio />} />
<Route
  path="/memories/:id/edit"
  element={<EditMemory />}
/>

<Route
  path="/profile"
  element={<Profile />}
/>

      </Route>

      {/* 404 */}

      <Route
        path="*"
        element={
          <Navigate
            to="/dashboard"
          />
        }
      />

    </Routes>

  );
};

export default AppRoutes;