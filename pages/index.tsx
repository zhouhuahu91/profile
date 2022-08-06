// NextJs imports
import type { NextPage } from "next";
// Module imports
import Emoji from "@/components/Emoji";

const Home: NextPage = () => {
  return (
    <div>
      <span className="text-4xl font-bold">hello</span>
      <Emoji symbol="👋" />
    </div>
  );
};

export default Home;
