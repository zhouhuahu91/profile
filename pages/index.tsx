// NextJs imports
import type { NextPage } from "next";
import Image from "next/image";
// Module imports
import Emoji from "@/components/Emoji";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center mt-20 max-w-screen-2xl mx-auto">
      <div className="text-center">
        <h1 className="text-7xl mb-4">Zhouhua Hu</h1>
        <h2 className="text-4xl">Front-End Developer</h2>
      </div>
      <div className="flex w-full justify-between items-center flex-col">
        {/* <div className="flex flex-col w-1/4 space-y-14">
          <div className="flex flex-col">
            <h3 className="font-medium text-gray-400 text-xs uppercase mb-4">
              About me
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              accusamus deserunt voluptatem quos eveniet optio ex, a dolorum
              reprehenderit adipisci cum est numquam aperiam beatae sit animi
              officiis voluptatum iste.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-medium text-gray-400 text-xs uppercase mb-4">
              contact
            </h3>
            <span>Sassenheim, Nederland</span>
            <a href="mailto:zhouhua.hu@gmail.com">zhouhua.hu@gmail.com</a>
            <a href="tel:+31618030604">+31 6 18 03 06 04</a>
          </div>
        </div> */}
        <div className="p-8 flex items-center justify-center rounded-full border my-16">
          <div className="relative w-full max-w-[560px] h-full max-h-[750px] overflow-hidden rounded-full">
            <Image
              src="/images/profile.JPG"
              alt="Zhouhua Hu"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {/* <div className="flex flex-col w-1/4">
          <h3>About me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            accusamus deserunt voluptatem quos eveniet optio ex, a dolorum
            reprehenderit adipisci cum est numquam aperiam beatae sit animi
            officiis voluptatum iste.
          </p>
        </div> */}
      </div>
    </main>
  );
};

export default Home;
