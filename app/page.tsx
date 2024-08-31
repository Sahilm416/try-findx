export default function Home() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-center md:p-24 sm:p-10 p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="w-full max-w-6xl bg-zinc-900 shadow-lg rounded-lg md:p-16 p-10 flex flex-col gap-10 border border-[#ff371a]">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider">
            Welcome to <span className="text-[#ff371a]">Find-X Trial</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl">
            Explore the cutting-edge features of Find-X in this trial environment. Here, we test and refine new functionalities to ensure the best performance before rolling out updates to the main platform.
          </p>
        </header>

        {/* Features Section */}
        <section className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-zinc-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#ff371a]">Why This Trial?</h3>
            <p className="mt-4 text-gray-300">
              The trial project is designed to rigorously evaluate new updates in a controlled environment. This ensures that when features go live, they are robust and reliable, delivering a seamless experience.
            </p>
          </div>
          <div className="flex-1 bg-zinc-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#ff371a]">Get Involved</h3>
            <p className="mt-4 text-gray-300">
              Found a bug or want to share your feedback? We're all ears! Your input helps us improve. Contact us at{" "}
              <a
                className="text-blue-400 hover:underline"
                href="mailto:findx.org@gmail.com"
              >
                find-x.
              </a>
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-10">
          <h3 className="text-3xl font-semibold">
            Ask Find-X AI about{" "}
            <a
              href="https://docs.supergood.ai/"
              className="underline text-[#ff371a]"
            >
              Supergood.ai
            </a>
          </h3>
          <p className="mt-4 text-gray-400 text-lg">
            Get answers to your questions in real-time. Explore the capabilities of our AI in this safe testing ground.
          </p>
        </section>

        {/* Start Section */}
        <section className="flex items-center justify-center mt-10">
          <button className="bg-[#ff371a] hover:bg-[#e6361a] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
            Get Started
          </button>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="mt-10 text-center text-gray-500 text-sm">
        Press{" "}
        <kbd className="border border-gray-600 p-2 rounded-md bg-gray-800 mx-2">
          Ctrl + K
        </kbd>{" "}
        to begin or click the sparkle ✨ icon at the bottom of the screen.
      </footer>
    </main>
  );
}
