import React, { useEffect, useState, useRef } from 'react';
import "./App.css"
import 'normalize.css';
import "./sliderWithEmoji.css"
import backgroundImage1 from './background/bg1.svg';
import backgroundImage2 from './background/bg2.svg'
import backgroundImage3 from './background/bg3.svg'
import backgroundImage4 from './background/bg4.svg'
import backgroundImage5 from './background/bg5.svg'
import backgroundImage6 from './background/bg6.svg'
import backgroundImage7 from './background/bg7.svg'
import backgroundImage8 from './background/bg8.svg'
import backgroundImage9 from './background/bg9.svg'
import emoji1 from "./emoji/pouting-face.svg"
import emoji2 from "./emoji/unamused-face.svg"
import emoji3 from "./emoji/crying-face.svg"
import emoji4 from "./emoji/confused-face.svg"
import emoji5 from "./emoji/expressionless-face.svg"
import emoji6 from "./emoji/kissing-face.svg"
import emoji7 from "./emoji/happy-face.svg"
import emoji8 from "./emoji/beaming-face-with-smiling-eyes.svg"
import emoji9 from "./emoji/smiling-face-with-smiling-eyes.svg"
import emoji10 from "./emoji/smiling-face-with-heart-eyes.svg"
import finger from './background/finger2.svg'
import saveIcon from './icon/save.svg'
import shareIcon from './icon/share.svg'
import html2canvas from "html2canvas";
import { firestore } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const addUser = async (userData) => {
  try {
    // Add a new document with an auto-generated ID
    await addDoc(collection(firestore, "users"), userData);
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};

const TopPageMessage = ({ text, onClick }) => {
  return (
    <button className="First-page" onClick={onClick}>
      <div className="FirstBox" >
        <div className='firstpagemessage'>
          {text.split(",").map((line, index) => (
            <div key={index} >{line}</div>
          ))}
        </div>
        <img src={finger} alt="tap finger print" className='fingerPrint' />
      </div>
    </button>)
}

const TopPageMessage2 = ({ text, onClick, showFinger = true }) => {
  return (
    <button className="First-page" onClick={onClick}>
      <div className="FirstBox" >
        <div className='firstpagemessage'>
          <>
            <div>อดีตคือบทเรียนนะ แต่ปัจจุบันคือ</div>
            <div>
              <span style={{ color: '#9881EA' }}>"ของขวัญ"</span>
            </div>
            <div>ที่เราสร้างเองได้เสมอ...</div>
          </>
        </div>
        {showFinger === true ? (<img src={finger} alt="tap finger print" className='fingerPrint' />) : null}
      </div>
    </button>)
}

const TopPageMessage3 = ({ text, onClick }) => {
  return (
    <button className="First-page" onClick={onClick}>
      <div className="Box-2" >
        <div className='message-3'>
          {text.split(",").map((line, index) => (
            <div key={index} >{line}</div>
          ))}
        </div>
        <img src={finger} alt="tap finger print" className='fingerPrint' />
      </div>
    </button>)
}

const AnimateMessage = ({ setPageIndex, setBgIndex }) => {
  const [currentText, setCurrentText] = useState(0); // Track which text to show
  const textList = [
    "ภาพเหตุการณ์ในปีนี้ทั้งหมด",
    "ค่อยๆฉายขึ้นมาในหัวของคุณ,ราวกับละครเรื่องหนึ่ง",
    ""
  ];

  useEffect(() => {
    console.log("current text", currentText)
    if (currentText < textList.length - 1) {
      if (currentText === 1) {
        setBgIndex((prev) => prev + 1)
      }
      const timer = setTimeout(() => {
        setCurrentText((prev) => prev + 1);
      }, 3000); // Delay of 1 second (1000 ms)

      return () => clearTimeout(timer); // Cleanup the timeout
    }
    else {
      setPageIndex((prev) => prev + 1)
    }
  }, [currentText]); // Depend on `currentText`

  return (
    <div className="First-page" >
      <div className="AnimateBox">
        <div className='firstpagemessage'>
          {textList[currentText].split(",").map((line, index) => (
            <div key={index} className='sec'>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimateMessage2 = ({ pageIndex, setPageIndex }) => {
  const [currentText, setCurrentText] = useState(0); // Track which text to show
  const textList = [
    "ก่อนจากกันเรามีของที่ระลึกมามอบให้คุณนะ",
    "ฝากติดตาม Instagram: @buildbizth,เพื่อติดตามข่าวสาร,และเป็นกำลังใจให้พวกเราด้วยนะ",
    ""
  ];

  useEffect(() => {
    if (currentText < textList.length - 1) { // Check if there is more text to show
      const timer = setTimeout(() => {
        setCurrentText((prev) => prev + 1);
      }, 3000); // Delay of 1 second (1000 ms)

      return () => clearTimeout(timer); // Cleanup the timeout
    } else {
      setPageIndex(1)
    }
  }, [currentText]); // Depend on `currentText`

  return (
    <div className="First-page">
      <div className="AnimateBox">
        <div className="finalpagemessage">
          {textList[currentText].split(",").map((line, index) => (
            <div key={index} >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div >

  );
};
const AnimateMessage3 = ({ setPageIndex, setBgIndex, userName }) => {
  const [currentText, setCurrentText] = useState(0); // Track which text to show
  const textList = [
    "ไหนดูซิ คุณ " + userName + " วาดภาพตัวเองในอนาคต,เป็นอย่างไรบ้างนะ...?",
    "",
    ""
  ];

  useEffect(() => {
    console.log("current text", currentText)
    if (currentText < 2) {
      if (currentText === 1) { setBgIndex(5) }
      const timer = setTimeout(() => {
        setCurrentText((prev) => prev + 1);
      }, 3000); // Delay of 1 second (1000 ms)

      return () => clearTimeout(timer); // Cleanup the timeout
    }
    else {
      setPageIndex((prev) => prev + 1)
    }
  }, [currentText]); // Depend on `currentText`

  return (
    <div className="First-page" >
      <div className="AnimateBox">
        {textList[currentText] !== "" && (<div className='firstpagemessage'>
          {textList[currentText].split(",").map((line, index) => (
            <div key={index} className='sec'>{line}</div>
          ))}
        </div>)}
      </div>
    </div>
  );
};

const RangeSlider = ({ }) => {
  const [answer, setAnswer] = useState("")
  const [score, setScore] = useState(5);
  const emojis = ["😡", "😠", "😕", "😐", "🙂", "😊", "😀", "😄", "😆", "😁", "🤩"];
  const emojis_extra = [emoji1, emoji2, emoji3, emoji4, emoji5, emoji6, emoji7, emoji8, emoji9, emoji10];
  const handleSliderChange = (event) => {
    setScore(Number(event.target.value));
  };
  const handleChange = (event) => {
    setAnswer(event.target.value); // Update state when the textarea changes
  };
  return (
    <div className="RatingBox-slider">
      <div className='headtext'>ปีนี้คุณให้คะแนนตัวเองเท่าไหร่?</div>
      <div className="score-display">
        <span className="score">{score}</span>
        <span className="emoji">{emojis[score]}</span>
      </div>
      <input
        type="range"
        min="0"
        max="10"
        value={score}
        className="slider"
        onChange={handleSliderChange}
        style={{
          background: `linear-gradient(to right, #8486E6 ${score * 10}%, rgba(173, 154, 238, 0.2) ${score * 10}%)`
        }}
      />
      <textarea
        value={answer}
        onChange={handleChange}
        placeholder="พิมพ์เหตุผลของคุณที่นี่..."
        className="reason-box"
      ></textarea>
    </div>
  );
}

const ThreeQuestionBox = ({ inputs, setInputs }) => {
  console.log("inputs ...", inputs)
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs]; // Create a copy of the inputs array
    newInputs[index] = value; // Update the specific input value
    setInputs(newInputs); // Update the state
  };

  return (
    <div className="RatingBox-5">
      <div className='headtext'>มาลองตั้งเป้าหมายสำคัญในชีวิตสัก 3 ข้อกัน</div>
      <div className='questionList'>
        {inputs.map((input, index) => (
          <input
            key={index}
            type="text"
            className="goalInput"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={`เป้าหมายที่ ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const QuestionBox = ({ text, answer, setAnswer }) => {

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };
  return (
    <div className='RatingBox-3'>
      <div className='headtext'>
        {text.split(",").map((line, index) => (
          <span key={index} className="sec">
            {line}
          </span>
        ))}
      </div>
      <textarea
        value={answer}
        onChange={handleChange}
        placeholder="พิมพ์คำตอบของคุณที่นี่..."
        className="reason-box-2"
      ></textarea>
    </div>
  )
}

const QuestionBox2 = ({ text, answer, setAnswer }) => {
  const handleChange = (event) => {
    setAnswer(event.target.value); // Update state when the textarea changes
  };
  return (
    <div className='RatingBox-3'>
      <div className='headtext'>{text.split(",").map((line, index) => (
        <div key={index} className='sec'>{line}</div>
      ))}</div>
      <textarea
        value={answer}
        onChange={handleChange}
        placeholder="พิมพ์คำตอบของคุณที่นี่..."
        className="reason-box-2"
      ></textarea>
    </div>
  )
}

const QuestionBox3 = ({ text }) => {
  const [answer, setAnswer] = useState("")
  const handleChange = (event) => {
    setAnswer(event.target.value); // Update state when the textarea changes
  };
  return (
    <div className='RatingBox-3'>
      <div className='headtext'>{text.split(",").map((line, index) => (
        <div key={index} className='sec'>{line}</div>
      ))}</div>
      <textarea
        value={answer}
        onChange={handleChange}
        placeholder="พิมพ์คำตอบของคุณที่นี่..."
        className="reason-box-2"
      ></textarea>
    </div>
  )
}

function FirstPage({ setUserName, pageIndex, onClick }) {
  const [user, setUser] = useState("")
  if (pageIndex === 0) {
    return (<TopPageMessage text={"นี่ก็มาถึงเดือนสุดท้ายของปีแล้วนะ"} onClick={onClick} />)
  }
  if (pageIndex === 1) {
    return (
      <div className="Main-box">
        <div className="questionbox-2">
          <div className="messagebox-2">สวัสดี คุณชื่ออะไรนะ...?</div>
          <input
            type="text"
            className="Username-input"
            value={user}
            onChange={(e) => {
              setUser(e.target.value)
              setUserName(e.target.value)
            }}
            placeholder="อยากให้เราเรียกคุณว่าอะไร..."
          />
        </div>
        <NextButton handleNextButton={onClick} />
      </div >
    )
  }
  if (pageIndex === 2) {
    return ((<TopPageMessage text={"เอาล่ะ " + user + ",ลองหลับตาแล้วนึกถึงห้องของคุณนะ"} onClick={onClick} />))
  }
};

const NextButton = ({ handleNextButton }) => (
  <button className="Next-button" onClick={handleNextButton}>
    ไปต่อ
  </button>
);

function SecondPage({ text, pageIndex, showComponent, setShowComponent, onClick }) {
  const textList = ["คุณลืมตาขึ้นมาแล้วพบกับ,สมุดเล่มหนึ่งที่วางอยู่บนโต๊ะ", "คุณเดินเข้าไป ใกล้ ใกล้ ...", "", "ลองเปิดดูสิ..."]
  if ([0, 1].includes(pageIndex)) {
    return (<TopPageMessage text={textList[pageIndex]} onClick={onClick} />)
  }
  if (pageIndex === 2) {
    if (showComponent) {
      return (
        <button className="First-page" onClick={onClick}>
          <div className="FirstBox" >
            <div className='firstpagemessage'>
              <div style={{ display: "flex" }}>
                <div>สมุดเล่มนั้นก็คือ </div>
                <div style={{ color: "#6B56BF" }}> "ไดอารี่"</div>
              </div>
              <div>ที่จะพาคุณทบทวนเรื่องราวที่ผ่านมาในปีนี้</div>
            </div>
            <img src={finger} alt="tap finger print" className='fingerPrint' />
          </div>
        </button>)
    }
  }
  if (pageIndex === 3) {
    return <TopPageMessage text={textList[pageIndex]} onClick={onClick} />
  }
};

function ThirdPage({ text, pageIndex, userName, onClick, setPageIndex, setBgIndex, setAnsetwer }) {
  const textList = ["", "ปีนี้คุณรู้สึกยังไงบ้าง...", "ปีนี้คุณให้คะแนนตัวเองเท่าไร?", "ปีนี้มีเรื่องที่ทำให้รู้สึกผิดหวังบ้างมั้ย?", "แล้วเรื่องที่ภูมิใจล่ะ?", "ว้าว ดูเหมือนว่าคุณ " + userName + ",ผ่านอะไรมาเยอะเหมือนกันนะ", "คุณเก่งมากๆเลยแหละ,เราภูมิใจในตัวคุณที่สุดเลย", "เคยคิดอยากย้อนเวลากลับไปมั้ย?", "", "เติบโตและเรียนรู้ไปด้วยกันนะ,อะไรที่ผ่านมาแล้วก็ให้ผ่านไป", "อย่าเก็บอดีต มาฉุดรั้งตัวเราในอนาคตเลยนะ"]
  const [answerA, setAnswerA] = useState("")
  const [answerB, setAnswerB] = useState("")

  if ([0].includes(pageIndex)) {
    return (<AnimateMessage onClick={onClick} setPageIndex={setPageIndex} setBgIndex={setBgIndex} />)
  }
  if ([1].includes(pageIndex)) {

    return (<ChoiceBox1
      text={textList[pageIndex]}
      onClick={onClick}
    />)
  }
  if ([2].includes(pageIndex)) {
    return (
      <div className='slider-container'>
        <RangeSlider />
        <NextButton handleNextButton={onClick} />
      </div>
    )
  }
  if ([3].includes(pageIndex)) {
    return (
      <div className='questioncontainer'>
        <QuestionBox text={textList[pageIndex]} answer={answerA} setAnswer={setAnswerA} />
        <NextButton handleNextButton={onClick} />
      </div>
    )
  }
  if ([4].includes(pageIndex)) {
    return (
      <div className='questioncontainer'>
        <QuestionBox text={textList[pageIndex]} answer={answerB} setAnswer={setAnswerB} />
        <NextButton handleNextButton={onClick} />
      </div>
    )
  }
  if ([5, 6].includes(pageIndex)) {
    return (<TopPageMessage text={textList[pageIndex]} onClick={onClick} />)
  }
  if ([7].includes(pageIndex)) {
    return (
      <ChoiceBox2
        text={textList[pageIndex]}
        onClick={onClick} />
    )
  }
  if ([8].includes(pageIndex)) {
    return (<TopPageMessage2 text={textList[pageIndex]} onClick={onClick} />)
  }
  if ([9, 10].includes(pageIndex)) {
    return (<TopPageMessage text={textList[pageIndex]} onClick={onClick} />)
  }
};

const TextButton = ({ text, onClick }) => (
  <button className='choiceButton' onClick={onClick}>
    {text}
  </button>
)

const TextButton2 = ({ text, onClick }) => (
  <button className='choiceButton-2' onClick={onClick}>
    {text}
  </button>
)

function ForthPage({ username, pageIndex, inputs, setInputs, onClick, setPageIndex, setBgIndex, setAnswer }) {
  const textList = [
    "",
    "การตั้งเป้าหมายในชีวิตถือเป็นสิ่งที่ช่วยทำให้คุณมี,ทิศทางและความหมายในการดำเนินชีวิต",
    "",
    "มันดูยอดเยี่ยมมากเลยนะ คุณว่าไหม,แต่อย่าลืมวางแผนด้วยล่ะ,แผนที่จะพาคุณไปยังเป้าหมายที่ตั้งไว้",
    "งั้นเรามาวางแผน เพื่อให้ไปถึงเป้าหมาย,ที่ตั้งไว้กันเถอะ",
    "ไม่ว่าระหว่างทางจะเจออะไร,จงเชื่อมั่นและมีความหวังเสมอ",
    "สุดท้ายนี้อยากบอกอะไรกับตัวเอง,ทั้งในปีนี้และปีถัดไปบ้าง..."
  ];

  if ([0].includes(pageIndex)) {
    return (<AnimateMessage3 setBgIndex={setBgIndex} setPageIndex={setPageIndex} userName={username} />);
  }

  if ([1, 3, 5].includes(pageIndex)) {
    return (<TopPageMessage text={textList[pageIndex]} onClick={onClick} />);
  }

  if ([2].includes(pageIndex)) {
    return (
      <div className='questioncontainer-2'>
        <ThreeQuestionBox inputs={inputs} setInputs={setInputs} />
        <NextButton handleNextButton={onClick} />
      </div>
    )
  }
  if ([4].includes(pageIndex)) {
    return (
      <div className='questioncontainer'>
        <QuestionBox2 text={textList[pageIndex]} setAnswer={setAnswer} />
        <NextButton handleNextButton={onClick} />
      </div>
    )
  }

  if ([6].includes(pageIndex)) {
    return (
      <div className='questioncontainer'>
        <QuestionBox3 text={textList[pageIndex]} />
        <NextButton handleNextButton={onClick} />
      </div>
    )
  }

}

function FifthPage({ username, pageIndex, setPageIndex, onClick }) {
  const [repeat, setRepeat] = useState(false)
  useEffect(() => {
    if (pageIndex === 0 && !repeat) {
      const timer = setTimeout(() => {
        setPageIndex((prev) => prev + 1);
        setRepeat(true)
      }, 1000); // Delay of 1 second (1000 ms)
      return () => clearTimeout(timer); // Cleanup the timeout
    }
  }, [pageIndex]); // Depend on `currentText`
  const textList = [
    "",
    "เอาล่ะ...,เราได้บันทึกเรื่องราวของคุณ " + username + ",ลงไดอารี่เล่มนี้เรียบร้อยแล้ว",
    "ไม่ว่าที่ผ่านมาจะยากแค่ไหน,คุณเก่งมากที่ผ่านมันมาได้...."

  ];
  if ([1, 2].includes(pageIndex)) {
    return (<TopPageMessage text={textList[pageIndex]} onClick={onClick} />);
  }
}

function SixthPage({ pageIndex, setPageIndex, onClick }) {
  useEffect(() => {
    if (pageIndex === 0) {
      const timer = setTimeout(() => {
        setPageIndex((prev) => prev + 1);
      }, 3000); // Delay of 1 second (1000 ms)
      return () => clearTimeout(timer); // Cleanup the timeout
    }
  }, [pageIndex]); // Depend on `currentText`
  const textList = [
    "",
    "จงภูมิใจในตัวเอง,ไม่ว่าตอนนี้คุณกำลังอยู่ในจุดไหน,ถ้าคุณมุ่งมั่นตั้งใจ,คุณก็ไปถึงเป้าหมายนั้นได้นะ",
    "หวังว่าปีหน้า,เราจะได้รับข่าวดีจากคุณนะ..."

  ];
  if ([1, 2].includes(pageIndex)) {
    return (<TopPageMessage3 text={textList[pageIndex]} onClick={onClick} />);
  }
}

function SeventhPage({ pageIndex, setPageIndex, userName, onClick, inputs, answer }) {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState(null);

  const handleShare = async () => {
    const data = { title, text, url };

    if (file) {
      data.files = [file];
    }

    try {
      await navigator.share(data);
    } catch (e) {
      console.log('Share error:', e);
    }
  };

  const savePage = async () => {
    try {
      // Hide unwanted elements
      const savebuttons = document.querySelectorAll('.savePicture');
      const sharebutton = document.querySelectorAll('.ShareSite');
      savebuttons.forEach((button) => (button.style.visibility = 'hidden'));
      sharebutton.forEach((button) => (button.style.visibility = 'hidden'));

      // Capture the page
      const canvas = await html2canvas(document.body, {
        scrollX: 0,
        scrollY: -window.scrollY, // To capture the full page
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight,
      });

      // Restore hidden elements
      savebuttons.forEach((button) => (button.style.visibility = 'visible'));
      sharebutton.forEach((button) => (button.style.visibility = 'visible'));

      // Convert the canvas to an image URL
      const image = canvas.toDataURL('image/png');

      // Trigger download
      const link = document.createElement('a');
      link.href = image;
      link.download = 'page-screenshot.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error saving page as image:', error);
    }
  };

  if ([0].includes(pageIndex)) {
    return (<AnimateMessage2 setPageIndex={setPageIndex} pageIndex={pageIndex} />);
  }
  if ([1].includes(pageIndex)) {
    const newUser = {
      username: userName,
      goals: inputs
    }
    addUser(newUser);

    return (
      <div className='FinalPage'>
        <div className='nato-sans-thai-bold'>
          ของที่ระลึกจากเรา BuildBiz
        </div>
        <div className='GiftBox' >
          <div style={{ "paddingTop": "3%" }} className='nato-sans-thai-bold'>
            "{userName}"
          </div>
          <div className='GiftMessage'>
            <div className='goal-box'>
              <div className='nato-sans-thai-bold'>
                เป้าหมายอันยิ่งใหญ่
              </div>
              <div className='Goals-3'>
                <span>1. {inputs[0]}</span>
                <span>2. {inputs[1]}</span>
                <span>3. {inputs[2]}</span>
              </div>
            </div>
            <div className='success-way'>
              <div className='nato-sans-thai-bold'>
                เส้นทางสู่ความสำเร็จ <br />
              </div>
              <div className='answer'>
                {answer}
              </div>
            </div>
          </div>
          < div className='FinalQoute'>
            "เราต่างไม่มีใครสมบูรณ์แบบ เราต่างเจ็บปวดได้ <br />
            ร้องไห้ได้ โอบกอดตัวเองไว้เสมอ <br />
            แม้จะไม่สมบูรณ์แบบก็ตาม..."
          </div>
        </div>
        <div></div>
        <button className='savePicture' onClick={savePage}>
          <img src={saveIcon} alt="save icon" className='saveIcon' />
          บันทึกรูปภาพ
        </button>
        <button className='ShareSite' onClick={handleShare}>
          <img src={shareIcon} alt="save icon" className='saveIcon' />
          ส่งเว็บนี้ให้เพื่อนคุณเล่น
        </button>
      </div>
    )
  }
}

function ChoiceBox1({ text, onClick }) {
  return (
    <div className="RatingBox">
      <div className='RatingText'>
        {text.split(",").map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </div>
      <div className='buttonList'>
        <TextButton text={"สนุกกว่าปีไหนๆเลยแหละ"} onClick={onClick} />
        <TextButton text={"ก็สนุกดีนะ ได้เจออะไรใหม่ๆเยอะเลย"} onClick={onClick} />
        <TextButton text={"เฉยๆนะ ไม่ค่อยมีอะไรน่าตื่นเต้นเลย"} onClick={onClick} />
        <TextButton text={"เหนื่อยอะ แต่ก็ผ่านมาได้"} onClick={onClick} />
        <TextButton text={"หนักหน่วงมาก อยากให้ผ่านปีนี้ไปไว ๆ จัง"} onClick={onClick} />
      </div>
    </div>
  )
}

function ChoiceBox2({ text, onClick }) {
  return (
    <div className="RatingBox-4">
      <div className='RatingText'>
        {text.split(",").map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div className='buttonList-2'>
        <TextButton2 text={"เคยสิ !"} onClick={onClick} />
        <TextButton2 text={"บางทีก็มีแว่บเข้ามาบ้างนะ"} onClick={onClick} />
        <TextButton2 text={"อดีตมันผ่านไปแล้ว"} onClick={onClick} />
      </div>
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
  const [zoom, setZoom] = useState(false)
  const [showComponent, setShowComponent] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [inputs, setInputs] = useState(["", "", ""])
  const [answer, setAnswer] = useState("")

  const backgroundImages = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
    backgroundImage5,
    backgroundImage6,
    backgroundImage7,
    backgroundImage8,
    backgroundImage9
  ];
  const currentBackgroundImage = backgroundImages[bgIndex];

  const goToPage = (page) => {
    if (isFading) return; // Prevent starting a new transition during an ongoing one
    setIsFading(true);
    setTimeout(() => {
      setBgIndex(page);
      setIsFading(false);
      setPageIndex(0)
      setZoom(false)
    }, 2000); // Match the transition duration in CSS
  };


  const handleFirstPageClick = () => {
    setPageIndex((prev) => (prev + 1))
    if (pageIndex === 2) {
      console.log("end bg 1")
      goToPage(1)
    }
  };

  const handleSecondPageClick = () => {
    setPageIndex((prev) => prev + 1);
    setSecondPageText("คุณเดินเข้าไปใกล้ ใกล้ ...");
    if (pageIndex === 1) {
      setZoom(true)
    }
    if (pageIndex === 3) {
      goToPage(2)
    }
  };

  const handleThirdPageClick = () => {
    if (pageIndex === 10) {
      console.log("end bg 2")
      goToPage(4)
    }
    setPageIndex((prev) => prev + 1);
  };

  const handleForthPageClick = () => {
    setPageIndex((prev) => prev + 1);
    if (pageIndex === 6) {
      setBgIndex(6)
      setPageIndex(0)
    }
  }

  const handleFifthPageClick = () => {
    if (pageIndex === 2) {
      goToPage(7)
      setPageIndex(0)
    } else {
      setPageIndex((prev) => prev + 1);
    }

  }

  const handleSixthPageClick = () => {
    setPageIndex((prev) => prev + 1);
    if (pageIndex === 2) {
      goToPage(8)
      setPageIndex(0)
    }
  }

  const handleSeventhPageClick = () => {
    setPageIndex((prev) => prev + 1);
  }

  const handleAnimationEnd = () => {
    setShowComponent(true)
  }

  // Effects
  useEffect(() => {
    console.log("Current Page Index:", pageIndex);
    console.log("current show component", showComponent);
    console.log("current BG Index", bgIndex);
    console.log("current zoom", zoom);

  }, [pageIndex, bgIndex, zoom, showComponent]);

  return (
    <div className={`overlay ${isFading ? "fade-out" : "fade-in"}`}>
      <div
        className={`App ${zoom ? "zoom-in" : null}`}
        style={{
          backgroundImage: `url(${currentBackgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        onAnimationEnd={handleAnimationEnd}
      >
        {(bgIndex === 0) && (
          <FirstPage pageIndex={pageIndex} onClick={handleFirstPageClick} setUserName={setUserName} />
        )}

        {bgIndex === 1 && (
          <div className='filter'>
            <SecondPage text={secondPageText} pageIndex={pageIndex} onClick={handleSecondPageClick} showComponent={showComponent} setShowComponent={setShowComponent} />
          </div>
        )}

        {[2, 3].includes(bgIndex) && (
          < ThirdPage pageIndex={pageIndex} onClick={handleThirdPageClick} userName={userName} setPageIndex={setPageIndex} setBgIndex={setBgIndex} />
        )}
        {
          [4, 5].includes(bgIndex) && (
            <ForthPage username={userName} pageIndex={pageIndex} onClick={handleForthPageClick} setPageIndex={setPageIndex} setBgIndex={setBgIndex} inputs={inputs} setInputs={setInputs} setAnswer={setAnswer} />
          )
        }
        {
          bgIndex === 6 && (
            <FifthPage username={userName} pageIndex={pageIndex} onClick={handleFifthPageClick} setPageIndex={setPageIndex} />
          )
        }
        {
          bgIndex === 7 && (
            <SixthPage setPageIndex={setPageIndex} pageIndex={pageIndex} onClick={handleSixthPageClick} />
          )
        }
        {
          bgIndex === 8 && (
            <SeventhPage userName={userName} pageIndex={pageIndex} onClick={handleSeventhPageClick} setPageIndex={setPageIndex} inputs={inputs} answer={answer} />
          )
        }
      </div>
    </div>
  );
}

export default App;
