import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',      // <-- добавляем email
    phone: '',      // <-- телефон отдельно
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // ЗАМЕНИ НА СВОЙ ID
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
          email: formData.email,      // <-- обязательно! Formspree использует это поле
          phone: formData.phone,
          message: formData.message,
          _subject: 'Nouvelle demande de contact - Web-Artisan',
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

  if (isSubmitted) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
        <div className="text-4xl mb-4">✨</div>
        <h3 className="text-xl font-semibold text-white font-['Playfair_Display']">
          Merci !
        </h3>
        <p className="text-white/80 mt-2 text-sm">
          Je vous recontacte dans les 24h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
      <h3 className="text-xl font-semibold text-white font-['Playfair_Display'] mb-4">
        Parlons de votre projet
      </h3>
      
      {error && (
        <div className="bg-red-500/20 border border-red-500/30 text-white rounded-lg p-3 mb-4 text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="name-hero" className="block text-sm text-white/80 mb-1">
            Votre nom *
          </label>
          <input
            type="text"
            id="name-hero"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-brand transition-colors"
            placeholder="Jean Dupont"
          />
        </div>

        <div>
          <label htmlFor="email-hero" className="block text-sm text-white/80 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email-hero"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-brand transition-colors"
            placeholder="jean@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone-hero" className="block text-sm text-white/80 mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone-hero"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-brand transition-colors"
            placeholder="06 12 34 56 78"
          />
        </div>

        <div>
          <label htmlFor="message-hero" className="block text-sm text-white/80 mb-1">
            Votre message
          </label>
          <textarea
            id="message-hero"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            autoComplete="off"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-brand transition-colors resize-none"
            placeholder="Décrivez brièvement votre projet..."
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-8 py-3 bg-brand text-white rounded-lg text-sm font-medium transition-all duration-300 hover:bg-brand-dark hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {isLoading ? 'Envoi en cours...' : 'Envoyer'}
        </button>

        <p className="text-xs text-white/50 text-center">
          Je réponds sous 24h. Vos données sont confidentielles.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;