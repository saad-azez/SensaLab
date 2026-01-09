import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

/* ---------------- SCROLL SAFETY (MANDATORY) ---------------- */

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

/* ---------------- WEBFLOW SAFE MOUNT ---------------- */

export function mountApp() {
    const container =
        document.querySelector('[data-sensa="app"]') ||
        document.getElementById("root");

    if (!container) return;

    if ((container as any).__reactRoot) return;

    const root = createRoot(container);
    (container as any).__reactRoot = root;

    root.render(<App />);
}

/* Webflow */
(window as any).Webflow = (window as any).Webflow || [];
(window as any).Webflow.push(mountApp);

/* Local dev */
if (location.hostname === "localhost") {
    mountApp();
}

