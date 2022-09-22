import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import MeCont from "../includes/MeCont";
import Header from "../layout/Header";

function Me() {
  return (
    <>
      <Header name="PURAXEL-Me" text="shop" />
      <MeCont />
    </>
  );
}

export default Me;
