import React, { useState } from "react";
import pfp from "../../../public/pfp.png"

export default function GitHubProfile() {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Clickable text */}
      <a
        href="https://instagram.com/developer.avic"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 font-semibold cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        &lt;developerAvic/&gt;
      </a>

      {/* Hover card */}
      {hover && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 rounded-lg shadow-lg p-4 text-gray-700 z-10 transition-opacity duration-200">
          <div className="flex items-center gap-3">
            <img
              src={pfp} // replace with your GitHub avatar URL
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">developerAvic</p>
              <p className="text-sm text-gray-500">Front-End Developer</p>
            </div>
          </div>
          <p className="mt-2 text-sm">
            Click to Check my profile !
          </p>
        </div>
      )}
    </div>
  );
}
