import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import SubscriptionCard from "../components/SubscriptionCard";
import FAQ from "../components/FAQ";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/subscription.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Slider></Slider>
      {/* <SubscriptionCard></SubscriptionCard> */}
      <h1 className="text-3xl font-bold mb-6 text-center my-24">
        Our Subscription Boxes
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <SubscriptionCard key={service.id} service={service} />
        ))}
      </div>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
