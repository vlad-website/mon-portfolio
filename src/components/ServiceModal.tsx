import { X, CheckCircle, Globe, CreditCard, Calendar, Layout, Smartphone, Shield } from 'lucide-react';

interface ServiceModalProps {
  service: {
    title: string;
    description: string;
    fullDescription: string;
    details: string[];
    icon: any;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  if (!isOpen || !service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 float-right z-10 mr-4 mt-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Fermer"
        >
          <X className="w-6 h-6 text-dark" />
        </button>

        <div className="px-6 md:px-10 pb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center">
              <service.icon className="w-7 h-7 text-brand" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] text-dark">
              {service.title}
            </h2>
          </div>

          <p className="text-gray-custom leading-relaxed mb-6">
            {service.fullDescription}
          </p>

          <h4 className="text-sm font-semibold text-dark mb-4">Ce que j'inclus :</h4>
          <ul className="space-y-3 mb-8">
            {service.details.map((detail, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-custom">
                <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <div className="bg-bg-light rounded-2xl p-6 border border-gray-200/30">
            <h4 className="text-sm font-semibold text-dark mb-2">💡 Pourquoi ce service ?</h4>
            <p className="text-gray-custom text-sm">
              Je vous accompagne de A à Z, avec une approche personnalisée et 
              transparente. Mon objectif : vous offrir un site qui vous ressemble 
              et qui répond parfaitement à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;