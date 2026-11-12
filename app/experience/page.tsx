import { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/constants/data";
import ExperienceList from "@/components/ExperienceList";

export const metadata: Metadata = {
  title: "Experience | Muhammad Bilal Yousaf - Full Stack Software Engineer",
  description:
    "Full work history of Muhammad Bilal Yousaf: EAS Solution, Crewlogix Technologies, GTek Solutions, and Technic Mentors.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto w-full max-w-3xl pb-24 pt-8 lg:py-24">
      <Link
        href="/#experience"
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
        Experience
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        4+ years building production software, from a Laravel POS rewrite to
        AI-powered search and encrypted storage.
      </p>

      <div className="mt-14">
        <ExperienceList items={experiences} />
      </div>
    </div>
  );
}
