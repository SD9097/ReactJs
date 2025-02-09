import React from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
import { use } from "react";
import Computing from "./components/Computing.jsx";

function App() {
  const [userDetails, setUserDetails] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userDetails.duration >= 1;

  function handleUserInformation(i, a, e, d) {
    setUserDetails((prevUserDetails) => {
      return {
        ...prevUserDetails,
        initialInvestment: +i,
        annualInvestment: +a,
        expectedReturn: +e,
        duration: +d,
      };
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput
        userDetail={userDetails}
        setUserInfo={handleUserInformation}
      ></UserInput>
      {!inputIsValid && <p>Please Enter duration greater than 0.</p>}
      {inputIsValid && <Computing User={userDetails}></Computing>}
    </>
  );
}

export default App;
