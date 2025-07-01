import NavBar from "../components/NavBar";

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-custom-background text-custom-neonGreen-soft orbitron">
      <NavBar />
      <main className="flex flex-col items-center justify-center pt-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-custom-neonGreen mb-6 animate-fade-in-down">
          Thank You!
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl animate-fade-in-down delay-100">
          Your message has been sent successfully. I’ll get back to you as soon as possible.
        </p>
        <a
          href="/"
          className="btn-neon px-6 py-3 rounded-lg transition duration-200 hover:bg-custom-neonGreen hover:text-custom-background"
        >
          Back to Home
        </a>
      </main>
    </div>
  );
}
