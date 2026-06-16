import React from "react";
import ReactDOM from "react-dom/client";


import {
  BrowserRouter,
} from "react-router-dom";
import { Toaster }
from "react-hot-toast";

import {
  AuthProvider,
} from "./context/AuthContext";

import App from "./App";

import "./index.css";
import { UIProvider } from "./context/UIContext";


ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

<BrowserRouter>

  <AuthProvider>

    <UIProvider>

      <App />
        <Toaster
    position="top-right"
  />

    </UIProvider>

  </AuthProvider>

</BrowserRouter>

  </React.StrictMode>
);