import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

export function mountApp() {
    const container =
        document.querySelector('[data-sensa="app"]') ||
        document.getElementById("root");

    if (!container) {
        console.warn(
            "SensaLab: Mount point not found. Ensure [data-sensa='app'] or #root exists."
        );
        return;
    }

    if ((container as any)._reactRoot) return;

    const root = createRoot(container);
    (container as any)._reactRoot = root;

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );

    console.log(
        "%cSensaLab: Digital Experience Mounted",
        "color:#6366f1;font-weight:bold;"
    );
}
