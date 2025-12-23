import Navbar from "@/components/layout/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
    </div>
  );
}
