import { useState, useEffect } from "react";
import HomePage from "@/app/pages/HomePage";
import StreamersPage from "@/app/pages/StreamersPage";
import ReglementPage from "@/app/pages/ReglementPage";
import LegalPage from "@/app/pages/LegalPage";
import IllegalPage from "@/app/pages/IllegalPage";
import DiscordPage from "@/app/pages/DiscordPage";
import ServeurPage from "@/app/pages/ServeurPage";
import { EntreprisesPage } from "@/app/pages/EntreprisesPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Listen for hash changes to navigate between pages
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove #
      if (hash === "streamers") {
        setCurrentPage("streamers");
      } else if (hash === "reglement") {
        setCurrentPage("reglement");
      } else if (hash === "legal") {
        setCurrentPage("legal");
      } else if (hash === "illegal") {
        setCurrentPage("illegal");
      } else if (hash === "discord") {
        setCurrentPage("discord");
      } else if (hash === "serveur") {
        setCurrentPage("serveur");
      } else if (hash === "entreprises") {
        setCurrentPage("entreprises");
      } else {
        setCurrentPage("home");
      }
    };

    // Initial check
    handleHashChange();

    // Listen to hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Render the appropriate page
  if (currentPage === "streamers") {
    return <StreamersPage />;
  }

  if (currentPage === "reglement") {
    return <ReglementPage />;
  }

  if (currentPage === "legal") {
    return <LegalPage />;
  }

  if (currentPage === "illegal") {
    return <IllegalPage />;
  }

  if (currentPage === "discord") {
    return <DiscordPage />;
  }

  if (currentPage === "serveur") {
    return <ServeurPage />;
  }

  if (currentPage === "entreprises") {
    return <EntreprisesPage />;
  }

  return <HomePage />;
}