import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-5">
      <div className="min-h-screen absolute flex items-center">
        <div className="flex flex-col gap-5 xl:py-80">
          <h1 className="md:w-2/3 md:text-6xl text-5xl font-secondaryUltraBold tracking-wide leading-[4rem]">
            Trusted Multi-Chain <span className="text-primary">DEX</span>{" "}
            Platform
          </h1>
          <p className="text-2xl lg:w-2/3 font-secondaryRegular text-[#9e9e9e]">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="flex gap-4">
            <Button>Connect Wallet</Button>
            <Button variant={"outline"}>Trade Crypto</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
