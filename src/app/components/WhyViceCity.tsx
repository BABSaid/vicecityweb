import { Car, Shirt, Users, Zap, Briefcase, Building2 } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Pack Véhicules Complet",
    description: "Une collection impressionnante de véhicules constamment mise à jour. Des voitures de luxe aux véhicules utilitaires, tout y est !",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    icon: Shirt,
    title: "Vêtements Uniques",
    description: "Un pack vestimentaire exclusif pour personnaliser votre personnage avec style. Des tenues uniques que vous ne trouverez nulle part ailleurs.",
    gradient: "from-cyan-600 to-blue-600"
  },
  {
    icon: Briefcase,
    title: "Jobs Variés",
    description: "Multiples opportunités de carrière : Police, EMS, Mécano, et bien d'autres métiers pour construire votre empire.",
    gradient: "from-pink-600 to-purple-600"
  },
  {
    icon: Users,
    title: "Communauté Active",
    description: "Une communauté respectueuse et passionnée qui rend l'expérience RP immersive et agréable au quotidien.",
    gradient: "from-purple-600 to-indigo-600"
  },
  {
    icon: Zap,
    title: "Optimisation Next-Gen",
    description: "Serveur optimisé pour des performances maximales. Profitez d'une expérience fluide sans lag.",
    gradient: "from-yellow-600 to-orange-600"
  },
  {
    icon: Building2,
    title: "Économie Équilibrée",
    description: "Un système économique réaliste et équilibré permettant à chacun de progresser et réussir.",
    gradient: "from-green-600 to-emerald-600"
  }
];

export function WhyViceCity() {
  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white"
              style={{
                textShadow: '0 0 30px rgba(168, 85, 247, 0.5)'
              }}>
            POURQUOI VICECITY RP ?
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Découvrez ce qui fait de ViceCity RP une expérience unique
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl backdrop-blur-sm border border-purple-600/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 bg-black/40"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}>
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(0, 255, 255, 0.1))',
                       boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
                     }}>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient}`}>
                    <Icon className="w-8 h-8 text-white" />
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
