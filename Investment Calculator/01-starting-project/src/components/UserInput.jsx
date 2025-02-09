import React from "react";
import { useState } from "react";

export default function UserInput({ userDetail, setUserInfo }) {
  const [initialInput, setInitialInput] = useState(
    userDetail.initialInvestment
  );
  const [annualInvestmentInput, setannualInvestmentInput] = useState(
    userDetail.annualInvestment
  );
  const [expectedReturnInput, setexpectedReturnInput] = useState(
    userDetail.expectedReturn
  );
  const [durationInput, setDurationInput] = useState(userDetail.duration);

  function handleInitialInvestmentInput(event) {
    setInitialInput(event.target.value);
    setUserInfo(
      event.target.value,
      annualInvestmentInput,
      expectedReturnInput,
      durationInput
    );
  }

  function handleannualInvestmentInput(event) {
    setannualInvestmentInput(event.target.value);
    setUserInfo(
      initialInput,
      event.target.value,
      expectedReturnInput,
      durationInput
    );
  }

  function handleexpectedReturnInput(event) {
    setexpectedReturnInput(event.target.value);
    setUserInfo(
      initialInput,
      annualInvestmentInput,
      event.target.value,
      durationInput
    );
  }

  function handledurationInput(event) {
    setDurationInput(event.target.value);
    setUserInfo(
      initialInput,
      annualInvestmentInput,
      expectedReturnInput,
      event.target.value
    );
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={initialInput}
            onChange={handleInitialInvestmentInput}
            required
          ></input>
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={annualInvestmentInput}
            onChange={handleannualInvestmentInput}
            required
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={expectedReturnInput}
            onChange={handleexpectedReturnInput}
            required
          ></input>
        </p>

        <p>
          <label>Duration</label>
          <input
            type="number"
            value={durationInput}
            onChange={handledurationInput}
            required
          ></input>
        </p>
      </div>
    </section>
  );
}
