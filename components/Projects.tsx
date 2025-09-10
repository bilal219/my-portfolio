import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/constants/data';

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" aria-label="Selected projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-7 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 backdrop-blur-md ">
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
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                          </svg>
                        </span>
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-normal font-helvetica text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-4">
                    {project.demo && (
                      <a
                        className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-portfolio focus-visible:text-portfolio transition-colors"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`View ${project.title} live demo (opens in a new tab)`}
                      >
                        <svg
                          className="mr-1 h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
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
              View Full{" "}
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