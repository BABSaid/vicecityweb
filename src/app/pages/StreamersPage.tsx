import { useState } from "react";
import { Search, Users, Tv } from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

// Types de données pour les streamers
interface Streamer {
  id: number;
  pseudo: string;
  platform: "twitch" | "youtube";
  isLive: boolean;
  viewers: number;
  imageUrl: string;
  profileUrl: string;
  badges: string[];
  category: "staff" | "partner"; // Nouvelle catégorie
}

// Données d'exemple (à personnaliser)
const streamersData: Streamer[] = [
  {
    id: 1,
    pseudo: "INCONNUEONTOP",
    platform: "twitch",
    isLive: false,
    viewers: 0,
    imageUrl: "https://i.imgur.com/RgC31Zq.png",
    profileUrl: "https://www.twitch.tv/inconnueontop",
    badges: ["STAFF"],
    category: "staff"
  },
  {
    id: 2,
    pseudo: "CANRZ_RL",
    platform: "twitch",
    isLive: false,
    viewers: 0,
    imageUrl: "https://i.imgur.com/z3Evqug.png",
    profileUrl: "https://www.twitch.tv/canrz_rl",
    badges: ["STAFF"],
    category: "staff"
  },
  {
    id: 3,
    pseudo: "INCONNUEONTOP2025",
    platform: "twitch",
    isLive: false,
    viewers: 0,
    imageUrl: "https://i.imgur.com/RgC31Zq.png",
    profileUrl: "https://www.twitch.tv/inconnueontop2025",
    badges: ["STAFF"],
    category: "staff"
  },
  {
    id: 4,
    pseudo: "B4NOFFICIEL",
    platform: "twitch",
    isLive: false,
    viewers: 0,
    imageUrl: "https://i.imgur.com/HhN6eFx.png",
    profileUrl: "https://www.twitch.tv/b4nofficiel",
    badges: ["STAFF"],
    category: "staff"
  }
];

type SortOption = "viewers_desc" | "viewers_asc" | "pseudo_asc" | "pseudo_desc";

