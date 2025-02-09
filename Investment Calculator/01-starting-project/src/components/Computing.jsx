import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Computing({ User }) {
  const data = calculateInvestmentResults(User);
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
  console.log(data);

  return (
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d.year}>
            <td>{d.year}</td>
            <td>{formatter.format(d.valueEndOfYear)}</td>
            <td>{formatter.format(d.interest)}</td>
            <td>
              {formatter.format(
                d.valueEndOfYear -
                  d.annualInvestment * d.year -
                  initialInvestment
              )}
            </td>
            <td>
              {formatter.format(
                d.valueEndOfYear -
                  (d.valueEndOfYear -
                    d.annualInvestment * d.year -
                    initialInvestment)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
