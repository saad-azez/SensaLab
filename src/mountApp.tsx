import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

/**
 * SensaLab Bootstrapper
 * Handles the React mounting lifecycle.
 */
export function mountApp(): void {
    // Prefer data-attribute for Webflow, fallback to #root
    const container =
        document.querySelector('[data-sensa="app"]') ||
        document.getElementById("root");

    if (!container) {
        console.warn(
            "SensaLab: Mount point not found. Ensure [data-sensa='app'] or #root exists."
        );
        return;
    }

    // Prevent double mounting (Webflow can re-run scripts)
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
        "color: #6366f1; font-weight: bold;"
    );
}

/**
 * Webflow Integration
 * Ensures React mounts after Webflow is ready.
 */
// @ts-ignore
window.Webflow = window.Webflow || [];
// @ts-ignore
window.Webflow.push(() => {
    mountApp();
});

/**
 * Local Development Auto-Init
 * Mount immediately when running outside Webflow.
 */
if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
) {
    mountApp();
}
