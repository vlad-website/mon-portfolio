import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectModal from '../components/ProjectModal';
import { Project } from '../types';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            Mes réalisations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] text-dark">
            Des projets qui
            <span className="text-brand block mt-2">font la différence</span>
          </h2>
          <p className="text-gray-custom text-lg mt-4">
            Découvrez quelques-uns de mes projets récents pour des artisans,
            commerçants et indépendants en France.
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-200/30 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => handleProjectClick(project)}
            >
              {/* Фото */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Контент карточки */}
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium text-brand bg-brand/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-custom">{project.year}</span>
                </div>

                <h3 className="text-lg font-semibold font-['Playfair_Display'] text-dark mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-custom line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-4 flex items-center text-sm font-medium text-brand group-hover:text-brand-dark transition-colors">
                  Voir le projet
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA после портфолио */}
        <div className="text-center mt-16">
          <p className="text-gray-custom mb-6">
            Vous avez un projet en tête ?
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-brand text-white rounded-xl font-medium hover:bg-brand-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Parlons de votre projet
          </a>
        </div>
      </div>

      {/* Модальное окно */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Portfolio;