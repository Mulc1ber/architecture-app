import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <MantineProvider forceColorScheme="dark">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>
);
