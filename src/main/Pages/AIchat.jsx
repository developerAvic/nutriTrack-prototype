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
    <>
      <div class="grid h-150 grid-cols-3 grid-rows-6 gap-2">
        <div class="col-span-2  row-span-5 flex items-center justify-center">
          <main className="p-1 space-y-20 justify-center max-w-xl mx-auto gap-4">
            <div>
              <DisplayResponse response={combinedResponse} />
            </div>

            <div className=" flex gap-1 relative w-xl  ">
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
          </main>
        </div>

        <div class="col-start-3 row-start-4  bg-white rounded-2xl row-span-3 bg-gray-300 flex items-center justify-center">
          summary
        </div>
        <div class="col-start-3 row-span-3 rounded-2xl bg-white bg-gray-200 flex items-center justify-center">
          goals
        </div>

      </div>
    </>
  );
}
