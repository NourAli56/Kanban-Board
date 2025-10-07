import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import KanbanPage from "./pages/KanbanPage";
import { ThemeProvider } from "./context/ThemeContext";

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex flex-col md:flex-row items-start" dir="rtl">
      {/* Sidebar fixed on desktop, overlay on mobile */}
      <div
        className={`
          fixed md:static top-0 left-0 h-full z-50
          w-68 md:w-[260px] 
          bg-transparent  text-gray-900 dark:text-gray-100
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <Sidebar />
      </div>

      {/* Overlay background on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div className="flex-1 flex flex-col w-full">
        <Navbar toggleSidebar={toggleSidebar} />

        <div
          className="w-full max-w-[1000px] h-[79vh] mt-3 mx-2 md:ml-3 rounded-[10px] 
                     bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        >
          <KanbanPage />
        </div>

        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
