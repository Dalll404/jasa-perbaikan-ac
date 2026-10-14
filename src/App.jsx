import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Booking } from "./components/Booking";

function scrollToServices() {
  window.setTimeout(() => {
    document.getElementById("layanan")?.scrollIntoView({ behavior: "smooth" });
  }, 0);
}

export default function App() {
  const [activePage, setActivePage] = useState(() =>
    window.location.hash === "#booking" ? "booking" : "home",
  );
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const syncPage = () => {
      setActivePage(window.location.hash === "#booking" ? "booking" : "home");
    };
    window.addEventListener("hashchange", syncPage);
    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  const navigate = (page, service = "") => {
    setSelectedService(service);
    setActivePage(page);
    const hash = page === "booking" ? "#booking" : "#home";
    if (window.location.hash !== hash) window.history.pushState(null, "", hash);
    if (page === "home" && service === "#layanan") scrollToServices();
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f8f8f3] text-slate-800 antialiased">
      <div className="flex min-h-screen flex-col">
        <Navbar activePage={activePage} setActivePage={navigate} />

        <main className="flex-1 overflow-hidden">
          {activePage === "home" && <Home setActivePage={navigate} />}
          {activePage === "booking" && (
            <Booking
              selectedService={selectedService}
              setActivePage={navigate}
            />
          )}
        </main>

        <Footer setActivePage={navigate} />
      </div>
    </div>
  );
}
