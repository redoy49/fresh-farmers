import React, { useEffect, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router";
import ReviewRating from "../components/ReviewRating";

const BoxDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [box, setBox] = useState({});
  console.log(id);
  console.log(box);

  useEffect(() => {
    const boxDetails = data.find((singleBox) => singleBox.id == id);
    setBox(boxDetails);
    document.title = "Box Details";
  }, [data, id]);

  return (
    <div className="my-24">
      <div className="md:flex justify-center items-center p-2 gap-6 mb-14">
        <div className="md:w-1/2">
          <img
            className="w-full object-cover md:h-[480px] mb-4"
            src={box.thumbnail}
            alt=""
          />
        </div>
        <div className="md:w-1/2 p-2 flex-1">
          <h2 className="text-4xl font-bold mb-6">{box.name}</h2>
          <div className="flex gap-4">
            <h2 className="text-xl font-bold mb-6">{box.category}: </h2>
            <p className="text-slate-600 text-lg mb-6">
              {box.shortDescription}
            </p>
          </div>
          <p className="text-slate-600 text-xl font-bold mb-6">
            {box.price} / {box.frequency}
          </p>
          <div className="flex gap-4">
            <div className="text-lg font-bold">Box Features :</div>
            <div className="text-slate-600 space-y-1 mb-6">
              {box.features?.map((feature, index) => (
                <p key={index} className="flex items-center mt-1 gap-1">
                  <CiCircleCheck className="text-black" size={18} />
                  {feature}
                </p>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <p className="text-lg font-bold">Items Include: </p>
            <div className="text-slate-600 space-y-1 mb-6">
              {box.includeItems?.map((items, index) => (
                <p key={index} className="flex items-center mt-1 gap-1">
                  <CiCircleCheck className="text-black" size={18} />
                  {items}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ReviewRating></ReviewRating>
    </div>
  );
};

export default BoxDetails;
