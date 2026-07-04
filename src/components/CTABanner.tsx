import { Calendar, Rocket } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-16 bg-brand-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <Rocket className="w-4 h-4 text-brand-accent" />
            <span className="text-sm text-white/80">Rapidité & efficacité</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] text-white leading-tight">
            Du devis au premier design,
            <br />
            <span className="text-brand-accent">c'est rapide</span>
          </h2>

          <p className="text-white/70 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Je sais que vous n'avez pas de temps à perdre. C'est pourquoi je m'engage
            à vous présenter une première maquette de votre futur site
            <span className="text-white font-semibold"> en moins de 10 jours</span>.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-white/80">
              <Calendar className="w-5 h-5 text-brand-accent" />
              <span className="text-sm">Dès votre prise de contact</span>
            </div>
            <span className="text-white/30 text-xl">→</span>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-2xl font-bold text-brand-accent">10 jours</span>
              <span className="text-sm">pour la première maquette</span>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-brand-accent text-white rounded-lg text-sm font-medium hover:bg-brand-accent-hover hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Je lance mon projet
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3 border border-white/30 text-white/80 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Voir mes réalisations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;