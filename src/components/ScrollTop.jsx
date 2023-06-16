import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const [visibility, setVisisbility] = useState(false);

  const scrollBtn = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenScroll = () => {
    let heightToHide = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > heightToHide) {
      setVisisbility(true);
    } else {
      setVisisbility(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
    return () => window.removeEventListener("scroll", listenScroll);
  });

  return (
    <div>
      {visibility && (
        <div
          className="btn btn-outline-success"
          style={{
            position: "fixed",
            right: "3.2rem",
            bottom: "5rem",
            borderRadius: "41px",
            padding: "3px 16px",
            fontSize: "25px",
          }}
          onClick={scrollBtn}
        >
          &uarr;
        </div>
      )}
    </div>
  );
};

export default ScrollTop;
