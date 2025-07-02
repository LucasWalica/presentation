import NavBar from "../components/NavBar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-custom-background text-custom-neonGreen-soft orbitron">
      <NavBar />
      <main className="flex flex-col items-center justify-center px-4 py-10 pt-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-custom-neonGreen">Contact Me</h1>
        <p className="mb-4 text-center max-w-xl">
          Feel free to reach out for collaborations, work or just to say hi!
        </p>

        {/* Contact Info */}
        <div className="mb-8 text-center space-y-2">
          <p><span className="font-semibold text-custom-neonGreen">Email:</span> <a href="mailto:lucawali21@gmail.com" className="underline hover:text-custom-neonGreen-deep">lucawali21@gmail.com</a></p>
          <p><span className="font-semibold text-custom-neonGreen">Phone:</span> +34 677 367 124</p>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/lucawali21@gmail.com"
          method="POST"
          className="w-full max-w-xl bg-custom-softGray p-6 rounded-xl shadow-lg border border-custom-neonGreen space-y-4"
        >
          {/* Anti-spam & redirect (optional) */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://presentation-ashy-nine.vercel.app/thanks" />

          <div className="flex flex-col">
            <label className="mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="p-2 rounded-md bg-transparent border border-custom-neonGreen-soft focus:outline-none focus:ring-2 focus:ring-custom-neonGreen"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="p-2 rounded-md bg-transparent border border-custom-neonGreen-soft focus:outline-none focus:ring-2 focus:ring-custom-neonGreen"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="p-2 rounded-md bg-transparent border border-custom-neonGreen-soft focus:outline-none focus:ring-2 focus:ring-custom-neonGreen"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-neon px-6 py-2 rounded-md hover:bg-custom-neonGreen hover:text-custom-background transition duration-150"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
