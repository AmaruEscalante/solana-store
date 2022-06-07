import HeadComponent from "../components/Head";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const { publicKey } = useWallet();

  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">
      <HeadComponent />
      <div className="flex p-5 flex-col text-center">
        <header className="">
          <p className="text-white font-bold text-5xl">
            {" "}
            🔮 Magic Traces Store 🧙‍♂️
          </p>
          <p className="text-white pt-2 text-lg">
            The only store that takes a sh*t trace and converts it to a
            beautiful illustration.
          </p>
        </header>

        <main className="flex justify-center flex-col">
          <div className="relative w-80 mt-5 self-center">
            <img
              className="w-full h-full top-0"
              src="https://media.giphy.com/media/VF65SrQlmClUc/giphy.gif"
              allowFullScreen
              alt="emoji"
            />
          </div>

          <div className="flex justify-center items-center pt-5">
            <WalletMultiButton className="h-10 border-0 px-10 rounded-md text-md cursor-pointer font-bold text-white bg-gradient-to-r from-[#ff8867] to-[#ff52ff] ease-linear" />
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
