export default function About() {
  return (
    <section id="about" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-7 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 bg-white/85 backdrop-blur-md dark:bg-slate-950/80 lg:bg-transparent lg:backdrop-blur-none">
        <h2 className="text-[6px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 lg:sr-only font-dreams leading-[4]">
          About
        </h2>
      </div>
      <div className="font-helvetica relative space-y-4 text-slate-700 dark:text-slate-300">
        <p>
          I&apos;m a{" "}
          <strong className="text-slate-900 dark:text-slate-100">
            Full Stack Software Engineer
          </strong>{" "}
          with{" "}
          <strong className="text-slate-900 dark:text-slate-100">
            4+ years of experience
          </strong>{" "}
          building production SaaS applications with{" "}
          <span className="text-portfolio font-medium">
            React, Next.js, Node.js, and GraphQL
          </span>
          , and more recently{" "}
          <span className="text-portfolio font-medium">
            Angular and ASP.NET Core
          </span>
          .
        </p>
        <p>
          My strongest work is in{" "}
          <span className="text-portfolio font-medium">
            AI-powered search, secure file storage, and Stripe billing
          </span>
          . I&apos;ve led frontend development on client projects, built a
          module used by 10K+ families from scratch, and added Fully
          Homomorphic Encryption to a storage product.
        </p>
        <p>
          I&apos;m comfortable in a 5–6 person team or working solo, and I like
          owning a feature from the database all the way to the UI.
        </p>
      </div>
    </section>
  );
}
