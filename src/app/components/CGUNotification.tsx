import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CGUNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Afficher la notification après 2.5 secondes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const handleAccept = () => {
    setIsVisible(false);
  };

  const handleRefuse = () => {
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-black/90 backdrop-blur-md border-2 border-purple-600/50 rounded-lg shadow-2xl overflow-hidden"
           style={{
             boxShadow: '0 10px 40px rgba(168, 85, 247, 0.3), 0 0 60px rgba(168, 85, 247, 0.2)'
           }}>
        {/* Header */}
        <div className="bg-purple-600/20 px-4 py-3 border-b border-purple-600/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-500/20 border border-red-500/50 rounded flex items-center justify-center">
              <span className="text-red-400 text-lg">⚠️</span>
            </div>
            <h4 className="text-white font-bold uppercase tracking-wide text-sm">
              Conditions générales
            </h4>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Veuillez lire et accepter nos CGU avant de rejoindre le serveur. Le respect des règles est obligatoire pour tous les joueurs.
          </p>

          <div className="flex gap-3">
            <button 
              onClick={handleAccept}
              className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded transition-all duration-200 hover:scale-105"
            >
              J'ACCEPTE
            </button>
            <button 
              onClick={handleRefuse}
              className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded transition-all duration-200 hover:scale-105"
            >
              JE N'ACCEPTE PAS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}