export default function StreamersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("viewers_desc");
  const [streamers] = useState<Streamer[]>(streamersData);
  const [activeCategory, setActiveCategory] = useState<"all" | "staff" | "partner">("all");

  // Filtrer et trier les streamers
  const filteredStreamers = streamers
    .filter(s => {
      const matchesSearch = s.pseudo.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "all" || s.category === activeCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "viewers_desc":
          return b.viewers - a.viewers;
        case "viewers_asc":
          return a.viewers - b.viewers;
        case "pseudo_asc":
          return a.pseudo.localeCompare(b.pseudo);
        case "pseudo_desc":
          return b.pseudo.localeCompare(a.pseudo);
        default:
          return 0;
      }
    });

  // Séparer les streamers en direct et hors ligne
  const liveStreamers = filteredStreamers.filter(s => s.isLive);
  const offlineStreamers = filteredStreamers.filter(s => !s.isLive);

  const onlineCount = streamers.filter(s => s.isLive).length;
  const offlineCount = streamers.filter(s => !s.isLive).length;
  const staffCount = streamers.filter(s => s.category === "staff").length;
  const partnerCount = streamers.filter(s => s.category === "partner").length;

  return (
    <div className="min-h-screen bg-[#1a0a2e] relative overflow-hidden">
      {/* Background with city silhouette */}
      <div className="fixed inset-0 z-0">
        {/* Gradient violet/rose */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-800 to-[#1a0a2e]"></div>
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://i.imgur.com/vUTMHhU.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
        </div>

        {/* City silhouette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Geometric shapes for Miami Vice feel */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500/10 rotate-45 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-500/10 rotate-45 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header showHelpButton={true} />

        <main className="px-4 py-12 max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-purple-600/30 border border-purple-400/50 rounded-full mb-4">
              <Tv className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 font-bold text-sm uppercase tracking-wider">NOS STREAMERS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase"
                style={{
                  textShadow: '0 0 40px rgba(168, 85, 247, 0.8), 0 0 80px rgba(236, 72, 153, 0.5)'
                }}>
              NOS STREAMERS
            </h1>
            <div className="h-1.5 w-40 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-8 py-3 rounded-lg font-bold uppercase text-sm transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_30px_rgba(236,72,153,0.6)]"
                  : "bg-purple-900/30 text-gray-300 border border-purple-600/40 hover:border-purple-400"
              }`}
            >
              <Users className="w-4 h-4 inline-block mr-2" />
              Tous ({streamers.length})
            </button>
            <button
              onClick={() => setActiveCategory("staff")}
              className={`px-8 py-3 rounded-lg font-bold uppercase text-sm transition-all duration-300 ${
                activeCategory === "staff"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_30px_rgba(236,72,153,0.6)]"
                  : "bg-purple-900/30 text-gray-300 border border-purple-600/40 hover:border-purple-400"
              }`}
            >
              Staff ({staffCount})
            </button>
            <button
              onClick={() => setActiveCategory("partner")}
              className={`px-8 py-3 rounded-lg font-bold uppercase text-sm transition-all duration-300 ${
                activeCategory === "partner"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_30px_rgba(236,72,153,0.6)]"
                  : "bg-purple-900/30 text-gray-300 border border-purple-600/40 hover:border-purple-400"
              }`}
            >
              Partners ({partnerCount})
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-pink-400 w-5 h-5" />
              <input
                type="text"
                placeholder="RECHERCHE PAR LE PSEUDO..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border-2 border-purple-600/50 rounded-full pl-14 pr-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-all text-center font-bold uppercase tracking-wider"
                style={{
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
                }}
              />
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="px-6 py-3 bg-black/40 border border-green-500/50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm">EN LIGNE : </span>
                <span className="text-green-400 font-bold text-lg">{onlineCount}</span>
              </div>
            </div>
            <div className="px-6 py-3 bg-black/40 border border-gray-600/50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">HORS-LIGNE : </span>
                <span className="text-gray-400 font-bold text-lg">{offlineCount}</span>
              </div>
            </div>
          </div>

          {/* Section EN DIRECT MAINTENANT */}
          {liveStreamers.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-red-500 to-pink-500"></div>
                <div className="flex items-center gap-3 px-6 py-3 bg-black/60 border-2 border-red-500 rounded-full"
                     style={{
                       boxShadow: '0 0 30px rgba(239, 68, 68, 0.6)'
                     }}>
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-wider"
                      style={{
                        textShadow: '0 0 20px rgba(239, 68, 68, 0.8)'
                      }}>
                    EN DIRECT MAINTENANT
                  </h2>
                </div>
                <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-pink-500 to-red-500"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {liveStreamers.map((streamer) => (
                  <StreamerCardLarge key={streamer.id} streamer={streamer} />
                ))}
              </div>
            </div>
          )}

          {/* Section STREAMERS (Polaroid style) */}
          {offlineStreamers.length > 0 && (
            <div>
              {liveStreamers.length > 0 && (
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-pink-500"></div>
                  <h2 className="text-2xl font-black text-gray-300 uppercase tracking-wider">
                    Nos Streamers
                  </h2>
                  <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-pink-500 to-purple-500"></div>
                </div>
              )}
              
              {/* Polaroid Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {offlineStreamers.map((streamer) => (
                  <StreamerCardPolaroid key={streamer.id} streamer={streamer} />
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredStreamers.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-block p-8 bg-black/40 border border-purple-600/30 rounded-lg">
                <p className="text-gray-400 text-xl font-bold">Aucun streamer trouvé</p>
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

// Large Card for LIVE streamers
function StreamerCardLarge({ streamer }: { streamer: Streamer }) {
  const getBadgeStyles = (badge: string) => {
    if (badge === "STAFF") {
      return {
        bg: "bg-gradient-to-r from-purple-600 to-pink-600",
        shadow: "shadow-[0_0_15px_rgba(168,85,247,0.8)]",
        text: "text-white"
      };
    }
    return {
      bg: "bg-gray-600",
      shadow: "",
      text: "text-white"
    };
  };

  return (
    <a
      href={streamer.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 border-4 border-pink-500"
      style={{
        boxShadow: '0 0 40px rgba(236, 72, 153, 0.8), 0 0 80px rgba(168, 85, 247, 0.5)'
      }}
    >
      {/* Animated glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-75 animate-pulse pointer-events-none"
           style={{
             boxShadow: '0 0 30px rgba(236, 72, 153, 0.8), inset 0 0 30px rgba(236, 72, 153, 0.4)'
           }}>
      </div>

      {/* Streamer Image */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={streamer.imageUrl} 
          alt={streamer.pseudo}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {streamer.badges?.map((badge, index) => {
            const styles = getBadgeStyles(badge);
            return (
              <div 
                key={index}
                className={`${styles.bg} ${styles.text} px-3 py-1.5 rounded-lg font-bold text-sm uppercase ${styles.shadow}`}
              >
                {badge}
              </div>
            );
          })}
        </div>
        
        {/* LIVE Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-black text-base flex items-center gap-2"
               style={{
                 boxShadow: '0 0 25px rgba(220, 38, 38, 0.9)'
               }}>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            LIVE
          </div>
        </div>

        {/* Streamer Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-3 mb-2">
            {/* Platform Icon */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              streamer.platform === 'twitch' ? 'bg-purple-600' : 'bg-red-600'
            }`}>
              {streamer.platform === 'twitch' ? (
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              )}
            </div>
            
            <h3 className="text-2xl font-black uppercase text-pink-300"
                style={{ textShadow: '0 0 15px rgba(236, 72, 153, 0.9)' }}>
              {streamer.pseudo}
            </h3>
          </div>
          
          {/* Viewers count */}
          {streamer.viewers > 0 && (
            <p className="text-pink-400 text-base font-bold"
               style={{ textShadow: '0 0 10px rgba(244, 114, 182, 0.8)' }}>
              👁️ {streamer.viewers} viewers
            </p>
          )}
        </div>
      </div>
    </a>
  );
}

