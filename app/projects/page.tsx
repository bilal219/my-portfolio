import { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/constants/data";

export const metadata: Metadata = {
  title: "All Projects - Muhammad Bilal Yousaf",
  description:
    "A collection of projects showcasing frontend development expertise and modern web technologies.",
};

export default function ProjectsPage() {
  return (
    <div
      className="mx-auto min-h-screen max-w-screen-xl 
      md:px-12 md:py-20 lg:px-24 lg:py-0"
    >
      <div className="lg:py-24">
        <Link
          href="/"
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-portfolio hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
          Muhammad Bilal Yousaf
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-5xl">
          All Projects
        </h1>

        <div className="mt-12">
          <table className="mt-12 w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-slate-200 dark:border-slate-300/10 px-6 py-5">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Year
                </th>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Project
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-800 dark:text-slate-200 lg:table-cell">
                  Built with
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-800 dark:text-slate-200 sm:table-cell">
                  Links
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-slate-200 dark:border-slate-300/10 last:border-none"
                >
                  <td className="py-4 pr-4 align-top text-sm">
                    <div className="translate-y-px">2024</div>
                  </td>
                  <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-800 dark:text-slate-200">
                    <div>
                      <div className="block sm:hidden">
                        <Link
                          className="inline-flex items-baseline font-medium leading-tight text-slate-800 dark:text-slate-200 hover:text-portfolio focus-visible:text-portfolio"
                          href={`/projects/${project.id}`}
                          aria-label={`${project.title} (view project details)`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            {project.title}
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
                        </Link>
                      </div>
                      <div className="hidden sm:block">
                        <Link
                          className="inline-flex items-baseline font-medium leading-tight text-slate-800 dark:text-slate-200 hover:text-portfolio focus-visible:text-portfolio"
                          href={`/projects/${project.id}`}
                        >
                          {project.title}
                        </Link>
                      </div>
                      <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">
                        {project.description}
                      </p>
                      <ul
                        className="mt-2 flex flex-wrap sm:hidden"
                        aria-label="Technologies used"
                      >
                        {project.technologies.slice(0, 3).map((tech) => (
                          <li key={tech} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-portfolio/10 px-3 py-1 text-xs font-medium leading-5 text-portfolio">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td className="hidden py-4 pr-4 align-top lg:table-cell">
                    <ul className="flex -translate-y-1.5 flex-wrap">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-portfolio/10 px-3 py-1 text-xs font-medium leading-5 text-portfolio">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="hidden py-4 align-top sm:table-cell">
                    <ul className="translate-y-1">
                      {project.demo && (
                        <li className="mb-1 flex items-center">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-600 dark:text-slate-400 hover:text-portfolio focus-visible:text-portfolio"
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${project.title} live demo (opens in a new tab)`}
                          >
                            <span>
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
                              Demo
                            </span>
                          </a>
                        </li>
                      )}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
