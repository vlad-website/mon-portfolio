import { X, ArrowRight, Calendar, User, CheckCircle } from 'lucide-react';
import { Project } from '../types';
import Button from './ui/Button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  return (
    // Затемнение фона
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      {/* Модальное окно */}
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right z-10 mr-4 mt-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Fermer"
        >
          <X className="w-6 h-6 text-dark" />
        </button>

        <div className="px-6 md:px-10 pb-10">
          {/* Фото галерея */}
          <div className="grid grid-cols-2 gap-3 mb-8 -mt-4">
            <div className="col-span-2">
              <img 
                src={project.images[0]} 
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
            </div>
            {project.images.slice(1, 3).map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`${project.title} - détail ${idx + 1}`}
                className="w-full h-32 md:h-40 object-cover rounded-2xl"
              />
            ))}
          </div>

          {/* Заголовок и категория */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-2">
                {project.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] text-dark">
                {project.title}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-custom">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
          </div>

          {/* Client */}
          <div className="flex items-center gap-2 text-sm text-gray-custom mb-6">
            <User className="w-4 h-4" />
            <span>Client : {project.client}</span>
          </div>

          {/* Описание */}
          <div className="prose prose-sm max-w-none mb-8">
            <p className="text-gray-custom leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Технологии */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-dark mb-3">Technologies utilisées</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-1.5 bg-bg-light rounded-full text-sm text-dark/70 border border-gray-200/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Результаты */}
          <div className="bg-bg-light rounded-2xl p-6 mb-8 border border-gray-200/30">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-dark mb-1">Résultats</h4>
                <p className="text-gray-custom">{project.results}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;