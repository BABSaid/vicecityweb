import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function SocialSection() {
  const tiktokUrl = "https://www.tiktok.com/@vicecityv1";
  const youtubeUrl = "https://www.youtube.com/@ViceCityV1";

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* YouTube - Left Side */}
        <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-purple-600/30 overflow-hidden">
          <div className="bg-purple-600/20 px-6 py-4 border-b border-purple-600/30">
            <h3 className="text-2xl font-black text-white uppercase tracking-wide">
              Notre YouTube
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Découvrez nos vidéos et contenus exclusifs !
            </p>
          </div>
          
          <div className="p-6 flex justify-center items-center min-h-[500px]">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-900/20 to-purple-900/20 rounded-lg">
              <div className="text-center p-8">
                <svg 
                  className="w-24 h-24 mx-auto mb-6 text-red-500 opacity-80" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <h4 className="text-white font-bold text-xl mb-3">@ViceCityV1</h4>
                <p className="text-gray-400 mb-6">
                  Abonnez-vous à notre chaîne YouTube pour ne rien manquer !
                </p>
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Voir sur YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TikTok - Right Side */}
        <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-purple-600/30 overflow-hidden">
          <div className="bg-purple-600/20 px-6 py-4 border-b border-purple-600/30">
            <h3 className="text-2xl font-black text-white uppercase tracking-wide">
              Le Dernier TikTok
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              « Restez à jour de notre projet grâce à »
            </p>
          </div>
          
          <div className="p-6 min-h-[500px] flex flex-col items-center justify-center">
            {/* TikTok Embed Container */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg">
              <div className="text-center p-8">
                <svg 
                  className="w-20 h-20 mx-auto mb-4 text-white opacity-80" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <h4 className="text-white font-bold text-lg mb-2">@vicecityv1</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Suivez-nous sur TikTok pour découvrir nos meilleurs moments !
                </p>
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                >
                  Voir sur TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Card - Server Status Only */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4 backdrop-blur-sm flex items-center justify-center">
          <ServerIPWithCopy />
        </div>
      </div>
    </section>
  );
}

function ServerIPWithCopy() {
  const [copied, setCopied] = useState(false);
  const serverIP = "51.210.246.253:2000";

  const copyIP = () => {
    // Méthode alternative compatible avec tous les navigateurs
    const textArea = document.createElement("textarea");
    textArea.value = serverIP;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
    
    document.body.removeChild(textArea);
  };

  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-600/30 rounded-lg">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-white font-bold uppercase tracking-wide">
          Serveur en ligne • IP: {serverIP}
        </span>
        <button
          onClick={copyIP}
          className="ml-2 p-2 bg-purple-600 hover:bg-purple-500 rounded transition-all duration-200 hover:scale-110"
          title="Copier l'IP"
        >
          {copied ? (
            <Check className="w-4 h-4 text-white" />
          ) : (
            <Copy className="w-4 h-4 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}