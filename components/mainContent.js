import React, { Component, useEffect, useRef } from "react";
import Image from "next/image";
import style from "../styles/MainContent.module.css";

import star from "../public/star.svg";
import clarifionAd from "../public/images/clarifion ad.png";
import userImage from "../public/images/user image.png";
import verified from "../public/verified.svg";
import clarifionAirIonizerImage from "../public/images/carifion air ionizer.png";
import bulletPoint from "../public/bullet point.svg";
import blueCheck from "../public/bluecheck.svg";
import percent from "../public/percent.svg";
import rightArrow from "../public/arrow right.svg";
import pipe from "../public/pipe.svg";
import lock from "../public/lock.svg";
import satisfactionSeal from "../public/images/satisfaction seal.png";
import horizontalLine from "../public/horizontal line.svg";

// card icons
import amex from "../public/images/cards/amex.png";
import applePay from "../public/images/cards/apple pay.png";
import gpay from "../public/images/cards/gpay.png";
import mastercard from "../public/images/cards/mastercard.png";
import paypal from "../public/images/cards/paypal.png";
import shopPay from "../public/images/cards/shop pay.png";
import visa from "../public/images/cards/visa.png";

function Stars(props) {
  let starList = [];

  for (let i = 0; i < props.amount; i++) {
    starList.push(
      <Image
        src={star}
        key={i}
        style={{ width: props.starSize, height: props.starSize }}
      />
    );
  }

  return (
    <div className={props.className} style={props.style}>
      {starList}
    </div>
  );
}

function Comment(props) {
  const {
    font,
    fontHeavy,
    fontSuperLight,
    fontSmall,
    fontSSMedium,
    fontSMedium,
    textNullMargin,
    fontDarkGrey,
    fontGrey,
    fontAquamarine,
  } = style;

  return (
    <div
      className={`${style.commentCard} ${style.flexStart} ${style.columnFlex}`}
      style={{ "--gap": "20px" }}
    >
      <div
        className={`${style.flexStart} ${style.commentUser}`}
        style={{ "--gap": "10px" }}
      >
        <Image src={props.src} />
        <div
          className={`${style.columnFlex} ${style.flexCenter}`}
          style={{ "--gap": "5px" }}
        >
          <Stars
            amount={5}
            className={`${style.flexStart} ${style.centerAlign}`}
            style={{ "--gap": "5px" }}
          />
          <div
            className={`${style.flexStart} ${style.centerAlign}`}
            style={{ "--gap": "5px" }}
          >
            <p
              className={`${font} ${fontHeavy} ${fontSSMedium} ${textNullMargin} ${fontDarkGrey}`}
            >
              {props.username}
            </p>
            <Image src={verified} />
            <p
              className={`${font} ${fontSuperLight} ${fontSmall} ${textNullMargin} ${fontAquamarine}`}
            >
              Verified Customer
            </p>
          </div>
        </div>
      </div>
      <div className={`${font} ${fontSuperLight} ${fontSMedium} ${fontGrey}`}>
        {props.children}
      </div>
    </div>
  );
}

function ProductListing(props) {
  const {
    font,
    fontExtraSuperLight,
    fontSuperLight,
    fontSuperSmall,
    fontSmall,
    fontSMedium,
    fontSSMedium,
    fontMMBig,
    fontMBig,
    fontBlack,
    fontGrey,
    fontLightGrey,
    fontBlue,
    fontMetalBlue,
    fontLHeavy,
    textNullMargin,
    textStrikeThrough,
    centerText,
  } = style;

  return (
    <div
      className={`${style.flexCenter} ${
        props.isMobile ? style.columnFlex : ""
      }`}
    >
      <div className={`${style.flexCenter} ${style.centerAlign}`} style={{}}>
        <Image
          src={clarifionAirIonizerImage}
          className={`${style.productImage} ${
            props.isMobile ? style.productImageMobile : ""
          }`}
        />
        <div
          className={`${style.flexSpaceAround} ${style.columnFlex}`}
          style={{ "--gap": "3px" }}
        >
          <div
            className={`${style.flexSpaceBetween}`}
            style={props.isMobile ? { width: `${props.width - 135}px` } : {}}
          >
            <p
              className={`${font} ${fontSuperLight} ${
                props.isMobile ? fontSSMedium : fontMMBig
              } ${fontBlack} ${textNullMargin}`}
            >
              Clarifion Air Ionizer
            </p>
            <div
              className={`${style.flexEnd} ${style.centerAlign}`}
              style={{ "--gap": "10px" }}
            >
              <p
                className={`${font} ${fontLHeavy} ${
                  props.isMobile ? fontSuperSmall : fontSMedium
                } ${fontLightGrey} ${textStrikeThrough} ${textNullMargin}`}
              >
                $180
              </p>
              <p
                className={`${font} ${fontLHeavy} ${
                  props.isMobile ? fontSSMedium : fontMBig
                } ${fontBlue} ${textNullMargin}`}
              >
                $84
              </p>
            </div>
          </div>
          <Stars
            amount={5}
            className={`${style.flexStart} ${style.centerAlign}`}
            starSize="18px"
            style={{ "--gap": "2px", paddingBottom: "10px" }}
          />
          <div
            className={`${style.flexStart} ${style.centerAlign}`}
            style={{ "--gap": "10px" }}
          >
            <Image src={bulletPoint} />
            <p
              className={`${font} ${
                props.isMobile ? fontSmall : fontSMedium
              } ${textNullMargin} ${fontExtraSuperLight} ${fontMetalBlue}`}
            >
              12 left in Stock
            </p>
          </div>
          <p
            className={`${font} ${fontSuperLight} ${fontSMedium} ${textNullMargin} ${fontGrey} ${
              props.isMobile ? style.hidden : ""
            }`}
          >
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
        </div>
      </div>
      <p
        className={`${font} ${fontSuperLight} ${
          props.isMobile ? fontSmall : fontSMedium
        } ${textNullMargin} ${fontGrey} ${centerText} ${
          props.isMobile ? "" : style.hidden
        }`}
      >
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </p>
    </div>
  );
}

