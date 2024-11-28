import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  // State for opening text
  const [openingText, setOpeningText] = useState("นี่ก็มาถึงเดือนสุดท้ายของปีแล้วนะ");
  // State for user name input
  const [userName, setUserName] = useState("");
  // State to track if it's the first click
  const [isFirstClick, setIsFirstClick] = useState(true);

  const [bgNumber, setBgNumber] = useState(0);

  const colors = ['#4335A7', '#80C4E9', '#FFF6E9', '#FF7F3E',];
  // Function to change text when the first click happens
  const changeText = () => {
    const text = "สวัดดี คุณชื่ออะไรนะ...?";
    setOpeningText(text);
    setIsFirstClick(false); // Update the click state to false after the first click
  };

  // Handle button click to show alert
  const handleClick = () => {
    setBgNumber(bgNumber + 1)
    setIsFirstClick(prevClick => !prevClick)
    setOpeningText(prevText => prevText + "aabbcc")
  };

  // Set up the event listener for document click
  useEffect(() => {
    console.log("is frist click : ",isFirstClick)
    const handleDocumentClick = () => {
      
      if (isFirstClick) {
        changeText(); // Change text on the first click
      }
    };
 
    // Add event listener for document click
    document.addEventListener('click', handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isFirstClick]); // Dependency array ensures it runs when isFirstClick changes

  useEffect(()=> {
    console.log("Background Number : ",bgNumber)
    setIsFirstClick(true)
  },[bgNumber])
  return (
    <div className="App" style={{ backgroundColor: colors[bgNumber] }}>
      {bgNumber == 0 && (<div className="Main-box">
        <div >{openingText}</div>
        {!isFirstClick && (
          <div>
            <input
              type="text"
              id="name"
              className='Username-input'
              value={userName} // Bind input value to state
              onChange={(e) => setUserName(e.target.value)} // Update state on change
              placeholder="อยากให้เราเรียกคุณว่าอะไร..."
            />
            <button className="Next-button" onClick={handleClick}>ไปต่อ</button>
          </div>
        )}
      </div>)}
      {
        bgNumber == 1 && (<div>{openingText}</div>)
      }
    </div>
  );
}

export default App;
