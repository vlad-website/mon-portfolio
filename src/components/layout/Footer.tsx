const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white/80 py-12 mt-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-['Playfair_Display'] text-white">
              WEB-ARTISAN<span className="text-brand">.</span>
            </h3>
            <p className="text-sm text-white/60 mt-1">
              Création de sites web pour artisans et commerces
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/60 hover:text-brand transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vlad-website"
              className="text-white/60 hover:text-brand transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-brand transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-white/40">
            <p>© {currentYear} - Tous droits réservés</p>
            <p className="mt-1">Fait avec ❤️ en France</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;