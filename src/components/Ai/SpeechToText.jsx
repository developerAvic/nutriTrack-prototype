import React, { useState, useRef } from "react";
import { Mic } from "lucide-react";

export default function SpeechToText({ setMessage }) {
  const [recording, setRecording] = useState(false);
  const recognitionRef = useRef(null);

  const handleMic = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    if (recording) {
      recognitionRef.current.stop();
      setRecording(false);
    } else {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true; // keep listening
      recognition.interimResults = true; // show live results
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setMessage(transcript); // updates input box via shared state
      };

      recognition.onend = () => setRecording(false);

      recognition.start();
      recognitionRef.current = recognition;
      setRecording(true);
    }
  };

  return (
    <div>
      <button
        onClick={handleMic}
        className={`p-2 rounded-full ${
          recording ? "bg-red-200" : "bg-gray-200"
        } transition`}
      >
        <Mic size={20} />
      </button>
    </div>
  );
}
