import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const FORMSPREE_ID = 'xojopgyj';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: 'Nouvelle demande de contact - Web-Artisan (Contact)',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 4000);
      } else {
        const data = await response.json();
        setError(data.error || 'Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@web-artisan.fr',
      link: 'mailto:contact@web-artisan.fr',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '06 12 34 56 78',
      link: 'tel:+33612345678',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'France',
      link: '#',
    },
    {
      icon: Clock,
      label: 'Disponibilité',
      value: 'Lun - Ven, 9h - 18h',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] text-dark">
            Parlons de
            <span className="text-brand block mt-2">votre projet</span>
          </h2>
          <p className="text-gray-custom text-lg mt-4">
            Vous avez un projet en tête ? Je suis à votre écoute pour en discuter
            et vous proposer une solution sur-mesure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ЛЕВАЯ КОЛОНКА - КОНТАКТНАЯ ИНФОРМАЦИЯ */}
          <div>
            <h3 className="text-2xl font-bold font-['Playfair_Display'] text-dark mb-6">
              Contactez-moi
            </h3>
            <p className="text-gray-custom mb-8">
              Je réponds à toutes vos questions sous 24h. N'hésitez pas à me contacter
              par email ou téléphone.
            </p>

            {/* Контактная информация */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-4 p-4 bg-bg-light rounded-xl hover:bg-brand/5 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center group-hover:bg-brand transition-colors">
                      <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-custom">{item.label}</p>
                      <p className="text-dark font-medium">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Социальные сети */}
            {/* <div className="mt-8 pt-8 border-t border-gray-200/30">
              <h4 className="text-sm font-semibold text-dark mb-4">Retrouvez-moi sur</h4>
              <div className="flex gap-4"> */}
                {/* <a
                  href="#"
                  className="w-12 h-12 bg-bg-light rounded-full flex items-center justify-center hover:bg-brand transition-colors group"
                  aria-label="LinkedIn"
                >
                  <span className="text-dark group-hover:text-white text-sm font-medium">in</span>
                </a> */}
                {/* <a
                  href="https://github.com/vlad-website"
                  className="w-12 h-12 bg-bg-light rounded-full flex items-center justify-center hover:bg-brand transition-colors group"
                  aria-label="GitHub"
                >
                  <span className="text-dark group-hover:text-white text-sm font-medium">GitHub</span>
                </a> */}
                {/* <a
                  href="#"
                  className="w-12 h-12 bg-bg-light rounded-full flex items-center justify-center hover:bg-brand transition-colors group"
                  aria-label="Instagram"
                >
                  <span className="text-dark group-hover:text-white text-sm font-medium">ig</span>
                </a> */}
              {/* </div>
            </div> */}
          </div>

          {/* ПРАВАЯ КОЛОНКА - ФОРМА */}
          <div className="bg-bg-light rounded-3xl p-6 md:p-8 border border-gray-200/30">
            <h3 className="text-xl font-bold font-['Playfair_Display'] text-dark mb-6">
              Envoyez-moi un message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-xl font-semibold font-['Playfair_Display'] text-dark">
                  Message envoyé !
                </h4>
                <p className="text-gray-custom mt-2">
                  Je vous recontacte dans les 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-3 text-sm">
                    {error}
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-white border border-gray-200/50 rounded-xl text-dark placeholder-gray-custom/50 focus:outline-none focus:border-brand transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-white border border-gray-200/50 rounded-xl text-dark placeholder-gray-custom/50 focus:outline-none focus:border-brand transition-colors"
                    placeholder="jean@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    className="w-full px-4 py-3 bg-white border border-gray-200/50 rounded-xl text-dark placeholder-gray-custom/50 focus:outline-none focus:border-brand transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    autoComplete="off"
                    className="w-full px-4 py-3 bg-white border border-gray-200/50 rounded-xl text-dark placeholder-gray-custom/50 focus:outline-none focus:border-brand transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-lg text-sm font-medium transition-all duration-300 hover:bg-brand-dark hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  <Send className="w-4 h-4" />
                  {isLoading ? 'Envoi...' : 'Envoyer'}
                </button>

                <p className="text-xs text-gray-custom text-center mt-4">
                  Je réponds sous 24h. Vos données sont confidentielles.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;