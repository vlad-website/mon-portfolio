import { Code, Heart, Users, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Code,
      title: 'Artisan du web',
      description: 'Je code chaque site avec soin, comme un artisan qui façonne son œuvre. Pas de templates, du sur-mesure.',
    },
    {
      icon: Heart,
      title: 'Passionné par votre métier',
      description: 'Je prends le temps de comprendre votre activité pour créer un site qui vous ressemble.',
    },
    {
      icon: Users,
      title: 'Proche de vous',
      description: 'Basé en France, je suis disponible pour échanger et vous accompagner à chaque étape.',
    },
    {
      icon: Sparkles,
      title: 'Design qui convertit',
      description: 'Allier beauté et efficacité : un site élégant qui attire et fidélise vos clients.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-bg-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Левая колонка - Текст */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
              À propos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] text-dark mb-6">
              Web-Artisan
              <span className="text-brand block mt-2">votre partenaire digital</span>
            </h2>

            <div className="space-y-4 text-gray-custom leading-relaxed">
              <p>
                Je m'appelle <strong className="text-dark">Vlad</strong> et je suis développeur web 
                indépendant. Après plusieurs années d'expérience dans le développement, j'ai choisi 
                de mettre mes compétences au service des artisans, commerçants et indépendants en France.
              </p>
              <p>
                Mon approche est simple : <strong className="text-dark">créer des sites web modernes, 
                élégants et performants</strong> qui reflètent l'identité de votre entreprise et vous 
                aident à attirer de nouveaux clients.
              </p>
              <p>
                Je crois que chaque entreprise mérite un site qui la met en valeur, sans complexité 
                technique ni jargon incompréhensible. C'est pourquoi je vous accompagne de A à Z, 
                de la conception à la mise en ligne.
              </p>
            </div>

            {/* Ценности */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200/30">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-dark">{value.title}</h4>
                        <p className="text-xs text-gray-custom mt-1">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Правая колонка - Фото/Иконка */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Декоративный фон */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-brand/5 rounded-full blur-2xl"></div>
              
              {/* Основной блок */}
              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-200/30 max-w-sm">
                <div className="text-center">
                  {/* Иконка/Аватар */}
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-brand/20 to-brand/5 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                    <img
                      src="/portfolio/avatar.png"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-['Playfair_Display'] text-dark">
                    Vlad K.
                  </h3>
                  <p className="text-brand font-medium text-sm mt-1">Web-Artisan</p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200/30">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-custom">Expérience</span>
                        <span className="text-dark font-medium">5+ ans</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-custom">Projets</span>
                        <span className="text-dark font-medium">50+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-custom">Localisation</span>
                        <span className="text-dark font-medium">France 🇫🇷</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-brand/10 rounded-full">
                    <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
                    <span className="text-xs font-medium text-brand">Disponible pour vos projets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;