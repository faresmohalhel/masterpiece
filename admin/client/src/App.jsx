/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Dashboard
import { DashBoard } from "./Admin/DashBoard";
import { Items } from "./Admin/Items/Items";
import { Users } from "./Admin/Users/Users";
import { Nav } from "./Admin/Nav";
import { Aside } from "./Admin/Aside";
import { PageNotFound } from "./Admin/PageNotFound";
import "./App.css";

export const RefreshContext = createContext();

function App() {
  const [refresh, setRefresh] = useState(true);
  return (
    <RefreshContext.Provider value={{ refresh, setRefresh }}>
      <BrowserRouter>
        <Nav />
        <Aside />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/items" element={<Items />} />
          <Route path="/users" element={<Users />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </RefreshContext.Provider>
  );
}

export default App;
