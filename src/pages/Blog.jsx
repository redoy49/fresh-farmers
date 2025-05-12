import React, { useEffect } from "react";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";
import blog7 from "../assets/blog7.jpg";
import blog8 from "../assets/blog8.jpg";

const Blog = () => {
  useEffect(() => {
    document.title = "Blogs";
  }, []);

  return (
    <div>
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">FreshFarmers Blog Post</h2>
            <p className="font-serif text-sm dark:text-gray-600">
              All necessary blog you got here.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col dark:bg-gray-50">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={blog1}
              />
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  10 Super Vegetables You Should Be Eating Daily
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  From spinach to sweet potatoes, these nutrient-packed
                  vegetables daily.
                </a>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={blog2}
              />
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Eating Locally in Winter: the Challenges and Rewards
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  As the frost sets in and the days grow shorter, our food
                  choices begin.
                </a>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>June 5, 2020</span>
                  <span>3.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={blog3}
              />
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  How Central Fruits Ensures Freshness for Wholesale
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  In today’s fast-paced world, quality and freshness are often
                  sacrificed.
                </a>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>June 19, 2020</span>
                  <span>5.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={blog4}
              />
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Recipes for tomatoes, storing and freezing
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  As September paints the landscape with shades of autumn,
                  season tomato.
                </a>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>June 3, 2020</span>
                  <span>8.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={blog5}
              />
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  The best of the season Ripen fruits best fruits.
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  As the sun shines brighter, the days grow longer, and gorgeous
                  fruits start to ripen
                </a>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>June 20, 2020</span>
                  <span>1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={blog6}
              />
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  BBQ tricks For the best tasting veggies
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  With the British weather becoming drier and sunnier, it’s safe
                  to eating.
                </a>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={blog7}
              />
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Buying Fruit and Vegetables of season best.
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  In the wake of the pandemic we’ve witnessed more and more
                  businesses.
                </a>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>June 8, 2020</span>
                  <span>2K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50">
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={blog8}
              />
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Tips on Keeping Fruit and Vegetables for eating.
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  Buying locally sourced, organic fruit and vegetables is an
                  excellent.
                </a>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>June 5, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
