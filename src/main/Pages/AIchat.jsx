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
    <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-6 h-screen md:h-auto overflow-hidden md:overflow-visible bg-transparent">
      
      {/* ==== LEFT SECTION: Chat Area ==== */}
      <div className="md:col-span-2 md:row-span-6 flex flex-col h-full md:h-auto">
        <main className="flex flex-col justify-between h-full w-full md:max-w-2xl mx-auto px-3 py-4">
          
          {/* Display Response */}
          <div className="flex-1 overflow-y-auto mb-3 rounded-2xl scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
            <DisplayResponse response={combinedResponse} />
          </div>

          {/* Input Section (Sticky Bottom) */}
          <div className="sticky bottom-0 bg-transparent flex flex-col gap-2 pb-2">
            <div className="flex items-center gap-2 w-full">
              <div className="flex-shrink-0">
                <FileIp
                  setApiResponse={(res) =>
                    setCombinedResponse((prev) => ({
                      ...prev,
                      fileIp: [...prev.fileIp, res],
                    }))
                  }
                />
              </div>
              <div className="flex-grow">
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
        </main>
      </div>

      {/* ==== RIGHT SECTION: Summary & Goals ==== */}
      <div className="md:col-start-3 md:row-span-6 flex flex-col md:gap-4 h-full md:h-auto overflow-y-auto md:overflow-visible pb-24 md:pb-0">
        
        {/* Wrap each in its own container to prevent overlap */}
        <div className="flex flex-col gap-4 w-full">
          
          {/* Summary Card */}
          <div className="rounded-2xl p-4 sm:p-5 md:p-6 flex items-center justify-center">
            <Summary
              title="Overall AI Summary"
              content="Your eating and activity data reflect a balanced intake with small day-to-day variations — ideal for sustainable progress."
            />
          </div>

          {/* Goals Card */}
          <div className="rounded-2xl p-4 sm:p-5 md:p-6 flex items-center justify-center">
            <Goals goals={goals} onAddGoal={() => alert('Add Goal')} />
          </div>

        </div>
      </div>
    </div>
  );
}
