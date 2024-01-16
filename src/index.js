import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./react/App";

const rootElement = document.getElementById("root");
const basename = rootElement.dataset.path;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App basename={basename} />
  </StrictMode>,
);
