import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./globals.css";

export function initKeyboard() {
  const html = document.documentElement;
  const onKey = () => html.classList.add("kbd");
  const onMouse = () => html.classList.remove("kbd");
  window.addEventListener("keydown", onKey);
  window.addEventListener("mousedown", onMouse);
}

initKeyboard();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);