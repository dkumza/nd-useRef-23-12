/* eslint-disable react/prop-types */
export const AddButton = ({ onClick, addBtnText, color }) => {
   return (
      <div>
         <button
            onClick={onClick}
            type="button"
            className={`${color} w-48 text-white hover:bg-gradient-to-bl focus:ring-2 focus:outline-none font-semibold rounded-lg text-lg px-8 py-2.5 text-center`}
         >
            {addBtnText}
         </button>
      </div>
   );
};
