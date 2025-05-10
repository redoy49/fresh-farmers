import React, { useState } from "react";
import { RiStarSFill } from "react-icons/ri";

const ReviewRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState("");
  const [reviewList, setReviewList] = useState([]);

  const handleReview = () => {
    if (rating < 1) return;

    const newReview = { rating, message };
    setReviewList([...reviewList, newReview]);
    setMessage("");
    setRating(0);
  };

  return (
    <div className="flex flex-col p-8 border border-slate-200 rounded-xl lg:p-12">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl text-center font-semibold">
          Write Your Reviwe
        </h2>
        <div className="flex flex-col items-center space-y-3 py-6">
          <span className="text-center">How was your experience?</span>
          <div className="flex space-x-3">
            {[1, 2, 3, 4, 5].map((reviewStar) => (
              <button
                key={reviewStar}
                type="button"
                onClick={() => setRating(reviewStar)}
                onMouseLeave={() => setHover(0)}
                onMouseEnter={() => setHover(reviewStar)}
              >
                <RiStarSFill
                  size={40}
                  color={(hover || rating) >= reviewStar ? "orange" : "gray"}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <textarea
            rows="8"
            placeholder="Write Your Reveiw..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-4 rounded-md border border-slate-200"
          ></textarea>
          <button
            type="button"
            onClick={handleReview}
            className="py-4 my-8 font-semibold text-white rounded-md bg-violet-600"
          >
            Submit Your Review
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {reviewList.map((singleReview, i) => (
          <div
            key={i}
            className="bg-slate-100 rounded-lg p-8 text-center w-full md:w-1/3"
          >
            <p className="font-bold uppercase">Anonymous User</p>
            <p className="text-xl text-gray-700 mt-2">{singleReview.message}</p>
            <div className="flex items-center justify-center space-x-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <RiStarSFill
                  key={i}
                  className={`w-5 h-5 ${
                    i < singleReview.rating
                      ? "text-yellow-600"
                      : "text-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewRating;
