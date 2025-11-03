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
    <div className="w-full flex flex-col">
      <div className="relative flex items-center w-full border border-gray-700 rounded-full overflow-hidden">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Chat with AI"
          className="w-full px-4 py-3 text-sm sm:text-base focus:outline-none pr-12"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <div className="absolute right-3 flex items-center justify-center">
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
