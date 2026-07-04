import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiCss,
  SiHtml5,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiGit,
  SiFigma,
} from 'react-icons/si';

const TechStack = () => {
  const technologies = [
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiPhp, name: 'PHP', color: '#777BB4' },
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: SiCss, name: 'CSS', color: '#1572B6' },
    { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
  ];

  return (
    <section className="py-16 bg-bg-light border-y border-gray-200/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            Technologies
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] text-dark">
            Un artisan polyvalent
          </h2>
          <p className="text-gray-custom text-sm mt-2">
            Je maîtrise un large éventail de technologies pour créer des sites sur-mesure,
            adaptés à vos besoins spécifiques.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-1.5 p-4 bg-white rounded-2xl shadow-sm border border-gray-200/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-w-[72px]"
              >
                <Icon className="w-8 h-8 md:w-9 md:h-9" style={{ color: tech.color }} />
                <span className="text-[10px] md:text-xs text-gray-custom font-medium text-center">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;