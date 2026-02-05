import { X } from "lucide-react";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpModal({ isOpen, onClose }: HelpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-gradient-to-br from-purple-950/95 to-purple-900/95 border border-purple-500/50 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto"
           style={{
             boxShadow: '0 0 50px rgba(168, 85, 247, 0.4)'
           }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-red-600/80 hover:bg-red-500 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <h2 className="text-3xl font-black text-white mb-8 text-center border-b border-purple-500/30 pb-4">
            COMMENT FONCTIONNE LE SITE ?
          </h2>

          {/* Section 1: Les Streamers */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-pink-400 mb-3 uppercase">
              Les Streamers
            </h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              Pour devenir streamer "ViceCity" sur le site web, vous devez envoyer un ticket sur le discord.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Une fois que l'administrateur du site vous ajoute, vous apparaitrez sur le site web.
            </p>
          </div>

          {/* Section 2: Les Streams */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-cyan-400 mb-3 uppercase">
              Les Streams
            </h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              Pour apparaître en tant que streamer en ligne, vous devez streamer sur le serveur "ViceCity" et pour ce faire, vous devez avoir le nom du serveur dans votre titre. Exemple :
            </p>
            <p className="text-purple-300 italic">
              "ViceCity - VCFA - ViceCityRP"
            </p>
          </div>

          {/* Section 3: Les Tags */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-3 uppercase">
              Les Tags
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Il existe différents <span className="text-pink-400 font-bold">"tags"</span> qui sont reconnus ci-dessous :
            </p>
            
            {/* Tags Examples */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-4 py-2 bg-purple-600 text-white font-bold rounded-md text-sm uppercase">
                SASP
              </span>
              <span className="px-4 py-2 bg-orange-600 text-white font-bold rounded-md text-sm uppercase">
                Staff
              </span>
              <span className="px-4 py-2 bg-cyan-600 text-white font-bold rounded-md text-sm uppercase">
                SAMD
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-2">
              Cela vous permet de facilement répertorier les streamers qui vous intéressent.
            </p>
            <p className="text-gray-300 leading-relaxed mb-2">
              Pour que le tag s'affiche, ne mettez pas de slash ou de tiret entre votre stream, vous devez l'indiquer dans la box du stream.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Veuillez choisir uniquement un tag ou un seul mot pour avoir le tag sur le site.
            </p>
          </div>

          {/* Visual Examples */}
          <div className="mt-8 pt-6 border-t border-purple-500/30">
            <p className="text-gray-400 text-sm text-center italic">
              💡 Astuce : Utilisez les filtres et la recherche pour trouver rapidement vos streamers préférés !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}