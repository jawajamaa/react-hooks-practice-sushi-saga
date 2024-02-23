import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import MoreMoney from "./MoreMoney";

const API = "http://localhost:3001/sushis";

function App() {
  const[sushi, setSushi] = useState([]);
  const[money, setMoney] = useState(100);
  const[emptyPlates, setEmptyPlates] = useState([]);

  function onEat(item) {
    if (item.eaten || money < item.price) {
      return;
    }
    setMoney(money - item.price);
    item.eaten = true;
    setSushi(sushi);
    setEmptyPlates([...emptyPlates, item]);
  }

  function moreMoney() {
    setMoney(money + 100);
  }

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(setSushi)
  }, [])

  return (
    <>
    <div className="app">
      <SushiContainer
        sushi = { sushi } 
        onEat = { onEat }
        />
      <Table money = { money } plates = { emptyPlates } />
    </div>
    <MoreMoney onClick = { moreMoney }/>
    </>
  );
}

export default App;
