import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import MyPagination from "./pagination";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MyPagination />
  </StrictMode>
);