function ProductQuality(props) {
  const { font, fontSmall, fontSMedium, fontSuperLight, fontGrey } = style;

  return (
    <div
      className={`${style.flexStart} ${style.centerAlign}`}
      style={{ "--gap": "12px" }}
    >
      <Image
        src={blueCheck}
        style={props.isMobile ? { maxWidth: "16px", height: "auto" } : {}}
      />
      <p
        className={`${font} ${
          props.isMobile ? fontSmall : fontSMedium
        } ${fontSuperLight} ${fontGrey}`}
      >
        {props.children}
      </p>
    </div>
  );
}

function DiscountCard(props) {
  const { font, fontSSMedium, fontSMedium, fontSuperLight, fontBlack } = style;

  return (
    <div
      className={`${style.discountCard} ${style.flexStart} ${style.centerAlign}`}
      style={{ "--gap": "15px" }}
    >
      <Image src={percent} />
      <p
        className={`${font} ${
          props.isMobile ? fontSSMedium : fontSMedium
        } ${fontSuperLight} ${fontBlack}`}
      >
        {props.children}
      </p>
    </div>
  );
}

function ClaimButton(props) {
  const { font, fontSSMedium, fontMMBig, fontHeavy, fontWhite, uppercase } =
    style;

  return (
    <button
      className={`${style.claimButton} ${style.flexCenter} ${style.centerAlign}`}
      onClick={props.onClick}
      style={{ "--gap": "15px" }}
    >
      <p
        className={`${font} ${
          props.isMobile ? fontSSMedium : fontMMBig
        } ${fontHeavy} ${fontWhite} ${uppercase}`}
      >
        {props.children}
      </p>
      <Image src={rightArrow} />
    </button>
  );
}

function ClaimInfo(props) {
  const { font, fontSuperLight, fontGrey, fontSmall } = style;

  return (
    <div
      className={`${style.claimInfo} ${style.flexCenter} ${style.centerAlign} ${style.columnFlex}`}
      style={{ "--gap": "5px" }}
    >
      <div
        className={`${style.flexSpaceAround} ${style.centerAlign}`}
        style={{ width: "100%" }}
      >
        <p className={`${font} ${fontSuperLight} ${fontGrey} ${fontSmall}`}>
          Free Shipping
        </p>
        <Image src={pipe} className={style.grey} />
        <div
          className={`${style.flexCenter} ${style.centerAlign}`}
          style={{ "--gap": "5px" }}
        >
          <Image src={lock} className={style.grey} />
          <p className={`${font} ${fontSuperLight} ${fontGrey} ${fontSmall}`}>
            Secure 256-Bit SSL Encryption
          </p>
        </div>
        <Image
          src={pipe}
          className={props.isMobile ? style.hidden : style.grey}
        />
        <div
          className={`${style.flexCenter} ${
            props.isMobile ? style.hidden : ""
          }`}
          style={{ "--gap": "2px" }}
        >
          <Image src={visa} />
          <Image src={shopPay} />
          <Image src={paypal} />
          <Image src={mastercard} />
          <Image src={gpay} />
          <Image src={applePay} />
          <Image src={amex} />
        </div>
      </div>
      <Image
        src={horizontalLine}
        className={props.isMobile ? "" : style.hidden}
      />

      <div
        className={`${style.flexCenter} ${style.centerAlign} ${
          props.isMobile ? "" : style.hidden
        }`}
        style={{ "--gap": "2px", height: "30px" }}
      >
        <Image src={visa} />
        <Image src={shopPay} />
        <Image src={paypal} />
        <Image src={mastercard} />
        <Image src={gpay} />
        <Image src={applePay} />
        <Image src={amex} />
      </div>
    </div>
  );
}

