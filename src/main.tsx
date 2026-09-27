import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./lib/theme";
import { RouterProvider } from "./lib/router";
import { ToastProvider } from "./components/Toast";
import { BookmarksProvider } from "./lib/bookmarks";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider>
        <ThemeProvider>
          <BookmarksProvider>
            <ToastProvider>
              <App />
            </ToastProvider>
          </BookmarksProvider>
        </ThemeProvider>
      </RouterProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);

// Register Service Worker for caching iframe CDN assets
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered:", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed:", registrationError);
      });
  });
}
