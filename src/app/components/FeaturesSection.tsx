import { Car, Users, Briefcase, Shield, Coins, Building2, Heart, Trophy } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Véhicules Next-Gen",
    description: "Une flotte impressionnante de voitures customisables avec un système de tuning avancé"
  },
  {
    icon: Users,
    title: "Communauté Active",
    description: "Rejoignez une communauté passionnée de joueurs RP engagés et respectueux"
  },
  {
    icon: Briefcase,
    title: "Jobs Variés",
    description: "Bâtissez votre empire : médecin, policier, mafioso, entrepreneur et bien plus"
  },
  {
    icon: Shield,
    title: "Staff Dévoué",
    description: "Une équipe modération disponible 24/7 pour une expérience de jeu optimale"
  },
  {
    icon: Coins,
    title: "Économie Réaliste",
    description: "Un système économique équilibré et immersif pour un RP authentique"
  },
  {
    icon: Building2,
    title: "Immobilier",
    description: "Achetez votre villa de rêve ou investissez dans des propriétés commerciales"
  },
  {
    icon: Heart,
    title: "Système de Vie",
    description: "Gestion de la santé, faim, soif pour une immersion totale"
  },
  {
    icon: Trophy,
    title: "Événements Réguliers",
    description: "Courses, braquages, concerts : chaque jour apporte son lot de surprises"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4"
              style={{
                background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(255, 0, 255, 0.3)'
              }}>
            POURQUOI VICECITY RP ?
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl backdrop-blur-sm border border-pink-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.05), rgba(0, 255, 255, 0.05))',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}>
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1))',
                       boxShadow: '0 0 30px rgba(255, 0, 255, 0.3), 0 0 30px rgba(0, 255, 255, 0.3)'
                     }}>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 inline-flex p-3 rounded-lg"
                       style={{
                         background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2))',
                       }}>
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
