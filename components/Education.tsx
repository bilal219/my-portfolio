import { education } from '@/constants/data';

export default function Education() {
  return (
    <section id="education" aria-label="Education">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 backdrop-blur-md bg-portfolio/10 border-b border-portfolio/20">
        <h2 className="text-[6px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 lg:sr-only font-dreams leading-[4]">
          Education
        </h2>
      </div>
      <div>
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"></div>
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:col-span-2" aria-label={education.period}>
            {education.period}
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-800 dark:text-slate-100">
              <div>
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>{education.degree}</span>
              </div>
            </h3>
            <h4 className="mt-1 text-sm font-medium leading-normal text-portfolio">
              {education.institution}
            </h4>
            <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-300">
              Located in {education.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}