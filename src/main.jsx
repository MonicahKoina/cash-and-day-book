import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "./components/ui/provider";

createRoot(document.getElementById("root")).render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
