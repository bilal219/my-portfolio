import BackgroundCanvas from "./BackgroundCanvas";

// Static gradients render on the server; the WebGL particle field is loaded
// later on the client and skipped for reduced-motion visitors.
export default function AnimatedSphereBackground() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      {/* Light mode background */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background: `radial-gradient(ellipse at 15% 15%, var(--color-bg-light-start) 60%, var(--color-bg-light-end) 100%)`,
        }}
      />

      {/* Dark mode background */}
      <div className="absolute inset-0 hidden dark:block bg-black" />

      {/* Dark mode spotlight */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: `
            radial-gradient(circle at 30% 40%, rgba(53, 167, 255, 0.15) 0%, transparent 65%),
            radial-gradient(circle at 70% 60%, rgba(53, 167, 255, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)
          `,
        }}
      />

      <BackgroundCanvas />
    </div>
  );
}
