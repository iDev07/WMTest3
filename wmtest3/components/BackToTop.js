import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function BackToTop() {
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="backToTop">
      {BackToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            width: "40px",
            height: "40px",
            right: "35px",
            transition: "0.3s",
            color: "#fff",
            fontSize: "25px",
            borderRadius: "50%",
            background: "#172a3d",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "101",
          }}
          onClick={scrollUp}
          className="backToTopButton"
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
    </div>
  );
}

export default BackToTop;
