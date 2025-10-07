import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import KanbanPage from "./pages/KanbanPage";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className="flex items-start" dir="rtl">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Navbar />

        <div
          className={`w-[1010px] h-[79vh] ml-[10px] mt-3  rounded-[10px] 
                      bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 `}
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
