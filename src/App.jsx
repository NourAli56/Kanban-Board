import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex items-start" dir="rtl" >
      <Sidebar />
      <div className="w-full" >
        <Navbar />
        <div className="h-[79vh] ml-[10px] p-4" >
          body
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
