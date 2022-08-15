// NextJs imports
import type { NextPage } from "next";
import Image from "next/image";
// Module imports
import Emoji from "@/components/Emoji";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-5xl mb-4 font-normal">Zhouhua Hu</h1>
        <h2 className="text-xl">Front-End Developer</h2>
      </div>
      <div className="flex justify-between items-center flex-col w-full p-4">
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
        <div
          style={{ aspectRatio: "3/4" }}
          className="p-4 flex max-w-[560px] items-center justify-center rounded-full border w-full"
        >
          <div className="relative flex w-full h-full overflow-hidden rounded-full">
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
