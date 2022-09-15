// React Router Imports
import { Routes, Route } from "react-router-dom";
// Component Imports
import Basic from "../components/Basic";
import Advanced from "../components/Advanced";
import NoPageFound from "../components/NoPageFound";


function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="Advanced" element={<Advanced />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </main>
  );
}

export default Main;