import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Output from "./components/OutputTable";
import { calculateInvestmentResults } from "./util/investment";
import { useState, useEffect } from "react";


export const INVESTMENT_PARAMETERS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 1
}



function App() {
  const [results, setResults] = useState(INVESTMENT_PARAMETERS)
  //setResults(calculateInvestmentResults(inputValues))

  useEffect(()=> {
    console.log("change", results)
    console.log(calculateInvestmentResults(results))
  },[results])


const validInput = results.duration >= 1;


  return <>
    <Header/>
    <UserInput results={results} setResults={setResults}/>
    {!validInput && <p className="center">Please enter a year greater than zero</p>}
    {validInput && <Output results={results}/>}
  </>;
}

export default App
