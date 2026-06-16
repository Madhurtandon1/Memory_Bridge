import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";

import Memories from "../pages/memories/Memories";
import Collections from "../pages/collections/Collections";
import CollectionDetails from "../pages/collections/CollectionDetails";
import Timeline from "../pages/timeline/Timeline";
import Stories from "../pages/stories/Stories";
import Insights from "../pages/insights/Insights";
import Assistant from "../pages/assistant/Assistant";
import MemoryDetails from "../pages/memories/MemoryDetails";
import EditMemory from "../pages/memories/EditMemory";
import EditCollection from "../pages/collections/EditCollection";
import CreateCollection from "../pages/collections/CreateCollection";
import LegalAndSecurity from "../pages/legal/LegalAndSecurity";
import Profile from "../pages/profile/Profile";
import ForgotPassword from "../pages/auth/ForgotPassword";
import MemoryByText from "../pages/memories/MemoryByText";
import MemoryByAudio from "../pages/memories/MemoryByAudio";


import ProtectedRoute from "./ProtectedRoute";

import AppRoute from "../components/layout/AppLayout";

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