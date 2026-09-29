import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Booking } from "./components/Booking";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-grow">
        {activePage === "home" && <Home setActivePage={setActivePage} />}
        {activePage === "booking" && <Booking />}
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
