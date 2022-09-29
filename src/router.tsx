import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Sidebar } from "./components/Sidebar";
import { Recording } from "./pages/Recording";
import { ViewEvents } from "./pages/Events";
import { Header } from "./components/Header";
import { useState } from "react";
import { Program } from "./pages/Program";
import { ManageContent } from "./pages/ManageContent";

export const Pagination: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen && <Sidebar />}
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/recording' element={ <Recording /> } />
        <Route path='/event' element={ <ViewEvents /> } />
        <Route path='/program' element={ <Program /> } />
        <Route path='/settings' element={ <ManageContent /> } />
      </Routes>
    </>
   
  );
};
