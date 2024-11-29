import './App.css';
import React, { useEffect, useState } from 'react';

// Component to render a button with text
function FirstPage({ text, onClick }) {
  return (
    <button className="First-page" onClick={onClick}>
      <div className="Main-box">
        {text}
      </div>
    </button>
  );
}

function App() {
  // States
  const [openingText, setOpeningText] = useState("นี่ก็มาถึงเดือนสุดท้ายของปีแล้วนะ");
  const [userName, setUserName] = useState(""); // User name input state
  const [isFirstClick, setIsFirstClick] = useState(true); // To track the first click
  const [bgIndex, setBgIndex] = useState(0); // Background color index
  const [pageIndex, setPageIndex] = useState(0); // Background color index


  const colors = ['#4335A7', '#80C4E9', '#FFF6E9', '#FF7F3E']; // Background colors

  // Function to handle background change and text update
  const handleButtonClick = () => {
    // setBgIndex((prevIndex) => (prevIndex + 1) % colors.length);
    setPageIndex((prevIndex) => (prevIndex + 1)); // First click is done
    setOpeningText((prevText) => prevText + " test..."); // Append "test..." to the text
  };

  const handleNextButton = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  useEffect(() => {
    console.log("Background Index: ", bgIndex);
    setIsFirstClick(true); // Reset first click state when bgIndex changes
  }, [bgIndex, pageIndex]);

  return (
    <div className="App" style={{ backgroundColor: colors[bgIndex] }}>
      {bgIndex === 0 && (
        <>
          {pageIndex === 0 ? (
            <FirstPage text={openingText} onClick={handleButtonClick} />) :
            <div className="Main-box">
              <div className='background-color'>
                สวัสดี คุณชื่ออะไรนะ...?
              </div>
              <input
                type="text"
                className="Username-input"
                value={userName} // Bind input value to state
                onChange={(e) => setUserName(e.target.value)} // Update state on change
                placeholder="อยากให้เราเรียกคุณว่าอะไร..."
              />
              <button className="Next-button" onClick={handleNextButton}>
                ไปต่อ
              </button>
            </div>
          }
        </>
      )}
      {bgIndex === 1 && (
        <></>
      )}
    </div>
  );
}

export default App;
