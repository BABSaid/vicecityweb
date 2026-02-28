// src/app/pages/StreamersPage.tsx
import { useState, useMemo } from "react";
import { Search, Users, Tv } from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { useTwitchLiveStatus } from "@/app/hooks/useTwitchLiveStatus";

// Type de streamer
interface Streamer {
  id: number;
  pseudo: string;
  username?: string; // login exact Twitch
  platform: "twitch" | "youtube";
  isLive: boolean;
  viewers: number;
  imageUrl: string;
  profileUrl: string;
  badges: string[];
  category: "staff" | "partner";
  title?: string; // Twitch stream title
}

// Données des streamers
const streamersData: Streamer[] = [
  { id: 1, pseudo: "InconnuuOnTop", username: "inconnueontop", platform: "twitch", isLive: false, viewers: 0, imageUrl: "https://i.imgur.com/RgC31Zq.png", profileUrl: "https://www.twitch.tv/inconnuontop", badges: ["STAFF"], category: "staff" },
  { id: 2, pseudo: "CANRZ_RL", username: "canrz_rl", platform: "twitch", isLive: false, viewers: 0, imageUrl: "https://i.imgur.com/z3Evqug.png", profileUrl: "https://www.twitch.tv/canrz_rl", badges: ["STAFF"], category: "staff" },
  { id: 3, pseudo: "INCONNUEONTOP2025", username: "inconnueontop2025", platform: "twitch", isLive: false, viewers: 0, imageUrl: "https://i.imgur.com/RgC31Zq.png", profileUrl: "https://www.twitch.tv/inconnueontop2025", badges: ["STAFF"], category: "staff" },
  { id: 4, pseudo: "B4NOFFICIEL", username: "b4nofficiel", platform: "twitch", isLive: false, viewers: 0, imageUrl: "https://i.imgur.com/HhN6eFx.png", profileUrl: "https://www.twitch.tv/b4nofficiel", badges: ["STAFF"], category: "staff" }
];

type SortOption = "viewers_desc" | "viewers_asc" | "pseudo_asc" | "pseudo_desc";

