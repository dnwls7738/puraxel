import React from "react";
import Price1 from "../../assets/img/price1.png";
import Price2 from "../../assets/img/price2.png";
import Price3 from "../../assets/img/price3.png";

function PriceItem() {
  return (
    <>
      <div className="contPrice">
        <div className="priceConts">
          <div className="priceCont">
            <img src={Price1} alt="" />
            <h1>퓨라셀 ME</h1>
            <div className="mainPrice">
              <p className="mainText2">₩1,890,000</p>
            </div>
            <div className="subPrice">
              <p className="subText1">12개월</p>
              <p className="subText2">월 157,500원</p>
            </div>
          </div>
          <div className="priceCont">
            <img src={Price1} alt="" />
            <h1>
              퓨라셀ME+
              <br /> 퓨라더마앰플
            </h1>
            <div className="mainPrice2">
              <p className="mainText1">23% off</p>
              <p className="mainText2">₩1,890,000</p>
            </div>
            <div className="subPrice">
              <p className="subText1">12개월</p>
              <p className="subText2">월 157,500원</p>
            </div>
          </div>
        </div>
        <div className="priceConts">
          <div className="priceCont">
            <img src={Price2} alt="" />
            <h1>퓨라셀 ME</h1>
            <div className="mainPrice">
              <p className="mainText2">₩1,890,000</p>
            </div>
            <div className="subPrice">
              <p className="subText1">12개월</p>
              <p className="subText2">월 157,500원</p>
            </div>
          </div>
          <div className="priceCont">
            <img src={Price3} alt="" />
            <h1>
              퓨라셀ME+
              <br /> 퓨라더마앰플
            </h1>
            <div className="mainPrice2">
              <p className="mainText1">23% off</p>
              <p className="mainText2">₩1,890,000</p>
            </div>
            <div className="subPrice">
              <p className="subText1">12개월</p>
              <p className="subText2">월 157,500원</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceItem;
