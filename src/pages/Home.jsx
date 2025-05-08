import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import SubscriptionCard from "../components/SubscriptionCard";
import FAQ from "../components/FAQ";
import Benifits from "../components/Benifits";

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
      <div className="my-24 mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Our Subscription Boxes
        </h1>
        <p className="text-center">
          Get fresh, seasonal vegetables delivered to your door every month.
          Enjoy healthy eating made easy straight from the farm to your table.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <SubscriptionCard key={service.id} service={service} />
        ))}
      </div>
      <Benifits></Benifits>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
