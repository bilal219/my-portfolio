import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12  md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:py-24">
        <Link
          href="/"
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
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
            <path
              d="M5 12h14m-7-7 7 7-7 7"
            />
          </svg>
          Muhammad Bilal Yousaf
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          404: Project Not Found
        </h1>

        <p className="mt-6 text-xl leading-normal">
          The project you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-12">
          <Link
            className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
            href="/projects"
            aria-label="View all projects"
          >
            <span>
              View All{" "}
              <span className="inline-block">
                Projects
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
    </div>
  );
}
