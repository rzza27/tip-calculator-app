import Header from './components/Header';
import Bill from './components/Bill';
import Total from './components/Total';
import { useState } from 'react';

function App() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState(null);
  const [customTipPercentage, setCustomTipPercentage] = useState('');
  const [numPeople, setNumPeople] = useState('');

  const handleReset = () => {
    setBill('');
    setTipPercentage(null);
    setCustomTipPercentage('');
    setNumPeople('');
  };

  const tipPercentageToUse =
    tipPercentage > 0 ? tipPercentage / 100 : customTipPercentage / 100;

  const tip = (bill * tipPercentageToUse) / numPeople;
  const total = (bill * tipPercentageToUse + bill) / numPeople;

  return (
    <div>
      <Header />
      <div className='bg-white max-w-[850px]  w-full rounded-2xl sm:flex sm:flex-row flex flex-col'>
        <Bill
          bill={bill}
          setBill={setBill}
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
          customTipPercentage={customTipPercentage}
          setCustomTipPercentage={setCustomTipPercentage}
          numPeople={numPeople}
          setNumPeople={setNumPeople}
        />
        <Total onReset={handleReset} tip={tip} total={total} />
      </div>
    </div>
  );
}

export default App;
