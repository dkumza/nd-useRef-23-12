/* eslint-disable react/prop-types */
export const Farm = ({ square, setSquares, historyCounter, history }) => {
   const handleHistory = (value) => {
      console.log(value);
      let newArray = [];
      for (let i = 0; i < value; i++) {
         newArray.push("");
      }

      // const prevSquares = [...square, ...newArray];
      setSquares(newArray);
      localStorage.setItem("squares", JSON.stringify(newArray));
   };
   return (
      <div className="w-full flex">
         <div className="sheep w-full p-4 flex flex-col items-center">
            <h1 className="mb-2">Squares appears here:</h1>
            <div className="sheep-wrap w-full">
               <div className="flex flex-wrap gap-2 justify-center items-center">
                  {square.length > 0 &&
                     square.map((sq, index) => (
                        <div
                           className="w-20 h-20 border border-sky-500 hover:bg-zinc-100"
                           key={index}
                        >
                           {sq}
                        </div>
                     ))}
               </div>
            </div>
         </div>
         <div className="cows w-full p-4 flex flex-col items-center">
            <h1 className="mb-2">History</h1>
            <div className="sheep-wrap w-full">
               <div className="flex flex-col gap-2">
                  {historyCounter.length > 0 &&
                     history.map((history, index) => (
                        <div
                           className="cursor-pointer flex gap-2 items-center hover:font-semibold"
                           key={index}
                           value={history}
                           onClick={() => handleHistory(history)}
                        >
                           Total{" "}
                           <span className="text-sky-600 text-2xl">
                              {history}
                           </span>{" "}
                           squares
                        </div>
                     ))}
               </div>
            </div>
         </div>
      </div>
   );
};
