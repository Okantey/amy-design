import React from "react";
import amy from "./assets/image-amy.webp";

const Amy = () => {
  return (
    <section className="lg:grid grid-cols-2 items-center gap-14 px-[10%] py-10">
      <div>
        <img src={amy} alt="amy" className="w-[100%]" />
      </div>
      <div>
        <h1 className="font-semibold text-2xl py-4 md:text-3xl lg:text-4xl">
          I’m Amy, and I’d love to work on your next project
        </h1>
        <p className="text-[#7a746e]">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <button className="bg-[#eb7565] text-white text-sm font-semibold px-6 py-4 my-6 rounded-full">
          Free Consultation
        </button>
      </div>
    </section>
  );
};

export default Amy;
