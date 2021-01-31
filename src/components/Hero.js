import React from 'react';
import HeroImg from '../images/hero.svg';
import HeroImgMobile from '../images/hero_mobile.svg';

const Hero = () => {
  return (
    <div>
      <img
        className="hidden md:block absolute bg-cover bg-local w-screen bg-top -z-10 resize-none"
        src={HeroImg}
        alt="A bunch of cute citrus characters residing in a makeshift shop in a bright and cheery field with a rainbow"
      />
      <img
        className="md:hidden absolute bg-cover bg-local w-screen bg-top -z-10 resize-none"
        src={HeroImgMobile}
        alt="A bunch of cute citrus characters residing in a makeshift shop in a bright and cheery field with a rainbow"
      />
      
      <div className="hidden md:block flex flex-col w-full md:w-3/5 justify-center items-start md:text-left md:px-12 md:pt-40 lg:px-24 lg:pt-72 no-underline">
        <h1 className="font-display md:text-5xl text-orange text-stroke-2">
          Buy and sell WebXR ad slots on Zesty Market
        </h1>
        <br/>
        <div className="flex flex-row w-full">
          {/* <button class="bg-orange hover:bg-dark-orange hover:shadow-lg shadow-md text-white text-2xl font-semibold mt-7 mr-5 py-3 px-8 rounded-full">
            Launch App
          </button> */}
          <button class="bg-leaf-green hover:bg-dark-leaf-green hover:shadow-lg shadow-md text-white text-2xl font-semibold mr-5 mt-7 py-3 px-8 rounded-full">
            <a href="https://docs.zesty.market">
              Learn More
            </a>
          </button>
        </div>
      </div>
      <div className="md:hidden flex flex-col w-full justify-center items-start text-center items-center pt-52 no-underline">
        <h1 className="font-display text-4xl text-orange text-stroke-2">
          Buy and sell WebXR ad slots on <br/> Zesty Market
        </h1>
        {/* <button class="bg-orange hover:bg-dark-orange hover:shadow-lg shadow-md text-white text-2xl font-semibold mt-7 py-4 px-8 rounded-full">
          Launch App
        </button> */}
        <button class="bg-leaf-green hover:bg-dark-leaf-green hover:shadow-lg shadow-md text-white text-2xl font-semibold mt-7 py-4 px-8 rounded-full">
          <a href="https://docs.zesty.market">
            Learn More
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero;