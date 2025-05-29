import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import Allroutes from "./routes/Allroutes.jsx";
import AuthProvider from "./providers/AuthContextprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AnimatePresence mode="wait">
        <Allroutes />
      </AnimatePresence>
    </AuthProvider>
  </StrictMode>
);