// Polaroid style card for offline streamers
function StreamerCardPolaroid({ streamer }: { streamer: Streamer }) {
  const getBadgeStyles = (badge: string) => {
    if (badge === "STAFF") {
      return {
        bg: "bg-gradient-to-r from-purple-600 to-pink-600",
        shadow: "shadow-[0_0_15px_rgba(168,85,247,0.8)]",
        text: "text-white"
      };
    }
    return {
      bg: "bg-gray-600",
      shadow: "",
      text: "text-white"
    };
  };

  return (
    <a
      href={streamer.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative transition-all duration-300 hover:scale-105"
    >
      {/* Polaroid frame */}
      <div className="bg-white p-3 pb-12 rounded-lg shadow-2xl transform rotate-0 group-hover:rotate-2 transition-transform duration-300"
           style={{
             boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
           }}>
        {/* Photo */}
        <div className="relative aspect-video overflow-hidden rounded-sm bg-black">
          <img 
            src={streamer.imageUrl} 
            alt={streamer.pseudo}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {streamer.badges?.map((badge, index) => {
              const styles = getBadgeStyles(badge);
              return (
                <div 
                  key={index}
                  className={`${styles.bg} ${styles.text} px-2 py-0.5 rounded text-xs font-bold uppercase ${styles.shadow}`}
                >
                  {badge}
                </div>
              );
            })}
          </div>
          
          {/* OFFLINE badge */}
          <div className="absolute top-2 right-2">
            <div className="bg-gray-700/90 text-gray-300 px-2 py-1 rounded text-xs font-bold">
              OFFLINE
            </div>
          </div>

          {/* Platform icon */}
          <div className="absolute bottom-2 left-2">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              streamer.platform === 'twitch' ? 'bg-purple-600' : 'bg-red-600'
            }`}>
              {streamer.platform === 'twitch' ? (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                </svg>
              ) : (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              )}
            </div>
          </div>
        </div>
        
        {/* Handwritten style text at bottom of polaroid */}
        <div className="absolute bottom-3 left-0 right-0 text-center">
          <p className="text-gray-800 font-bold text-sm uppercase tracking-wide" style={{ fontFamily: 'Arial, sans-serif' }}>
            {streamer.pseudo}
          </p>
        </div>
      </div>
    </a>
  );
}