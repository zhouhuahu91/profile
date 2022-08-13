// NextJs imports
import type { NextPage } from "next";
import Image from "next/image";
// Module imports
import Emoji from "@/components/Emoji";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="text-center">
        <h1 className="text-7xl mb-4">Zhouhua Hu</h1>
        <h2 className="text-4xl">Front-End Developer</h2>
      </div>
      <div className="p-8 flex items-center justify-center rounded-full border my-16">
        <div className="relative w-[450px] h-[600px] overflow-hidden rounded-full">
          <Image
            src="/images/profile.JPG"
            alt="Zhouhua Hu"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
