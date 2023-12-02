import HomeView from "@/features/product/_components/Home";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 xl:px-[300px] lg:px-[150px]">
      <HomeView></HomeView>
    </div>
  );
};

export default Home;
