import React from 'react';

function Card({ data }) {
  return (
    <div className="card">
      <img src={data.imageUrl} alt={data.name} className="card-img" />
      <h3>{data.name}</h3>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <small>⭐ {data.rating} ({data.reviews} reviews)</small>
    </div>
  );
}

export default Card;
