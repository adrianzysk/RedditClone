import React from "react";
import { HomePage } from "@modules";
import {
  NavBarGlobalComponent,
  MainGlobalComponent,
} from "@/global-components";

const App: React.FC = () => (
  <>
    <NavBarGlobalComponent />
    <MainGlobalComponent />
  </>
);

export default App;
