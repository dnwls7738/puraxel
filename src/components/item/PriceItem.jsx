import React from "react";

function PriceItem() {
  return (
    <>
      <div className="cont">
        <div className="contName">
          <span className="contHeader">쇼핑몰</span>
          <p className="contHeader2">추천제품</p>
        </div>

        <div className="contPrice">
          <div className="price">
            <div className="priceMain">
              <p className="priceName">퓨라셀 ME</p>
              <p className="mainPrice">1,890,000원</p>
            </div>

            <div className="priceSub">
              <p className="month">12개월</p>
              <p className="subPrice">월 157,500원</p>
            </div>
          </div>
          <div className="price2">
            <div className="priceMain">
              <p className="priceName">
                퓨라셀 ME+ <br />
                퓨라더마앰플
              </p>
              <p className="mainPrice">
                <em className="mainSub">2,433,000원</em> -&gt; 1,890,000원
              </p>
            </div>
            <p className="discount">
              <p className="disPrice">23% off</p>
            </p>
            <div className="priceSub">
              <p className="month">12개월</p>
              <p className="subPrice">월 164,800원</p>
            </div>
          </div>
          <div className="details">
            <span className="detailText">
              제품을 어떻게 사용하고 얼마나 해도 되는지 등 상세한 과정과 내용이
              필요합니다. 그에 따른 사용 방법이 아래 이미지 또는 영상으로 들어갈
              예정입니다. 콘텐츠 형식은 정헤져 있지 않습니다. 콘텐츠에 따라 사용
              방법 디자인이 크게 달라질 수 있습니다.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceItem;
