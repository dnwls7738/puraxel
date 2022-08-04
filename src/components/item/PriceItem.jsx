import React from "react";
import { Link } from "react-router-dom";

function PriceItem() {
  return (
    <>
      <div className="cont">
        <div className="contName">
          <span className="contHeader">쇼핑몰</span>
          <p className="contHeader2">추천제품</p>
        </div>

        <div className="contPrice">
          <div className="price1">
            <div className="name">
              <p className="text">퓨라셀 ME</p>
              <p className="num">1,890,000원</p>
            </div>
            <div className="sub">
              <p className="subText">
                12개월 <em>월 157,500원</em>
              </p>
            </div>
          </div>
          <div className="price2">
            <div className="name">
              <p className="text">
                퓨라셀 ME+ <br />
                퓨라더마앰플
              </p>
              <p className="num">
                <em>2,433,000원 -&gt;</em> 1,890,000원
              </p>
            </div>
            <div className="sub">
              <p className="sale">23% off</p>
              <p className="subText">
                12개월 <em>월 157,500원</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceItem;
