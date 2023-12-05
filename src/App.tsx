import React from "react";
import Cards from "./components/Card/Cards";
import Header from "./components/Header/Header";



const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <Cards/>
    </div>
  );
};

export default App;
