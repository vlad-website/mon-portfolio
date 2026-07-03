import ContactForm from '../components/ui/ContactForm';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-dark via-dark/95 to-brand/20 pt-20">
      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - Текст */}
          <div className="text-white">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-brand-light border border-white/10 mb-6">
              🚀 Web-Artisan
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] leading-tight">
              Je crée des sites web
              <span className="text-brand block mt-2">qui font grandir</span>
              <span className="text-brand">votre commerce</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mt-6 leading-relaxed max-w-lg">
              Artisan du web, je conçois des sites modernes, élégants et sur-mesure 
              pour les petits commerces, artisans et indépendants en France.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span className="w-2 h-2 bg-brand rounded-full"></span>
                Sites vitrines
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span className="w-2 h-2 bg-brand rounded-full"></span>
                Boutiques en ligne
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span className="w-2 h-2 bg-brand rounded-full"></span>
                Refonte & optimisation
              </div>
            </div>

            {/* Статистика */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold font-['Playfair_Display'] text-brand">50+</div>
                <div className="text-xs text-white/50">Projets livrés</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-['Playfair_Display'] text-brand">100%</div>
                <div className="text-xs text-white/50">Satisfaction client</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-['Playfair_Display'] text-brand">24h</div>
                <div className="text-xs text-white/50">Délai de réponse</div>
              </div>
            </div>
          </div>

          {/* Правая колонка - Форма */}
          <div className="w-full max-w-md mx-auto md:ml-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;