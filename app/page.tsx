import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { education, experiences, personalInfo, socialLinks } from '@/constants/data';

// Person structured data so search engines can show a proper profile result.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  url: personalInfo.website,
  image: `${personalInfo.website}/og-image.png`,
  description: personalInfo.bio,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
  worksFor: { '@type': 'Organization', name: experiences[0].company },
  alumniOf: { '@type': 'CollegeOrUniversity', name: education.institution },
  sameAs: socialLinks.map((link) => link.url),
  knowsAbout: [
    'React', 'Next.js', 'Node.js', 'GraphQL', 'Angular', 'ASP.NET Core',
    'TypeScript', 'C#', 'Stripe', 'AI-Powered Search', 'Fully Homomorphic Encryption',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navigation />
      <main id="content" className="pt-12 pb-24 lg:w-1/2 lg:py-24 space-y-20 lg:space-y-24">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
