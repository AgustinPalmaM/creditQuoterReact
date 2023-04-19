import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatMoney, calculateTotalPayment, calculateMonthlyPayment } from "./helpers"

function App() {

  const [quantity, setQuantity] = useState(10000);
  const [paymentsMonths, setPaymentMonths] = useState(12);
  const [totalPayment, setTotalPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const totalPaymentCalculated = calculateTotalPayment(quantity, paymentsMonths);
    setTotalPayment(totalPaymentCalculated)
  },[quantity, paymentsMonths])

  useEffect(() => {
    const monthlyPaymentCalculated = calculateMonthlyPayment(totalPayment, paymentsMonths);
    setMonthlyPayment(monthlyPaymentCalculated);
  },[totalPayment])

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;
  
  function handleChange(e) {
    setQuantity(Number(e.target.value))
  }

  function handleClickDecrement() {
    const value = quantity - STEP;
    value >= MIN ? setQuantity(value) : alert(`Min value is ${MIN}`);
  }

  function handleClickIncrement() {
    const value = quantity + STEP;
    value <= MAX ? setQuantity(value) : alert(`Max value is ${MAX}`);
  }

  function handlePaymentMonths(e) {
    setPaymentMonths(Number(e.target.value))
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex justify-between my-6">
        <Button 
          operator='-'
          fn={handleClickDecrement}
          />
        <Button 
          operator='+'
          fn={handleClickIncrement}
        />  
      </div>
      <input 
        type="range"
        min={MIN}
        max={MAX}
        step={STEP}
        value={quantity}
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600" 
        onChange={ handleChange }
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        { formatMoney(quantity) }
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Choose a <span className="text-indigo-600">payment term</span>.
      </h2>

      <select 
        className="mt-5 w-full p-2 bg-white border-2 border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        name="" 
        id=""
        value={ paymentsMonths }
        onChange={ handlePaymentMonths }
      >
        <option value="6">6 Months</option>
        <option value="12">12 Months</option>
        <option value="24">24 Months</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-100 p-5 rounded">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Summary of the <span className="text-indigo-600">credit simulation</span>
        </h2>

        <h2 className="text-xl text-gray-500 text-center font-bold">{paymentsMonths} Months</h2>
        <h2 className="text-xl text-gray-500 text-center font-bold">Total to pay: {formatMoney(totalPayment)}</h2>
        <h2 className="text-xl text-gray-500 text-center font-bold">Monthly payments: {formatMoney(monthlyPayment)}</h2>
      </div>
    </div>
  );
}

export default App;
