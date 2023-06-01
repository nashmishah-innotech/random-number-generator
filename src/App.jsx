import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [createdNumber, createdNumberSet] = useState([]);
  const [randomNumber, randomNumberSet] = useState(0);
  const [generatingNumber, generatingNumberSet] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  let randomNumber2 = 0;
  let testGeneratingNumber = false;
  const numberOfParticipants = 5;

  // const newInterval = setInterval(() => {
  //   randomNumber2 = Math.ceil(Math.random() * numberOfParticipants);
  //   // console.log(randomNumber2);
  // }, 1000);
  var newInterval;

  const generateNumber = () => {
    testGeneratingNumber = !generatingNumber;
    // console.log(testGeneratingNumber);

    // Loop to show fancy number looping
    const showLooping = () => {
      if (createdNumber.length === numberOfParticipants) {
        randomNumberSet("No more numbers");
      } else {
        newInterval = setInterval(() => {
          randomNumber2 = Math.ceil(Math.random() * numberOfParticipants);
          randomNumberSet(randomNumber2);
          // console.log("Test");
        }, 20);
        // console.log(newInterval);
        setIntervalId(newInterval);
        // clearInterval(newInterval);
      }
    };

    // Select a number
    const setNumber = () => {
      // console.log(intervalId);
      clearInterval(intervalId);
      let randomNumber = Math.ceil(Math.random() * numberOfParticipants);

      if (createdNumber.length === 0) {
        randomNumberSet(randomNumber);
        createdNumberSet([randomNumber]);
      } else if (createdNumber.length === numberOfParticipants) {
        randomNumberSet("No more numbers");
      } else {
        let diffNumber = false;
        while (diffNumber === false) {
          randomNumberSet(randomNumber);
          randomNumber = Math.ceil(Math.random() * numberOfParticipants);
          const sameNumber = createdNumber.includes(randomNumber);
          console.log(`Existing: ${createdNumber}`);
          console.log(`New: ${randomNumber}`);
          diffNumber = !sameNumber;
        }
        randomNumberSet(randomNumber);
        createdNumberSet([...createdNumber, randomNumber]);
      }
    };

    if (testGeneratingNumber) {
      showLooping();
      generatingNumberSet(!generatingNumber);
    } else if (!testGeneratingNumber) {
      // showLooping();
      setNumber();
      generatingNumberSet(!generatingNumber);
    }

    // console.log(testGeneratingNumber);
  };
  return (
    <>
      <h1>{randomNumber}</h1>
      <button onClick={generateNumber}>Generate Number</button>
    </>
  );
}

export default App;
