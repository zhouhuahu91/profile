// NextJs imports
import type { NextPage } from "next";
import Image from "next/image";
// Module imports
import Emoji from "@/components/Emoji";
import getAge from "@/utils/getAgeFunction";

const Home: NextPage = () => {
  const subTitle: string = "font-medium text-gray-400 text-xs uppercase mb-4";

  return (
    <main className="flex flex-col justify-center items-center max-w-screen-xl mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-5xl mb-4 font-normal">Zhouhua Hu</h1>
        <h2 className="text-xl">Front-End Developer</h2>
      </div>
      <div className="flex justify-between items-center flex-col sm:flex-row w-full p-10">
        <div className="flex flex-col w-1/4 space-y-14">
          <div className="flex flex-col">
            <h3 className={subTitle}>About me</h3>
            <p>{`Hello World! My name is Zhouhua Hu and I'm ${getAge(
              "April 28, 1991"
            )} years old. I started programming during the covid 19 pandamic and never stoped.`}</p>
          </div>
          <div className="flex flex-col">
            <h3 className={subTitle}>contact</h3>
            <span>Sassenheim, Nederland</span>
            <a href="mailto:zhouhua.hu@gmail.com">zhouhua.hu@gmail.com</a>
            <a href="tel:+31618030604">+31 6 18 03 06 04</a>
          </div>
        </div>
        <div
          style={{ aspectRatio: "3/4" }}
          className="p-4 sm:p-8 flex max-w-[450px] items-center justify-center rounded-full border w-full"
        >
          <div className="relative flex w-full h-full overflow-hidden rounded-full">
            <Image
              src="/images/profile.JPG"
              alt="Zhouhua Hu"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </div>
        <div className="flex flex-col w-1/4 text-right space-y-14">
          <div className="flex flex-col">
            <h3 className={subTitle}>years of experience</h3>
            <p className="text-5xl font-medium">3</p>
          </div>
          <div className="flex flex-col">
            <h3 className={subTitle}>projects started</h3>
            <p className="text-5xl font-medium">∞</p>
          </div>
          <div className="flex flex-col">
            <h3 className={subTitle}>projects finished</h3>
            <p className="text-5xl font-medium">6</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
