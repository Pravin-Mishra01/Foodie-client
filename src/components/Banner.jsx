import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* images */}
        <div className="md:w-1/2">
          <img
            src="https://th-i.thgim.com/public/news/national/t7lify/article66409093.ece/alternates/FREE_1200/Fried%20food%20and%20aerated%20drinks.jpg"
            alt=""
          />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-64">
              <img
                src="/images/home/b-food1.png"
                alt=""
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5>Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
                <p className="text-red">Rs 18.00</p>
              </div>
            </div>
            <div className="bg-white px-3 py-2 rounded-2xl md:flex items-center gap-3 shadow-sm w-64 hidden">
              <img
                src="/images/home/b-food1.png"
                alt=""
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5>Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
                <p className="text-red">Rs 18.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* texts */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text:4xl font-bold md:leading-snug leading-snug ">
            Dive into Delights Of Delectable{" "}
            <span className="text-blue">Food</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl">
            Welcome to the World of Tasty and Fresh Food
          </p>
          <button className="bg-blue font-semibold btn text-white px-8 py-3 rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
