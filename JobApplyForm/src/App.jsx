import { useState, useEffect } from "react";
import "./App.css";
import Page1 from "./components/Page1/Page1.jsx";
import Page2 from "./components/Page2/Page2.jsx";
import Page3 from "./components/Page3/Page3.jsx";
import Page4 from "./components/Page4/Page4.jsx";
import Page5 from "./components/Page5/Page5.jsx";
import Page6 from "./components/Page6/Page6.jsx";
function App() {
  const [firstPageData, setFirstPageData] = useState({});
  const [secondPageData, setSecondPageData] = useState({});
  const [thirdPageData, setThirdPageData] = useState({});
  const [fourthPageData, setFourthPageData] = useState({});
  const [fifthPageData, setFifthPageData] = useState({});
  const handleChildDataOne = (data) => {
    setFirstPageData(data);
  };
  const handleChildDataTwo = (data) => {
    setSecondPageData(data);
  };
  const handleChildDataThree = (data) => {
    setThirdPageData(data);
  };
  const handleChildDataFour = (data) => {
    setFourthPageData(data);
  };
  const handleChildDataFive = (data) => {
    setFifthPageData(data);
  };
  useEffect(() => {
    console.log("Parent Page- 1", firstPageData);
    console.log("Parent Page- 2", secondPageData);
    console.log("Parent Page- 3", thirdPageData);
    console.log("Parent Page- 4", fourthPageData);
    console.log("Parent Page- 5", fifthPageData);
  }, [firstPageData, secondPageData, thirdPageData, fourthPageData, fifthPageData]);
  return (
    <>
      <Page1 handleChildDataOne={handleChildDataOne} />
      <Page2 handleChildDataTwo={handleChildDataTwo} />
      <Page3 handleChildDataThree={handleChildDataThree} />
      <Page4 handleChildDataFour={handleChildDataFour} />
      <Page5 handleChildDataFive={handleChildDataFive} />
      <Page6 />
    </>
  );
}

export default App;
