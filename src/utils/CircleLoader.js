import React, { useState } from "react";
import "./loader.css";

function CircleLoader() {
  const [Status, setStatus] = useState(false);
  return (
    <>
      {Status ? (
        <div className="relative flex items-center justify-center h-screen w-full">
          <div className="flex items-center justify-center"
            style={{ height: "100vh", width: "100%" }}
          >
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <div>ba</div>
      )}
    </>
  );
}

export default CircleLoader;
