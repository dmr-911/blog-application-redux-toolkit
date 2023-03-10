import React from "react";
import Aside from "../components/aside/Aside";
import Posts from "../components/posts/Posts";

const Home = () => {
  return (
    <>
      <section className="wrapper">
        <Aside />
        {/* posts container  */}
        <Posts />
        {/* posts container ends */}
      </section>
    </>
  );
};

export default Home;
