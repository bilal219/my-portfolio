export default function About() {
  return (
    <section id="about" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-7 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 backdrop-blur-md ">
        <h2 className="text-[6px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 lg:sr-only font-dreams leading-[4]">
          About
        </h2>
      </div>
      <div className="font-helvetica relative">
        <p className="mb-6 text-slate-700 dark:text-slate-300">
          <strong className="text-slate-900 dark:text-slate-100">
            Full-Stack Developer
          </strong>{" "}
          with{" "}
          <strong className="text-slate-900 dark:text-slate-100">
            3+ years of experience
          </strong>{" "}
          delivering scalable SaaS applications using{" "}
          <span className="text-portfolio font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>
          . Skilled in{" "}
          <span className="text-portfolio font-medium">
            secure storage, AI-powered search, and Stripe payment systems
          </span>
          . Experienced in{" "}
          <span className="text-portfolio font-medium">
            Vue.js, Strapi, GraphQL, and AWS
          </span>
          . Strong focus on building{" "}
          <strong className="text-slate-900 dark:text-slate-100">
            maintainable, high-performance solutions
          </strong>{" "}
          and collaborating effectively with clients and cross-functional teams.
        </p>
      </div>
    </section>
  );
}
