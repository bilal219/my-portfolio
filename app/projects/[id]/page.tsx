import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/constants/data";
import { Timeline } from "@/components/ui/Timeline";
import ProjectShowcase from "@/components/ProjectShowcase";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

const SITE_URL = "https://muhammad-bilal-yousaf.vercel.app";

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Muhammad Bilal Yousaf - Full Stack Software Engineer`,
    description: project.description,
    keywords: [
      "Muhammad Bilal Yousaf",
      "Full Stack Software Engineer",
      project.title,
      ...project.technologies,
      project.company ?? "",
    ]
      .filter(Boolean)
      .join(", "),
    openGraph: {
      title: `${project.title} | Muhammad Bilal Yousaf`,
      description: project.description,
      images: [
        project.screenshot
          ? { url: project.screenshot, width: 1440, height: 900, alt: project.title }
          : { url: project.image, width: 1200, height: 750, alt: project.title },
      ],
      type: "website",
      siteName: "Muhammad Bilal Yousaf Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Muhammad Bilal Yousaf`,
      description: project.description,
      images: [project.screenshot ?? project.image],
    },
    alternates: { canonical: `/projects/${id}` },
  };
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-portfolio"
    >
      {children}
    </h2>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Role", value: project.role },
    project.company && { label: "Company", value: project.company },
    project.year && { label: "Timeline", value: project.year },
    { label: "Stack", value: project.technologies.slice(0, 3).join(", ") },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            author: {
              "@type": "Person",
              name: "Muhammad Bilal Yousaf",
              jobTitle: "Full Stack Software Engineer",
              url: SITE_URL,
            },
            image: `${SITE_URL}${project.screenshot ?? project.image}`,
            url: project.demo,
            keywords: project.technologies.join(", "),
          }),
        }}
      />

      <article className="mx-auto w-full max-w-4xl pb-24 pt-8 lg:py-24">
        {/* Breadcrumb */}
        <nav className="mb-10" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link href="/" className="hover:text-portfolio transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/projects" className="hover:text-portfolio transition-colors">
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-800 dark:text-slate-200" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header>
          <p className="mb-3 text-sm font-medium text-portfolio">Case study</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Visit the ${project.title} website (opens in a new tab)`}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-portfolio px-6 text-sm font-semibold text-white shadow-lg shadow-portfolio/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio"
              >
                Visit live site
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            )}
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 px-6 text-sm font-semibold text-slate-700 transition hover:border-portfolio hover:text-portfolio dark:border-slate-700 dark:text-slate-200"
            >
              All projects
            </Link>
          </div>
        </header>

        {/* Key facts */}
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-white/80 p-5 dark:bg-slate-900/80">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-slate-900 dark:text-slate-100">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Cover: screenshot that turns into an interactive 3D laptop */}
        <ProjectShowcase
          src={project.screenshot ?? project.image}
          alt={project.screenshot ? `${project.title} screenshot` : `${project.title} logo`}
        />

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-10 grid gap-4 sm:grid-cols-3" aria-label="Project highlights">
            {project.highlights.map((h) => (
              <li
                key={h.label}
                className="rounded-2xl border border-portfolio/20 bg-portfolio/5 p-5"
              >
                <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  {h.value}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{h.label}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_16rem]">
          <div className="space-y-16">
            <section aria-labelledby="overview-heading">
              <SectionHeading id="overview-heading">Overview</SectionHeading>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {project.overview}
              </p>
            </section>

            <section aria-labelledby="built-heading">
              <SectionHeading id="built-heading">What I built</SectionHeading>
              <ul className="space-y-4">
                {project.contributions.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700 dark:text-slate-300">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-portfolio"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {project.timeline && project.timeline.length > 0 && (
              <section aria-labelledby="timeline-heading">
                <SectionHeading id="timeline-heading">Timeline</SectionHeading>
                <Timeline
                  items={project.timeline.map((item) => ({ ...item, type: "project" as const }))}
                />
              </section>
            )}
          </div>

          <aside aria-labelledby="stack-heading" className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading id="stack-heading">Tech stack</SectionHeading>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-portfolio/20 bg-portfolio/10 px-3 py-1.5 text-xs font-medium text-portfolio"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Prev / next */}
        <nav
          aria-label="More projects"
          className="mt-20 grid gap-4 border-t border-slate-200 pt-10 dark:border-slate-800 sm:grid-cols-2"
        >
          {[
            { p: prev, label: "Previous project", align: "" },
            { p: next, label: "Next project", align: "sm:text-right" },
          ].map(({ p, label, align }) => (
            <Link
              key={label}
              href={`/projects/${p.id}`}
              className={`group rounded-2xl border border-slate-200 p-5 transition hover:border-portfolio/50 hover:bg-portfolio/5 dark:border-slate-800 ${align}`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {label}
              </span>
              <span className="mt-1 block font-semibold text-slate-900 transition-colors group-hover:text-portfolio dark:text-slate-100">
                {p.title}
              </span>
            </Link>
          ))}
        </nav>
      </article>
    </>
  );
}
