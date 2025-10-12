import { recognizeImage } from "../../../utils/ApiUpload";
import { Camera, Image } from "lucide-react";

export default function FileIp({ setApiResponse }) {
  const handleFileSelect = async (file) => {
    const response = await recognizeImage(file);
    setApiResponse(response); // ✅ pushes new entry
  };

  const handleCamera = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.capture = "environment";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) handleFileSelect(file);
    };
    input.click();
  };

  const handleFiles = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) handleFileSelect(file);
    };
    input.click();
  };

  return (
    <div className=" flex-col items-center p-3">
      <div>
        <button
          onClick={handleCamera}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <Camera size={20} />
        </button>
        <button
          onClick={handleFiles}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <Image size={20} />
        </button>
      </div>
    </div>
  );
}
