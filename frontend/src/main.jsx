import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import { CartProvider } from "./context/CarContext";
import "../src/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <AppRouter />
    </CartProvider>
  </React.StrictMode>
);
