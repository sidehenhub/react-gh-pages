import './styles.css'; /* had to import to fix styling problems */ 
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
   document.getElementById("root"));
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);

