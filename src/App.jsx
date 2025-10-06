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
        <div className='bg-white rounded-[10px] mt-[10px] ml-[10px] h-[40px]'>
 جميع الحقوق محفوظة لدى
        </div>
      </div>
    </div>
  );
}

export default App;
