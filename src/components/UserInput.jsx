import { useState } from "react";





export default function UserInput({results, setResults}) {
    
    
    

    function handleInput(event, key) {
        setResults(prev => {
            return {...prev,[key]:Number(event.target.value)}
        })
        
    }

   
    const [investmentResults, setInvestmentResults] = useState()

  

    return <div id="user-input" className="input-group">
        <table>
            <tbody>
                <tr>
                    <td>
                        <label>Initial investment</label>
                        <input type="number" required value={results.initialInvestment} onChange={e => handleInput(e, "initialInvestment")} />  
                    </td>
                    
                    <td>
                        <label>Annual investment</label>
                        <input type="number" required value={results.annualInvestment} onChange={e => handleInput(e, "annualInvestment")}/>  
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Expected return</label>
                        <input type="number" required value={results.expectedReturn} onChange={e => handleInput(e, "expectedReturn")}/>  
                    </td>
                    <td>
                        <label>Duration</label>
                        <input type="number" required value={results.duration} onChange={e => handleInput(e, "duration")}/>  
                    </td>
                </tr>
            </tbody>
        </table>

    </div>;
}