export default function StreamersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("viewers_desc");
  const [activeCategory, setActiveCategory] = useState<"all" | "staff" | "partner">("all");

  // usernames Twitch exacts
  const twitchUsernames = useMemo(() => streamersData.filter(s => s.platform === "twitch").map(s => s.username!), []);

  // Hook pour statut live Twitch
  const { liveStatus, isLoading } = useTwitchLiveStatus(twitchUsernames, 60000);

  // Fusionner statut live
  const streamers = useMemo(() => streamersData.map(s => {
    if (s.platform === "twitch" && s.username) {
      const status = liveStatus[s.username.toLowerCase()];
      if (status) return { ...s, isLive: status.isLive, viewers: status.viewers, title: status.title, imageUrl: status.thumbnail || s.imageUrl };
    }
    return s;
  }), [liveStatus]);

  // Filtrer et trier
  const filteredStreamers = streamers
    .filter(s => (activeCategory === "all" || s.category === activeCategory) && s.pseudo.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a,b) => {
      switch(sortBy) {
        case "viewers_desc": return b.viewers - a.viewers;
        case "viewers_asc": return a.viewers - b.viewers;
        case "pseudo_asc": return a.pseudo.localeCompare(b.pseudo);
        case "pseudo_desc": return b.pseudo.localeCompare(a.pseudo);
        default: return 0;
      }
    });

  const liveStreamers = filteredStreamers.filter(s => s.isLive);
  const offlineStreamers = filteredStreamers.filter(s => !s.isLive);

  const staffCount = streamers.filter(s => s.category === "staff").length;
  const partnerCount = streamers.filter(s => s.category === "partner").length;
  const onlineCount = liveStreamers.length;
  const offlineCount = offlineStreamers.length;

  return (
    <div className="min-h-screen bg-[#1a0a2e] relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-800 to-[#1a0a2e]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://i.imgur.com/vUTMHhU.png')`, backgroundSize:'cover', backgroundPosition:'center' }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500/10 rotate-45 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-500/10 rotate-45 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Header showHelpButton={true} />

        <main className="px-4 py-12 max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-purple-600/30 border border-purple-400/50 rounded-full mb-4">
              <Tv className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 font-bold text-sm uppercase tracking-wider">NOS STREAMERS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase" style={{ textShadow: '0 0 40px rgba(168,85,247,0.8), 0 0 80px rgba(236,72,153,0.5)'}}>NOS STREAMERS</h1>
            <div className="h-1.5 w-40 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button onClick={() => setActiveCategory("all")} className={`px-8 py-3 rounded-lg font-bold uppercase text-sm transition-all duration-300 ${activeCategory==="all" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "bg-purple-900/30 text-gray-300 border border-purple-600/40"}`}><Users className="w-4 h-4 inline-block mr-2"/>Tous ({streamers.length})</button>
            <button onClick={() => setActiveCategory("staff")} className={`px-8 py-3 rounded-lg font-bold uppercase text-sm transition-all duration-300 ${activeCategory==="staff" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "bg-purple-900/30 text-gray-300 border border-purple-600/40"}`}>Staff ({staffCount})</button>
            <button onClick={() => setActiveCategory("partner")} className={`px-8 py-3 rounded-lg font-bold uppercase text-sm transition-all duration-300 ${activeCategory==="partner" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "bg-purple-900/30 text-gray-300 border border-purple-600/40"}`}>Partners ({partnerCount})</button>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-pink-400 w-5 h-5"/>
              <input type="text" placeholder="RECHERCHE PAR LE PSEUDO..." value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border-2 border-purple-600/50 rounded-full pl-14 pr-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-all text-center font-bold uppercase tracking-wider"/>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="px-6 py-3 bg-black/40 border border-green-500/50 rounded-lg flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">EN LIGNE : </span>
              <span className="text-green-400 font-bold text-lg">{onlineCount}</span>
            </div>
            <div className="px-6 py-3 bg-black/40 border border-gray-600/50 rounded-lg flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span className="text-gray-300 text-sm">HORS-LIGNE : </span>
              <span className="text-gray-400 font-bold text-lg">{offlineCount}</span>
            </div>
            <div className="px-6 py-3 bg-black/40 border border-purple-500/50 rounded-lg flex items-center gap-2">
              {isLoading ? <div className="w-3 h-3 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div> : <span className="text-purple-400 font-bold text-sm">API Twitch Active</span>}
            </div>
          </div>

          {/* LIVE Streamers */}
          {liveStreamers.length>0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white uppercase tracking-wider text-center mb-8">EN DIRECT MAINTENANT</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {liveStreamers.map(s => <StreamerCardLarge key={s.id} streamer={s}/>)}
              </div>
            </div>
          )}

          {/* Offline Streamers */}
          {offlineStreamers.length>0 && (
            <div>
              {liveStreamers.length>0 && <h2 className="text-2xl font-black text-gray-300 uppercase tracking-wider text-center mb-8">Nos Streamers</h2>}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {offlineStreamers.map(s => <StreamerCardPolaroid key={s.id} streamer={s}/>)}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredStreamers.length===0 && (
            <div className="text-center py-20">
              <div className="inline-block p-8 bg-black/40 border border-purple-600/30 rounded-lg">
                <p className="text-gray-400 text-xl font-bold">Aucun streamer trouvé</p>
              </div>
            </div>
          )}
        </main>

        <Footer/>
      </div>
    </div>
  );
}

// Large Card for live streamers
function StreamerCardLarge({ streamer }: { streamer: Streamer }) {
  return (
    <a href={streamer.profileUrl} target="_blank" rel="noopener noreferrer"
       className="group relative bg-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 border-4 border-pink-500 shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <img src={streamer.imageUrl} alt={streamer.pseudo} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {streamer.badges.map((b,i)=><div key={i} className="bg-purple-600 text-white px-3 py-1 rounded-lg font-bold text-sm">{b}</div>)}
        </div>
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-lg font-black flex items-center gap-2 animate-pulse">LIVE</div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-black">{streamer.pseudo}</h3>
          {streamer.title && <p className="text-sm text-gray-300">{streamer.title}</p>}
          {streamer.viewers>0 && <p className="text-pink-400 font-bold">👁️ {streamer.viewers} viewers</p>}
        </div>
      </div>
    </a>
  );
}

// Polaroid card for offline streamers
function StreamerCardPolaroid({ streamer }: { streamer: Streamer }) {
  return (
    <a href={streamer.profileUrl} target="_blank" rel="noopener noreferrer" className="group relative transition-all duration-300 hover:scale-105">
      <div className="bg-white p-3 pb-12 rounded-lg shadow-2xl transform rotate-0 group-hover:rotate-2 transition-transform duration-300">
        <div className="relative aspect-video overflow-hidden rounded-sm bg-black">
          <img src={streamer.imageUrl} alt={streamer.pseudo} className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">{streamer.badges.map((b,i)=><div key={i} className="bg-purple-600 text-white px-2 py-0.5 rounded text-xs font-bold uppercase">{b}</div>)}</div>
          <div className="absolute top-2 right-2 bg-gray-700/90 text-gray-300 px-2 py-1 rounded text-xs font-bold">OFFLINE</div>
        </div>
        <div className="absolute bottom-3 left-0 right-0 text-center"><p className="text-gray-800 font-bold text-sm uppercase tracking-wide">{streamer.pseudo}</p></div>
      </div>
    </a>
  );
}
