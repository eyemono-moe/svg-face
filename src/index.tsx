/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { OptionProvider } from "./components/context/OptionContext";

render(
  () => (
    <OptionProvider>
      <App />
    </OptionProvider>
  ),
  document.getElementById("root") as HTMLElement
);