function NoClaimButton(props) {
  const {
    font,
    fontLight,
    uppercase,
    underline,
    fontRed,
    fontMedium,
    textNullMargin,
    fontSmall,
  } = style;
  const { flexCenter } = style;
  const { noButtonStyle, buttonPointer } = style;

  return (
    <div className={flexCenter}>
      <button
        className={`${noButtonStyle} ${buttonPointer} ${textNullMargin}`}
        onClick={props.onClick}
      >
        <p
          className={`${font} ${fontLight} ${uppercase} ${underline} ${fontRed} ${
            props.isMobile ? fontSmall : fontMedium
          } ${textNullMargin}`}
        >
          No thanks, I don't want this.
        </p>
      </button>
    </div>
  );
}

function SpecialPriceTitle(props) {
  return (
    <h1 className={props.className}>
      <span className={`${style.fontBlue} ${style.fontSuperLight}`}>
        ONE TIME ONLY
      </span>{" "}
      Special Price for 6 Extra Clarifion For Only{" "}
      <span className={`${style.fontBlue} ${style.fontSuperLight}`}>
        $14 Each
      </span>{" "}
      ($84.00 Total!)
    </h1>
  );
}

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
  }

  updateWidth = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    this.updateWidth();

    window.addEventListener("resize", this.updateWidth);
  }

  render() {
    const desktopLayout = `${style.mainContentCard} ${style.flexCenter}`;
    const mobileLayout = `${style.mainContentCardMobile} ${style.flexStart} ${style.columnFlex}`;

    return (
      <div
        className={this.state.width < 1000 ? mobileLayout : desktopLayout}
        style={{ "--gap": this.state.width < 1000 ? "10px" : "36px" }}
      >
        <div>
          {this.state.width < 1000 ? (
            <SpecialPriceTitle
              className={`${style.font} ${style.fontLHeavy} ${style.fontBig} ${style.fontBlack} ${style.centerText}`}
            />
          ) : (
            ""
          )}
          <Image src={clarifionAd} className={style.imageAd} />
          {this.state.width < 1000 ? (
            ""
          ) : (
            <Comment src={userImage} username="Ken T.">
              “As soon as the Clarifions arrived I put one in my bedroom. This
              was late in the afternoon. When I went to the bedroom in the
              evening it smelled clean. When I went to bed I felt I could
              breathe better. Wonderful.”
            </Comment>
          )}
        </div>
        <div
          className={`${style.flexStart} ${style.columnFlex}`}
          style={{ "--gap": "16px" }}
        >
          {this.state.width >= 1000 ? (
            <SpecialPriceTitle
              className={`${style.font} ${style.fontLHeavy} ${style.fontExtraLarge} ${style.fontBlack} `}
            />
          ) : (
            ""
          )}
          <ProductListing
            isMobile={this.state.width < 1000 ? true : false}
            width={this.state.width}
          />
          <div>
            <ProductQuality isMobile={this.state.width < 1000 ? true : false}>
              Negative Ion Technology may{" "}
              <span className={style.fontHeavy}>help with allergens</span>
            </ProductQuality>
            <ProductQuality isMobile={this.state.width < 1000 ? true : false}>
              Designed for{" "}
              <span className={style.fontHeavy}>air rejuvenation</span>
            </ProductQuality>
            <ProductQuality isMobile={this.state.width < 1000 ? true : false}>
              <span className={style.fontHeavy}>Perfect for every room</span> in
              all types of places
            </ProductQuality>
          </div>
          <DiscountCard isMobile={this.state.width < 1000 ? true : false}>
            Save <span className={style.fontBlue}>53%</span> and get{" "}
            <span className={style.fontBlue}>6 extra Clarifision</span> for only{" "}
            <span className={style.fontBlue}>$14 Each</span>.
          </DiscountCard>
          <ClaimButton
            onClick={() => window.alert("claimed")}
            isMobile={this.state.width < 1000 ? true : false}
          >
            Yes - Claim my discount
          </ClaimButton>
          <ClaimInfo isMobile={this.state.width < 1000 ? true : false} />
          <NoClaimButton
            onClick={() => window.alert("Not claimed")}
            isMobile={this.state.width < 1000 ? true : false}
          />
          <div
            className={`${style.flexCenter} ${style.centerAlign}`}
            style={{ "--gap": "20px" }}
          >
            <Image
              src={satisfactionSeal}
              style={
                this.state.width < 1000
                  ? { maxWidth: "48px", height: "auto" }
                  : {}
              }
            />
            <p
              className={`${style.font} ${style.fontSuperLight} ${
                this.state.width < 1000 ? style.fontSmall : style.fontSMedium
              } ${style.fontGrey}`}
            >
              If you are not completely thrilled with your Clarifion - We have
              a&nbsp;
              <span className={`${style.fontHeavy}`}>
                30 day satisfaction guarantee
              </span>
              . Please refer to our return policy at the bottom of the page for
              more details. Happy Shopping!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
