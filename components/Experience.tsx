import Link from "next/link";
import { experiences } from "@/constants/data";
import ExperienceList from "@/components/ExperienceList";

const HOME_LIMIT = 3;

export default function Experience() {
  return (
    <section id="experience" aria-label="Work experience">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-7 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 backdrop-blur-md ">
        <h2 className="text-[6px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 lg:sr-only font-dreams leading-[4]">
          Experience
        </h2>
      </div>
      <div>
        <ExperienceList items={experiences.slice(0, HOME_LIMIT)} />
        {experiences.length > HOME_LIMIT && (
          <Link
            href="/experience"
            className="group/link inline-flex items-center font-semibold leading-tight text-slate-800 transition-colors hover:text-portfolio focus-visible:text-portfolio dark:text-white"
          >
            View Full Experience
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            >
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </section>
  );
}
