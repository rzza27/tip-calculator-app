/* eslint-disable react/prop-types */
const Bill = ({
  bill,
  setBill,
  tipPercentage,
  setTipPercentage,
  customTipPercentage,
  setCustomTipPercentage,
  numPeople,
  setNumPeople,
}) => {
  return (
    <div className='p-6'>
      <div className='flex flex-col'>
        <label className='text-darkGrayishCyan'>Bill</label>
        <input
          type='text'
          placeholder='0'
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className='mt-2 bg-veryLightGrayishCyan p-2 rounded-md 
          border-2
          text-right text-veryDarkCyan input-bill focus-visible:border-strongCyan 
           hover:border-strongCyan'
        />
      </div>
      <div className='mt-6'>
        <h3 className='text-grayishCyan'>Select Tip %</h3>
        <div className='bill-percentage mt-2 grid md:grid-cols-3 grid-cols-2 gap-4'>
          <label>
            <input
              type='radio'
              name='bill-percentage'
              value='5'
              checked={tipPercentage === '5'}
              onChange={(e) => setTipPercentage(e.target.value)}
            />
            <span>5%</span>
          </label>
          <label>
            <input
              type='radio'
              name='bill-percentage'
              value='10'
              checked={tipPercentage === '10'}
              onChange={(e) => setTipPercentage(e.target.value)}
            />
            <span>10%</span>
          </label>
          <label>
            <input
              type='radio'
              name='bill-percentage'
              value='15'
              checked={tipPercentage === '15'}
              onChange={(e) => setTipPercentage(e.target.value)}
            />
            <span>15%</span>
          </label>
          <label>
            <input
              type='radio'
              name='bill-percentage'
              value='25'
              checked={tipPercentage === '25'}
              onChange={(e) => setTipPercentage(e.target.value)}
            />
            <span>25%</span>
          </label>
          <label>
            <input
              type='radio'
              name='bill-percentage'
              value='50'
              checked={tipPercentage === '50'}
              onChange={(e) => setTipPercentage(e.target.value)}
            />
            <span>50%</span>
          </label>
          <label>
            <input
              type='text'
              name='bill-percentage'
              placeholder='Custom'
              value={customTipPercentage}
              onChange={(e) => setCustomTipPercentage(Number(e.target.value))}
              className='p-[12px] text-right placeholder:text-center w-full outline-none border-2 text-veryDarkCyan focus-within:border-strongCyan rounded-[10px] hover:border-strongCyan
            '
            />
          </label>
        </div>
      </div>
      <div className='flex flex-col  mt-6'>
        <div className='flex justify-between'>
          <label className='text-grayishCyan'>Number of People</label>
          {numPeople ===0 ? <span className='text-red-500'>Cannot be zero</span> : ''}
        </div>

        <input
          type='text'
          placeholder='0'
          value={numPeople}
          onChange={(e) => setNumPeople(Number(e.target.value))}
          className={`mt-2 bg-veryLightGrayishCyan p-2 rounded-md text-right input-number-people focus-visible:border-strongCyan ${numPeople === 0 ? `border-red-500` : ''}  text-veryDarkCyan
           border-2 hover:border-strongCyan`}
        />
      </div>
    </div>
  );
};

export default Bill;
