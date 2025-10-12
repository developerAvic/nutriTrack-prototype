import { useState } from "react";
import InputAi from "../../components/Ai/InputAi";
import FileIp from "../../components/Ai/FileIp";
import DisplayResponse from "../../components/Ai/DisplayResponse";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [combinedResponse, setCombinedResponse] = useState({
    inputAi: [],
    fileIp: [],
  });

  return (
    <main className="p-1 flex flex-col  space-y-20 h-page justify-center max-w-xl mx-auto gap-4">

      <div className="">
      {/* ✅ Single DisplayResponse for all results */}
      <DisplayResponse response={combinedResponse} />
      </div>

      {/* File and Input stacked */}
      <div className=" flex gap-1 fixed bottom-0  w-xl bg-white ">
        <div className="w-.5/4">
          <FileIp
            setApiResponse={(res) =>
              setCombinedResponse((prev) => ({
                ...prev,
                fileIp: [...prev.fileIp, res], // ✅ append instead of replace
              }))
            }
          />
        </div>
        <div className="w-4/5">
          <InputAi
            message={message}
            setMessage={setMessage}
            setApiResponse={(res) =>
              setCombinedResponse((prev) => ({
                ...prev,
                inputAi: [...prev.inputAi, res], // ✅ append instead of replace
              }))
            }
          />
        </div>
      </div>
    </main>
  );
}


