import { useState } from 'react';
import { 
  Layout, 
  Smartphone, 
  Search, 
  HeartHandshake,
  ArrowRight 
} from 'lucide-react';
import ServiceModal from '../components/ServiceModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Layout,
      title: 'Sites vitrines sur-mesure',
      description: 'Un site élégant et rapide qui présente votre activité, vos produits et votre savoir-faire.',
      fullDescription: 'Je crée des sites vitrines entièrement personnalisés qui reflètent l\'identité de votre entreprise. Chaque site est conçu pour être rapide, élégant et parfaitement adapté à votre activité. Je travaille aussi bien à partir de vos maquettes Figma que de zéro, en créant un design unique qui vous ressemble.',
      details: [
        'Design unique et sur-mesure (ou à partir de vos maquettes Figma)',
        'Site responsive (adapté à tous les écrans)',
        'Optimisation SEO pour être visible sur Google',
        'Hébergement et nom de domaine inclus',
        'Interface d\'administration facile à utiliser',
        'Formation à la gestion de votre site',
      ],
    },
    {
      icon: Smartphone,
      title: 'Boutiques en ligne',
      description: 'Vendez vos produits en ligne avec une boutique simple à gérer.',
      fullDescription: 'Je développe des boutiques en ligne complètes qui vous permettent de vendre vos produits facilement. Que vous vendiez des produits physiques ou numériques, je m\'adapte à vos besoins et vous propose une solution sur-mesure avec les fonctionnalités essentielles pour réussir votre commerce en ligne.',
      details: [
        'Catalogue de produits illimité',
        'Paiement sécurisé (Stripe, PayPal)',
        'Gestion de stock et des commandes',
        'Intégration de tous les modes de paiement',
        'Design responsive et optimisé',
        'Sécurité des données et conformité RGPD',
      ],
    },
    {
      icon: Search,
      title: 'Référencement naturel (SEO)',
      description: 'Soyez visible sur Google dans votre région.',
      fullDescription: 'Je vous aide à être visible sur Google et à attirer des clients locaux. J\'optimise votre site pour les recherches liées à votre activité et votre région, en utilisant des techniques éprouvées pour améliorer votre positionnement dans les résultats de recherche.',
      details: [
        'Audit SEO complet de votre site',
        'Optimisation des mots-clés locaux',
        'Structure et balisage sémantique',
        'Optimisation des images et des contenus',
        'Suivi des performances et rapports',
        'Stratégie de contenu personnalisée',
      ],
    },
    {
      icon: HeartHandshake,
      title: 'Accompagnement & formation',
      description: 'Je ne me contente pas de créer votre site : je vous forme à l\'utiliser.',
      fullDescription: 'Mon accompagnement ne s\'arrête pas à la mise en ligne. Je vous forme à utiliser votre site, je reste disponible pour vous aider et je m\'assure que tout fonctionne parfaitement. Un véritable partenariat pour la croissance de votre activité.',
      details: [
        'Formation à la gestion de votre site',
        'Support technique pendant 3 mois',
        'Mises à jour et maintenances incluses',
        'Conseils personnalisés pour votre stratégie digitale',
        'Intégration d\'outils (réservations, paiements, etc.)',
        'Assistance pour la migration vers WordPress ou Tilda si besoin',
      ],
    },
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section id="services" className="section-padding bg-bg-light">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            Mes services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] text-dark">
            Des solutions web
            <span className="text-brand block mt-2">pour faire décoller votre activité</span>
          </h2>
          <p className="text-gray-custom text-lg mt-4">
            Chaque projet est unique. Je vous accompagne de la conception à la mise en ligne,
            avec une approche artisanale et personnalisée.
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/30 cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                {/* Иконка */}
                <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Заголовок */}
                <h3 className="text-xl font-semibold font-['Playfair_Display'] text-dark mb-3">
                  {service.title}
                </h3>

                {/* Описание */}
                <p className="text-gray-custom text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Кнопка "En savoir plus" */}
                <div className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark transition-colors group">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Дополнительный блок "Pourquoi choisir Web-Artisan" */}
        <div className="mt-16 bg-dark rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] mb-4">
              Pourquoi choisir Web-Artisan ?
            </h3>
            <p className="text-white/70 text-lg">
              Je ne suis pas une agence avec des processus rigides. Je suis un artisan du web 
              qui prend le temps de comprendre votre métier pour créer un site qui vous ressemble.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="flex items-center gap-2 text-white/60">
                <span className="w-2 h-2 bg-brand rounded-full"></span>
                Sur-mesure
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <span className="w-2 h-2 bg-brand rounded-full"></span>
                Écoute & conseil
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <span className="w-2 h-2 bg-brand rounded-full"></span>
                Prix transparents
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <span className="w-2 h-2 bg-brand rounded-full"></span>
                Support réactif
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно для услуги */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Services;