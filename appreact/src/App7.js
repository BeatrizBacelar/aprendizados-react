// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useMemo} from "react";
import Produto3 from './Produto3';
import { GlobalStorage } from "./GlobalContext";

const App7 = () => {
 
  return  (
  <GlobalStorage>
    <Produto3 />
  </GlobalStorage>
  );

};

export default App7;
