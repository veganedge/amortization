// React Router Imports
import { Routes, Route } from "react-router-dom";
// Component Imports
import LoanInfo from "../components/LoanInfo";
import NoPageFound from "../components/NoPageFound";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LoanInfo />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </main>
  );
}

export default Main;
