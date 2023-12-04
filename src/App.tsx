import React from "react";
import Card from "./components/Card";

const cards = {
  "skoda": {
    price: "5000",
    description: "good car",
  },
  "marcedec": {
    price: "10000",
    description: "good car",
  },
};

const App: React.FC = () => {
  return (
    <div>
      {Object.keys(cards).map((cardName) => {
        const card = cards[cardName as keyof typeof cards]; // явное указание типа ключа
        return (
          <Card
            key={cardName}
            name={cardName}
            price={card.price}
            description={card.description}
          />
        );
      })}
    </div>
  );
};

export default App;
