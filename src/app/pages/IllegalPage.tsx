import { ChevronLeft, ChevronRight, Skull, Flame, Crosshair, Users, Lock, Swords, Car, AlertTriangle, MessageCircle, Shield, Plane } from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { useState } from "react";

export default function IllegalPage() {
  const [currentCard, setCurrentCard] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Toutes les cartes de règles criminelles
  const cards = [
    // Avertissement Principal
    {
      icon: <Skull className="w-16 h-16" />,
      category: "⚠ AVERTISSEMENT",
      title: "Règles Essentielles",
      color: "from-red-600 to-red-800",
      bgColor: "bg-red-50",
      borderColor: "border-red-600",
      content: [
        "RDM, VDM, FailRP = SANCTIONS IMMÉDIATES",
        "",
        "► Le roleplay prime TOUJOURS sur le gain",
        "► Respectez les autres joueurs",
        "► Les zones safe sont protégées",
        "► Toute action doit être cohérente RP",
        "",
        "Un bon criminel crée des histoires, pas du chaos"
      ]
    },
    // Groupes Non Officiels - Création
    {
      icon: <Users className="w-16 h-16" />,
      category: "GANGS/GROUPES",
      title: "Création & Composition",
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-600",
      content: [
        "📁 CRÉATION :",
        "• Formation libre sans démarche préalable",
        "• Avantages territoriaux/matériels → Dossier admin requis",
        "",
        "👥 COMPOSITION :",
        "• Minimum : 5 membres",
        "• Groupe local : 20 membres max",
        "• Groupe structuré : 15 membres max",
        "",
        "⚠ Dépassement = Suppression du groupe"
      ]
    },
    // Zones Sensibles
    {
      icon: <Plane className="w-16 h-16" />,
      category: "ZONES SENSIBLES",
      title: "Accès Interdit",
      color: "from-orange-600 to-red-700",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-600",
      content: [
        "🚫 STRICTEMENT INTERDIT :",
        "",
        "• Accès par moyens aériens (hélico, avion)",
        "• Véhicules de services publics détournés",
        "• Utilisation non conforme d'équipements pro",
        "",
        "⚠ Sanctions importantes en cas de violation",
        "",
        "Privilégiez des moyens cohérents avec votre RP"
      ]
    },
    // Accords HRP
    {
      icon: <MessageCircle className="w-16 h-16" />,
      category: "ACCORDS HRP",
      title: "Scènes Extrêmes",
      color: "from-yellow-600 to-orange-700",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-600",
      content: [
        "✋ ACCORD HRP OBLIGATOIRE pour :",
        "",
        "• Actes RP sortant du cadre habituel",
        "• Violences graphiques extrêmes",
        "• Situations sensibles (torture, etc.)",
        "",
        "Chaque joueur a sa sensibilité propre",
        "",
        "👉 Toujours demander consentement AVANT"
      ]
    },
    // Interactions Majeures
    {
      icon: <MessageCircle className="w-16 h-16" />,
      category: "INTERACTIONS",
      title: "Négociations & Échanges",
      color: "from-blue-600 to-cyan-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-600",
      content: [
        "🤝 ÉCHANGE VERBAL OBLIGATOIRE :",
        "",
        "• Parler AVANT toute escalade de violence",
        "• La résolution doit être claire pour tous",
        "• Privilégier la qualité du RP",
        "",
        "⚠ MÉDIATEURS (admin/staff) :",
        "• Ne peuvent JAMAIS être retenus",
        "• Ne peuvent JAMAIS être contraints"
      ]
    },
    // Braquages & Activités
    {
      icon: <Flame className="w-16 h-16" />,
      category: "BRAQUAGES",
      title: "Activités Réglementées",
      color: "from-red-600 to-red-800",
      bgColor: "bg-red-50",
      borderColor: "border-red-600",
      content: [
        "⚠ INTERVENTIONS ALÉATOIRES possibles",
        "",
        "• Interactions par gestion de situation uniquement",
        "• Moyens inadaptés = INTERDITS",
        "• Points sensibles NON transférables",
        "",
        "📋 RÈGLES :",
        "• RP cohérent obligatoire",
        "• Négociations encouragées",
        "• Respect des autres joueurs"
      ]
    },
    // Véhicules & Déplacements
    {
      icon: <Car className="w-16 h-16" />,
      category: "DÉPLACEMENTS",
      title: "Véhicules & Pressions RP",
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-600",
      content: [
        "🚗 PRESSIONS RP :",
        "• Autorisées uniquement À L'ARRÊT",
        "• Viser l'environnement, pas les individus",
        "",
        "⚠ INTERDICTIONS :",
        "• Techniques de neutralisation abusives",
        "• Se replier en zone perso pour fuir une scène",
        "",
        "🎭 COHÉRENCE RP :",
        "• Véhicules adaptés à votre contexte",
        "• Erreur involontaire → Rééquilibrer la situation"
      ]
    },
    // Services Publics
    {
      icon: <Shield className="w-16 h-16" />,
      category: "SERVICES PUBLICS",
      title: "Neutralité Obligatoire",
      color: "from-blue-700 to-blue-900",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-700",
      content: [
        "❌ MEMBRES DES SERVICES NE PEUVENT PAS :",
        "",
        "• Participer à des activités criminelles",
        "• Appartenir à un groupe non officiel",
        "• Avoir des comportements déviants",
        "",
        "⚙️ ÉQUIPEMENTS :",
        "• Interdiction de céder/prêter/détourner",
        "",
        "📞 Interdit d'abuser des outils de communication pro"
      ]
    },
    // Provocations
    {
      icon: <AlertTriangle className="w-16 h-16" />,
      category: "PROVOCATIONS",
      title: "Fair-Play Obligatoire",
      color: "from-orange-600 to-red-700",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-600",
      content: [
        "🚨 STRICTEMENT INTERDIT :",
        "",
        "• Provocations répétées sans justification RP",
        "• Provoquer la police juste pour du combat",
        "• Actions sans cohérence narrative",
        "",
        "✅ PRIVILÉGIEZ :",
        "• Scénarios construits et immersifs",
        "• Interactions riches en RP",
        "• Fair-play avec tous les joueurs"
      ]
    },
    // Identification
    {
      icon: <Users className="w-16 h-16" />,
      category: "IDENTIFICATION",
      title: "Reconnaissance RP",
      color: "from-purple-600 to-pink-700",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-600",
      content: [
        "👁️ IDENTIFICATION :",
        "",
        "• Tenue vestimentaire seule = Insuffisant",
        "• Genre du personnage seul = Insuffisant",
        "",
        "✅ ÉLÉMENTS VALABLES :",
        "• Comportements récurrents",
        "• Contexte RP global",
        "• Indices visuels combinés",
        "",
        "⚠ Suspicion RP ≠ Preuve suffisante pour action directe"
      ]
    },
    // Contraintes Financières
    {
      icon: <Lock className="w-16 h-16" />,
      category: "FINANCES",
      title: "Gestion des Fonds",
      color: "from-green-600 to-green-800",
      bgColor: "bg-green-50",
      borderColor: "border-green-600",
      content: [
        "💳 STRICTEMENT INTERDIT :",
        "",
        "• Imposer à un joueur toute action liée à ses fonds",
        "• Forcer des transactions HRP",
        "• Extorsion hors contexte RP valide",
        "",
        "✅ AUTORISÉ en RP :",
        "• Braquages avec RP cohérent",
        "• Rançons négociées",
        "• Transactions RP justifiées"
      ]
    },
    // Discord & Communication
    {
      icon: <MessageCircle className="w-16 h-16" />,
      category: "DISCORD/HRP",
      title: "Outils de Communication",
      color: "from-indigo-600 to-purple-700",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-600",
      content: [
        "💬 RÈGLES DISCORD :",
        "",
        "• Espaces HRP ≠ Espaces RP (séparés)",
        "• Demandes admin → Outils prévus uniquement",
        "• Infos partagées en zone dédiée = Exploitables en jeu",
        "",
        "🚫 INTERDICTIONS :",
        "• Propos discriminants/dégradants",
        "• MP non sollicités vers l'administration",
        "",
        "📢 Annonces officielles = Applicables immédiatement"
      ]
    },
    // Conclusion
    {
      icon: <Skull className="w-16 h-16" />,
      category: "CONCLUSION",
      title: "Respectez les Règles",
      color: "from-red-600 to-pink-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-600",
      content: [
        "Les activités illégales enrichissent le RP",
        "Mais elles doivent créer des histoires mémorables",
        "",
        "✓ Respect mutuel entre joueurs",
        "✓ RP cohérent et immersif",
        "✓ Fair-play en toute circonstance",
        "✓ Communication et négociation",
        "",
        "💎 Privilégiez la qualité sur la quantité 💎"
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
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
            className="inline-flex items-center gap-2 text-red-300 hover:text-red-200 transition-colors mb-8 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">
              Retour au Règlement
            </span>
          </a>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 
              className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-300 to-pink-400 mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              ACTIVITÉS NON OFFICIELLES
            </h1>
            <p className="text-red-300 text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
              ⚠ Jouer criminel avec respect et roleplay ⚠
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
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(220, 38, 38, 0.3)'
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
                          line.startsWith('►') || line.startsWith('✓') || line.startsWith('⚠') || line.startsWith('•') || line.startsWith('📋') || line.startsWith('🚫') || line.startsWith('✅') || line.startsWith('📁') || line.startsWith('👥') || line.startsWith('✋') || line.startsWith('🤝') || line.startsWith('🚗') || line.startsWith('❌') || line.startsWith('⚙️') || line.startsWith('🚨') || line.startsWith('👁️') || line.startsWith('💳') || line.startsWith('💬') || line.startsWith('📢') || line.startsWith('💎')
                            ? 'font-semibold'
                            : ''
                        }`}
                        style={{ 
                          fontFamily: line.startsWith('►') || line.startsWith('✓') || line.startsWith('⚠') || line.startsWith('•') || line.includes('INTERDIT') || line.includes('OBLIGATOIRE')
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
                  : "bg-gradient-to-r from-red-600 to-orange-600 text-white hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 active:scale-95"
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
                      ? 'bg-gradient-to-r from-red-400 to-orange-400 w-8'
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
                  : "bg-gradient-to-r from-red-600 to-orange-600 text-white hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 active:scale-95"
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
