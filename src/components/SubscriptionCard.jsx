import { Link } from "react-router";

const SubscriptionCard = ({ service }) => {
  const { id, name, category, price, frequency, thumbnail } = service;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure><img src={thumbnail} alt={name} className="h-48 w-full object-cover" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Frequency:</strong> {frequency}</p>
        <div className="card-actions justify-end">
          <Link to={`/service/${id}`}>
            <button className="btn btn-primary">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
