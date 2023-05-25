export default function Header() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-500 py-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-10">
            Happy and Sad Moments in Showwcase
          </h1>
          <p className="text-xl mb-12">
            Sharing beautiful moments, stories, and experiences in the Showwcase
            developer community.
          </p>
          <a
            href="https://www.showwcase.com?referralToken=y5fv3zfb8ka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-500 py-4 px-10 rounded-lg shadow-lg text-xl font-bold hover:bg-opacity-75 transition duration-300"
          >
            Sign up to Showwcase
          </a>
        </div>
      </div>
    </section>
  );
}
