import React from "react";
import { Link } from "react-router";

const SubscriptionCard = ({ service }) => {
  const {id, name, frequency, price, shortDescription, category, thumbnail } =
    service;
  const rating = (
    <>
      <svg
        aria-hidden="true"
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    </>
  );

  return (
    <div className="relative flex w-full flex-col justify-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="w-full object-cover shadow-sm"
          src={thumbnail}
          alt="product image"
        />
      </a>
      <div className="mt-4 px-5 pb-5">
        <div className="flex justify-between items-center pb-3">
          <h5 className="text-xl font-semibold text-slate-900">{name}</h5>
          <p className="btn btn-md">{category}</p>
        </div>
        <p className="pb-2">{shortDescription}</p>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p className="pb-2">
            <span className="text-3xl font-bold text-slate-900">{price}</span>
            <span className="text-sm text-slate-900"> / {frequency}</span>
          </p>
          <div className="flex items-center">
            {rating}
            {rating}
            {rating}
            {rating}
            {rating}
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
          </div>
        </div>
        <Link
          to={`/box-details/${id}`}
          className="flex items-center justify-center rounded-md bg-violet-600 px-5 py-4 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionCard;
