import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className="min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row md:flex-col items-center justify-between md:pt-25 pt-35">
        {/* Left Content */}
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
            Export Best Quality...
          </span>

          <h1 className="md:text-7xl text-5xl/14 leading-tight font-bold mt-4">
            Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span>
            <br /> In Your City
          </h1>

          <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>

          <Button content="Shop Now" />
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img src={Grocery} alt="Hero" className="w-[500px] object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
