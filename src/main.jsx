import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Allroutes from "./routes/Allroutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Allroutes />
  </StrictMode>
);
