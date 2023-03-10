import React from "react";
import Aside from "../components/aside/Aside";
import Blogs from "../components/blogs/Blogs";

const Home = () => {
  return (
    <>
      <section className="wrapper">
        <Aside />
        {/* posts container  */}
        <Blogs />
        {/* posts container ends */}
      </section>
    </>
  );
};

export default Home;
