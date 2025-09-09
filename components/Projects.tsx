import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/constants/data';

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" aria-label="Selected projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 backdrop-blur-md bg-portfolio/10 border-b border-portfolio/20">
        <h2 className="text-[6px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 lg:sr-only font-dreams leading-[4]">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {featuredProjects.map((project) => (
            <li key={project.id} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <Link
                      className="inline-flex items-baseline font-medium text-slate-800 dark:text-slate-800 dark:text-white hover:text-portfolio focus-visible:text-portfolio group/link font-sans leading-normal text-xl transition-colors"
                      href={`/projects/${project.id}`}
                      aria-label={`${project.title} (view project details)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}
                        <span className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              d="M5 12h14m-7-7 7 7-7 7"
                            />
                          </svg>
                        </span>
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-normal font-helvetica text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-4">
                    {project.github && (
                      <a
                        className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-portfolio focus-visible:text-portfolio transition-colors"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
                      >
                        <svg className="mr-1 h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-portfolio focus-visible:text-portfolio transition-colors"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`View ${project.title} live demo (opens in a new tab)`}
                      >
                        <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-portfolio/10 px-3 py-1 text-xs font-medium leading-5 text-portfolio">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <Image
                  alt={project.title}
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  className="rounded border-2 border-slate-300/30 dark:border-slate-200/10 transition group-hover:border-slate-400/50 dark:group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src={project.image}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            className="inline-flex items-center font-medium leading-tight text-slate-800 dark:text-slate-800 dark:text-white hover:text-portfolio focus-visible:text-portfolio font-semibold group/link text-base transition-colors"
            href="/projects"
            aria-label="View all projects"
          >
            <span>
              View Full{' '}
              <span className="inline-block">
                Project Archive
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 12h14m-7-7 7 7-7 7"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}