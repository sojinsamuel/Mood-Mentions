export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 -mb-8">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg font-bold">2023 Showwcase Hackfest Project</p>
        <div className="flex mt-4">
          <a
            href="https://www.showwcase.com/show/35240/mood-mentions-the-happiest-and-saddest-moments-that-happened-in-showwcase"
            className="text-gray-400 hover:text-white mr-4 transition duration-300"
            target="_blank"
          >
            Show
          </a>
          <a
            href="https://www.showwcase.com/sojinsamuel"
            className="text-gray-400 hover:text-white transition duration-300"
            target="_blank"
          >
            Profile
          </a>
        </div>
      </div>
    </footer>
  );
}
