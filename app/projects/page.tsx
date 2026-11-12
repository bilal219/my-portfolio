import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/data";
import TiltCard from "@/components/ui/TiltCard";

export const metadata: Metadata = {
  title: "Projects | Muhammad Bilal Yousaf - Full Stack Software Engineer",
  description:
    "Production projects by Muhammad Bilal Yousaf: secure storage, AI search, Stripe billing, and SaaS platforms built with React, Next.js, and Node.js.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl pb-24 pt-8 lg:py-24">
      <Link
        href="/#projects"
        className="group mb-6 inline-flex items-center text-sm font-semibold text-portfolio transition-colors hover:text-slate-700 dark:hover:text-slate-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1.5 h-4 w-4 transition-transform group-hover:-translate-x-1"
          aria-hidden="true"
        >
          <path d="M19 12H5m7 7-7-7 7-7" />
        </svg>
        Muhammad Bilal Yousaf
      </Link>

      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
        Projects
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Products I&apos;ve built or worked on, from client websites to SaaS
        platforms used by thousands of people.
      </p>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <TiltCard self max={7} className="h-full rounded-2xl">
            <Link
              href={`/projects/${project.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/60 transition hover:border-portfolio/40 hover:shadow-xl hover:shadow-portfolio/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio motion-reduce:transition-none dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 dark:border-slate-800">
                <Image
                  src={project.screenshot ?? project.image}
                  alt={project.screenshot ? `${project.title} screenshot` : `${project.title} logo`}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {[project.company, project.year].filter(Boolean).join(" · ") || project.role}
                </p>
                <h2 className="mt-1 font-semibold text-slate-900 transition-colors group-hover:text-portfolio dark:text-slate-100">
                  {project.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-4" aria-label="Technologies used">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-portfolio/10 px-2.5 py-1 text-xs font-medium text-portfolio"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
            </TiltCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
