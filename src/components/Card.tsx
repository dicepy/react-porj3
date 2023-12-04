import React from "react";
import classes from './Card.module.css';

interface CardProps {
  name: string;
  price: string;
  description: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { name, price, description } = props;

  return (
    <div className={classes.container}>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Card;
