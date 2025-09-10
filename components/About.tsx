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
          I&apos;m a dedicated Full Stack Developer with{" "}
          <strong className="text-slate-900 dark:text-slate-100">
            3+ years of professional experience
          </strong>{" "}
          specializing in building scalable SaaS applications. My journey began
          as an intern at{" "}
          <a
            className="font-medium text-slate-800 dark:text-slate-100 hover:text-portfolio focus-visible:text-portfolio transition-colors duration-200"
            href="https://pos.technicmentors.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Technic Mentors (opens in a new tab)"
          >
            Technic Mentors
          </a>
          , where I rapidly advanced to junior developer while contributing to a
          comprehensive POS system. Currently serving as a{" "}
          <strong className="text-slate-900 dark:text-slate-100">
            Full Stack Software Engineer at GTek Solutions
          </strong>
          , I develop enterprise-grade solutions for diverse industries
          including{" "}
          <a
            className="font-medium text-slate-800 dark:text-slate-200 hover:text-portfolio focus-visible:text-portfolio transition-colors duration-200"
            href="https://fbresearch.org/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="biomedical research (opens in a new tab)"
          >
            biomedical research
          </a>
          ,{" "}
          <a
            className="font-medium text-slate-800 dark:text-slate-200 hover:text-portfolio focus-visible:text-portfolio transition-colors duration-200"
            href="https://app.homeschoolpanda.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="educational technology (opens in a new tab)"
          >
            educational technology
          </a>
          , and{" "}
          <a
            className="font-medium text-slate-800 dark:text-slate-200 hover:text-portfolio focus-visible:text-portfolio transition-colors duration-200"
            href="https://www.newwavecarwash.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="service automation (opens in a new tab)"
          >
            service automation
          </a>
          .
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          My expertise spans the entire development lifecycle using modern
          technologies including{" "}
          <span className="text-portfolio font-medium">
            Next.js, React, Node.js, Express, MongoDB, and advanced state
            management with Recoil
          </span>
          . I specialize in{" "}
          <span className="text-portfolio font-medium">
            Stripe payment integration
          </span>
          , authentication systems, REST APIs, GraphQL, and creating responsive
          UIs with{" "}
          <span className="text-portfolio font-medium">
            Tailwind CSS and SASS
          </span>
          . I&apos;m passionate about writing clean, efficient code and
          delivering high-impact projects that solve real-world problems. When
          I&apos;m not coding, I&apos;m exploring new technologies and eager to
          learn emerging trends in web development.
        </p>
      </div>
    </section>
  );
}
