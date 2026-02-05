import { ChevronLeft, ChevronRight, Shield, Heart, Building2, FileText, HelpCircle, FolderOpen, MessageCircle, Users, Landmark, Briefcase, AlertTriangle, Ban, Settings, Skull, Radio, Plane, MapPin, Trophy, AlertCircle, Lock, Crosshair, Bike, Archive, Shirt, Camera, ShieldAlert, Swords, Target, Car, Waves, UserCircle, Search, FileSearch, Key, Truck, Building, DollarSign, TrendingUp, Megaphone, Home, XCircle, CheckCircle, Ticket } from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { useState } from "react";

export default function LegalPage() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Structure des sections
  const sections = {
    general: {
      name: "GÉNÉRAL",
      color: "from-blue-600 to-cyan-600",
      icon: <FileText className="w-8 h-8" />,
      subCategories: ["Règlement", "À savoir", "Aide dossier", "Discord"]
    },
    servicesPublics: {
      name: "SERVICES PUBLICS",
      color: "from-red-600 to-orange-600",
      icon: <Shield className="w-8 h-8" />,
      subCategories: ["Services Publics", "Gouvernement", "EMS", "Police"]
    },
    entreprise: {
      name: "ENTREPRISE",
      color: "from-green-600 to-teal-600",
      icon: <Briefcase className="w-8 h-8" />,
      subCategories: ["Entreprise"]
    }
  };

  // Contenu pour chaque sous-catégorie (placeholders en attendant)
  const contentData: Record<string, any[]> = {
    // GÉNÉRAL
    "Règlement": [
      {
        icon: <FileText className="w-16 h-16" />,
        category: "GÉNÉRAL - RÈGLEMENT",
        title: "Engagement & Responsabilité",
        color: "from-blue-600 to-cyan-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "En vous connectant au serveur ViceCity RP,",
          "vous reconnaissez avoir pris connaissance",
          "du règlement et vous vous engagez à le respecter.",
          "",
          "⚠️ IMPORTANT :",
          "Ignorer les règles, prétendre ne pas les connaître",
          "ou invoquer une absence dans le règlement",
          "ne constitue en aucun cas une excuse valable.",
          "",
          "🎯 NOUS ATTENDONS DE CHAQUE JOUEUR :",
          "• Un comportement exemplaire",
          "• Des initiatives RP cohérentes",
          "• L'utilisation des reports/tickets en cas de doute"
        ]
      },
      {
        icon: <Shield className="w-16 h-16" />,
        category: "GÉNÉRAL - RÈGLEMENT",
        title: "Points Importants",
        color: "from-red-600 to-orange-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "🚨 STRICTEMENT INTERDIT :",
          "",
          "🚫 Apologie ou représentation de groupes haineux,",
          "   milices armées ou organisations extrémistes réelles",
          "",
          "🚫 Toute utilisation de triche, logiciels non autorisés",
          "   ou moyens détournés pour obtenir un avantage",
          "",
          "🚫 Programmes tiers donnant un avantage déloyal",
          "",
          "🚫 Propos haineux, discriminatoires ou harcèlement",
          "",
          "🚫 Scène/contenu sexuel explicite ou impliquant mineurs",
          "",
          "🚫 Utilisation d'un double compte"
        ]
      },
      {
        icon: <AlertTriangle className="w-16 h-16" />,
        category: "GÉNÉRAL - RÈGLEMENT",
        title: "Comportements Inappropriés (1/2)",
        color: "from-red-600 to-red-800",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "🔴 PROPOS HAINEUX :",
          "Propos raciste, xénophobe, homophobe = INTERDIT",
          "Termes explicitement dénigrants = INACCEPTABLE",
          "",
          "🔴 RP SEXE :",
          "RP à caractère sexuel = INTERDIT sans exception",
          "",
          "🔴 CONTENUS INAPPROPRIÉS :",
          "Images IRL religieuses extrêmes, sexuelles,",
          "haineuses ou discriminantes = INTERDITES",
          "",
          "🔴 PUBLICITÉS :",
          "Toute forme de publicité = INTERDITE",
          "",
          "🔴 VOCAL EXTÉRIEUR :",
          "Communication vocale externe à FiveM = INTERDITE"
        ]
      },
      {
        icon: <Ban className="w-16 h-16" />,
        category: "GÉNÉRAL - RÈGLEMENT",
        title: "Comportements Inappropriés (2/2)",
        color: "from-orange-600 to-red-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-600",
        content: [
          "🔴 STREAMHACK :",
          "Exploiter un stream pour infos en jeu = INTERDIT",
          "",
          "🔴 DIALECTE HRP :",
          "Termes HRP en scène RP = INTERDIT",
          "",
          "🔴 PORT DU MASQUE/CASQUE :",
          "En ville sans contexte RP = INTERDIT",
          "(Casque autorisé sur deux-roues)",
          "",
          "🔴 ÉCHANGES ARGENT RÉEL :",
          "Vente/achat contre argent réel = INTERDIT",
          "",
          "🔴 BUGS/GLITCHES :",
          "Exploitation = INTERDITE"
        ]
      },
      {
        icon: <Users className="w-16 h-16" />,
        category: "GÉNÉRAL - RÈGLEMENT",
        title: "Comportements Inappropriés (3/3)",
        color: "from-yellow-600 to-orange-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-600",
        content: [
          "🔴 TERMES SENSIBLES :",
          "Termes explicites ou déplacés = INTERDITS",
          "",
          "🔴 NOM/PRÉNOM RP :",
          "Noms cohérents, respectueux et crédibles REQUIS",
          "Noms trolls, célébrités, idéologies extrêmes = BAN",
          "",
          "🔴 MANQUE DE RESPECT :",
          "Irrespect envers joueurs/staff = INTERDIT",
          "",
          "🔴 MODIFICATEUR DE VOIX :",
          "Interdit sauf exception validée par staff",
          "",
          "🔴 CONDUITE RP :",
          "Conduite RP cohérente exigée en TOUTE circonstance"
        ]
      },
      {
        icon: <Briefcase className="w-16 h-16" />,
        category: "GÉNÉRAL - RÈGLEMENT",
        title: "Notions RP Importantes",
        color: "from-purple-600 to-indigo-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "📚 LEXIQUE RP À CONNAÎTRE :",
          "",
          "• PowerGaming : actions irréalistes",
          "• Mass RP : ville vivante et peuplée",
          "• Freekill : violence sans raison RP",
          "• Metagaming : infos HRP utilisées en RP",
          "• Carkill : usage abusif du véhicule",
          "• NoFear : absence de peur",
          "• PainRP : conséquences physiques/émotionnelles",
          "• Cohérence RP : respect du contexte",
          "• Raccourci RP : conclusions hâtives",
          "• Force RP : forcer une situation prolongée",
          "• Copbait : provoquer la police sans raison",
          "• Win RP : chercher à gagner vs réalisme"
        ]
      },
      {
        icon: <Shield className="w-16 h-16" />,
        category: "GÉNÉRAL - RÈGLEMENT",
        title: "Relations Services Publics",
        color: "from-blue-600 to-indigo-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "🛡️ GÉNÉRALITÉS :",
          "• Se déconnecter en scène = INTERDIT",
          "• Discord services publics = gestion fondateur",
          "",
          "💊 EMS & POMPIERS :",
          "• Interactions agressives = INTERDITES",
          "• Liens groupes illégaux = accord staff requis",
          "• Mentir sur état de santé RP = INTERDIT",
          "• Mass RP à l'hôpital = OBLIGATOIRE",
          "",
          "🚔 POLICE :",
          "• Respect RP envers police = OBLIGATOIRE",
          "• Copbait, perturbation poursuite = INTERDIT",
          "• Prise d'otage policiers = encadrée strictement",
          "",
          "💥 GOUVERNEMENT :",
          "• Agression = validation staff préalable REQUISE"
        ]
      },
      {
        icon: <FileText className="w-16 h-16" />,
        category: "GÉNÉRAL - RÈGLEMENT",
        title: "Remboursements & Wipe",
        color: "from-green-600 to-teal-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-600",
        content: [
          "💸 REMBOURSEMENTS :",
          "• Pertes RP = AUCUN remboursement",
          "• Pertes HRP sans preuves = AUCUN remboursement",
          "• Bug/crash avéré = étude possible",
          "• ViceCity RP se réserve le droit de refuser",
          "",
          "✈️ WIPE / RESET :",
          "• Wipe = réinitialisation complète personnage",
          "• Mort RP = wipe selon critères définis",
          "• Transferts de biens avant wipe = INTERDITS",
          "• Groupes officiels = obligations spécifiques",
          "• Anciens membres services publics = restrictions"
        ]
      },
      {
        icon: <Settings className="w-16 h-16" />,
        category: "GÉNÉRAL - RÈGLEMENT",
        title: "Modifications & Déconnexions",
        color: "from-gray-600 to-gray-800",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-600",
        content: [
          "💻 MODIFICATIONS DU JEU :",
          "Toute modification visant à altérer :",
          "• Effets visuels",
          "• Interface",
          "• FOV",
          "• Fichiers du jeu",
          "= INTERDITE sauf exceptions autorisées",
          "",
          "🔌 COMA & DÉCONNEXIONS :",
          "• Événements pré-coma = connus du personnage",
          "• Vengeance post-coma = INTERDITE",
          "• Insultes/manipulations de corps = INTERDITES",
          "• Déconnexions en scène/coma = sanctionnables"
        ]
      }
    ],
    "À savoir": [
      {
        icon: <Skull className="w-16 h-16" />,
        category: "GÉNÉRAL - À SAVOIR",
        title: "💀 Mort RP - Préambule",
        color: "from-purple-600 to-indigo-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "💀 MORT RP",
          "",
          "La mort RP constitue l'un des événements",
          "les plus marquants dans l'histoire d'un personnage.",
          "Elle marque la fin définitive de celui-ci.",
          "",
          "⚠️ IMPORTANT :",
          "Une fois qu'un personnage est déclaré mort RP,",
          "le joueur est WIPE. Il ne peut plus incarner",
          "ce personnage, ni reprendre son histoire.",
          "",
          "Il devra créer un nouveau personnage :",
          "• Nouvelle identité",
          "• Nouveaux liens",
          "• Passé vierge"
        ]
      },
      {
        icon: <FileText className="w-16 h-16" />,
        category: "GÉNÉRAL - À SAVOIR",
        title: "💀 Mort RP - Conditions",
        color: "from-red-600 to-pink-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "✅ CONDITIONS POUR PROPOSER UNE MORT RP :",
          "",
          "1️⃣ Aucune motivation HRP acceptée",
          "   → Raisons HRP = dossier refusé",
          "",
          "2️⃣ La mort RP = dernier recours",
          "   → Prouver que d'autres solutions RP",
          "      ont été envisagées ou tentées",
          "",
          "3️⃣ Impossible pour joueur banni",
          "   → Attendre son retour pour entamer la procédure",
          "",
          "✅ POSSIBILITÉ :",
          "Un joueur peut demander la mort RP",
          "de son propre personnage (dossier requis)"
        ]
      },
      {
        icon: <Users className="w-16 h-16" />,
        category: "GÉNÉRAL - À SAVOIR",
        title: "💀 Mort RP - Accompagnement",
        color: "from-blue-600 to-cyan-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "🤝 ACCOMPAGNEMENT PAR LES RÉFÉRENTS :",
          "",
          "Les référents Mort RP sont là pour vous accompagner",
          "tout au long de cette démarche.",
          "",
          "✅ Vous êtes libre de proposer votre propre scénario",
          "",
          "✅ Vous pouvez demander le soutien créatif",
          "   des référents pour construire ensemble",
          "   une mise en scène immersive et cohérente",
          "",
          "Chaque dossier est une opportunité créative unique,",
          "traitée avec écoute et bienveillance."
        ]
      },
      {
        icon: <Shield className="w-16 h-16" />,
        category: "GÉNÉRAL - À SAVOIR",
        title: "💀 Mort RP - Règles Générales",
        color: "from-orange-600 to-red-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-600",
        content: [
          "📌 RÈGLES GÉNÉRALES :",
          "",
          "1️⃣ Mort RP = DÉFINITIVE",
          "   → Wipe du personnage",
          "   → Pas de personnage lié à l'ancien",
          "",
          "2️⃣ Dossier clairement rédigé",
          "   → Structuré et motivations RP solides",
          "",
          "3️⃣ Revenge RP STRICTEMENT INTERDIT",
          "   → Pas de vengeance via nouveau personnage",
          "",
          "4️⃣ EMS peuvent demander mort RP",
          "   → Dossier médical RP circonstancié requis",
          "",
          "5️⃣ Tout le monde est concerné",
          "   → Y compris services publics (EMS, SASP, LSFD...)"
        ]
      },
      {
        icon: <FolderOpen className="w-16 h-16" />,
        category: "GÉNÉRAL - À SAVOIR",
        title: "💀 Mort RP - Déroulement",
        color: "from-purple-600 to-pink-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "🎬 DÉROULEMENT D'UNE MORT RP :",
          "",
          "1️⃣ SOUMISSION DU DOSSIER",
          "   → Dossier complet détaillant la demande",
          "",
          "2️⃣ ÉTUDE DU DOSSIER",
          "   → Référents examinent et statuent",
          "",
          "3️⃣ PRÉPARATION DE LA SCÈNE",
          "   → Planification avec/sans référents",
          "   → Informer date et heure aux référents",
          "",
          "4️⃣ EXÉCUTION DE LA SCÈNE",
          "   → Prévenir référents via ticket",
          "   → Présence référent OBLIGATOIRE",
          "",
          "5️⃣ CLÔTURE",
          "   → Joueur wipe + ticket clôturé"
        ]
      },
      {
        icon: <Radio className="w-16 h-16" />,
        category: "GÉNÉRAL - À SAVOIR",
        title: "🎬 Streameur - Interdictions",
        color: "from-red-600 to-red-800",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "🎬 STREAMEUR",
          "",
          "⛔ IL EST INTERDIT :",
          "",
          "🚫 De trashtalk ou de prendre les informations",
          "   du son chat",
          "",
          "🚫 De streamer les réunions communautaires",
          "   (interadmin, besoin d'aide, etc.)",
          "",
          "🚫 De mentionner le nom d'un joueur ou d'un streamer",
          "   sans son accord",
          "",
          "Respectez la vie privée et l'expérience",
          "des autres joueurs."
        ]
      },
      {
        icon: <Plane className="w-16 h-16" />,
        category: "GÉNÉRAL - À SAVOIR",
        title: "✈️ Aérien - Règles Générales",
        color: "from-sky-600 to-blue-600",
        bgColor: "bg-sky-50",
        borderColor: "border-sky-600",
        content: [
          "✈️ AÉRIEN - RÈGLES IMPORTANTES :",
          "",
          "🎈 RÈGLES DE BASE :",
          "",
          "• Voler au MINIMUM à 300m du sol",
          "  (sauf pour atterrissage)",
          "",
          "• Utilisation cohérente des véhicules aériens",
          "  → Usage abusif = sanctions",
          "",
          "• Refuel nécessaire toutes les 30 minutes",
          "  dans un lieu adéquat",
          "",
          "Restez cohérent et logique dans l'utilisation",
          "de votre appareil aérien."
        ]
      },
      {
        icon: <MapPin className="w-16 h-16" />,
        category: "GÉNÉRAL - À SAVOIR",
        title: "✈️ Aérien - Atterrissage",
        color: "from-blue-600 to-indigo-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "🛬 ATTERRISSAGE :",
          "",
          "🚁 HÉLICOPTÈRES :",
          "• Atterrir OBLIGATOIREMENT sur les héliports",
          "• Sinon = amende police",
          "• Abus = sanctions",
          "",
          "✈️ AVIONS :",
          "• Atterrir OBLIGATOIREMENT à l'aéroport",
          "• Sinon = amende police",
          "• Abus = sanctions",
          "",
          "⚠️ IMPORTANT :",
          "Pilotage aérien cohérent requis.",
          "Pas d'atterrissage en pleine ville",
          "ou endroits incohérents."
        ]
      },
      {
        icon: <Ban className="w-16 h-16" />,
        category: "GÉNÉRAL - À SAVOIR",
        title: "✈️ Aérien - Interdictions",
        color: "from-red-600 to-red-800",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "⛔ IL EST INTERDIT :",
          "",
          "🚫 Utiliser avion/hélico lors de scène police",
          "   pour prendre la fuite (sauf accord staff)",
          "",
          "🚫 Utiliser avion/hélico lors de scènes illégales",
          "   (transaction, fuite, prise d'information...)",
          "",
          "🚫 Survoler les bâtiments en ville",
          "   → Restez à 300m des bâtiments",
          "",
          "🚫 Run et atterrir sur des points de runs",
          "   en avion/hélicoptère",
          "   (Question de cohérence)"
        ]
      },
      {
        icon: <MessageCircle className="w-16 h-16" />,
        category: "GÉNÉRAL - À SAVOIR",
        title: "📃 Ticket - Conditions",
        color: "from-indigo-600 to-purple-600",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-600",
        content: [
          "📃 TICKET",
          "",
          "Il est important de respecter certaines conditions",
          "lorsque vous ouvrez un ticket auprès du Staff :",
          "",
          "✅ Utilisez des formules de politesse",
          "",
          "✅ Respectez le staff même en cas de désaccord",
          "",
          "🚫 Pas d'insulte",
          "",
          "✅ Ne pas ouvrir de tickets sans raison",
          "   → Précisez vos demandes",
          "",
          "⏰ 24h sans réponse = ticket clôturé",
          "",
          "🚫 Spam ou relances = sanctionnable/refus"
        ]
      },
      {
        icon: <HelpCircle className="w-16 h-16" />,
        category: "GÉNÉRAL - À SAVOIR",
        title: "📣 FAQ (1/3)",
        color: "from-green-600 to-teal-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-600",
        content: [
          "📣 FAQ - Questions Fréquentes",
          "",
          "🔎 Perquisitionner 4 fois d'affilée : Possible ?",
          "✅ Si rivalités réelles et justifications logiques = OK",
          "❌ Si répétitif sans évolution = abusif (force RP)",
          "⚖️ La raison doit rester primordiale",
          "",
          "🚗 Franchir un escalier en voiture ?",
          "✅ Petit escalier (2-3 marches) + 4x4/Jeep = OK",
          "❌ Escalier trop haut = powergaming",
          "🔎 Restez réaliste : citadine ≠ SUV",
          "",
          "🔴 Déconnexion avant reboot ?",
          "❌ Non autorisé dans lieu de braquage",
          "⚠️ Exploitation système = powergaming"
        ]
      },
      {
        icon: <HelpCircle className="w-16 h-16" />,
        category: "GÉNÉRAL - À SAVOIR",
        title: "📣 FAQ (2/3)",
        color: "from-teal-600 to-cyan-600",
        bgColor: "bg-teal-50",
        borderColor: "border-teal-600",
        content: [
          "📣 FAQ - Questions Fréquentes",
          "",
          "🚪 Vendre drogue sans portières ?",
          "❌ Non, détruire porte volontairement",
          "   = exploitation bug + incohérence RP",
          "",
          "💃 Faire danser un joueur en PO ?",
          "✅ Oui, mais avec précaution",
          "⚠️ Scène bienveillante et non abusive",
          "🚫 Forcer/humilier = Force RP (sanctionnable)",
          "",
          "💸 Indépendants peuvent amender ?",
          "❌ Non, ce n'est pas cohérent",
          "Les indépendants ne peuvent pas mettre d'amendes"
        ]
      },
      {
        icon: <HelpCircle className="w-16 h-16" />,
        category: "GÉNÉRAL - À SAVOIR",
        title: "📣 FAQ (3/3)",
        color: "from-cyan-600 to-blue-600",
        bgColor: "bg-cyan-50",
        borderColor: "border-cyan-600",
        content: [
          "📣 FAQ - Questions Fréquentes",
          "",
          "🚫 Distance autour zone safe ?",
          "❌ Non, actes illégaux autorisés hors zone safe",
          "⚠️ Tant que cohérence RP respectée",
          "(Ex : pas braquer devant poste police)",
          "",
          "🧐 Reconnaître quelqu'un masqué ?",
          "• Masque complet = difficile à reconnaître",
          "• Signe distinctif (cicatrice, brûlure) = identifiable",
          "• Retirer tatouage = incohérent",
          "• Masques médicaux ≠ dissimuler identité",
          "",
          "✅ À RÉGLER EN RP :",
          "Patron m'a viré sans raison/payer ?",
          "→ Déposer plainte au SASP"
        ]
      }
    ],
    "Aide dossier": [
      {
        icon: <FolderOpen className="w-16 h-16" />,
        category: "GÉNÉRAL - AIDE DOSSIER",
        title: "📂 Création & Dépôt de Dossiers",
        color: "from-blue-600 to-cyan-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "📂 CRÉATION & DÉPÔT DE DOSSIERS",
          "",
          "Cette page a pour objectif de vous guider",
          "dans la création et le dépôt de différents dossiers RP,",
          "nécessaires à certaines démarches importantes.",
          "",
          "📁 DOSSIERS CONCERNÉS :",
          "• Dossier groupes illégaux (Gang & Organisation)",
          "• Dossier de Mort RP",
          "• Dossier de reprise ou création d'entreprise",
          "",
          "👉 Tous les dossiers doivent être envoyés via TICKET,",
          "sous format Google Docs ou Google Slides,",
          "afin d'être examinés et validés par la modération."
        ]
      },
      {
        icon: <FileText className="w-16 h-16" />,
        category: "GÉNÉRAL - AIDE DOSSIER",
        title: "🔗 Formats Autorisés",
        color: "from-green-600 to-teal-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-600",
        isSpecial: true,
        specialContent: (
          <div className="space-y-6">
            <p className="text-lg text-gray-800 font-semibold" style={{ fontFamily: "'Crimson Text', serif" }}>
              🔗 FORMATS AUTORISÉS :
            </p>
            
            <div className="flex flex-col gap-4 mt-6">
              <a
                href="https://www.google.fr/intl/fr/docs/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-between overflow-hidden"
                style={{ fontFamily: "'Special Elite', cursive" }}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <FileText className="w-8 h-8" />
                  <span>Google Documents</span>
                </div>
                <span className="relative z-10 text-2xl">→</span>
              </a>

              <a
                href="https://www.google.fr/intl/fr/slides/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-between overflow-hidden"
                style={{ fontFamily: "'Special Elite', cursive" }}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <FolderOpen className="w-8 h-8" />
                  <span>Google Slides</span>
                </div>
                <span className="relative z-10 text-2xl">→</span>
              </a>
            </div>

            <div className="mt-8 space-y-3">
              <p className="text-lg text-gray-800" style={{ fontFamily: "'Crimson Text', serif" }}>
                Nous remercions chaque joueur pour son investissement,
              </p>
              <p className="text-lg text-gray-800" style={{ fontFamily: "'Crimson Text', serif" }}>
                sa créativité et sa motivation à proposer
              </p>
              <p className="text-lg text-gray-800" style={{ fontFamily: "'Crimson Text', serif" }}>
                du contenu nouveau et qualitatif pour le serveur.
              </p>
              <p className="text-lg text-gray-800 font-semibold mt-4" style={{ fontFamily: "'Crimson Text', serif" }}>
                Nous restons ouverts à toutes propositions cohérentes :
              </p>
              <p className="text-lg text-gray-800 font-bold" style={{ fontFamily: "'Special Elite', cursive" }}>
                à vous de nous convaincre ! 💪
              </p>
            </div>
          </div>
        ),
        content: []
      },
      {
        icon: <Skull className="w-16 h-16" />,
        category: "GÉNÉRAL - AIDE DOSSIER",
        title: "🔪 Groupes Illégaux Officiels",
        color: "from-red-600 to-orange-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "🔪 GROUPES ILLÉGAUX OFFICIELS",
          "(GANG & ORGANISATIONS)",
          "",
          "Pour créer un groupe illégal officiel :",
          "",
          "✅ CONDITIONS :",
          "• Être âgé de 16 ans minimum",
          "• Constituer un dossier complet",
          "",
          "📋 LE DOSSIER DOIT CONTENIR :",
          "• Nom du projet",
          "• Background du projet",
          "• Âge, Discord et ID Discord de chaque membre",
          "• Objectifs du groupe",
          "• Expériences RP illégales des leads"
        ]
      },
      {
        icon: <Users className="w-16 h-16" />,
        category: "GÉNÉRAL - AIDE DOSSIER",
        title: "🔪 Groupes Illégaux (suite)",
        color: "from-orange-600 to-red-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-600",
        content: [
          "📋 DOSSIER (SUITE) :",
          "",
          "• Apport potentiel du groupe au serveur",
          "• Véhicules souhaités",
          "• Armes souhaitées",
          "• Business envisagé",
          "• Vision globale du RP illégal",
          "",
          "⚠️ IMPORTANT :",
          "Tout dossier incomplet ou incohérent",
          "pourra être REFUSÉ.",
          "",
          "Le dossier sera étudié par les référents illégaux."
        ]
      },
      {
        icon: <Shield className="w-16 h-16" />,
        category: "GÉNÉRAL - AIDE DOSSIER",
        title: "🔪 Passage Gang → Organisation",
        color: "from-purple-600 to-pink-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "🔪 PASSAGE DE GANG À ORGANISATION",
          "",
          "Le passage de Gang à Organisation est soumis",
          "à validation et repose sur des critères précis,",
          "afin de garantir un RP structuré et durable.",
          "",
          "📋 CONDITIONS D'ÉVALUATION :",
          "• Background du groupe",
          "• Objectifs et ambitions",
          "• Raisons du passage en organisation",
          "• Motivation globale",
          "• Événements RP marquants",
          "• Accomplissements RP",
          "• Apport concret au serveur",
          "",
          "⚖️ La décision finale appartient au staff."
        ]
      },
      {
        icon: <Skull className="w-16 h-16" />,
        category: "GÉNÉRAL - AIDE DOSSIER",
        title: "💀 Mort RP - Dossier (1/3)",
        color: "from-red-600 to-red-800",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "💀 MORT RP",
          "",
          "Toute demande de Mort RP sur un autre joueur",
          "doit faire l'objet d'un dossier détaillé,",
          "transmis au staff via ticket,",
          "sous format Google Doc ou Google Slides.",
          "",
          "1️⃣ RELATION & CONTEXTE :",
          "",
          "• Personnage concerné :",
          "  → Nom et prénom RP",
          "",
          "• Nature de la relation :",
          "  → Décrire la relation entre les personnages",
          "     (alliés, rivaux, ennemis, etc.)",
          "  → Son évolution RP"
        ]
      },
      {
        icon: <FileText className="w-16 h-16" />,
        category: "GÉNÉRAL - AIDE DOSSIER",
        title: "💀 Mort RP - Dossier (2/3)",
        color: "from-orange-600 to-red-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-600",
        content: [
          "2️⃣ MOTIFS & PREUVES :",
          "",
          "• Conflit principal :",
          "  → Résumé clair du conflit motivant la demande",
          "",
          "• Conséquences anticipées :",
          "  → Impact RP attendu sur votre personnage",
          "     et l'histoire",
          "",
          "�� Preuves RP :",
          "  → Captures d'écran, vidéos ou photos",
          "     issues EXCLUSIVEMENT du RP",
          "",
          "⚠️ Preuves hors RP (Discord, logs) = NON ACCEPTÉES",
          "",
          "📌 Un ultimatum clair doit être posé au joueur"
        ]
      },
      {
        icon: <FolderOpen className="w-16 h-16" />,
        category: "GÉNÉRAL - AIDE DOSSIER",
        title: "💀 Mort RP - Dossier (3/3)",
        color: "from-red-600 to-pink-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "3️⃣ DÉROULEMENT DE LA SCÈNE & PORTES DE SORTIE :",
          "",
          "• Scénario :",
          "  → Lieu, moment, déroulement prévu",
          "  → Plan alternatif en cas d'imprévu",
          "",
          "• Portes de sortie :",
          "  → Proposer alternatives crédibles à la mort RP",
          "     (négociation, arrangement, compromis RP)",
          "",
          "4️⃣ ÉLÉMENTS LAISSÉS À LA POLICE :",
          "",
          "• Preuves sur place : Notes, téléphones, photos,",
          "  témoignages ou tout élément RP exploitable",
          "",
          "⚠️ Dossier non conforme = REFUS automatique"
        ]
      },
      {
        icon: <Building2 className="w-16 h-16" />,
        category: "GÉNÉRAL - AIDE DOSSIER",
        title: "��� Reprise/Création Entreprise",
        color: "from-green-600 to-teal-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-600",
        content: [
          "💒 REPRISE OU CRÉATION D'ENTREPRISE",
          "",
          "✅ CONDITIONS REQUISES :",
          "• 16 ans minimum",
          "• 100 heures de RP minimum",
          "• Bonne disponibilité",
          "• Connaissances en gestion d'entreprise",
          "",
          "📋 DOSSIER À FOURNIR (VIA TICKET) :",
          "• Votre expérience RP",
          "• Présentation de votre personnage RP",
          "• Vos motivations",
          "• Présentation complète de l'entreprise souhaitée",
          "• Projets à court et long terme",
          "• Moyens de financement envisagés",
          "• Pourquoi VOUS êtes la bonne personne"
        ]
      }
    ],
    "Discord": [
      {
        icon: <MessageCircle className="w-16 h-16" />,
        category: "GÉNÉRAL - DISCORD",
        title: "🎯 Support",
        color: "from-blue-600 to-cyan-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "🎯 QU'EST-CE QU'UN SUPPORT ?",
          "",
          "Un Support est une personne qui a pour mission",
          "de vous assister sur toutes les questions relatives",
          "au serveur, aux règles, au RP ou aux dossiers",
          "que vous souhaitez soumettre.",
          "",
          "💼 ILS SONT À VOTRE DISPOSITION POUR :",
          "",
          "• Vous souhaitez déposer un dossier",
          "  (groupe, Mort RP, entreprise) ?",
          "",
          "• Vous avez un problème RP ou technique en jeu ?",
          "",
          "• Vous rencontrez une erreur dans votre personnage",
          "  ou votre progression ?",
          "",
          "• Vous voulez clarifier une règle ou une sanction ?",
          "",
          "Ces exemples ne sont pas limitatifs,",
          "n'hésitez pas à les solliciter pour tout autre besoin",
          "lié au serveur.",
          "",
          "📌 Pour cela, vous pouvez les ping",
          "dans les salons dédiés au Support."
        ]
      },
      {
        icon: <Users className="w-16 h-16" />,
        category: "GÉNÉRAL - DISCORD",
        title: "📜 Règlement Salons Communauté (1/2)",
        color: "from-purple-600 to-pink-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "📜 RÈGLEMENT DES SALONS 'COMMUNAUTÉ'",
          "",
          "🔰 RÈGLES GÉNÉRALES :",
          "",
          "✅ Respect & bienveillance :",
          "   Aucune insulte, provocation, discrimination",
          "   ou harcèlement ne sera toléré.",
          "",
          "🚫 Interdiction de RP :",
          "   Ces salons sont exclusivement HRP,",
          "   aucune information ou discussion liée au RP",
          "   ne doit être partagée ici.",
          "",
          "📌 Pas de spam ni de flood :",
          "   Évitez les messages inutiles à répétition.",
          "",
          "🔞 Contenu NSFW interdit :",
          "   Pas de contenu à caractère sexuel,",
          "   violent ou choquant."
        ]
      },
      {
        icon: <Shield className="w-16 h-16" />,
        category: "GÉNÉRAL - DISCORD",
        title: "📜 Règlement Salons Communauté (2/2)",
        color: "from-red-600 to-orange-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "📜 RÈGLEMENT DES SALONS 'COMMUNAUTÉ' (SUITE)",
          "",
          "🔰 RÈGLES GÉNÉRALES (SUITE) :",
          "",
          "🎭 Pas d'usurpation d'identité :",
          "   Ne vous faites pas passer pour un membre",
          "   du staff ou un autre joueur.",
          "",
          "🔔 MENTIONS AUTORISÉES :",
          "",
          "✅ Les joueurs peuvent ping les @helpeurs",
          "   en cas de besoin, ces derniers sont là",
          "   pour répondre aux questions et guider",
          "   les nouveaux.",
          "",
          "⚠️ IMPORTANT :",
          "Il est STRICTEMENT INTERDIT de ping",
          "un membre du staff (support, modération,",
          "staff, gestionnaire, responsable)."
        ]
      }
    ],
    // SERVICES PUBLICS
    "Services Publics": [
      {
        icon: <Shield className="w-16 h-16" />,
        category: "SERVICES PUBLICS",
        title: "🏥 Services Publics - Règles Générales",
        color: "from-red-600 to-orange-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "🏥 SERVICES PUBLICS",
          "",
          "⚠️ RÈGLES IMPORTANTES :",
          "",
          "🚫 VOL DE VÉHICULES :",
          "Le vol des véhicules des services publics",
          "est STRICTEMENT INTERDIT.",
          "",
          "✅ COHÉRENCE RP :",
          "Vous devez garder une cohérence",
          "entre votre métier et vos activités.",
          "",
          "📌 IMPORTANT :",
          "Respectez votre rôle et vos responsabilités",
          "en tant que membre d'un service public."
        ]
      },
      {
        icon: <Users className="w-16 h-16" />,
        category: "SERVICES PUBLICS",
        title: "🔓 Métiers Ripoux Autorisés",
        color: "from-purple-600 to-pink-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "🔓 MÉTIERS ÉLIGIBLES RIPOUX :",
          "",
          "Voici la liste des métiers qui sont éligibles ripoux",
          "(toutefois tous les métiers sont possibles",
          "avec accord staff) :",
          "",
          "👮 Police (SASP) : ✅",
          "",
          "🚑 EMS (SAMD) : ❌",
          "",
          "⚖️ Avocat : ✅",
          "",
          "⚠️ IMPORTANT :",
          "Les autres métiers nécessitent une validation",
          "préalable du staff."
        ]
      },
      {
        icon: <AlertTriangle className="w-16 h-16" />,
        category: "SERVICES PUBLICS",
        title: "👮 Police - Recrutement",
        color: "from-blue-600 to-indigo-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "👮 POLICE (SASP) - CONDITIONS :",
          "",
          "✅ POUR SE FAIRE RECRUTER :",
          "",
          "Toute personne souhaitant exercer ce métier",
          "doit subir un WIPE si elle a commis",
          "des actes illégaux.",
          "",
          "⚠️ ATTENTION :",
          "Si actes illégaux pendant le service",
          "= BL (Blacklist) + WIPE",
          "",
          "🚫 EN CAS DE DÉPART/LICENCIEMENT :",
          "Des conditions spécifiques s'appliquent",
          "pour rejoindre la Police."
        ]
      },
      {
        icon: <Landmark className="w-16 h-16" />,
        category: "SERVICES PUBLICS",
        title: "⚖️ Métiers Judiciaires - Recrutement",
        color: "from-yellow-600 to-orange-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-600",
        content: [
          "⚖️ JUGE, PROCUREUR, AVOCAT, MAIRIE :",
          "",
          "✅ CONDITIONS STRICTES :",
          "",
          "Dans ces cas spécifiques, le joueur doit :",
          "",
          "🚫 N'avoir AUCUN casier judiciaire",
          "",
          "🚫 N'avoir AUCUNE plainte confirmée",
          "",
          "⏰ Ses dernières actions illégalement enregistrées",
          "   dans les logs doivent remonter",
          "   au moins à 60 JOURS.",
          "",
          "⚠️ Ces conditions sont NON NÉGOCIABLES."
        ]
      }
    ],
    "Gouvernement": [
      {
        icon: <Landmark className="w-16 h-16" />,
        category: "SERVICES PUBLICS - GOUVERNEMENT",
        title: "🏫 Mairie - Règles (1/2)",
        color: "from-blue-600 to-indigo-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "🏫 MAIRIE",
          "",
          "🕒 DURÉE DU MANDAT :",
          "Un mandat de maire dure 4 mois.",
          "Ce délai permet d'assurer une gestion efficace,",
          "mais aussi de garantir un renouvellement régulier",
          "des idées et des approches.",
          "",
          "🚫 LIMITE DE RÉÉLECTION :",
          "Un maire ne peut être réélu que 2 fois consécutivement.",
          "Cela permet d'éviter la concentration du pouvoir",
          "et encourage la diversité des idées",
          "au sein de la mairie.",
          "",
          "👔 IMAGE DE LA MAIRIE :",
          "Un maire doit représenter l'image de la mairie",
          "à tout moment, en adoptant une tenue correcte,",
          "un langage respectueux et une attitude exemplaire,",
          "tant en public qu'en privé."
        ]
      },
      {
        icon: <Users className="w-16 h-16" />,
        category: "SERVICES PUBLICS - GOUVERNEMENT",
        title: "🏫 Mairie - Règles (2/2)",
        color: "from-indigo-600 to-purple-600",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-600",
        content: [
          "🏫 MAIRIE (SUITE)",
          "",
          "💼 ENGAGEMENT DU MAIRE :",
          "Un maire doit tenir son engagement pendant",
          "toute la durée de son mandat.",
          "Il doit accomplir ses tâches quotidiennes,",
          "participer activement à la gestion de la ville",
          "et s'assurer que les priorités sont respectées.",
          "",
          "🤝 COLLABORATION AVEC LES SERVICES PUBLICS :",
          "Un maire doit collaborer avec les services publics",
          "(police, sécurité, santé, etc.) plutôt que leur donner",
          "des ordres directs. La gestion doit être basée",
          "sur l'écoute et la coopération.",
          "",
          "🌟 COMPORTEMENT EXEMPLAIRE :",
          "La mairie doit adopter un comportement exemplaire",
          "dans toutes ses interactions."
        ]
      },
      {
        icon: <Briefcase className="w-16 h-16" />,
        category: "SERVICES PUBLICS - GOUVERNEMENT",
        title: "🔨 Justice et DOT - Nomination",
        color: "from-yellow-600 to-orange-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-600",
        content: [
          "🔨💰 JUSTICE ET DOT",
          "",
          "🕒 NOMINATION DE LA DIRECTION :",
          "La nomination à la tête du Département de la Justice",
          "et du Département des Taxes relève de la décision",
          "du gouvernement, et la durée du mandat",
          "est indéterminée.",
          "",
          "🚫 CONDITIONS DE RECRUTEMENT :",
          "Les individus désireux d'intégrer le Département",
          "de la Justice et du Département des Taxes",
          "doivent impérativement satisfaire aux conditions suivantes :",
          "",
          "• Ne pas présenter de casier judiciaire",
          "• N'avoir participé à aucun acte illégal",
          "  au cours des 60 derniers jours",
          "• Ne pas être en possession d'objets interdits"
        ]
      },
      {
        icon: <Shield className="w-16 h-16" />,
        category: "SERVICES PUBLICS - GOUVERNEMENT",
        title: "🔨 Justice et DOT - Représentation",
        color: "from-orange-600 to-red-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-600",
        content: [
          "🔨💰 JUSTICE ET DOT (SUITE)",
          "",
          "👔 REPRÉSENTATION DE L'INSTITUTION :",
          "Les membres doivent refléter l'image",
          "de leur département, que ce soit en public ou en privé.",
          "Langage respectueux et attitude exemplaire requis.",
          "",
          "💼 RESPONSABILITÉS ET ENGAGEMENTS :",
          "Les membres doivent honorer leurs engagements",
          "en accomplissant avec rigueur leurs tâches quotidiennes",
          "et en participant activement à la gestion",
          "et à l'administration du département.",
          "",
          "🤝 COLLABORATION AVEC LES SERVICES PUBLICS :",
          "Relations de collaboration avec les autres services publics",
          "sur la base du respect mutuel et de la coopération."
        ]
      },
      {
        icon: <FileText className="w-16 h-16" />,
        category: "SERVICES PUBLICS - GOUVERNEMENT",
        title: "🔨 Justice et DOT - Code & Confidentialité",
        color: "from-red-600 to-pink-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "🔨💰 JUSTICE ET DOT (SUITE)",
          "",
          "🕶️ CODE VESTIMENTAIRE :",
          "Tenue vestimentaire en adéquation avec les fonctions.",
          "Les juges doivent porter leur uniforme officiel",
          "lors de toutes les audiences.",
          "",
          "📜 CONFIDENTIALITÉ ET GESTION DES INFORMATIONS :",
          "Stricte confidentialité concernant les affaires en cours,",
          "les informations sensibles ou toute donnée relative",
          "aux citoyens et aux procédures judiciaires.",
          "",
          "⚖️ PRISE DE DÉCISIONS ÉQUITABLES :",
          "Décisions fondées sur des principes d'équité",
          "et de justice impartiale. Les relations personnelles",
          "ou l'influence extérieure doivent être évitées."
        ]
      },
      {
        icon: <AlertTriangle className="w-16 h-16" />,
        category: "SERVICES PUBLICS - GOUVERNEMENT",
        title: "🔨 Justice et DOT - Disponibilité",
        color: "from-purple-600 to-indigo-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "🔨💰 JUSTICE ET DOT (SUITE)",
          "",
          "⏱️ GESTION DU TEMPS ET DISPONIBILITÉ :",
          "Les membres doivent s'assurer d'un minimum de présence",
          "et de rendre compte de leur disponibilité",
          "pour traiter les affaires.",
          "",
          "📢 COMMUNICATION PUBLIQUE :",
          "Les membres doivent éviter de faire des déclarations publiques",
          "ou de s'engager dans des discussions publiques",
          "concernant des affaires en cours ou des décisions judiciaires,",
          "sauf si nécessaire et conforme aux directives du gouvernement.",
          "",
          "🌍 PARTICIPATION À L'ÉVOLUTION DES DÉPARTEMENTS :",
          "Contribuer activement à l'évolution et à l'amélioration",
          "des procédures judiciaires et des lois."
        ]
      },
      {
        icon: <Skull className="w-16 h-16" />,
        category: "SERVICES PUBLICS - GOUVERNEMENT",
        title: "💀 Ripoux - Introduction",
        color: "from-gray-700 to-gray-900",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-700",
        content: [
          "💀 RIPOUX",
          "",
          "Le rôle des membres du gouvernement et des avocats ripoux",
          "se situe dans un cadre particulier, alliant gestion",
          "du pouvoir pour certains et responsabilités.",
          "",
          "Ce règlement a pour objectif de structurer leurs actions",
          "afin de garantir une expérience cohérente",
          "et respectueuse pour tous les joueurs.",
          "",
          "🎯 OBTENIR LE DROIT D'ÊTRE UN AVOCAT RIPOUX :",
          "",
          "Il faut passer par un ticket au niveau",
          "des référents gouvernement, en leur donnant",
          "un dossier explicatif des actions que vous souhaitez",
          "mener avec droit d'être ripoux."
        ]
      },
      {
        icon: <Users className="w-16 h-16" />,
        category: "SERVICES PUBLICS - GOUVERNEMENT",
        title: "💀 Ripoux - Conditions HRP",
        color: "from-blue-600 to-cyan-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "💀 RIPOUX - CONDITIONS HRP",
          "",
          "⚖️ CONDITIONS HRP REQUISES :",
          "",
          "• Minimum 120h de jeu (ViceCity)",
          "",
          "• Être âgé(e) de 16 ans ou plus",
          "",
          "• Profils sans trop de sanctions",
          "",
          "• Avoir de l'expérience dans le RP d'avocats",
          "",
          "Ces conditions sont NON NÉGOCIABLES."
        ]
      },
      {
        icon: <FolderOpen className="w-16 h-16" />,
        category: "SERVICES PUBLICS - GOUVERNEMENT",
        title: "💀 Ripoux - Conditions du Dossier",
        color: "from-green-600 to-teal-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-600",
        content: [
          "💀 RIPOUX - CONDITIONS DU DOSSIER",
          "",
          "⚖️ LE DOSSIER DOIT CONTENIR :",
          "",
          "• Présentation personnelle / RP",
          "",
          "• Objectif avec la possibilité d'être ripoux",
          "",
          "• Comment comptez-vous effectuer votre RP",
          "",
          "• Compétences et expériences",
          "",
          "⚠️ IMPORTANT :",
          "Le dossier doit être aussi innovant",
          "et la présentation de celui-ci, votre manière d'écrire",
          "votre dossier etc. seront jugés aussi !"
        ]
      },
      {
        icon: <Ban className="w-16 h-16" />,
        category: "SERVICES PUBLICS - GOUVERNEMENT",
        title: "💀 Ripoux - Interdictions (1/2)",
        color: "from-red-600 to-red-800",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "💀 RÈGLEMENT MEMBRES GOUVERNEMENT / AVOCATS RIPOUX",
          "",
          "🔫 INTERDICTION D'ÊTRE ARMÉ :",
          "Vous ne devez pas être armés.",
          "Votre fonction repose sur des compétences",
          "diplomatiques et stratégiques,",
          "et non sur l'usage de la force.",
          "",
          "⛔ INTERDICTION DE FAIRE PARTIE",
          "   D'UN GROUPE CRIMINEL :",
          "Vous ne devez pas être affiliés à des groupes criminels",
          "(organisation, gang, PF, etc.).",
          "Votre position doit rester neutre pour garantir",
          "une gestion crédible de la ville.",
          "",
          "🚓 INTERDICTION DE PARTICIPER",
          "   À DES BRAQUAGES :",
          "Participation à des braquages, piratages,",
          "cambriolages = INTERDIT."
        ]
      },
      {
        icon: <AlertTriangle className="w-16 h-16" />,
        category: "SERVICES PUBLICS - GOUVERNEMENT",
        title: "💀 Ripoux - Interdictions (2/2)",
        color: "from-orange-600 to-red-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-600",
        content: [
          "💀 RÈGLEMENT (SUITE)",
          "",
          "🧑‍🤝‍🧑 DÉLÉGATION DES ACTIONS COMPROMETTANTES :",
          "Vous ne devez pas être impliqués dans des actions extrêmes",
          "(prises d'otages, torture, terrorisme, etc.).",
          "Ces activités doivent être confiées à des groupes criminels.",
          "",
          "🕶️ DISCRÉTION ET ABSENCE DE TRACES :",
          "Vous devez agir dans l'ombre et éviter de laisser",
          "des preuves évidentes de votre implication",
          "dans des affaires douteuses.",
          "",
          "⚖️ MODÉRATION POUR UNE EXPÉRIENCE RP ÉQUILIBRÉE :",
          "Vous devez agir avec discernement, en évitant",
          "les conflits ou injustices qui nuiraient à l'équilibre du RP."
        ]
      },
      {
        icon: <FileText className="w-16 h-16" />,
        category: "SERVICES PUBLICS - GOUVERNEMENT",
        title: "💀 Ripoux - Validation & Interdictions",
        color: "from-purple-600 to-pink-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "💀 RÈGLEMENT (SUITE)",
          "",
          "✏️ VALIDATION DES DOCUMENTS FALSIFIÉS :",
          "L'utilisation de documents falsifiés est permise,",
          "mais doit être validée par le staff",
          "(Référent Gouvernement).",
          "",
          "Les informations que vous souhaitez donner",
          "à des groupes illégaux doivent être validées",
          "pour éviter tout abus.",
          "",
          "⛔ INTERDICTIONS STRICTES :",
          "",
          "• Utiliser la profession pour accéder",
          "  à des lieux sensibles sans RP valide",
          "  (ex : commissariat, cellule)",
          "",
          "�� Menacer ou faire pression sur des juges",
          "  ou policiers en dehors d'un cadre RP logique"
        ]
      },
      {
        icon: <Building2 className="w-16 h-16" />,
        category: "SERVICES PUBLICS - GOUVERNEMENT",
        title: "🚗 Véhicules Gouvernement",
        color: "from-gray-600 to-gray-800",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-600",
        isSpecial: true,
        specialContent: (
          <div className="space-y-6">
            <p className="text-2xl text-gray-800 font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              🚗 LES VÉHICULES
            </p>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.imgur.com/rhbhhI5.png" 
                alt="Véhicules Gouvernement"
                className="w-full h-auto"
              />
            </div>

            <p className="text-lg text-gray-600 text-center mt-4" style={{ fontFamily: "'Crimson Text', serif" }}>
              Véhicules officiels du Gouvernement
            </p>
          </div>
        ),
        content: []
      }
    ],
    "EMS": [
      {
        icon: <Heart className="w-16 h-16" />,
        category: "SERVICES PUBLICS - EMS (SAMD)",
        title: "🏥 Notions Importantes - Soins",
        color: "from-red-600 to-pink-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "🏥 NOTIONS IMPORTANTES",
          "",
          "💊 SOINS :",
          "Les EMS ont l'interdiction d'effectuer des soins",
          "dans le Hall d'Accueil de l'Hôpital.",
          "",
          "🎭 COHÉRENCE RP :",
          "Un bandage ne doit être retiré que dans le cadre",
          "de la règle des 2 bandages par camp lors de fusillades.",
          "",
          "⚠️ IMPORTANT :",
          "Retirer un bandage à une personne",
          "(même d'un service public) revient à avantager",
          "et à supprimer les conséquences de ses blessures."
        ]
      },
      {
        icon: <AlertTriangle className="w-16 h-16" />,
        category: "SERVICES PUBLICS - EMS (SAMD)",
        title: "😨 Fear RP",
        color: "from-orange-600 to-red-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-600",
        content: [
          "😨 FEAR RP",
          "",
          "Être en service ne dispense pas de jouer",
          "vos scènes RP (prise d'otage, braquage, etc.),",
          "tant que celles-ci sont justifiées.",
          "",
          "⚠️ IMPORTANT :",
          "Vous devez incarner votre personnage",
          "et ses émotions même pendant le service.",
          "",
          "Les EMS restent des êtres humains",
          "qui peuvent avoir peur et réagir",
          "de manière réaliste face au danger."
        ]
      },
      {
        icon: <Ban className="w-16 h-16" />,
        category: "SERVICES PUBLICS - EMS (SAMD)",
        title: "🚷 Relations avec l'Illégal (1/2)",
        color: "from-purple-600 to-indigo-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "🚷 RELATIONS AVEC L'ILLÉGAL",
          "",
          "📋 AVANT RECRUTEMENT :",
          "Un passé illégal est toléré uniquement",
          "si le casier judiciaire est vierge",
          "au moment de la candidature.",
          "",
          "🚫 APRÈS RECRUTEMENT :",
          "Toute activité illégale est STRICTEMENT INTERDITE,",
          "en service ou hors service.",
          "",
          "⛔ INTERDICTIONS :",
          "• Conserver des objets ou ressources liés à l'illégal",
          "• Partager un coffre avec des personnes",
          "  pratiquant l'illégal (= complicité)"
        ]
      },
      {
        icon: <Skull className="w-16 h-16" />,
        category: "SERVICES PUBLICS - EMS (SAMD)",
        title: "🚷 Relations avec l'Illégal (2/2)",
        color: "from-indigo-600 to-blue-600",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-600",
        content: [
          "🚷 RELATIONS AVEC L'ILLÉGAL (SUITE)",
          "",
          "🔄 REPRISE D'ACTIVITÉ ILLÉGALE :",
          "Le seul moyen de reprendre une activité illégale",
          "est un WIPE COMPLET du personnage.",
          "",
          "❌ ACTES RIPOUX INTERDITS :",
          "",
          "• Cacher un corps",
          "",
          "• Protéger un acte illégal dont vous avez été témoin",
          "",
          "• Tuer une personne",
          "",
          "⚠️ Ces comportements entraîneront",
          "   des SANCTIONS LOURDES."
        ]
      },
      {
        icon: <Users className="w-16 h-16" />,
        category: "SERVICES PUBLICS - EMS (SAMD)",
        title: "👤 Image & Accès",
        color: "from-blue-600 to-cyan-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "👤 IMAGE HORS SERVICE :",
          "",
          "En civil, vous représentez toujours",
          "le monde médical et devez conserver",
          "une image irréprochable.",
          "",
          "🔑 ACCÈS AUX LIEUX :",
          "",
          "Votre statut EMS ne vous donne pas le droit",
          "de demander l'accès à certaines salles",
          "ou zones restreintes sans raison RP valable.",
          "",
          "⚠️ RAPPEL :",
          "Il est interdit aux EMS de faire de l'illégal",
          "ou d'être impliqué dans une scène illégale,",
          "sauf s'ils en sont la victime (hors dossier validé)."
        ]
      },
      {
        icon: <FileText className="w-16 h-16" />,
        category: "SERVICES PUBLICS - EMS (SAMD)",
        title: "📲 Appel & 📄 Facture",
        color: "from-green-600 to-teal-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-600",
        content: [
          "📲 APPEL :",
          "",
          "Il est interdit de faire des préférences",
          "dans le traitement des appels / réanimations.",
          "",
          "✅ EXCEPTIONS :",
          "Les demandes des autres services (SASP)",
          "sont prioritaires.",
          "",
          "📄 FACTURE :",
          "",
          "Les EMS ont interdiction de surfacturer un joueur",
          "par rapport à l'aide médicale reçue.",
          "",
          "Ils doivent respecter une grille tarifaire",
          "en fonction des soins apportés."
        ]
      },
      {
        icon: <Heart className="w-16 h-16" />,
        category: "SERVICES PUBLICS - EMS (SAMD)",
        title: "🔰 Réanimations et Soins Lourds",
        color: "from-pink-600 to-red-600",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-600",
        content: [
          "🔰 RÉANIMATIONS ET SOINS LOURDS",
          "",
          "⚠️ APRÈS UNE RÉANIMATION :",
          "Le patient ne doit pas repartir immédiatement",
          "comme si de rien n'était.",
          "",
          "🩹 EN CAS DE BLESSURES GRAVES :",
          "(ex. : balle, accident lourd)",
          "",
          "• Appliquez des soins RP complets et réalistes",
          "",
          "• Évitez toute précipitation excessive",
          "  dans la prise en charge médicale",
          "",
          "✅ RÉALISME RP :",
          "Prenez le temps nécessaire pour soigner",
          "et respecter les conséquences des blessures."
        ]
      },
      {
        icon: <Briefcase className="w-16 h-16" />,
        category: "SERVICES PUBLICS - EMS (SAMD)",
        title: "💊 ATA / Bandages (GF)",
        color: "from-yellow-600 to-orange-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-600",
        content: [
          "💊 ATA / BANDAGES (GF)",
          "",
          "🩹 OBLIGATION :",
          "Toute personne en coma ou ayant subi",
          "de graves blessures doit obligatoirement",
          "recevoir un bandage/plâtre adapté.",
          "",
          "⚠️ DURÉE :",
          "Il est impossible de retirer ou réduire",
          "la durée d'un bandage/plâtre, même après opération.",
          "",
          "🚫 SUPPRESSION DES ATA :",
          "Suppression totale du système d'ATA prédéfini :",
          "seuls les bandages sont utilisés.",
          "",
          "❌ INTERDICTION :",
          "Retirer des bandages inutilement",
          "(argent, favoritisme, etc.) est INTERDIT."
        ]
      },
      {
        icon: <Shield className="w-16 h-16" />,
        category: "SERVICES PUBLICS - EMS (SAMD)",
        title: "💊 Bandages - Exception Fusillades",
        color: "from-orange-600 to-red-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-600",
        content: [
          "💊 BANDAGES - EXCEPTION",
          "",
          "⚠️ FUSILLADES UNIQUEMENT :",
          "",
          "Il est possible de retirer MAXIMUM 2 bandages",
          "par camp lors de fusillades,",
          "UNIQUEMENT si nécessaire.",
          "",
          "🚫 CETTE EXCEPTION NE S'APPLIQUE PAS",
          "   EN DEHORS DES FUSILLADES :",
          "",
          "• Pas de retrait pour convenance personnelle",
          "",
          "• Pas de retrait pour accélérer le jeu",
          "",
          "• Respect strict de la règle des 2 bandages max"
        ]
      },
      {
        icon: <Building2 className="w-16 h-16" />,
        category: "SERVICES PUBLICS - EMS (SAMD)",
        title: "🚑 Véhicules EMS",
        color: "from-red-600 to-red-800",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "🚑 VÉHICULES",
          "",
          "🚫 INTERDICTION TOTALE :",
          "Utiliser les véhicules EMS à des fins personnelles.",
          "",
          "🚗 CONDUITE COHÉRENTE :",
          "Une conduite cohérente et professionnelle",
          "est exigée.",
          "",
          "📋 EXEMPLES :",
          "",
          "❌ On n'utilise PAS un Alamo",
          "   pour une personne en coma",
          "",
          "✅ On utilise une AMBULANCE dans ce cas",
          "",
          "🏍️ MOTOS :",
          "L'utilisation des motos est strictement réservée",
          "à l'Unité Motorisée d'Urgence (UMU).",
          "Toute utilisation hors route ou abusive = SANCTION."
        ]
      }
    ],
    "Police": [
      {
        icon: <Trophy className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🎈 Les Notions du RP Police - Win RP",
        color: "from-blue-600 to-indigo-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "🎈 LES NOTIONS DU RP POLICE",
          "",
          "🏆 WIN RP :",
          "",
          "Nous ne sommes pas là pour gagner à tout prix,",
          "nous sommes là pour offrir des scènes.",
          "",
          "Vous êtes membres des forces de l'ordre :",
          "vous êtes sur-armés, sous kevlar,",
          "et vos armes vous sont données gratuitement.",
          "Prenez le en considération ! Vous n'avez rien à perdre.",
          "",
          "⚠️ CODE 3 & RENFORTS :",
          "Le Code 3 et autres codes sont des outils",
          "pour appeler les renforts quand un agent est en danger.",
          "",
          "❌ INTERDICTION : Lors d'un braquage où vous êtes",
          "   pris en otage, il est INTERDIT d'utiliser cette option."
        ]
      },
      {
        icon: <Heart className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "☀️ Fairplay",
        color: "from-yellow-600 to-orange-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-600",
        content: [
          "☀️ FAIRPLAY",
          "",
          "🎭 MASQUE :",
          "Ce n'est pas parce qu'un joueur est masqué",
          "que vous devez directement le fouiller et le loot.",
          "Faites-lui un rappel, signalez-lui que",
          "le port du masque est interdit.",
          "",
          "💀 NE PAS LOOT LES JOUEURS COMA",
          "",
          "🆔 CARTE D'IDENTITÉ :",
          "Interdiction de prendre la carte d'identité d'un joueur",
          "sans lui avoir demandé au préalable",
          "(même s'il est coma, prenez son ID au pire si nécessaire).",
          "",
          "⚠️ À ÉVITER : Les scènes :",
          "fouilles, loot, ciao - sauf exception fusillades",
          "ou avec accord du staff."
        ]
      },
      {
        icon: <AlertTriangle className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "☀️ Fairplay - Poursuites",
        color: "from-orange-600 to-red-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-600",
        content: [
          "☀️ FAIRPLAY (SUITE)",
          "",
          "🚗 COLLISION INVOLONTAIRE :",
          "",
          "Il peut arriver que, lors de poursuites,",
          "vous entriez involontairement en collision",
          "avec le véhicule que vous poursuivez.",
          "",
          "✅ RESTEZ FAIRPLAY :",
          "Laissez-le repartir.",
          "",
          "⚠️ IMPORTANT :",
          "Ne profitez pas d'une collision accidentelle",
          "pour arrêter une course-poursuite de manière abusive.",
          "",
          "Le fairplay est essentiel pour maintenir",
          "des scènes de qualité et du plaisir pour tous."
        ]
      },
      {
        icon: <FileText className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🍂 Cohérence RP",
        color: "from-green-600 to-teal-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-600",
        content: [
          "🍂 COHÉRENCE RP",
          "",
          "💵 ARGENT :",
          "Vous ne pouvez pas dissocier l'argent 'propre'",
          "du 'sale' sur un individu.",
          "Il doit être considéré comme de l'argent",
          "provenant ou non d'activités illégales.",
          "",
          "🔄 CHANGEMENT DE SERVICE :",
          "Il est interdit de rejoindre sous moins de 30 jours",
          "le même service que vous venez de quitter",
          "(leave ou licenciement), sauf accord du lead.",
          "",
          "🔒 CONFIDENTIALITÉ :",
          "Vous n'avez pas le droit de divulguer",
          "des informations internes de la Police."
        ]
      },
      {
        icon: <Users className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "😱 Fear RP (1/2)",
        color: "from-purple-600 to-pink-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "😱 FEAR RP",
          "",
          "🆘 PRISE EN OTAGE :",
          "Si vous êtes pris en otage vous devez avoir peur",
          "pour votre vie, ou pour celle de l'otage.",
          "",
          "🚨 ZONES DANGEREUSES :",
          "En tant qu'agent de police vous n'avez pas",
          "à aller SANS RENFORT dans des lieux-dits dangereux",
          "SANS raison (quartiers de gang, fusillade sauf exceptions…)",
          "",
          "✅ RAISONS VALABLES :",
          "",
          "• Acte illégal en cours ou suspicion fondée",
          "  (avec preuves visuelles : photos d'armement, etc.)",
          "  → Intervention dans la propriété possible",
          "     dans les 15 minutes après les faits",
          "  → TOUJOURS avec des renforts dans ce type de zone"
        ]
      },
      {
        icon: <Shield className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "😱 Fear RP (2/2)",
        color: "from-pink-600 to-red-600",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-600",
        content: [
          "😱 FEAR RP (SUITE)",
          "",
          "🚨 DANGER IMMÉDIAT :",
          "En cas de danger immédiat (tirs, blessés,",
          "prise d'otage, etc.), les agents sont autorisés",
          "à intervenir sans mandat.",
          "",
          "📋 MANDAT NÉCESSAIRE :",
          "Pour fouiller un coffre, une habitation",
          "ou une propriété lorsqu'il n'y a pas de flagrant délit.",
          "",
          "🛣️ QUARTIERS :",
          "Les quartiers ne sont pas des zones de non-droit",
          "pour les agents de Police.",
          "Il est dans leur droit de passer dans les quartiers",
          "lorsqu'ils sont en course-poursuite.",
          "",
          "🎭 DURANT UNE FUSILLADE :",
          "Vous devez jouer votre fear, vous ne pouvez pas",
          "approcher d'une fusillade en cours."
        ]
      },
      {
        icon: <Ban className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🛣️ Raccourcis RP & 🧾 Respect",
        color: "from-indigo-600 to-blue-600",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-600",
        content: [
          "🛣️ RACCOURCIS RP",
          "",
          "🎭 MASQUE :",
          "Une personne masquée ne peut être reconnue",
          "si elle ne vous laisse pas d'indice.",
          "",
          "🚫 INTERDICTIONS :",
          "• Les raccourcis RP sont sanctionnables",
          "• Une couleur ne définit pas un joueur comme",
          "  appartenant à un gang ou une organisation",
          "• Tant qu'il n'y a pas de revendication,",
          "  il doit sembler être un simple civil",
          "• Interdiction de faire des suppositions hâtives",
          "  basées sur des apparences ou des stéréotypes",
          "",
          "🧾 RESPECT :",
          "Le respect envers les citoyens est primordial",
          "et obligatoire. Le respect envers les détenus",
          "est obligatoire lors des procédures.",
          "Interdiction de provoquer abusivement ou chercher",
          "à faire tilt des détenus."
        ]
      },
      {
        icon: <Lock className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "💥 Arrestation & 🛑 Pit RP",
        color: "from-cyan-600 to-blue-600",
        bgColor: "bg-cyan-50",
        borderColor: "border-cyan-600",
        content: [
          "💥 ARRESTATION",
          "",
          "🔫 ARMES :",
          "Si vous arrêtez un individu qui utilise",
          "une arme blanche ou qui possède une arme à feu,",
          "vous êtes dans l'obligation de l'emmener au poste",
          "afin de lui faire une procédure judiciaire.",
          "",
          "💊 DÉLITS MINEURS :",
          "Pour les délits suivants : braquage d'ATM,",
          "vente de drogue et cambriolage,",
          "vous pouvez juste lui saisir ses biens illégaux",
          "et le laisser repartir avec une amende.",
          "",
          "🛑 PIT RP :",
          "",
          "❌ Les pits sont STRICTEMENT INTERDITS",
          "Soyez fairplay, si un joueur abuse",
          "ne répondez pas par des pits."
        ]
      },
      {
        icon: <AlertCircle className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "⛔ Racisme dans la police",
        color: "from-red-600 to-pink-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "⛔ RACISME DANS LA POLICE",
          "",
          "🚫 Les propos racistes sont INTERDITS sur le serveur",
          "",
          "✅ EST AUTORISÉ :",
          "",
          "Si cela reste dans un cadre RP",
          "(méfiance des latinos..., nationalisme américain, ...)",
          "",
          "❌ EST INTERDIT :",
          "",
          "• Insultes",
          "",
          "• Propos offensants et/ou dénigrants",
          "",
          "• En première interaction",
          "",
          "• Propos systématiques"
        ]
      },
      {
        icon: <Users className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "📏 Opération & 🔪 Munitions",
        color: "from-blue-600 to-cyan-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "📏 RÈGLEMENT SPÉCIFIQUE",
          "",
          "💥 OPÉRATION :",
          "Limite de 4 unités/patrouilles maximum sur scène.",
          "",
          "Vous pouvez appeler du renfort juste avant",
          "les courses-poursuites.",
          "",
          "Il est possible d'appeler des unités",
          "si la situation dégénère (type code 2, code 3).",
          "",
          "⚠️ AVEC ACCORD DES RÉFÉRENTS OBLIGATOIRE :",
          "• Limite de 5 unités/patrouilles (15 agents)",
          "  sur les PERQUISITIONS/DESCENTES",
          "• Limite de 6 unités/patrouilles (16 agents)",
          "  sur les scènes Staff",
          "",
          "🔪 MUNITIONS POLICE :",
          "Arme de poing: 90 | Arme Automatique: 150",
          "Fusil à pompe: 30 | Flashball: 15",
          "Flashball + Pompe: 35"
        ]
      },
      {
        icon: <Crosshair className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🔰 Réglementation armes",
        color: "from-purple-600 to-indigo-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "🔰 RÉGLEMENTATION ARMES",
          "",
          "⚖️ FAIRPLAY :",
          "Lorsque vous êtes sur une scène impliquant",
          "des armes lourdes en face, vous avez le droit",
          "de sortir 1 arme lourde EN PLUS du nombre",
          "d'armes lourdes des criminels en face.",
          "",
          "🚨 NOOSE :",
          "Cette règle ne concerne pas le NOOSE s'il est déployé.",
          "Le NOOSE doit être déployé pour de RÉELLES raisons.",
          "S'il n'y a que des armes légères en face,",
          "il n'y a pas d'utilité à le déployer.",
          "",
          "📋 EXEMPLE :",
          "Pacifique banque avec 3 TEC-9 sortie côté illégal",
          "→ La Police peut sortir 4 armes lourdes.",
          "",
          "⚠️ Les armes ne sont à sortir qu'en cas de Defcon",
          "   sauf situations qui le requièrent."
        ]
      },
      {
        icon: <Bike className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🛵 Moto",
        color: "from-orange-600 to-red-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-600",
        content: [
          "🛵 MOTO",
          "",
          "✅ AUTORISÉES UNIQUEMENT POUR :",
          "",
          "• Convoi saisie / Convoi de prisonnier",
          "• Douane / PO sur agents",
          "• Ventes de Drogue / Coup de feu (⚠️ sans abus)",
          "• Armurerie / Fleeca / Bijouterie / Pacifique",
          "• Si l'individu en face a une moto",
          "• Contrôle radar : si l'individu prend la fuite",
          "  (même s'il est en voiture)",
          "",
          "⚠️ RÈGLES :",
          "• Maximum 2 motos en patrouille",
          "• Si un policier fait un accident,",
          "  il doit ARRÊTER sa course-poursuite",
          "  et ne pas reprendre",
          "• Vous êtes autorisé de partir en offroad",
          "  SEULEMENT si la moto adverse y va"
        ]
      },
      {
        icon: <Plane className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🚁 Hélicoptère",
        color: "from-sky-600 to-blue-600",
        bgColor: "bg-sky-50",
        borderColor: "border-sky-600",
        content: [
          "🚁 HÉLICOPTÈRE",
          "",
          "📸 PLAQUES :",
          "La prise des plaques depuis un hélico",
          "ne peut être prise en compte que si la plaque",
          "est clairement apparente.",
          "Votre photo doit être RP et doit être vue.",
          "",
          "⏱️ DURÉE :",
          "Les hélicoptères ne peuvent rester",
          "que 15 minutes en mouvement.",
          "",
          "⛽ REFUEL :",
          "Un refuel de 5 minutes (minimum)",
          "doit être fait avant de repartir.",
          "",
          "📍 LIEU DE REFUEL :",
          "Les hélicoptères ne peuvent refuel que",
          "sur des héliports appartenant à un service public",
          "(Postes de police, Hôpitaux, Casernes de pompiers)."
        ]
      },
      {
        icon: <Archive className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🗃️ Stockage & 🔗 Bracelet",
        color: "from-gray-600 to-slate-600",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-600",
        content: [
          "🗃️ STOCKAGE",
          "",
          "❌ Le stockage d'armement dans les coffres",
          "   de voitures de patrouille ou coffres personnels",
          "   est INTERDIT.",
          "",
          "🔗 BRACELET ÉLECTRONIQUE",
          "",
          "📍 LIEU :",
          "Le bracelet électronique ne peut être mis",
          "que dans la prison ou un poste de police.",
          "",
          "⏱️ DÉLAI DE JUGEMENT :",
          "Si le DOJ n'a pas traité l'affaire au bout de 4 jours,",
          "le citoyen peut demander un jugement immédiat,",
          "et les forces de l'ordre peuvent appliquer",
          "une nominal maximum.",
          "",
          "❌ INTERDICTIONS :",
          "• Suivre un bracelet hors du poste",
          "• Mettre un bracelet pour protéger une personne",
          "  non condamnée ou sans procédure complète"
        ]
      },
      {
        icon: <Shirt className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "👔 Tenue & 📷 Preuve",
        color: "from-teal-600 to-green-600",
        bgColor: "bg-teal-50",
        borderColor: "border-teal-600",
        content: [
          "👔 TENUE",
          "",
          "✅ Votre tenue doit rester cohérente",
          "   avec votre personnage et son background.",
          "   Vous devez être identifiable par un citoyen.",
          "",
          "⛔ INTERDIT : Tenue similaire à celle d'un groupuscule",
          "",
          "✅ AUTORISÉ : Tenue de civil complet",
          "   sans holster ni plaque",
          "   → Si vous intervenez, équipez votre plaque,",
          "      GPB police ou montrez votre carte d'agent",
          "",
          "📷 PREUVE VIDÉO/PHOTO",
          "",
          "📹 Dashcam (voiture) : constamment activée en patrouille",
          "📹 Bodycam (piétonne) : allumée en permanence à pied",
          "",
          "⚠️ EXCEPTION : Divisions d'enquête/intervention",
          "   → Doivent utiliser des outils RP pour les preuves"
        ]
      },
      {
        icon: <Camera className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "👔 Prise d'infos & 🚧 Douanes",
        color: "from-green-600 to-emerald-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-600",
        content: [
          "👔 PRISE D'INFORMATIONS",
          "",
          "📸 OBLIGATION :",
          "Prendre une photo avec votre téléphone.",
          "",
          "❌ INTERDICTIONS :",
          "• Prendre une photo avec la touche O",
          "  en troisième personne et/ou avec des jumelles",
          "• Rester caché derrière un mur lors d'une observation",
          "",
          "✅ Votre personnage se doit d'être",
          "   un minimum visible.",
          "",
          "🚧 DOUANES",
          "",
          "📊 LIMITE : Une par district toutes les deux semaines",
          "",
          "🔍 FOUILLE COMPLÈTE :",
          "Autorisée SEULEMENT en cas de contravention",
          "(excès de vitesse non pris en compte)",
          "",
          "✅ PALPATION : Autorisée pour tout le monde"
        ]
      },
      {
        icon: <ShieldAlert className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🚧 Douanes (suite)",
        color: "from-emerald-600 to-teal-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-600",
        content: [
          "🚧 DOUANES (SUITE)",
          "",
          "❌ INTERDICTIONS :",
          "",
          "• Crever les pneus d'un joueur",
          "  qui fait demi-tour à une douane",
          "",
          "⚖️ SAISIE :",
          "",
          "Si vous saisissez un objet,",
          "AUCUNE amende ne doit être infligée au joueur.",
          "",
          "🔫 ARME À FEU :",
          "",
          "En revanche, pour la saisie d'une arme à feu,",
          "une procédure est OBLIGATOIRE."
        ]
      },
      {
        icon: <Skull className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "💣 No Fear face à l'illégal",
        color: "from-red-600 to-rose-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "💣 RELATION POLICE VS ILLEGAL",
          "",
          "👀 NO FEAR FACE À L'ILLÉGAL",
          "",
          "⚠️ CONSÉQUENCES :",
          "",
          "Si un agent crée un problème sur une scène",
          "qui met à mal le groupe illégal d'en face,",
          "le joueur policier peut subir une Mort RP.",
          "",
          "📋 EXEMPLE : No Fear excessif",
          "",
          "🎲 PROCÉDURE :",
          "",
          "Les joueurs illégaux peuvent préparer",
          "un dossier de Mort RP contre l'agent.",
          "",
          "⚠️ Obligation de le faire un autre jour",
          "   avec un système de roulette à 80%",
          "   qui peut laisser une porte de sortie à l'agent."
        ]
      },
      {
        icon: <Swords className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🔫 Les assauts (1/2)",
        color: "from-rose-600 to-red-600",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-600",
        content: [
          "🔫 LES ASSAUTS",
          "",
          "✅ CONDITIONS :",
          "",
          "• Pas d'avancée sur les négociations",
          "  depuis 20 minutes",
          "",
          "• Les preneurs d'otages ne sont pas coopératifs",
          "  (ignorance, tentative de reprise d'otage",
          "  pendant négociation, gagne du temps sans interagir,",
          "  scène stagnante, négociateur borné)",
          "",
          "• Les braqueurs ne tiennent pas leurs otages",
          "  → La police peut tenter de les arrêter directement",
          "",
          "• Dans le cadre d'une course-poursuite",
          "  faisant suite à une action illégale,",
          "  s'il y a eu TROIS prises d'otages pour s'enfuir,",
          "  l'assaut pourrait être autorisé"
        ]
      },
      {
        icon: <Target className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🔫 Les assauts (2/2)",
        color: "from-red-600 to-orange-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "🔫 LES ASSAUTS (SUITE)",
          "",
          "📢 SOMMATIONS :",
          "",
          "1️⃣ PREMIÈRE SOMMATION :",
          "Le haut-gradé sur place (Staff Sergeant minimum)",
          "annonce de vive voix au négociateur",
          "de faire un effort sur la négociation",
          "sinon un assaut sera lancé.",
          "",
          "2️⃣ DEUXIÈME SOMMATION :",
          "Le haut-gradé annonce au mégaphone",
          "une deuxième fois de faire un effort.",
          "",
          "3️⃣ TROISIÈME SOMMATION :",
          "Les agents commencent à entourer",
          "et viser l'ensemble des suspects.",
          "",
          "▶️ Si aucun changement côté négociation,",
          "   l'assaut est AUTORISÉ.",
          "",
          "🚔 ARRESTATIONS :",
          "Ne seront arrêtés que le négociateur",
          "et 3 autres personnes (maximum) au hasard",
          "+ Loot à 100% des membres présents."
        ]
      },
      {
        icon: <Car className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🚘 Contrôles routiers & ⛔ Trash",
        color: "from-blue-600 to-sky-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "🚘 CONTRÔLES ROUTIERS",
          "",
          "📋 RÈGLES :",
          "• Vous devez avoir une RAISON pour suivre",
          "  et contrôler un conducteur",
          "• Vous devez annoncer le contrôle routier",
          "  en première interaction",
          "• Si vous suivez un groupe de véhicules,",
          "  ne vous mettez pas en danger en infériorité numérique",
          "• Vous ne pouvez pas vous introduire",
          "  au centre d'un convoi de véhicules",
          "",
          "⛔ TRASH & COMPORTEMENT INAPPROPRIÉ",
          "",
          "❌ INTERDICTIONS :",
          "• Trash, provoquer ou avoir",
          "  des comportements déplacés",
          "• Insinuations du style 'vous êtes le pire groupe'",
          "  'vous allez pas durer, vous allez prendre l'avion",
          "  rapidement' etc."
        ]
      },
      {
        icon: <Crosshair className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "⚡ Fusillade (1/2)",
        color: "from-red-600 to-pink-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "⚡ FUSILLADE",
          "",
          "💀 APRÈS RÉANIMATION :",
          "Une fois réanimé vous ne pouvez plus participer",
          "à une fusillade ni intervenir le temps de l'ATA.",
          "",
          "🔫 APPEL POUR COUP DE FEU :",
          "Vous devez effectuer un TEST DE POUDRE",
          "pour vérifier l'implication d'un individu.",
          "",
          "✅ Si le test est positif :",
          "   Vous pouvez procéder à une palpation.",
          "   Aucune zone de defcon ne s'applique.",
          "",
          "⛔ INTERDICTIONS :",
          "• Fouiller un joueur avec un test négatif",
          "  sans procédure judiciaire",
          "  (sauf palpation si holster)",
          "• Faire un test de poudre sur une personne",
          "  en coma ou tout juste soignée,",
          "  sauf si vous l'avez vue avec une arme en main"
        ]
      },
      {
        icon: <AlertTriangle className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "⚡ Fusillade (2/2)",
        color: "from-pink-600 to-red-600",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-600",
        content: [
          "⚡ FUSILLADE (SUITE)",
          "",
          "😱 FEAR RP :",
          "Vous devez jouer votre fear,",
          "vous ne pouvez pas approcher d'une fusillade en cours.",
          "Vous devez avoir peur de la mort",
          "et vous faire tirer dessus.",
          "",
          "💀 CORPS AU SOL :",
          "",
          "❌ Il est INTERDIT de fouiller les corps au sol",
          "   tant que la personne n'est pas réanimée.",
          "",
          "⚠️ RAPPEL :",
          "Respectez le réalisme RP",
          "et ne prenez pas de risques inconsidérés.",
          "Vous êtes des êtres humains,",
          "pas des super-héros invincibles."
        ]
      },
      {
        icon: <Building2 className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🔨 Descente & 🍂 Tirs",
        color: "from-indigo-600 to-purple-600",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-600",
        content: [
          "🔨 DESCENTE",
          "",
          "Lorsque vous voulez faire une descente,",
          "celle-ci peut être validée UNIQUEMENT",
          "par l'État Major.",
          "",
          "⚠️ OBLIGATION :",
          "Prévenir les Responsable Légal 48 heures à l'avance.",
          "",
          "🍂 TIRS",
          "",
          "🚗 TIRS DANS LES PNEUS :",
          "Autorisés en cas de No Fear ou de troll abusif",
          "pour les agents des forces de l'ordre.",
          "Il est conseillé de REC votre tir.",
          "",
          "❌ TIRS EN PREMIER :",
          "Les forces de l'ordre ne sont PAS autorisées",
          "à tirer en premier de manière générale",
          "(sauf assaut ou point suivant)"
        ]
      },
      {
        icon: <Users className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🍂 Tirs - Cas exceptionnels",
        color: "from-purple-600 to-pink-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "🍂 TIRS (SUITE)",
          "",
          "⚠️ CAS SPÉCIAL : ENCERCLEMENT",
          "",
          "Si un joueur armé est encerclé par au moins 2-3 policiers",
          "EN PLUS de leur nombre (ex: 2 joueurs encerclés par 5 policiers),",
          "la police a l'autorisation, après 3 sommations orales",
          "claires et non rapides, de neutraliser l'individu",
          "(situation de no fear retenue).",
          "",
          "🚨 CAS EXCEPTIONNEL :",
          "",
          "Si un individu sort une arme à feu et tire",
          "sur une personne non armée ou armée d'une arme blanche :",
          "",
          "✅ Vous pouvez abattre l'individu armé d'une arme létale",
          "✅ Vous devez taser l'individu armé d'une arme blanche,",
          "   s'il représente encore une menace",
          "✅ Vous devez défendre la personne la plus vulnérable",
          "⚠️ L'interpellation des deux individus reste obligatoire",
          "⚠️ Différenciez l'agresseur et l'agressé"
        ]
      },
      {
        icon: <Shield className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🍂 Tirs - Deux individus armés",
        color: "from-pink-600 to-red-600",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-600",
        content: [
          "🍂 TIRS (SUITE)",
          "",
          "🚨 SI DEUX INDIVIDUS SONT ARMÉS",
          "   DE MANIÈRE ÉQUIVALENTE :",
          "",
          "🚔 Faites usage de vos gyrophares",
          "   et de vos sirènes afin de signaler",
          "   votre présence et tenter de les faire",
          "   se rendre pacifiquement.",
          "",
          "⚠️ RAPPEL :",
          "",
          "Privilégiez toujours la désescalade",
          "et la négociation avant l'usage de la force.",
          "",
          "Le but est d'interpeller les individus,",
          "pas de les abattre systématiquement."
        ]
      },
      {
        icon: <Building className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🔔 Règle général au braquage",
        color: "from-yellow-600 to-orange-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-600",
        content: [
          "🔔 RÈGLE GÉNÉRAL AU BRAQUAGE",
          "",
          "🎯 VOTRE RÔLE :",
          "Faire sortir les personnes afin qu'une",
          "course-poursuite puisse avoir lieu.",
          "Vous devez donc attendre dans votre véhicule",
          "et ne pas forcer l'arrestation.",
          "",
          "💬 FAVORISEZ :",
          "• Les négociations",
          "• Puis la course-poursuite",
          "",
          "✨ CRÉATIVITÉ :",
          "N'oubliez pas que vous êtes là pour vous amuser",
          "et que vous pouvez proposer des scènes atypiques.",
          "N'agissez pas comme des robots, soyez créatif",
          "et proposez des choses innovantes,",
          "ne rentrez pas dans une routine !",
          "",
          "🆘 PRIORITÉ : SÉCURITÉ DES OTAGES",
          "Les assauts sont déconseillés",
          "(autorisation uniquement si otages en danger,",
          "tirs à restreindre & avec REC pour justifier)."
        ]
      },
      {
        icon: <Truck className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🚗 Fourrière, 👥 Otage & Course",
        color: "from-gray-600 to-slate-600",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-600",
        content: [
          "🚗 FOURRIÈRE",
          "",
          "❌ INTERDICTIONS :",
          "• Envoyer un véhicule en fourrière",
          "  quand vous êtes DANS un véhicule",
          "• Envoyer un véhicule en fourrière",
          "  quand une personne est DANS le véhicule",
          "",
          "⚠️ Vous devez prévenir les joueurs autour",
          "   que vous allez mettre en fourrière le véhicule.",
          "",
          "👥 OTAGE",
          "",
          "Les otages ne doivent PAS être traités",
          "comme des criminels.",
          "",
          "❌ Un otage n'est pas supposé être fouillé puis loot",
          "",
          "🚘 COURSE POURSUITE",
          "",
          "Braquage supérette/ATM : Max 2 véhicules par poursuite",
          "Bijouterie/Fleeca/Pacifique : Max 2 véhicules",
          "par véhicule illégal (soyez fairplay)"
        ]
      },
      {
        icon: <Waves className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🚘 Course poursuite - Règles",
        color: "from-cyan-600 to-blue-600",
        bgColor: "bg-cyan-50",
        borderColor: "border-cyan-600",
        content: [
          "🚘 COURSE POURSUITE",
          "",
          "📋 RÈGLES RELATIVES AUX COURSES-POURSUITES :",
          "",
          "🏪 BRAQUAGE SUPÉRETTE / ATM :",
          "Nombre de véhicule proportionnel au nombre",
          "de personnes dans le véhicule",
          "(maximum 2 véhicules par poursuite)",
          "",
          "💎 BRAQUAGE BIJOUTERIE / FLEECA / PACIFIQUE :",
          "Nombre de véhicule peut être supérieur",
          "au véhicule côté illégal (braquages importants)",
          "mais soyez fairplay.",
          "Maximum 2 véhicules par véhicule en poursuite.",
          "",
          "❌ INTERDICTIONS :",
          "",
          "• Cumuler motos ET hélicoptère",
          "  lors d'une même course-poursuite",
          "",
          "• Faire une fuite à l'eau"
        ]
      },
      {
        icon: <MapPin className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🏝️ POINTS ILLEGAUX",
        color: "from-green-600 to-emerald-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-600",
        isSpecial: true,
        specialContent: (
          <div className="space-y-6">
            <p className="text-2xl text-gray-800 font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              🏝️ POINTS ILLEGAUX
            </p>
            
            <p className="text-lg text-gray-600 mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
              Les points illégaux doivent faire l'objet d'une vérification limitée définie par le tableau suivant :
            </p>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.imgur.com/8GPYkgw.png" 
                alt="Tableau Points Illégaux"
                className="w-full h-auto"
              />
            </div>

            <p className="text-lg text-gray-600 text-center mt-4" style={{ fontFamily: "'Crimson Text', serif" }}>
              Tableau de vérification des points illégaux
            </p>
          </div>
        ),
        content: []
      },
      {
        icon: <UserCircle className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "⚜️ AGENT EN CIVIL",
        color: "from-purple-600 to-indigo-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "⚜️ AGENT EN CIVIL",
          "",
          "☂️ CIVIL",
          "",
          "❌ Les membres de la Police en civil",
          "   n'ont PAS le droit d'avoir leur équipement",
          "   de Police en dehors de leur service !",
          "",
          "✅ SAUF POUR :",
          "",
          "• État-Major",
          "",
          "• Supervision",
          "",
          "⚠️ SUPERVISION :",
          "",
          "La Supervision peut être en service",
          "SANS équipement."
        ]
      },
      {
        icon: <Search className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🔍 UNITÉS D'ENQUÊTES (1/4)",
        color: "from-indigo-600 to-blue-600",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-600",
        content: [
          "🔍 UNITÉS D'ENQUÊTES",
          "",
          "👻 INDICS :",
          "",
          "Les informations doivent passer par",
          "des Rapports d'interrogatoire DOA UNIQUEMENT.",
          "",
          "💡 DOSSIER DE PERQUISITION SUR UN LABORATOIRE",
          "",
          "Pour faire un démantèlement sur un laboratoire/récolte,",
          "vous devez soumettre un dossier aux référents police",
          "pour obtenir leur autorisation.",
          "",
          "📋 POINTS NÉCESSAIRES :",
          "",
          "1️⃣ Localisation du laboratoire :",
          "   Identifier l'adresse grâce à des informateurs",
          "   ou une enquête RP",
          "",
          "2️⃣ Surveillance des lieux :",
          "   Relever au moins 5 plaques de véhicules différents",
          "   présents autour du laboratoire"
        ]
      },
      {
        icon: <FileSearch className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🔍 UNITÉS D'ENQUÊTES (2/4)",
        color: "from-blue-600 to-cyan-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "🔍 UNITÉS D'ENQUÊTES (SUITE)",
          "",
          "3️⃣ Arrestations :",
          "   Interpeller 5 individus avec présence de drogue",
          "   et de véhicules liés au laboratoire",
          "",
          "4️⃣ Interrogatoire :",
          "   Obtenir des informations/aveux lors d'au moins",
          "   5 interrogatoires différents",
          "",
          "5️⃣ Points de récolte :",
          "   Obtenir la position de TOUS les points de récolte,",
          "   arrêter 1 individu minimum par point",
          "   et prouver l'utilisation de véhicules, puis TOUT détruire",
          "",
          "6️⃣ Confirmation du laboratoire :",
          "   Infiltrer ou recueillir des preuves visuelles.",
          "   Les agents peuvent rentrer dans le laboratoire,",
          "   mais s'ils sont découverts par l'illégal,",
          "   ils peuvent être soumis à une Mort RP",
          "   (Réalisable uniquement si les 5 preuves ci-dessus",
          "   sont effectuées et notifiées dans le dossier)"
        ]
      },
      {
        icon: <Briefcase className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🔍 UNITÉS D'ENQUÊTES (3/4)",
        color: "from-cyan-600 to-teal-600",
        bgColor: "bg-cyan-50",
        borderColor: "border-cyan-600",
        content: [
          "🔍 UNITÉS D'ENQUÊTES (SUITE)",
          "",
          "🚨 FLAGRANT DÉLIT & INTERPELLATIONS LIMITÉES",
          "",
          "Si la DOA a confirmation qu'un lieu est un laboratoire,",
          "elle est autorisée à interpeller UNIQUEMENT",
          "2 personnes MAXIMUM pour flagrant délit",
          "à la sortie du laboratoire.",
          "(Obligation de les laisser faire une course-poursuite)",
          "",
          "🚗 COURSE-POURSUITE & JUSTIFICATIONS",
          "",
          "Si une course-poursuite est engagée,",
          "la DOA doit préciser la raison.",
          "",
          "Exemple : 'Le véhicule sort d'un laboratoire de drogue'",
          "ou 'Les occupants viennent d'un interrogatoire",
          "lié à un point de récolte'.",
          "",
          "⚠️ Cela permet de laisser une porte de sortie",
          "   aux joueurs en face et d'éviter les abus."
        ]
      },
      {
        icon: <Key className="w-16 h-16" />,
        category: "SERVICES PUBLICS - POLICE (SASP)",
        title: "🔍 UNITÉS D'ENQUÊTES (4/4)",
        color: "from-teal-600 to-green-600",
        bgColor: "bg-teal-50",
        borderColor: "border-teal-600",
        content: [
          "🔍 UNITÉS D'ENQUÊTES (SUITE)",
          "",
          "🏠 ACCÈS AUX LABORATOIRES",
          "",
          "🏭 LABORATOIRE PUBLIC :",
          "La DOA peut y entrer après les 6 preuves validées.",
          "",
          "🔒 LABORATOIRE PRIVÉ :",
          "Mandat OBLIGATOIRE avant toute intervention.",
          "",
          "💬 INTERROGATOIRE",
          "",
          "💰 Durant un interrogatoire, la DOA a la possibilité",
          "   de donner 15 000$ MAX à un joueur",
          "   qui a donné des informations dangereuses",
          "   et/ou aidant grandement à l'avancement d'une enquête.",
          "",
          "⚠️ RAPPEL :",
          "Toutes ces procédures doivent être faites",
          "dans le respect du RP et du fairplay."
        ]
      }
    ],
    // ENTREPRISE
    "Entreprise": [
      {
        icon: <DollarSign className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "💵 SALAIRES - Base",
        color: "from-green-600 to-emerald-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-600",
        content: [
          "💵 SALAIRES | PRIMES | Blanchiment",
          "",
          "⚜️ LES IMPÔTS",
          "",
          "🏦 SALAIRES :",
          "",
          "Les primes sont incluses dans le salaire",
          "de vos employés (Maximum).",
          "",
          "En dehors de cela, l'entreprise n'est pas tenue",
          "de verser une rémunération supplémentaire à l'employé,",
          "sauf si un accord contractuel spécifique est établi",
          "avec l'employeur ou en cas de poste à responsabilité",
          "dans l'entreprise."
        ]
      },
      {
        icon: <FileText className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "💵 SALAIRES - Démission & Runners",
        color: "from-emerald-600 to-teal-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-600",
        content: [
          "💵 SALAIRES (SUITE)",
          "",
          "📋 DÉMISSION :",
          "",
          "Si un employé démissionne SANS avertir",
          "le patron ou l'équipe de direction,",
          "le patron peut ne pas payer la personne.",
          "",
          "Cependant, si celui-ci prévient de sa démission",
          "puis quitte l'entreprise de lui-même,",
          "il est en droit de réclamer son salaire",
          "auprès des patrons qui ont le devoir de le lui verser",
          "sous peine de conséquence RP",
          "(Se rapprocher des mairies en RP pour plus d'explications).",
          "",
          "🏃 RUNNER :",
          "Un runner ne doit percevoir aucun salaire complémentaire ;",
          "il reçoit uniquement une prime de fin de semaine,",
          "selon la volonté du patron,",
          "puisque sa rémunération provient directement de son run."
        ]
      },
      {
        icon: <TrendingUp className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "💵 Plafond Salarial",
        color: "from-teal-600 to-cyan-600",
        bgColor: "bg-teal-50",
        borderColor: "border-teal-600",
        content: [
          "💵 PLAFOND SALARIAL",
          "",
          "📊 MAXIMUM :",
          "",
          "Pour toutes les entreprises,",
          "un salaire maximum de 240k est imposé.",
          "",
          "Un employé ne peut pas gagner plus que ce montant,",
          "à l'exception des primes versées par l'employeur",
          "et avec discussion et accord du D.O.T.",
          "",
          "⚠️ RAPPEL :",
          "",
          "Ce plafond est strict et doit être respecté",
          "par toutes les entreprises sans exception."
        ]
      },
      {
        icon: <DollarSign className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "💵 Primes et Impôts",
        color: "from-cyan-600 to-blue-600",
        bgColor: "bg-cyan-50",
        borderColor: "border-cyan-600",
        content: [
          "💵 PRIMES ET IMPÔTS",
          "",
          "🎁 PRIMES :",
          "",
          "Les primes sont accordées à la discrétion",
          "de l'employeur.",
          "",
          "La limite est fixée à 77k pour un employé",
          "et à 85k pour un patron,",
          "en fonction du bénéfice réalisé.",
          "",
          "Le pourcentage de commission est déterminé",
          "par les patrons en accord avec les staffs",
          "(Référents d'entreprise).",
          "",
          "🏛️ IMPÔTS :",
          "",
          "Chaque semaine le D.O.T. vérifie la comptabilité",
          "des entreprises pour prélever un certain taux",
          "sur le bénéfice de la semaine."
        ]
      },
      {
        icon: <Landmark className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "💵 Impôts - Utilisation",
        color: "from-blue-600 to-indigo-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "💵 IMPÔTS (SUITE)",
          "",
          "🏛️ UTILISATION DES IMPÔTS :",
          "",
          "Les impôts sont présents dans le but",
          "de pouvoir payer les entreprises publiques",
          "(SASP, EMS, LSFD) :",
          "• Versement des salaires",
          "• Nouveaux équipements",
          "",
          "Les impôts servent aussi à effectuer",
          "des prêts au gouvernement pour :",
          "• Des évènements",
          "• Paies de leurs employés",
          "• Si impossibilité, etc..."
        ]
      },
      {
        icon: <Briefcase className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "💰 Blanchiment d'argent - Explication",
        color: "from-indigo-600 to-purple-600",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-600",
        content: [
          "💰 BLANCHIMENT D'ARGENT",
          "",
          "📋 EXPLICATION :",
          "",
          "Le blanchiment d'argent est désormais un business",
          "qui passe par les entreprises,",
          "toutefois la revendication de ce business",
          "appartient toujours aux groupes officiels",
          "(gang & organisation).",
          "",
          "Maintenant, au lieu de blanchir directement",
          "de l'argent auprès des GM,",
          "les groupes pourront le faire via les entreprises.",
          "",
          "Cela signifie que les entreprises auront",
          "une machine de blanchiment à leur disposition.",
          "",
          "🎯 OBJECTIF :",
          "Ces changements visent à dynamiser l'économie",
          "et les interactions entre le légal et l'illégal",
          "sur le serveur."
        ]
      },
      {
        icon: <FileText className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "💰 Blanchiment - Règlement (1/2)",
        color: "from-purple-600 to-pink-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "💰 BLANCHIMENT - RÈGLEMENT",
          "",
          "📋 ACCÈS :",
          "",
          "Le blanchiment est accessible pour les entreprises",
          "sous dossier auprès des référents entreprises.",
          "",
          "Les patrons / copatron membres d'organisation / gang",
          "pourront également postuler",
          "mais le système sera plus strict.",
          "",
          "⚠️ CHANGEMENT DE PATRON :",
          "",
          "Lorsqu'un changement de patron est fait,",
          "le blanchiment est retiré à l'entreprise.",
          "",
          "📊 COMPTABILITÉ :",
          "",
          "Les entreprises se doivent de tenir à jour",
          "leur comptabilité de manière RP.",
          "",
          "Un document staff est également à remplir",
          "pour assurer le suivi, en lien avec votre comptabilité."
        ]
      },
      {
        icon: <Ban className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "💰 Blanchiment - Règlement (2/2)",
        color: "from-pink-600 to-red-600",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-600",
        content: [
          "💰 BLANCHIMENT - RÈGLEMENT (SUITE)",
          "",
          "❌ INTERDICTION SERVICE PUBLIC :",
          "",
          "Un patron ayant fait partie d'un service public",
          "ne peut en aucun cas obtenir le blanchiment",
          "dans son entreprise.",
          "",
          "⚠️ IMPORTANT :",
          "",
          "Cette règle est stricte et sans exception",
          "pour éviter les conflits d'intérêts."
        ]
      },
      {
        icon: <Settings className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "💰 Blanchiment - Gestion machine",
        color: "from-red-600 to-orange-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "💰 GESTION MACHINE",
          "",
          "📍 LOCALISATION :",
          "",
          "❌ La machine ne peut PAS être située dans :",
          "• Une zone entreprise",
          "• Un QG",
          "• Une zone safe",
          "",
          "📍 RENDEZ-VOUS :",
          "",
          "Les rendez-vous de blanchiment ne peuvent PAS",
          "être effectués :",
          "• À proximité de la machine d'argent",
          "• À l'entreprise",
          "• Dans le quartier du groupe en question",
          "",
          "🔫 BRAQUAGE :",
          "",
          "Il est possible de braquer un groupe",
          "ayant blanchi de l'argent",
          "et de récupérer 50% de la somme blanchie.",
          "",
          "❌ Il n'est PAS autorisé de braquer",
          "   sur la zone des machines."
        ]
      },
      {
        icon: <Users className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "💰 Blanchiment - Restrictions",
        color: "from-orange-600 to-yellow-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-600",
        content: [
          "💰 BLANCHIMENT - RESTRICTIONS",
          "",
          "🚫 INTERDICTIONS :",
          "",
          "Il n'est pas possible pour une entreprise",
          "de blanchir à un groupe autre qu'un gang",
          "ou une organisation.",
          "",
          "👥 PF / INDÉPENDANT :",
          "",
          "Les PF / Indépendants qui sont membres",
          "d'une entreprise doivent passer par le système",
          "de blanchiment via les gangs & organisations.",
          "",
          "⚠️ RAPPEL :",
          "",
          "Le blanchiment est réservé exclusivement",
          "aux groupes officiels (gangs & organisations)."
        ]
      },
      {
        icon: <Megaphone className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "📢 ANNONCES PERSONNALISÉES",
        color: "from-yellow-600 to-green-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-600",
        content: [
          "📢 ANNONCES PERSONNALISÉES",
          "",
          "👔 RESPONSABILITÉ DU PATRON :",
          "",
          "Le patron est responsable des personnes",
          "ayant l'accès aux annonces personnalisées",
          "de son entreprise.",
          "",
          "De ce fait, si un employé transgresse le règlement,",
          "des sanctions pourront être appliquées aux deux parties",
          "allant d'un simple avertissement au retrait de l'entreprise.",
          "",
          "📏 LIMITES :",
          "",
          "• Toute annonce est limitée à 256 caractères",
          "• Limitée à une annonce toutes les 15 minutes",
          "  par entreprise",
          "",
          "❌ INTERDICTIONS :",
          "",
          "Il est strictement interdit d'utiliser",
          "les annonces entreprises à titre personnel",
          "ou de communiquer des informations personnelles",
          "d'autres joueurs."
        ]
      },
      {
        icon: <CheckCircle className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "📢 ANNONCES - Professionnalisme",
        color: "from-green-600 to-teal-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-600",
        content: [
          "📢 ANNONCES (SUITE)",
          "",
          "✅ RÈGLES DE RÉDACTION :",
          "",
          "Les annonces doivent être :",
          "",
          "• Professionnelles",
          "",
          "• Cohérentes",
          "",
          "• Sérieuses",
          "",
          "• Surtout LISIBLES",
          "",
          "⚠️ RAPPEL :",
          "",
          "Toute annonce non conforme peut entraîner",
          "des sanctions pour l'employé ET le patron."
        ]
      },
      {
        icon: <Home className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "🏡 IMMOBILIERS - Placement",
        color: "from-teal-600 to-cyan-600",
        bgColor: "bg-teal-50",
        borderColor: "border-teal-600",
        content: [
          "🏡 IMMOBILIERS",
          "",
          "🏠 PLACEMENT DES PROPRIÉTÉS :",
          "",
          "❌ Il est INTERDIT de placer une nouvelle propriété",
          "   à proximité d'une entrée existante,",
          "   même si l'agencement le permet naturellement",
          "   (ex. : copropriété, maison mitoyenne,",
          "   plusieurs portes d'entrée).",
          "",
          "✅ Pour de telles situations,",
          "   demandez l'accord préalable dans #📩・tickets.",
          "",
          "❌ Il est STRICTEMENT INTERDIT de placer",
          "   des propriétés dans des emplacements incohérents,",
          "   comme les portes de locaux électriques."
        ]
      },
      {
        icon: <Building className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "🏡 IMMOBILIERS - Motel/Caravane/Garage",
        color: "from-cyan-600 to-blue-600",
        bgColor: "bg-cyan-50",
        borderColor: "border-cyan-600",
        content: [
          "🏡 IMMOBILIERS (SUITE)",
          "",
          "🏨 MOTEL / CARAVANE :",
          "",
          "• L'intérieur 'Motel' est réservé aux motels",
          "• L'intérieur 'Caravane' est réservé aux caravanes",
          "",
          "🚗 GARAGE :",
          "",
          "Les garages doivent être placés UNIQUEMENT",
          "devant les portes de garage.",
          "",
          "Les garages de 20 / 25 places doivent être situés",
          "dans des tours ou dans des villas.",
          "",
          "⚠️ IMPORTANT :",
          "",
          "Respectez la cohérence RP",
          "lors du placement des propriétés."
        ]
      },
      {
        icon: <Home className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "🏡 IMMOBILIERS - Maison garage",
        color: "from-blue-600 to-indigo-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-600",
        content: [
          "🏡 IMMOBILIERS (SUITE)",
          "",
          "🏠 MAISON GARAGE :",
          "",
          "❌ Il est INTERDIT de vendre le garage d'une maison",
          "   sans vendre l'habitation elle-même.",
          "",
          "❌ De même, il est INTERDIT de louer le garage",
          "   sans louer l'habitation.",
          "",
          "📋 RÈGLE :",
          "",
          "Chaque maison doit comporter :",
          "• L'intérieur de l'habitation sur la porte principale",
          "• Au moins 1 garage",
          "",
          "Si la maison possède plusieurs garages,",
          "un seul intérieur de maison est autorisé."
        ]
      },
      {
        icon: <XCircle className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "🏡 IMMOBILIERS - Interdictions (1/2)",
        color: "from-indigo-600 to-purple-600",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-600",
        content: [
          "🏡 IMMOBILIERS",
          "",
          "⛔ IL EST INTERDIT - AGENT IMMOBILIER :",
          "",
          "❌ De partager les informations des joueurs",
          "   sur leurs propriétés à d'autres joueurs",
          "",
          "❌ De participer à des activités illégales,",
          "   ce qui inclut être membre d'un groupe illégal",
          "   et participer à des activités illégales telles que",
          "   la pêche illégale, les go fast,",
          "   les braquages de supérettes, etc.",
          "",
          "❌ De placer une propriété sur les yachts",
          "",
          "❌ De placer un motel ou des caravanes",
          "   sur une maison ou tout autre emplacement inapproprié"
        ]
      },
      {
        icon: <Ban className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "🏡 IMMOBILIERS - Interdictions (2/2)",
        color: "from-purple-600 to-pink-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-600",
        content: [
          "🏡 IMMOBILIERS (SUITE)",
          "",
          "⛔ IL EST INTERDIT (SUITE) :",
          "",
          "❌ De placer un garage sur une place de parking",
          "   ou autre emplacement incorrect",
          "",
          "❌ D'avoir des entrepôts ou des bureaux",
          "   à l'arrière de vos maisons",
          "",
          "❌ Camper sur des habitations afin de se l'approprier",
          "   sera sanctionné d'un licenciement",
          "",
          "⚠️ RAPPEL :",
          "",
          "Toutes ces règles visent à maintenir",
          "la cohérence RP et l'équité entre les joueurs."
        ]
      },
      {
        icon: <AlertTriangle className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "🏡 IMMOBILIERS - Côté joueur (1/2)",
        color: "from-pink-600 to-red-600",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-600",
        content: [
          "🏡 IMMOBILIERS",
          "",
          "✨ CÔTÉ JOUEUR :",
          "",
          "⏰ INACTIVITÉ :",
          "",
          "Après 1 mois d'inactivité sur le serveur,",
          "vos maisons seront automatiquement supprimées",
          "SANS possibilité de remboursement.",
          "",
          "🚫 EN CAS DE BANNISSEMENT :",
          "",
          "Si vous cessez de louer votre propriété",
          "pendant cette période,",
          "aucun remboursement ne sera effectué,",
          "même pour vos colocataires et locataires.",
          "",
          "❌ NON-RENOUVELLEMENT :",
          "",
          "En cas de non-renouvellement de la propriété,",
          "aucun remboursement ne sera effectué,",
          "même pour vos colocataires et locataires."
        ]
      },
      {
        icon: <AlertCircle className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "🏡 IMMOBILIERS - Côté joueur (2/2)",
        color: "from-red-600 to-orange-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-600",
        content: [
          "🏡 IMMOBILIERS (SUITE)",
          "",
          "✨ CÔTÉ JOUEUR (SUITE) :",
          "",
          "⚠️ ERREUR DE VALIDATION :",
          "",
          "En cas d'erreur de votre part",
          "après avoir validé l'intérieur de votre propriété,",
          "aucun remboursement ne sera établi.",
          "",
          "C'est de VOTRE RESPONSABILITÉ de vérifier",
          "avant de payer.",
          "",
          "🏰 LIMITE VILLA :",
          "",
          "1 seule villa autorisée par personne.",
          "",
          "⚠️ RAPPEL FINAL :",
          "",
          "Toutes ces règles sont non négociables",
          "et s'appliquent à tous les joueurs sans exception."
        ]
      },
      {
        icon: <Ticket className="w-16 h-16" />,
        category: "ENTREPRISE",
        title: "🔖 Coupons",
        color: "from-orange-600 to-yellow-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-600",
        content: [
          "🔖 COUPONS",
          "",
          "❌ INTERDICTION DE LOOT",
          "",
          "Il est strictement INTERDIT de loot les coupons.",
          "",
          "✅ POSSIBILITÉ DE VENTE",
          "",
          "Vous avez la possibilité de vendre vos coupons.",
          "",
          "⚠️ RAPPEL :",
          "",
          "Les coupons sont des objets de valeur",
          "qui doivent être échangés de manière RP",
          "et non volés."
        ]
      }
    ]
  };

  const nextCard = () => {
    const cards = selectedSubCategory ? contentData[selectedSubCategory] : [];
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

  const handleSectionClick = (sectionKey: string) => {
    setSelectedSection(sectionKey);
    setSelectedSubCategory(null);
    setCurrentCard(0);
  };

  const handleSubCategoryClick = (subCat: string) => {
    setSelectedSubCategory(subCat);
    setCurrentCard(0);
  };

  const handleBackToSections = () => {
    setSelectedSection(null);
    setSelectedSubCategory(null);
    setCurrentCard(0);
  };

  const handleBackToSubCategories = () => {
    setSelectedSubCategory(null);
    setCurrentCard(0);
  };

  const currentCards = selectedSubCategory ? contentData[selectedSubCategory] : [];
  const currentCardData = currentCards[currentCard];

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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="px-4 py-12 max-w-6xl mx-auto">
          {/* Back button */}
          <a
            href="#reglement"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors mb-8 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">
              Retour au Règlement
            </span>
          </a>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 
              className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              ACTIVITÉS LÉGALES
            </h1>
            <p className="text-cyan-300 text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
              Règlement des organisations et services officiels
            </p>
          </div>

          {/* Sélection de section principale */}
          {!selectedSection && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => handleSectionClick(key)}
                  className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className={`bg-gradient-to-br ${section.color} p-6 rounded-2xl text-white shadow-lg`}>
                      {section.icon}
                    </div>
                    <h3 
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {section.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {section.subCategories.length} sous-catégories
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Sélection de sous-catégorie */}
          {selectedSection && !selectedSubCategory && (
            <div>
              <button
                onClick={handleBackToSections}
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors mb-8 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm uppercase tracking-wider">Retour aux sections</span>
              </button>

              <h2 
                className="text-4xl font-bold text-white text-center mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {sections[selectedSection as keyof typeof sections].name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {sections[selectedSection as keyof typeof sections].subCategories.map((subCat) => (
                  <button
                    key={subCat}
                    onClick={() => handleSubCategoryClick(subCat)}
                    className={`group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${sections[selectedSection as keyof typeof sections].color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <h4 
                        className="text-xl font-bold text-white text-center"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {subCat}
                      </h4>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Affichage des cartes */}
          {selectedSubCategory && currentCardData && (
            <div>
              <button
                onClick={handleBackToSubCategories}
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors mb-8 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm uppercase tracking-wider">
                  Retour à {sections[selectedSection as keyof typeof sections].name}
                </span>
              </button>

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
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)'
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
                      {currentCardData.isSpecial ? (
                        currentCardData.specialContent
                      ) : (
                        <div className="space-y-4">
                          {currentCardData.content.map((line: string, index: number) => (
                            <div
                              key={index}
                              className={`text-lg text-gray-800 leading-relaxed ${
                                line.startsWith('►') || line.startsWith('✓') || line.startsWith('•') || line.startsWith('→') || line.startsWith('✅') || line.startsWith('🚫') || line.startsWith('📋') || line.startsWith('💡') || line.startsWith('📁') || line.startsWith('💬') || line.startsWith('🏛️') || line.startsWith('🚑') || line.startsWith('🚔') || line.startsWith('🏢')
                                  ? 'font-semibold'
                                  : ''
                              }`}
                              style={{ 
                                fontFamily: "'Crimson Text', serif" 
                              }}
                            >
                              {line || <br />}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="px-10 pb-8">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${currentCardData.color} transition-all duration-500`}
                            style={{ width: `${((currentCard + 1) / currentCards.length) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-600 min-w-[60px]">
                          {currentCard + 1} / {currentCards.length}
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
                      : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95"
                  }`}
                  style={{ fontFamily: "'Special Elite', cursive" }}
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                  <span>PRÉCÉDENT</span>
                </button>

                <div className="flex gap-2">
                  {currentCards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentCard ? 'right' : 'left');
                        setTimeout(() => setCurrentCard(index), 50);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentCard
                          ? 'bg-gradient-to-r from-blue-400 to-cyan-400 w-8'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextCard}
                  disabled={currentCard === currentCards.length - 1}
                  className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                    currentCard === currentCards.length - 1
                      ? "bg-gray-700 text-gray-500 cursor-not-allowed opacity-50"
                      : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95"
                  }`}
                  style={{ fontFamily: "'Special Elite', cursive" }}
                >
                  <span>SUIVANT</span>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}
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