import './App.css';
import React, { useEffect, useState } from 'react';

// Components
const FirstPage = ({ text, onClick }) => (
  <button className="First-page" onClick={onClick}>
    <div className="Main-box">{text}</div>
  </button>
);

const NextButton = ({pageIndex, handleNextButton}) => (
  <button className="Next-button" onClick={handleNextButton}>
    ไปต่อ
  </button>
);

const SecondPage = ({ text, pageIndex, onClick }) => (
  <button className="First-page" onClick={onClick}>
    {pageIndex === 3 ? (
      <div className="secondPageLastBox">
        สมุดนั้นก็คือ"ไดอารี่"<br />
        ที่จะพาคุณทบทวนเรื่องราวที่่ผ่านมาในปีนี้
      </div>
    ) : (
      <div className="SecondPageBox">
        {text.split(",").map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    )}
  </button>
);

const TextButton = ({ text, onClick }) => (
  <button className='choiceButton' onClick={onClick}>
    {text}
  </button>
)

const ThirdPage = ({ pageIndex, username ,onClick }) => (
  <button className="First-page" onClick={onClick}>
    {pageIndex === 0 ? (
      <div className="ThirdBgBox">
        ภาพเหตุการณ์ในปีนี้ทั้งหมด <br />
        ค่อยๆฉายขึ้นในหัวของคุณ <br />
        ราวกับละครเรื่องหนึ่ง
      </div>
    ):
    (
      <>
        ว้าว ดูเหมือนว่าคุณ {username} <br/>
        ผ่านอะไรมาเยอะเหมือนกันนะ
      </>
    )
    }
  </button>
);

function RatingBox({ text, pageIndex, message, setMessage, onClick}) {
  const pageList = [2, 3, 4]
  return (
    <div className="RatingBox">
      <div className='RatingText'>
        {text.split(",").map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>

      {
        pageList.includes(pageIndex) ? (
          <>
            <input
              type="text"
              className="Messageinput"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="พิมพ์คำตอบของคุณที่นี่..."
            />
             <NextButton pageIndex={pageIndex} handleNextButton={onClick}/>
          
          </>
        ) :
          (
            <div className='buttonList'>
              <TextButton text={"สนุกกว่าปีไหนๆเลยแหละ"} onClick={onClick} />
              <TextButton text={"ก็สนุกดีนะ ได้เจออะไรใหม่ๆเยอะเลย"} onClick={onClick} />
              <TextButton text={"เฉยๆนะ ไม่ค่อยมีอะไรน่าตืื่นเต้นเลย"} onClick={onClick} />
              <TextButton text={"เหนื่อยอะ แต่ก็ผ่านมาได้"} onClick={onClick} />
              <TextButton text={"หนักหน่วงมาก อยากให้ผ่านปีนี้ไปไว ๆ จัง"} onClick={onClick} />
            </div>

          )
      }
    </div>
  )
}

// Main App Component
function App() {
  // States
  const [userName, setUserName] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [secondPageText, setSecondPageText] = useState("คุณลืมตาขึ้นมาแล้วพบกับ, สมุดเล่มหนึ่งที่วางอยู่บนโต๊ะ");

  const colors = ['#4335A7', '#80C4E9', '#FFF6E9', '#FF7F3E'];
  const textList = [
    "ปีนี้คุณรู้สึกเป็นไงบ้าง...",
    "ถ้ามีคะแนนเต็ม 10,ปีนี้คุณให้คะแนนตัวเองเท่าไร เพราะอะไร?",
    "ปีนี้มีเรื่องที่ทำให้รู้สึกผิดหวังบ้างมั้ย...",
    "แล้วเรื่องที่ภูมิใจล่ะ?"
  ]

  // Handlers
  const handleNextButton = () => setBgIndex((prev) => (prev + 1) % colors.length);

  const handleFirstPageClick = () => setPageIndex(1);

  const handleSecondPageClick = () => {
    setPageIndex((prev) => (prev + 1));
    setSecondPageText("คุณเดินเข้าไปใกล้ ใกล้ ...");

    if (pageIndex === 3) {
      handleNextButton();
      setPageIndex(0);
    }
  };

  const handleThirdPageClick = () => {
    console.log("click")
    setPageIndex((prev) => (prev + 1));
  }

  // Effects
  useEffect(() => {
    console.log("Current Background Index:", bgIndex);
    console.log("Current Page Index:", pageIndex);
  }, [bgIndex, pageIndex]);

  // JSX
  return (
    <div className="App" style={{ backgroundColor: colors[bgIndex] }}>
      {bgIndex === 0 && (
        <>
          {pageIndex === 0 ? (
            <FirstPage
              text="นี่ก็มาถึงเดือนสุดท้ายของปีแล้วนะ"
              onClick={handleFirstPageClick}
            />
          ) : (
            <div className="Main-box">
              <div className="background-color">สวัสดี คุณชื่ออะไรนะ...?</div>
              <input
                type="text"
                className="Username-input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="อยากให้เราเรียกคุณว่าอะไร..."
              />
             <NextButton handleNextButton={handleNextButton}/>
            </div>
          )}
        </>
      )}
      {bgIndex === 1 && (
        <SecondPage text={secondPageText} pageIndex={pageIndex} onClick={handleSecondPageClick} />
      )}
      {bgIndex === 2 && (
        <>
          {[0,4].includes(pageIndex) ? (
            <ThirdPage username={userName} pageIndex={pageIndex} onClick={() => setPageIndex(1)} />
          ) : (
            <>
            <RatingBox text={textList[pageIndex - 1]} pageIndex={pageIndex}  onClick={handleThirdPageClick} />
          </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
