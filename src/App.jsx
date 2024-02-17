import "./App.css";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <main className="bg-neutral-50 min-h-screen container mx-auto">
      <ToastContainer />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
