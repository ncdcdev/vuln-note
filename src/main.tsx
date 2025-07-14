import "./index.css";

import { NuqsAdapter } from "nuqs/adapters/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <NuqsAdapter>
        <StrictMode>
            <App />
        </StrictMode>
    </NuqsAdapter>,
);
