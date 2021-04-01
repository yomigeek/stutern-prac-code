import React, {useState} from "react";
import Button from "../Button";
import SimpleForm from './../SimpleForm';


const Welcome = ({studentName}) => {
  const clickMe = () => {
    console.log("You just clicked me!");
    alert("You clicked me!");
  };
  const [count, setCount] = useState(10);
  const [showInfo, setShowInfo] = useState(false);
  const [buttonInfo, setButtonInfo] = useState("Show Details");

  const updateComicDisplay = () => {
    setShowInfo(!showInfo);
    showInfo ? setButtonInfo("Show Details") : setButtonInfo("Hide Details");
  };

  return (
    <div className="App">
      Hello {studentName}, My State: {count}
      <br />
      <Button text={"Log Out!"} buttonAction={clickMe} />
      <Button
        text={"Update Count"}
        cssClass="Button-secondary"
        buttonAction={() => setCount(count + 1)}
      />
      <div style={{textAlign: "center"}}>
        <br />
        {/* <img
          src="https://res.cloudinary.com/kugoo/image/upload/v1614255294/tests/madara.jpg"
          alt="image"
          width="170px"
          height="300px"
        />
        {showInfo && <h5>Uchiha Madara</h5>}
        <br />
        <Button
          text={buttonInfo}
          cssClass="Button-secondary"
          buttonAction={updateComicDisplay}
        /> */}
        <SimpleForm />
      </div>
    </div>
  );
};

export default Welcome;
