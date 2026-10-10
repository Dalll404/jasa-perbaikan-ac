import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Booking } from "./components/Booking";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="min-h-screen bg-[#f8f8f3] text-slate-800 antialiased">
      <div className="flex min-h-screen flex-col">
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        <main className="flex-1 overflow-hidden">
          {activePage === "home" && <Home setActivePage={setActivePage} />}
          {activePage === "booking" && <Booking />}
        </main>

        <Footer setActivePage={setActivePage} />
      </div>
    </div>
  );
}
