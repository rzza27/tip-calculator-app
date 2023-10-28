/* eslint-disable react/prop-types */
const Total = ({ onReset, tip, total }) => {
 

  return (
    <div className='bg-veryDarkCyan flex flex-col justify-between mx-auto my-8 sm:p-8 py-8 px-6 w-[90%] rounded-lg sm:m-6'>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <p className='text-lightGrayishCyan'>Tip Amount</p>
            <span className='text-darkGrayishCyan'>/ person</span>
          </div>
          <p className='text-4xl text-strongCyan'>${tip > 0 ? (tip < Infinity ? tip.toFixed(2) : '0.00') : '0.00'}</p>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <div className='flex flex-col'>
            <p className='text-lightGrayishCyan'>Total</p>
            <span className='text-darkGrayishCyan'>/ person</span>
          </div>
          <p className='text-4xl text-strongCyan'>${total > 0 ? (total < Infinity ? total.toFixed(2) : '0.00') : '0.00'}</p>
        </div>
      </div>
      <button onClick={onReset} className='p-2 bg-strongCyan text-veryDarkCyan w-full rounded-md mt-8 transition-all hover:bg-lightGrayishCyan'>
        RESET
      </button>
    </div>
  );
};

export default Total;
