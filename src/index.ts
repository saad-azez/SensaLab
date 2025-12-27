import { mountApp } from "./mountApp";

// Webflow-safe boot
// @ts-ignore
window.Webflow = window.Webflow || [];
// @ts-ignore
window.Webflow.push(() => mountApp());

// Local dev fallback
if (
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1"
) {
  mountApp();
}
