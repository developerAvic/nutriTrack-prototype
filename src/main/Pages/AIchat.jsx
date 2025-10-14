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
    <>
      <div class="grid grid-cols-3 h-155 grid-rows-3 gap-2">
        <div class="col-span-2 row-span-2 rounded-2xl flex items-center justify-center">
          <DisplayResponse response={combinedResponse} />
        </div>

        <div class="col-span-2 col-start-1 row-start-3 rounded-2xl flex items-center justify-center">
          <div className=" flex relative w-xl  ">
            <div className="w-.5/4">
              <FileIp
                setApiResponse={(res) =>
                  setCombinedResponse((prev) => ({
                    ...prev,
                    fileIp: [...prev.fileIp, res],
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
                    inputAi: [...prev.inputAi, res],
                  }))
                }
              />
            </div>
          </div>
        </div>

        <div class="row-span-2 col-start-3 row-start-1rounded-2xl flex items-center justify-center">
          <Summary
            title="Summary"
            content="Here’s a brief overview of your progress."
          />
        </div>

        <div class="col-start-3 row-start-3 rounded-2xl flex items-center justify-center">
          <Goals goals={goals} onAddGoal={() => alert("Add Goal")} />
        </div>
      </div>
    </>
  );
}
