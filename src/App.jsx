import { useState } from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import ButtonPannel from "./components/ButtonPannel";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handlleInputChange = (text) => {
    setInputText(text);
    const words = text.trim().split(/\s+/).filter((word) => word.length > 0);
    setWordCount(words.length);
  };
  
  const changeTheme = () => {
    setIsDark((prev) => {
      if (prev) {
        setIsDark(false);
      } else {
        setIsDark(true);
      }
    });
  };

  return (
    <>
      <div
        className={`${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}
        min-h-screen`}
      >
        <div>
          <Navbar isDark={isDark} changeTheme={changeTheme} />
        </div>
          <div className="flex flex-col p-5 gap-3">
            <div className="grid grid-cols-2 justify-center gap-2">
              <div className="flex flex-col items-center gap-3">
                <p>Input</p>
                <TextArea isDark={isDark} text={inputText} setText={handlleInputChange} />
              </div>

              <div className="flex flex-col items-center gap-3">
                <p>Output</p>
                <TextArea isDark={isDark} text={outputText} setText={setOutputText} />
              </div>
            </div>
            <div>
              <p>Detected language: English, Total words: {wordCount}</p>
            </div>
            <ButtonPannel isDark={isDark}/>
          </div>
        </div>
    </>
  );
}

export default App;
