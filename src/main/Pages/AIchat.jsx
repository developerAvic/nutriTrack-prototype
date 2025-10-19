import { useState } from "react";
import InputAi from "../../components/Ai/InputAi";
import FileIp from "../../components/Ai/FileIp";
import DisplayResponse from "../../components/Ai/DisplayResponse";
import { Summary } from "../../components/common/Summary";
import { Goals } from "../../components/common/Goals";
import { goals } from "../../../utils/Nutridata";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [combinedResponse, setCombinedResponse] = useState({
    inputAi: [],
    fileIp: [],
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 sm:gap-6 p-3 sm:p-4 md:p-6 min-h-[calc(100vh-8rem)]">
      {/* Display Response */}
      <div className="col-span-1 md:col-span-2 md:row-span-2 rounded-2xl p-3 sm:p-4 md:p-6 min-h-[16rem] sm:min-h-[20rem] flex items-center justify-center">
        <DisplayResponse response={combinedResponse} />
      </div>

      {/* Input Section */}
      <div className="col-span-1 md:col-span-2 md:col-start-1 md:row-start-3 rounded-2xl p-3 sm:p-4 md:p-6 min-h-[10rem] sm:min-h-[12rem] flex items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
          <div className="w-full sm:w-1/3">
            <FileIp
              setApiResponse={(res) =>
                setCombinedResponse((prev) => ({
                  ...prev,
                  fileIp: [...prev.fileIp, res],
                }))
              }
            />
          </div>
          <div className="w-full sm:w-2/3">
            <InputAi
              message={message}
              setMessage={setMessage}
              setApiResponse={(res) =>
                setCombinedResponse((prev) => ({
                  ...prev,
                  inputAi: [...prev.inputAi, res],
                }))
              }
            />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="col-span-1 md:col-start-3 md:row-start-1 md:row-span-2 rounded-2xl p-3 sm:p-4 md:p-6 min-h-[12rem] sm:min-h-[15rem] flex items-center justify-center">
        <Summary
          title="Summary"
          content="Here’s a brief overview of your progress."
        />
      </div>

      {/* Goals */}
      <div className="col-span-1 md:col-start-3 md:row-start-3 rounded-2xl p-3 sm:p-4 md:p-6 min-h-[12rem] sm:min-h-[15rem] flex items-center justify-center">
        <Goals goals={goals} onAddGoal={() => alert("Add Goal")} />
      </div>
    </div>
  );
}