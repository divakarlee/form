import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
 import Details from "./components/Details";
 import Data from "./components/Data";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<Details />} />
        <Route path={"/data"} element={<Data />} />
         
 

        {/* Not found route */}
        <Route
          path="*"
          element={
            <div style={{ fontSize: "40px", textAlign: "center" }}>
              404 Not found
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}
export default App;