import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/constants/data";

type Experience = (typeof experiences)[number];

export default function ExperienceList({
  items,
  maxTech,
}: {
  items: Experience[];
  /** Show at most this many technology chips, then a "+N more" chip */
  maxTech?: number;
}) {
  return (
    <ol className="group/list">
      {items.map((experience) => (
        <li key={experience.id} className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 lg:dark:group-hover:bg-slate-800/50"></div>
            <header
              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:col-span-2"
              aria-label={experience.period}
            >
              {experience.period}
            </header>
            <div className="z-10 sm:col-span-6">
              <Link
                href={`/experience/${experience.id}`}
                className="group/link flex items-start gap-4"
                aria-label={`${experience.position} at ${experience.company} (view details)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <Image
                  src={experience.logo}
                  alt=""
                  width={44}
                  height={44}
                  className="mt-0.5 h-11 w-11 flex-shrink-0 rounded-xl border border-slate-200 object-cover shadow-sm dark:border-slate-700"
                />
                <div>
                  <h3 className="font-medium leading-snug text-slate-800 transition-colors group-hover/link:text-portfolio dark:text-slate-100">
                    {experience.position}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium leading-normal text-portfolio">
                    {experience.company}
                    <span className="font-normal text-slate-500 dark:text-slate-400">
                      {" "}· {experience.location}
                    </span>
                  </p>
                </div>
              </Link>
              <p className="mt-3 text-sm leading-normal font-helvetica text-slate-600 dark:text-slate-400">
                {experience.description}
              </p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {(maxTech ? experience.technologies.slice(0, maxTech) : experience.technologies).map((tech) => (
                  <li key={tech} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-portfolio/10 px-3 py-1 text-xs font-medium leading-5 text-portfolio">
                      {tech}
                    </div>
                  </li>
                ))}
                {maxTech && experience.technologies.length > maxTech && (
                  <li className="mr-1.5 mt-2">
                    <span
                      className="flex items-center rounded-full border border-slate-300 px-3 py-1 text-xs font-medium leading-5 text-slate-500 dark:border-slate-700 dark:text-slate-400"
                      title={experience.technologies.slice(maxTech).join(", ")}
                    >
                      +{experience.technologies.length - maxTech} more
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
