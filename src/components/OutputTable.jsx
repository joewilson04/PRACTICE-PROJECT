import UserInput from "./UserInput"
import { calculateInvestmentResults, formatter } from "../util/investment"
import { useState } from "react"


export default function Output({results}) {
    const resultsData = calculateInvestmentResults(results);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

        return <>

            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment value</th>
                        <th>Interest</th>
                        <th>Total interest</th>
                        <th>Invested capital</th>
                    </tr>    
                </thead>
                <tbody>
                    {resultsData.map((year => {
                        const totalInterest = year.valueEndOfYear - year.annualInvestment * year.year - initialInvestment
                        const totalInvested = year.valueEndOfYear - totalInterest

                        return (
                            <tr key={year.year}>
                                <td>{year.year}</td>
                                <td>{formatter.format(year.valueEndOfYear)}</td>
                                <td>{formatter.format(year.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalInvested)}</td>
                            </tr>
                                );
                            }))}
                </tbody>
            </table>
        </>
}

