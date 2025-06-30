import React from "react";

const Image = () => {
  return (
    <div class="relative  mx-auto">
      <div class="absolute inset-0 rounded-full p-4 animate-spin-slow"></div>

      <div className="p-4 w-[310px] h-[318px] md:w-[380px] md:h-[386px] bg-transparent rounded-full border-2 border-cyan-300 ">
        <img
          src="my-photo.JPEG"
          alt=""
          class="w-[280px] md:w-[350px] md:h-[350px] h-[280px] border-2 border-cyan-300 object-cover rounded-full z-10 relative "
        />
      </div>
    </div>
  );
};

export default Image;
