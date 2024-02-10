import React from "react";
import RingLoader from "react-spinners/RingLoader";

function LoadingScreen() {
  return (
    <div className="z-50 flex h-screen w-screen items-center justify-center bg-white">
      <div className="relative flex flex-col items-center justify-center">
        <div className="z-10 text-5xl font-bold text-purple-600 mb-5">
          LeadConvert
        </div>
        <RingLoader color="rgba(124, 58, 237, var(--tw-text-opacity))" speedMultiplier={1.5} />
      </div>
    </div>
  );
}

export default LoadingScreen;