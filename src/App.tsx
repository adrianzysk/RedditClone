import React from "react";
import { HomePage } from "@modules";
import {
  NavBarGlobalComponent,
  MenuGlobalComponent,
} from "@/global-components";

const App: React.FC = () => (
  <>
    <NavBarGlobalComponent />
    <MenuGlobalComponent />
  </>
);

export default App;
