import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Context/Productcontext";
import { Filtercontextprovider } from "./Context/Filter_context";
import { Cartpovider } from "./Context/Cart_context";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      <AppProvider>
        <Filtercontextprovider>
          <Cartpovider>
            <App />
          </Cartpovider>
        </Filtercontextprovider>
      </AppProvider>

  </React.StrictMode>
);
