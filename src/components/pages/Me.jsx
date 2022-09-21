import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import MeCont from "../includes/MeCont";
import Header from "../layout/Header";

function Me() {
  const el = useRef();
  const [close, SetClose] = useState(true);

  const hadleClose = (e) => {
    if (close && (el.current || el.current.contains(e.target))) SetClose(true);
  };

  useEffect(() => {
    window.addEventListener("click", hadleClose);
  });

  return (
    <>
      {/* <div
        // ref={el}
        style={{
          background: "rgba(0, 0, 0, 0.4)",
          width: "100vw",
          height: "100vh",
          zIndex: 3,
          position: "absolute",
          backdropFilter: "blur(0.25rem)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          fontWeight: 600,
          color: "#55576F",
        }}
      >
        좌우로 슬라이드 해주세요
      </div> */}
      <Header name="PURAXEL-Me" text="shop" />
      <MeCont />
    </>
  );
}

export default Me;
