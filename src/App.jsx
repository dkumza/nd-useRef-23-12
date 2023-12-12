import { useState, useEffect, useRef } from "react";

import "./App.css";
import { AddButton } from "./components/AddButton";
import { Farm } from "./components/Farm";

function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
let counter = 0;

function App() {
   const [squares, setSquares] = useState(
      JSON.parse(localStorage.getItem("squares")) || []
   );

   const [history, setHistory] = useState([]);

   const historyCounter = useRef([]);

   const addSquares = (square) => {
      let howManySq = rand(5, 20);
      historyCounter.current = [...historyCounter.current, howManySq];
      counter += howManySq;
      setHistory([...history, counter]);
      console.log(history);
      let newArray = [];
      for (let i = 0; i < howManySq; i++) {
         newArray.push("");
      }

      const prevSquares = [...squares, ...newArray];
      setSquares(prevSquares);
      localStorage.setItem(square, JSON.stringify(prevSquares));
   };

   const handleUndo = () => {
      let newArray = [];
      if (historyCounter.current.length <= 0) return; //if empty - stop

      const lasHistoryEle =
         historyCounter.current[historyCounter.current.length - 1]; // gets last value from array
      historyCounter.current.pop(); //removes last value from array
      newArray = squares.slice(0, -lasHistoryEle);
      setSquares(() => [...newArray]);
      setHistory(history.slice(0, -1));
      localStorage.setItem("squares", JSON.stringify(newArray));
   };

   const handleReset = () => {
      localStorage.clear("square");
      setSquares([]);
      historyCounter.current = [];
   };

   return (
      <div className="container mx-auto my-12 p-4  md:w-4/6 flex flex-col justify-center items-center">
         <div className="flex gap-4">
            <AddButton
               onClick={() => {
                  addSquares("squares");
               }}
               addBtnText="Add SQ"
               color="bg-gradient-to-r from-cyan-500 to-blue-500" // for add
               // color="bg-gradient-to-br from-green-400 to-blue-600" // for edit
               // color="bg-gradient-to-br from-pink-500 to-orange-400" // for delete
            />
            <AddButton
               onClick={handleUndo}
               addBtnText="Undo"
               color="bg-gradient-to-br from-green-500 to-lime-400" // for edit
            />
            <AddButton
               addBtnText="Reset"
               onClick={handleReset}
               color="bg-gradient-to-br from-pink-500 to-orange-400"
            />
         </div>
         <Farm
            square={squares}
            setSquares={setSquares}
            historyCounter={historyCounter.current}
            history={history}
         />
      </div>
   );
}

export default App;
