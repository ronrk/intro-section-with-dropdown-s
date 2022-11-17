import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const App = () => {
  const [isSidebarOpen, setIsSidearOpen] = useState(false);

  const openSidebar = () => {
    setIsSidearOpen(true);
  };
  const closeSidebar = () => {
    setIsSidearOpen(false);
  };
  return (
    <div
      className={isSidebarOpen ? "app-container show-sidebar" : "app-container"}
    >
      {isSidebarOpen ? <Sidebar closeSidebar={closeSidebar} /> : null}
      <main className={isSidebarOpen ? "overlay" : ""}>
        <Navbar openSidebar={openSidebar} isSidebarOpen={isSidebarOpen} />
        <Content closeSidebar={closeSidebar} />
      </main>
    </div>
  );
};

export default App;
