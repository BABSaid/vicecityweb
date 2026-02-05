import { X, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface EntrepriseModalProps {
  isOpen: boolean;
  onClose: () => void;
  entreprise: {
    name: string;
    image: string;
    link?: string;
  } | null;
}

export function EntrepriseModal({ isOpen, onClose, entreprise }: EntrepriseModalProps) {
  if (!isOpen || !entreprise) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-purple-900/95 to-pink-900/95 border-2 border-purple-500/50 rounded-lg shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-10 h-10 bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-400/50 rounded-lg flex items-center justify-center transition-all duration-200 z-10"
        >
          <X className="w-6 h-6 text-cyan-400" />
        </button>

        {/* Content */}
        <div className="p-8 pt-16 flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-8">
            {entreprise.name}
          </h2>

          {/* Enterprise Image */}
          <div className="w-64 h-32 mb-8 rounded-lg overflow-hidden border-2 border-purple-400/50 shadow-lg">
            <ImageWithFallback
              src={entreprise.image}
              alt={entreprise.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Flashback RP Section */}
          <div className="w-full max-w-md bg-purple-950/50 border border-purple-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-purple-300 uppercase tracking-wider mb-4">
              🌴 VICECITY RP
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">{entreprise.name}</span>
              </div>
              {entreprise.link && (
                <a
                  href={entreprise.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-400/50 rounded text-cyan-300 text-sm font-bold transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  🔗 {entreprise.name}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`
          }}></div>
        </div>
      </div>
    </div>
  );
}