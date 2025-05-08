import React from "react";
import fruits from "../assets/fruits.jpg";
import { CiCircleCheck } from "react-icons/ci";

const Benifits = () => {
  return (
    <div className="my-24">
      <div className="md:flex justify-center items-center gap-6">
        <div className="md:w-1/3">
          <img className="w-full h-96 object-fill" src={fruits} alt="" />
        </div>
        <div className="md:w-1/2 p-2 flex-1">
          <h2 className="text-4xl font-bold mb-6">
            The FreshFarmers Member Benifits
          </h2>
          <p className="text-slate-600 mb-6">
            Our monthly vegetable delivery brings you the freshest, in-season
            produce straight from local farms to your doorstep. It’s a simple,
            healthy, and sustainable way to enjoy nutritious meals without the
            hassle of shopping or compromising on quality.
          </p>
          <div className="text-slate-600 space-y-1 mb-6">
            <p className="flex items-center gap-1">
              <CiCircleCheck className="text-black" size={18} />
              Fresh, seasonal produce every month
            </p>
            <p className="flex items-center gap-1">
              <CiCircleCheck className="text-black" size={18} />
              Convenient home delivery
            </p>
            <p className="flex items-center gap-1">
              <CiCircleCheck className="text-black" size={18} />
              Supports local farmers and sustainable practices
            </p>
            <p className="flex items-center gap-1">
              <CiCircleCheck className="text-black" size={18} />
              Encourages healthier eating habits
            </p>
            <p className="flex items-center gap-1">
              <CiCircleCheck className="text-black" size={18} />
              Saves time and reduces food waste
            </p>
          </div>
          <button className="btn rounded-full bg-violet-600 p-6 text-white">
            Get Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
