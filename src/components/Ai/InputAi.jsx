import React from "react";
import { ArrowUp } from "lucide-react";
import SpeechToText from "./SpeechToText";
import { textresponse } from "../../../utils/ApiUpload";

export default function InputAi({ message, setMessage, setApiResponse }) {
  const handleSend = async () => {
    if (!message.trim()) return;
    console.log("Send message:", message);
    const response = await textresponse(message);
    setApiResponse(response); // ✅ pushes new entry
    setMessage("");
  };

  return (
    <div className="flex-col  ">
      <div className="flex items-center w-full p-2 space-x-2">
       
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Chat with AI"
            className="w-full p-3 pr-12 rounded-full border border-gray-700 focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <div className="absolute right-6  top-1/2 transform -translate-y-1/2">
            {message.trim() ? (
              <button
                onClick={handleSend}
                className="p-2 rounded-full bg-gray-500 hover:bg-gray-600 text-white transition"
              >
                <ArrowUp size={20} />
              </button>
            ) : (
              <SpeechToText message={message} setMessage={setMessage} />
            )}
          
        </div>
      </div>
    </div>
  );
}
