import React from "react";

const Hero = () => {
  return (
    <main className="w-full bg-no-repeat lg:p-32 text-center lg:text-left bg-cover text-white font-mono uppercase background">
      <div className="md:text-7xl text-6xl md:mb-10 pt-20 pb-10 lg:pb-0">
        <div className="font-['oswald']">
          100% <span className="font-bold">natural.</span>
        </div>
        <div className="font-['roboto']">homemade</div>
        <div className="font-['roboto']">fresh cookies.</div>
      </div>
      <button className="lg:px-16 lg:py-2 px-6 py-4 mb-10 bg-white text-black text-4xl uppercase rounded hover:bg-cyan-700 hover:text-white font-['roboto'] font-bold transition-all">
        shop now
      </button>
    </main>
  );
};

export default Hero;
