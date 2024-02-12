import React from "react";

function LandingPageFooter() {
  return (
    <div className="border-t border-gray-200 bg-purple-800 px-5 py-4 text-right">
      <span className="text-white">Contact: </span>
      <span className="font-bold text-purple-600">
        <a
          href="mailto:brandon@brandonhancock.io"
          className="text-white hover:underline"
        >
          brandon@brandonhancock.io
        </a>
      </span>
    </div>
  );
}

export default LandingPageFooter;