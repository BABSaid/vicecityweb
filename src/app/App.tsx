import { useState, useEffect } from "react";
import HomePage from "@/app/pages/HomePage";
import StreamersPage from "@/app/pages/StreamersPage";
import ReglementPage from "@/app/pages/ReglementPage";
import LegalPage from "@/app/pages/LegalPage";
import IllegalPage from "@/app/pages/IllegalPage";
import DiscordPage from "@/app/pages/DiscordPage";
import ServeurPage from "@/app/pages/ServeurPage";
import { EntreprisesPage } from "@/app/pages/EntreprisesPage";
import { TwitchDebug } from "@/app/components/TwitchDebug";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showDebug, setShowDebug] = useState(false);

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
      } else if (hash === "debug") {
        setShowDebug(true);
      } else {
        setCurrentPage("home");
        setShowDebug(false);
      }
    };

    // Initial check
    handleHashChange();

    // Listen to hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Render the appropriate page
  let PageComponent;
  
  if (showDebug) {
    PageComponent = <TwitchDebug />;
  } else if (currentPage === "streamers") {
    PageComponent = <StreamersPage />;
  } else if (currentPage === "reglement") {
    PageComponent = <ReglementPage />;
  } else if (currentPage === "legal") {
    PageComponent = <LegalPage />;
  } else if (currentPage === "illegal") {
    PageComponent = <IllegalPage />;
  } else if (currentPage === "discord") {
    PageComponent = <DiscordPage />;
  } else if (currentPage === "serveur") {
    PageComponent = <ServeurPage />;
  } else if (currentPage === "entreprises") {
    PageComponent = <EntreprisesPage />;
  } else {
    PageComponent = <HomePage />;
  }

  return (
    <>
      {PageComponent}
      <Analytics />
    </>
  );
}