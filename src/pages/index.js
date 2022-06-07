import Image from "next/image";
import HeadComponent from "../components/Head";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  return (
    <div className="bg-red-400 w-full h-screen flex items-center justify-center">
      <HeadComponent />
      <div className="flex p-5 flex-col text-center">
        <header className="">
          <p className="text-white font-bold text-5xl">
            {" "}
            😳 Amaru's Emoji Store 😈
          </p>
          <p className="text-white pt-2 text-lg">
            The only emoji store that accepts sh*tcoins
          </p>
        </header>

        <main className="flex justify-center">
          <div className="relative h-60 mt-5">
            <img
              className="w-full h-full top-0"
              src="https://media.giphy.com/media/VF65SrQlmClUc/giphy.gif"
              allowFullScreen
              alt="emoji"
            />
          </div>
        </main>

        <div className="flex items-center justify-center pt-10">
          <img alt="Twitter Logo" className="h-8" src="twitter-logo.svg" />
          <a
            className="text-white font-semibold"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
