import { skills } from '@/constants/data';

export default function Skills() {
  const categories = [
    { title: 'Frontend', skills: skills.frontend },
    { title: 'Backend', skills: skills.backend },
    { title: 'Databases', skills: skills.databases },
    { title: 'Payments & Security', skills: skills.specialized },
    { title: 'DevOps & Tools', skills: skills.tools }
  ];

  return (
    <section id="skills" aria-label="Technical skills">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-7 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 backdrop-blur-md ">
        <h2 className="text-[6px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 lg:sr-only font-dreams leading-[4]">
          Skills
        </h2>
      </div>

      <div className="space-y-6">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-3">
              {category.title}
            </h3>
            <ul
              className="flex flex-wrap gap-2"
              aria-label={`${category.title} skills`}
            >
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  <div className="flex items-center rounded-full bg-portfolio/10 px-3 py-1.5 text-xs font-medium leading-4 text-portfolio border border-portfolio/20">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
