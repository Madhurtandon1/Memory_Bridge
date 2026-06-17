import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/Auth/Login.jsx";
import Register from "../pages/Auth/Register.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import Memories from "../pages/Memories/Memories.jsx";
import Collections from "../pages/Collections/Collections.jsx";
import CollectionDetails from "../pages/Collections/CollectionDetails.jsx";
import Timeline from "../pages/Timeline/Timeline.jsx";
import Stories from "../pages/Stories/Stories.jsx";
import Insights from "../pages/Insights/Insights.jsx";
import MemoryDetails from "../pages/Memories/MemoryDetails.jsx";
import EditMemory from "../pages/Memories/EditMemory.jsx";
import EditCollection from "../pages/Collections/EditCollection.jsx";
import CreateCollection from "../pages/Collections/CreateCollection.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import ForgotPassword from "../pages/Auth/ForgotPassword.jsx";
import MemoryByText from "../pages/Memories/MemoryBYText.jsx";
import MemoryByAudio from "../pages/Memories/MemoryByAudio.jsx";
import Assistant from "../pages/assistant/Assistant.jsx";
import LegalAndSecurity from "../pages/legal/LegalAndSecurity.jsx";
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