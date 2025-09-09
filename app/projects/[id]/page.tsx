import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/constants/data";
import { Timeline } from "@/components/ui/Timeline";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
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
    title: `${project.title} | Muhammad Bilal Yousaf - Full Stack Developer`,
    description: `${project.description} Built with ${project.technologies
      .slice(0, 3)
      .join(
        ", "
      )}. View detailed project timeline and technical implementation.`,
    keywords: [
      "Muhammad Bilal Yousaf",
      "Full Stack Developer",
      "Portfolio Project",
      project.title,
      ...project.technologies,
      project.company || "",
      "Web Development",
      "Software Engineer",
    ]
      .filter(Boolean)
      .join(", "),
    openGraph: {
      title: `${project.title} | Muhammad Bilal Yousaf`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 600,
          alt: project.title,
        },
      ],
      type: "website",
      siteName: "Muhammad Bilal Yousaf Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Muhammad Bilal Yousaf`,
      description: project.description,
      images: [project.image],
    },
    alternates: {
      canonical: `/projects/${id}`,
    },
  };
}

async function getProject(id: string) {
  const project = projects.find((p) => p.id === id);
  return project || null;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
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
              jobTitle: "Full Stack Developer",
              url: "https://bilal-yousaf-portfolio.vercel.app",
            },
            dateCreated: project.year,
            image: project.image,
            url: project.demo,
            keywords: project.technologies.join(", "),
            programmingLanguage: project.technologies,
          }),
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl  md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:py-24">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-portfolio transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-400 hover:text-portfolio transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li
                className="text-slate-800 dark:text-slate-200"
                aria-current="page"
              >
                {project.title}
              </li>
            </ol>
          </nav>

          {/* Back Link */}
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
              className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Muhammad Bilal Yousaf
          </Link>

          {/* Project Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-5xl">
                {project.title}
              </h1>
              {project.company && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-portfolio/10 text-portfolio border border-portfolio/20">
                  {project.company}
                </span>
              )}
            </div>

            {project.year && (
              <div className="flex items-center gap-2 mb-6">
                <time className="text-slate-600 dark:text-slate-400 font-medium">
                  {project.year}
                </time>
              </div>
            )}

            <p className="mt-6 text-xl leading-normal text-slate-700 dark:text-slate-300 max-w-3xl">
              {project.description}
            </p>

            {/* Action Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              {project.github && (
                <a
                  className="inline-flex items-center rounded-full bg-portfolio/10 px-6 py-3 text-sm font-medium text-portfolio hover:bg-portfolio/20 transition-all duration-200 border border-portfolio/20 hover:border-portfolio/40"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Source Code
                </a>
              )}
              {project.demo && (
                <a
                  className="inline-flex items-center rounded-full bg-slate-200 dark:bg-slate-800 px-6 py-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-200 border border-slate-300 dark:border-slate-600"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Visit ${project.title} live website (opens in a new tab)`}
                >
                  <svg
                    className="mr-2 h-4 w-4"
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
                  Visit Live Site
                </a>
              )}
            </div>
          </header>

          {/* Project Image */}
          <div className="mt-12 mb-12">
            <Image
              alt={`${project.title} - ${project.description}`}
              loading="lazy"
              width="1200"
              height="600"
              decoding="async"
              className="rounded-lg border-2 border-slate-200/10 shadow-2xl w-full"
              src={project.image}
              priority={false}
            />
          </div>

          {/* Technologies Section */}
          <section
            className="mt-12 mb-12"
            aria-labelledby="technologies-heading"
          >
            <h2
              id="technologies-heading"
              className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200 mb-6"
            >
              Technologies & Tools
            </h2>
            <ul
              className="flex flex-wrap gap-3"
              aria-label="Technologies used in this project"
            >
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <div className="flex items-center rounded-full bg-portfolio/10 px-4 py-2 text-sm font-medium leading-5 text-portfolio border border-portfolio/20">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Development Timeline */}
          {project.timeline && project.timeline.length > 0 && (
            <section className="mt-12 mb-12" aria-labelledby="timeline-heading">
              <h2
                id="timeline-heading"
                className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200 mb-6"
              >
                Development Timeline
              </h2>
              <div className="p-0 md:p-8">
                <Timeline
                  items={project.timeline.map((item) => ({
                    ...item,
                    type: "project" as const,
                  }))}
                />
              </div>
            </section>
          )}

          {/* Project Details */}
          <section className="mt-12" aria-labelledby="details-heading">
            <h2
              id="details-heading"
              className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200 mb-6"
            >
              Project Overview
            </h2>
            <div className="prose prose-slate prose-invert max-w-none p-0 md:p-8">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                This project represents a comprehensive solution built with
                modern web development practices, focusing on performance,
                scalability, and user experience. The implementation
                demonstrates expertise in full-stack development and adherence
                to industry best practices.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">
                Key Features
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-portfolio rounded-full mt-2.5 mr-3"></span>
                  <span>
                    Responsive design optimized for all device types and screen
                    sizes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-portfolio rounded-full mt-2.5 mr-3"></span>
                  <span>
                    Modern, accessible user interface following WCAG guidelines
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-portfolio rounded-full mt-2.5 mr-3"></span>
                  <span>
                    Performance optimizations for fast loading and smooth
                    interactions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-portfolio rounded-full mt-2.5 mr-3"></span>
                  <span>
                    Scalable architecture supporting future feature additions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-portfolio rounded-full mt-2.5 mr-3"></span>
                  <span>
                    Integration with modern development tools and CI/CD
                    workflows
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">
                Technical Implementation
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                The project showcases advanced problem-solving skills and
                technical expertise through careful selection of technologies,
                implementation of best practices, and attention to detail in
                both frontend and backend development. The solution demonstrates
                proficiency in modern web development frameworks, database
                design, API development, and deployment strategies.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
