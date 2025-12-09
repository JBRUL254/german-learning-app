import { useState } from "react";

export default function Recorder({ onResult }) {
  const [listening, setListening] = useState(false);

  const start = () => {
    const recog = new webkitSpeechRecognition();
    recog.lang = "de-DE";
    recog.onresult = e => onResult(e.results[0][0].transcript);
    recog.start();
    setListening(true);
  };

  return (
    <button onClick={start}>
      {listening ? "Listening..." : "🎤 Speak"}
    </button>
  );
}
