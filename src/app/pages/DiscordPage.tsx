import { ChevronLeft, ChevronRight, MessageCircle, Users, Ticket, Shield, Ban, AlertTriangle } from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { useState } from "react";

export default function DiscordPage() {
  const [currentCard, setCurrentCard] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Toutes les cartes de règles Discord
  const cards = [
    // Introduction
    {
      icon: <MessageCircle className="w-16 h-16" />,
      category: "💬 DISCORD",
      title: "Bienvenue sur Discord",
      color: "from-indigo-600 to-purple-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-600",
      content: [
        "Bienvenue sur le Discord de ViceCity RP !",
        "",
        "Notre serveur Discord est un espace de communication",
        "pour la communauté, le roleplay et le support.",
        "",
        "📋 Lisez attentivement ces règles",
        "✅ Respectez-les en toute circonstance",
        "🚫 Toute infraction sera sanctionnée"
      ]
    },
    // Respect & Maturité
    {
      icon: <Users className="w-16 h-16" />,
      category: "COMPORTEMENT",
      title: "Respect & Maturité",
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-600",
      content: [
        "✅ RÈGLE 1.1 :",
        "",
        "Pour que tout se passe bien, le respect,",
        "la maturité et le vivre ensemble doivent",
        "être appliqués par TOUS.",
        "",
        "• Respectez les autres membres",
        "• Adoptez un comportement mature",
        "• Privilégiez le vivre ensemble harmonieux",
        "",
        "🚫 Aucune toxicité tolérée"
      ]
    },
    // Utilisation des Canaux
    {
      icon: <MessageCircle className="w-16 h-16" />,
      category: "CANAUX/CHANNELS",
      title: "Utilisation des Canaux",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-600",
      content: [
        "✅ RÈGLE 1.2 :",
        "",
        "Chaque Canal possède une utilité précise,",
        "vous êtes prié de bien vouloir respecter cela.",
        "",
        "💬 Pour discuter entre vous :",
        "→ #Discussion (HRP)",
        "→ #Boîte à idées",
        "",
        "⚠ Utilisez le bon canal pour le bon contenu",
        "Ne spammez pas dans les mauvais channels"
      ]
    },
    // Contact Staff
    {
      icon: <Ticket className="w-16 h-16" />,
      category: "SUPPORT STAFF",
      title: "Contacter le Staff",
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-600",
      content: [
        "✅ RÈGLE 1.3 :",
        "",
        "Si vous avez besoin d'un membre du Staff,",
        "faites un TICKET.",
        "",
        "🎫 Comment faire :",
        "→ Ouvrez un ticket via le salon dédié",
        "→ Un membre du staff vous contactera",
        "→ Soyez patient et respectueux",
        "",
        "🚫 INTERDIT : MP non sollicités au staff"
      ]
    },
    // Channels RP
    {
      icon: <Shield className="w-16 h-16" />,
      category: "CHANNELS RP",
      title: "100% Roleplay",
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-600",
      content: [
        "✅ RÈGLE 1.4 :",
        "",
        "Dans TOUS les channels RP, vous devez",
        "jouer le rôle de votre personnage.",
        "",
        "✅ 100% RP OBLIGATOIRE",
        "🚫 Le HRP n'est PAS autorisé",
        "",
        "Restez dans votre personnage en permanence.",
        "Pour parler HRP → Utilisez les channels HRP dédiés",
        "",
        "Respectez l'immersion de la communauté"
      ]
    },
    // Publicité Interdite
    {
      icon: <Ban className="w-16 h-16" />,
      category: "PUBLICITÉ",
      title: "Interdiction Stricte",
      color: "from-red-600 to-red-800",
      bgColor: "bg-red-50",
      borderColor: "border-red-600",
      content: [
        "✅ RÈGLE 1.5 :",
        "",
        "Il est FORMELLEMENT INTERDIT",
        "de faire de la pub pour un autre serveur.",
        "",
        "🚫 Aucune exception",
        "🚫 Sanctions immédiates",
        "",
        "Cela inclut :",
        "• Liens vers d'autres serveurs Discord",
        "• Invitations à d'autres serveurs FiveM",
        "• Mentions d'autres communautés"
      ]
    },
    // Sanctions
    {
      icon: <AlertTriangle className="w-16 h-16" />,
      category: "SANCTIONS",
      title: "Modération & Sanctions",
      color: "from-yellow-600 to-orange-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-600",
      content: [
        "✅ RÈGLE 1.6 :",
        "",
        "Le Staff se réserve le droit de retirer",
        "et de sanctionner tout contenu qui ne respecte",
        "pas les règles de notre serveur.",
        "",
        "⚖️ SANCTIONS POSSIBLES :",
        "• Avertissement",
        "• Mute temporaire",
        "• Kick du Discord",
        "• Ban permanent",
        "",
        "Les décisions du staff sont définitives"
      ]
    },
    // Conclusion
    {
      icon: <MessageCircle className="w-16 h-16" />,
      category: "CONCLUSION",
      title: "Bonne Communication !",
      color: "from-indigo-600 to-purple-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-600",
      content: [
        "Merci de respecter ces règles simples",
        "pour maintenir une communauté saine et agréable.",
        "",
        "✓ Respect mutuel",
        "✓ Utiliser les bons canaux",
        "✓ Tickets pour le staff",
        "✓ RP dans les channels RP",
        "✓ Pas de pub",
        "",
        "Ensemble, faisons de ViceCity RP",
        "une communauté exceptionnelle ! 💜"
      ]
    }
  ];

  const nextCard = () => {
    if (currentCard < cards.length - 1) {
      setDirection('right');
      setTimeout(() => setCurrentCard(currentCard + 1), 50);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setDirection('left');
      setTimeout(() => setCurrentCard(currentCard - 1), 50);
    }
  };

  const currentCardData = cards[currentCard];

  return (
    <div className="min-h-screen bg-[#1a0a2e] relative overflow-hidden">
      {/* Background with blur */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 blur-sm"
          style={{
            backgroundImage: `url('https://i.imgur.com/vUTMHhU.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Ambient light effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="px-4 py-12 max-w-4xl mx-auto">
          {/* Back button */}
          <a
            href="#reglement"
            className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 transition-colors mb-8 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">
              Retour au Règlement
            </span>
          </a>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 
              className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              RÈGLES DISCORD
            </h1>
            <p className="text-indigo-300 text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
              💬 Communication & Comportement sur Discord
            </p>
          </div>

          {/* Card Container */}
          <div className="relative min-h-[600px] flex items-center justify-center perspective-1000">
            {/* Card */}
            <div
              className={`w-full max-w-2xl transform transition-all duration-500 ease-out ${
                direction === 'right' 
                  ? 'animate-slide-in-right' 
                  : 'animate-slide-in-left'
              }`}
              key={currentCard}
            >
              <div
                className={`relative ${currentCardData.bgColor} rounded-3xl shadow-2xl overflow-hidden border-4 ${currentCardData.borderColor}`}
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(99, 102, 241, 0.3)'
                }}
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${currentCardData.color} p-8 text-white relative overflow-hidden`}>
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  
                  <div className="relative z-10 flex items-center gap-6">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                      {currentCardData.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold tracking-widest opacity-90 mb-2">
                        {currentCardData.category}
                      </p>
                      <h2 
                        className="text-4xl font-bold"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {currentCardData.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <div className="space-y-4">
                    {currentCardData.content.map((line, index) => (
                      <div
                        key={index}
                        className={`text-lg text-gray-800 leading-relaxed ${
                          line.startsWith('►') || line.startsWith('✓') || line.startsWith('⚠') || line.startsWith('•') || line.startsWith('→') || line.startsWith('✅') || line.startsWith('🚫') || line.startsWith('💬') || line.startsWith('🎫') || line.startsWith('⚖️')
                            ? 'font-semibold'
                            : ''
                        }`}
                        style={{ 
                          fontFamily: line.startsWith('✅') || line.startsWith('🚫') || line.includes('INTERDIT') || line.includes('OBLIGATOIRE')
                            ? "'Special Elite', cursive" 
                            : "'Crimson Text', serif" 
                        }}
                      >
                        {line || <br />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="px-10 pb-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${currentCardData.color} transition-all duration-500`}
                        style={{ width: `${((currentCard + 1) / cards.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-gray-600 min-w-[60px]">
                      {currentCard + 1} / {cards.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 max-w-2xl mx-auto gap-6">
            <button
              onClick={prevCard}
              disabled={currentCard === 0}
              className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                currentCard === 0
                  ? "bg-gray-700 text-gray-500 cursor-not-allowed opacity-50"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 active:scale-95"
              }`}
              style={{ fontFamily: "'Special Elite', cursive" }}
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              <span>PRÉCÉDENT</span>
            </button>

            <div className="flex gap-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentCard ? 'right' : 'left');
                    setTimeout(() => setCurrentCard(index), 50);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCard
                      ? 'bg-gradient-to-r from-indigo-400 to-purple-400 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextCard}
              disabled={currentCard === cards.length - 1}
              className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                currentCard === cards.length - 1
                  ? "bg-gray-700 text-gray-500 cursor-not-allowed opacity-50"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 active:scale-95"
              }`}
              style={{ fontFamily: "'Special Elite', cursive" }}
            >
              <span>SUIVANT</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </main>

        <Footer />
      </div>

      <style>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
