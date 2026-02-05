import { useState } from "react";
import { Search, Building2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { EntrepriseModal } from "../components/EntrepriseModal";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CGUNotification } from "../components/CGUNotification";

interface Entreprise {
  id: number;
  name: string;
  image: string;
  link?: string;
  category?: string;
}

// Liste des entreprises - À personnaliser avec vos vraies entreprises
const entreprises: Entreprise[] = [
  {
    id: 1,
    name: "SASP ACADEMY",
    image: "https://i.imgur.com/EaJGvvo.png",
    link: "https://discord.gg/7CX5h4WdSH",
    category: "Services Publics"
  },
  {
    id: 2,
    name: "BURGERSHOT",
    image: "https://i.imgur.com/BErs1yd.png",
    link: "https://discord.gg/YqCPQ3TsBs",
    category: "Restauration"
  },
  {
    id: 3,
    name: "BENNY'S",
    image: "https://i.imgur.com/QzlO0BN.png",
    link: "https://discord.gg/WvEcUBqGd9",
    category: "Mécanique"
  },
  {
    id: 4,
    name: "DYNASTI 8",
    image: "https://i.imgur.com/tdWftxW.png",
    link: "https://discord.gg/fzJ2X7DHGn",
    category: "Immobilier"
  }
];

export function EntreprisesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEntreprise, setSelectedEntreprise] = useState<Entreprise | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEntreprises = entreprises.filter(entreprise =>
    entreprise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEntrepriseClick = (entreprise: Entreprise) => {
    setSelectedEntreprise(entreprise);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEntreprise(null), 300);
  };

  return (
    <div className="min-h-screen bg-[#1a0a2e] relative overflow-hidden">
      {/* Background City Silhouette */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d1b4e] via-[#1a0a2e] to-[#0a0015]"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://i.imgur.com/vUTMHhU.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <div className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Building2 className="w-12 h-12 text-pink-400" />
                <h1 className="text-5xl font-black text-white uppercase tracking-wider">
                  Entreprises
                </h1>
              </div>
              <p className="text-cyan-300 text-lg">
                Découvrez toutes les entreprises de ViceCity RP
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
                <input
                  type="text"
                  placeholder="RECHERCHER UNE ENTREPRISE..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-purple-900/50 border-2 border-purple-500/50 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-pink-400/70 transition-all duration-200 uppercase font-bold tracking-wider"
                />
              </div>
            </div>

            {/* Enterprises Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEntreprises.map((entreprise) => (
                <button
                  key={entreprise.id}
                  onClick={() => handleEntrepriseClick(entreprise)}
                  className="group relative overflow-hidden rounded-lg border-2 border-purple-500/50 hover:border-pink-400/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30"
                >
                  {/* Image Background */}
                  <div className="relative h-32 overflow-hidden">
                    <ImageWithFallback
                      src={entreprise.image}
                      alt={entreprise.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-4 bg-gradient-to-br from-purple-900/90 to-pink-900/90">
                    <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2">
                      {entreprise.name}
                    </h3>
                    {entreprise.category && (
                      <p className="text-cyan-300 text-sm uppercase tracking-wide">
                        {entreprise.category}
                      </p>
                    )}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-pink-400/0 group-hover:border-pink-400/50 rounded-lg transition-all duration-300 pointer-events-none"></div>
                </button>
              ))}
            </div>

            {/* No Results */}
            {filteredEntreprises.length === 0 && (
              <div className="text-center py-20">
                <Building2 className="w-16 h-16 text-purple-400/50 mx-auto mb-4" />
                <p className="text-purple-300 text-xl font-bold">
                  Aucune entreprise trouvée
                </p>
                <p className="text-purple-400 mt-2">
                  Essayez avec un autre terme de recherche
                </p>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>

      {/* CGU Notification */}
      <CGUNotification />

      {/* Modal */}
      <EntrepriseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        entreprise={selectedEntreprise}
      />
    </div>
  );
}