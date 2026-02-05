import { ChevronLeft, ChevronRight, Server, Users, Shield, AlertTriangle, Ban, Eye, Zap, Skull, Target, Radio, Bug, Swords, Laugh, MapPin, X, Palette, FileText, Volume2, UserX, Package, Lock, Settings } from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { useState } from "react";

export default function ServeurPage() {
  const [currentCard, setCurrentCard] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Toutes les cartes de règles Serveur
  const cards = [
    // Introduction - Principe général
    {
      icon: <Server className="w-16 h-16" />,
      category: "🎭 SERVEUR",
      title: "Principe Général du RP",
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-600",
      content: [
        "🎭 Notre serveur est un serveur RolePlay.",
        "",
        "Chaque joueur doit incarner son personnage",
        "de manière cohérente, en lui créant une histoire,",
        "en la faisant évoluer et en respectant",
        "les limites humaines.",
        "",
        "Votre personnage est un citoyen d'une ville,",
        "il n'est PAS invincible et peut ressentir",
        "de la peur, du stress ou des contraintes",
        "selon les situations rencontrées.",
        "",
        "✅ Incarnez votre personnage avec cohérence"
      ]
    },
    // Metagaming
    {
      icon: <Eye className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.1 - Metagaming",
      color: "from-red-600 to-red-800",
      bgColor: "bg-red-50",
      borderColor: "border-red-600",
      content: [
        "🚫 STRICTEMENT INTERDIT",
        "",
        "Utiliser des informations hors RolePlay",
        "dans un contexte RolePlay.",
        "",
        "❌ EXEMPLE :",
        "Transmettre ou exploiter des informations",
        "via Discord alors que votre personnage",
        "est dans l'incapacité d'agir.",
        "",
        "Votre personnage ne peut utiliser QUE",
        "les informations qu'il a obtenues en jeu.",
        "",
        "Toute infraction = sanction lourde"
      ]
    },
    // PowerGaming
    {
      icon: <Zap className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.2 - PowerGaming",
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-600",
      content: [
        "🚫 STRICTEMENT INTERDIT",
        "",
        "Réaliser des actions irréalistes ou impossibles",
        "dans un cadre RolePlay cohérent.",
        "",
        "❌ EXEMPLE :",
        "Utiliser un véhicule inadapté",
        "à un environnement extrême.",
        "",
        "Autres exemples :",
        "• Forcer quelqu'un à faire une action sans réplique",
        "• Survivre à des blessures mortelles sans RP",
        "• Actions physiquement impossibles"
      ]
    },
    // No Pain RP
    {
      icon: <AlertTriangle className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.3 - No Pain RP",
      color: "from-yellow-600 to-orange-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-600",
      content: [
        "🚫 STRICTEMENT INTERDIT",
        "",
        "Le No Pain RP correspond au fait de ne pas",
        "prendre en compte les conséquences physiques",
        "subies par votre personnage.",
        "",
        "✅ OBLIGATION :",
        "Toute situation impliquant un impact",
        "DOIT être jouée en conséquence.",
        "",
        "Exemples d'impacts :",
        "• Chutes",
        "• Accidents de voiture",
        "• Coups reçus",
        "• Blessures par balle"
      ]
    },
    // Win RP
    {
      icon: <Target className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.4 - Win RP",
      color: "from-red-600 to-pink-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-600",
      content: [
        "🚫 STRICTEMENT INTERDIT",
        "",
        "Le Win RP consiste à imposer une situation",
        "sans laisser de possibilité de réaction",
        "ou de continuité RP à la partie adverse.",
        "",
        "❌ EXEMPLE :",
        "Intervenir de manière excessive lors",
        "d'une interaction mineure.",
        "",
        "Laissez TOUJOURS une chance à l'autre",
        "partie de réagir et de jouer la scène.",
        "",
        "Le but n'est PAS de gagner, mais de RP."
      ]
    },
    // No Fear RP
    {
      icon: <Skull className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.5 - No Fear RP",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-600",
      content: [
        "🚫 STRICTEMENT INTERDIT",
        "",
        "Le No Fear RP correspond au fait de ne pas",
        "prendre en compte la peur ou la pression",
        "que peut ressentir votre personnage",
        "face à une situation donnée.",
        "",
        "✅ EXEMPLES DE SITUATIONS :",
        "• Armes braquées sur vous",
        "• Plusieurs personnes menaçantes",
        "• Danger de mort imminent",
        "",
        "Votre personnage DOIT ressentir la peur",
        "dans des situations dangereuses."
      ]
    },
    // Revenge Kill
    {
      icon: <Swords className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.6 - Revenge Kill",
      color: "from-red-600 to-red-800",
      bgColor: "bg-red-50",
      borderColor: "border-red-600",
      content: [
        "🚫 STRICTEMENT INTERDIT",
        "",
        "Le Revenge Kill consiste à chercher volontairement",
        "une confrontation ciblée avec un joueur",
        "à la suite d'une interaction précédente",
        "impliquant votre personnage.",
        "",
        "Respectez le délai de 30 minutes minimum",
        "avant toute nouvelle confrontation.",
        "",
        "Ne cherchez PAS la vengeance immédiate.",
        "",
        "Laissez le temps au RP de respirer."
      ]
    },
    // StreamHack / Stalk
    {
      icon: <Radio className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.7 - StreamHack / Stalk",
      color: "from-indigo-600 to-purple-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-600",
      content: [
        "🚫 STRICTEMENT INTERDIT",
        "",
        "Le StreamHack ou le Stalk correspond",
        "à l'exploitation d'éléments provenant",
        "d'un contenu en direct afin d'obtenir",
        "des informations utilisables en jeu.",
        "",
        "❌ INTERDIT :",
        "• Regarder le stream d'un joueur en jeu",
        "• Utiliser les infos du stream en RP",
        "• Traquer quelqu'un via son stream",
        "",
        "Sanctions TRÈS lourdes pour cette infraction."
      ]
    },
    // HRP
    {
      icon: <X className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.8 - HRP",
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-600",
      content: [
        "🚫 STRICTEMENT INTERDIT EN JEU",
        "",
        "L'utilisation du HRP directement en jeu",
        "est interdite.",
        "",
        "✅ PROCÉDURE EN CAS DE PROBLÈME :",
        "→ Terminez l'action sans interruption",
        "→ Signalez via un TICKET après",
        "→ Fournissez des preuves si nécessaire",
        "",
        "Ne cassez JAMAIS le RP en cours.",
        "",
        "Le staff interviendra après vérification."
      ]
    },
    // Use Bug / Glitch / Hack
    {
      icon: <Bug className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.9 - Bug / Glitch / Hack",
      color: "from-red-600 to-red-900",
      bgColor: "bg-red-50",
      borderColor: "border-red-600",
      content: [
        "🚫 STRICTEMENT INTERDIT",
        "⚠️ SANCTIONS LOURDES",
        "",
        "L'utilisation de dysfonctionnements techniques",
        "ou de moyens non prévus par le jeu",
        "est strictement interdite et lourdement sanctionnée.",
        "",
        "Cela inclut :",
        "• Exploitation de bugs",
        "• Utilisation de glitchs",
        "• Hacks / Cheats / Mods non autorisés",
        "",
        "= BAN PERMANENT immédiat"
      ]
    },
    // FreeKill
    {
      icon: <Skull className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.10 - FreeKill",
      color: "from-red-600 to-red-800",
      bgColor: "bg-red-50",
      borderColor: "border-red-600",
      content: [
        "🚫 STRICTEMENT INTERDIT",
        "",
        "Le FreeKill correspond à une interaction violente",
        "engagée sans justification RP valable",
        "ou sans avertissement préalable.",
        "",
        "✅ OBLIGATION :",
        "Toute action violente DOIT avoir :",
        "• Une raison RP valable",
        "• Un contexte cohérent",
        "• Un avertissement préalable",
        "",
        "Ne tuez PAS sans raison RP claire."
      ]
    },
    // Force RP
    {
      icon: <Target className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.11 - Force RP",
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-600",
      content: [
        "🚫 INTERDIT",
        "",
        "Le Force RP consiste à provoquer ou imposer",
        "volontairement une situation dans le but",
        "de forcer une réaction RP.",
        "",
        "❌ EXEMPLES :",
        "• Provoquer verbalement un groupe",
        "  pour déclencher une interaction",
        "",
        "• Insister auprès d'un service public",
        "  afin de forcer une poursuite",
        "",
        "Laissez le RP se développer naturellement."
      ]
    },
    // Troll
    {
      icon: <Laugh className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.12 - Troll",
      color: "from-yellow-600 to-orange-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-600",
      content: [
        "🚫 STRICTEMENT INTERDIT",
        "",
        "Le Troll, sous toutes ses formes,",
        "visant à perturber volontairement",
        "l'expérience de jeu est strictement interdit.",
        "",
        "Cela inclut :",
        "• Comportements absurdes répétés",
        "• Actions visant à embêter les autres",
        "• Perturbation volontaire du RP",
        "• Manque de sérieux constant",
        "",
        "Sanctions immédiates et sévères."
      ]
    },
    // Mass RP
    {
      icon: <MapPin className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.13 - Mass RP",
      color: "from-green-600 to-teal-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-600",
      content: [
        "✅ OBLIGATOIRE",
        "",
        "Le Mass RP consiste à prendre en compte",
        "que la ville est vivante et habitée,",
        "même en l'absence de joueurs visibles.",
        "",
        "❌ EXEMPLE :",
        "Éviter certaines zones ou comportements",
        "incohérents en pleine ville.",
        "",
        "Agissez comme si la ville était RÉELLEMENT",
        "peuplée de milliers de personnes.",
        "",
        "Ne faites pas n'importe quoi en public."
      ]
    },
    // No RP / Refus de RP
    {
      icon: <X className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.14 - No RP / Refus de RP",
      color: "from-red-600 to-red-800",
      bgColor: "bg-red-50",
      borderColor: "border-red-600",
      content: [
        "🚫 STRICTEMENT INTERDIT",
        "",
        "Il est interdit de refuser de jouer",
        "une scène RolePlay, quelles que soient",
        "les circonstances.",
        "",
        "✅ OBLIGATION :",
        "Toute interaction DOIT être jouée",
        "jusqu'à son terme.",
        "",
        "Vous ne pouvez PAS :",
        "• Ignorer une interaction RP",
        "• Partir sans raison valable",
        "• Refuser de jouer une scène"
      ]
    },
    // Raccourci RP
    {
      icon: <Palette className="w-16 h-16" />,
      category: "LEXIQUE RP",
      title: "2.15 - Raccourci RP",
      color: "from-pink-600 to-red-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-600",
      content: [
        "🚫 INTERDIT",
        "",
        "Les raccourcis RP sont interdits.",
        "",
        "❌ EXEMPLE :",
        "Une tenue ou une couleur ne permet PAS",
        "d'identifier automatiquement un personnage",
        "ou un groupe.",
        "",
        "Vous devez :",
        "• Reconnaître le visage",
        "• Entendre la voix",
        "• Avoir des preuves RP concrètes",
        "",
        "Ne présumez PAS l'identité sans preuve."
      ]
    },
    // Règlement Général 1-5
    {
      icon: <FileText className="w-16 h-16" />,
      category: "RÈGLEMENT GÉNÉRAL",
      title: "Règles 2.1 à 2.5",
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-600",
      content: [
        "✅ RÈGLE 2.1 :",
        "Tous les joueurs doivent avoir rejoint le Discord.",
        "",
        "✅ RÈGLE 2.2 :",
        "Les propos RP sont tolérés dans une certaine limite.",
        "Comportement excessif = sanction.",
        "",
        "✅ RÈGLE 2.3 :",
        "Activité non officielle lors d'un événement = INTERDIT.",
        "",
        "✅ RÈGLE 2.4 :",
        "Se déconnecter lors d'une action RP = INTERDIT.",
        "",
        "✅ RÈGLE 2.5 :",
        "Identifier un masqué par sa voix uniquement = INTERDIT."
      ]
    },
    // Règlement Général 6-10
    {
      icon: <Volume2 className="w-16 h-16" />,
      category: "RÈGLEMENT GÉNÉRAL",
      title: "Règles 2.6 à 2.10",
      color: "from-purple-600 to-indigo-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-600",
      content: [
        "✅ RÈGLE 2.6 :",
        "Modificateur de voix/soundboard = INTERDIT",
        "(sauf exception validée par ticket).",
        "",
        "✅ RÈGLE 2.7 :",
        "Interactions sexuelles explicites = INTERDIT.",
        "",
        "✅ RÈGLE 2.8 :",
        "Transfert massif à un nouveau joueur = INTERDIT",
        "(sanction pour les deux parties).",
        "",
        "✅ RÈGLE 2.9 :",
        "Port d'un sac obligatoire pour objets volumineux.",
        "",
        "✅ RÈGLE 2.10 :",
        "Zones sécurisées : interactions agressives = INTERDIT."
      ]
    },
    // Règlement Général 11-15
    {
      icon: <Settings className="w-16 h-16" />,
      category: "RÈGLEMENT GÉNÉRAL",
      title: "Règles 2.11 à 2.15",
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-600",
      content: [
        "✅ RÈGLE 2.11 :",
        "Termes admin/outils internes/enregistrements = INTERDIT en jeu.",
        "",
        "✅ RÈGLE 2.12 :",
        "Échange de biens RP contre valeur réelle = INTERDIT.",
        "",
        "✅ RÈGLE 2.13 :",
        "Transporter un joueur si véhicule complet = INTERDIT.",
        "",
        "✅ RÈGLE 2.14 :",
        "Transférer ses biens avant départ définitif = INTERDIT",
        "(sanction pour donneur ET receveur).",
        "",
        "✅ RÈGLE 2.15 :",
        "Seule l'administration peut annuler une scène RP."
      ]
    },
    // Conclusion
    {
      icon: <Server className="w-16 h-16" />,
      category: "CONCLUSION",
      title: "Bon Roleplay !",
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-600",
      content: [
        "Merci d'avoir lu le règlement complet",
        "du serveur ViceCity RP !",
        "",
        "📋 Respectez ces règles en toute circonstance",
        "🎭 Jouez votre personnage avec cohérence",
        "🚫 Évitez les infractions lourdes",
        "✅ Privilégiez le RP de qualité",
        "",
        "En cas de doute : ouvrez un TICKET !",
        "",
        "Bienvenue sur ViceCity RP,",
        "amusez-vous bien ! 🌴✨"
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
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
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors mb-8 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">
              Retour au Règlement
            </span>
          </a>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 
              className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              RÈGLES SERVEUR
            </h1>
            <p className="text-cyan-300 text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
              🖥️ Règlement RolePlay du Serveur FiveM
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
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)'
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
                          line.startsWith('►') || line.startsWith('✓') || line.startsWith('⚠') || line.startsWith('•') || line.startsWith('→') || line.startsWith('✅') || line.startsWith('🚫') || line.startsWith('❌')
                            ? 'font-semibold'
                            : ''
                        }`}
                        style={{ 
                          fontFamily: line.startsWith('✅') || line.startsWith('🚫') || line.startsWith('❌') || line.includes('INTERDIT') || line.includes('OBLIGATOIRE') || line.includes('STRICTEMENT')
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
                  : "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 active:scale-95"
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
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 w-8'
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
                  : "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 active:scale-95"
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
