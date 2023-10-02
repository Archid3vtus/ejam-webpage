import React, { Component } from "react";
import style from "../styles/Navbar.module.css";
import checkIcon from "../public/check.svg";
import truckIcon from "../public/truck.svg";
import heartIcon from "../public/heart.svg";
import check2Icon from "../public/check2.svg";
import leftArrow from "../public/left arrow.svg";
import rightArrow from "../public/right arrow.svg";
import Image from "next/image";

function Option(props) {
  return (
    <div className={props.className}>
      <Image src={props.icon} />
      <p>{props.children}</p>
    </div>
  );
}

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      selectionQueue: ["check", "truck", "heart", "check2"],
    };
  }

  updateWidth = () => {
    this.setState({ width: window.innerWidth });
  };

  rotateSelection = () => {
    let selectionQueueTmp = [...this.state.selectionQueue];
    selectionQueueTmp.push(selectionQueueTmp.shift());

    this.setState({ selectionQueue: [...selectionQueueTmp] });
  };

  reverseRotateSelection = () => {
    let selectionQueueTmp = [...this.state.selectionQueue];
    selectionQueueTmp.unshift(selectionQueueTmp.pop());

    this.setState({ selectionQueue: [...selectionQueueTmp] });
  };

  componentDidMount() {
    this.updateWidth();

    window.addEventListener("resize", this.updateWidth);
    setInterval(this.rotateSelection, 8000);
  }

  render() {
    return (
      <div
        className={`${style.navbar} ${
          this.state.width < 1000 ? style.navbarMobile : ""
        }`}
      >
        <Image
          src={leftArrow}
          className={this.state.width >= 1000 ? style.hidden : ""}
          onClick={this.reverseRotateSelection}
        />
        <Option
          icon={checkIcon}
          className={
            this.state.width < 1000 && this.state.selectionQueue[0] !== "check"
              ? style.hidden
              : ""
          }
        >
          30-DAY SATISFACTION GUARANTEE
        </Option>
        <Option
          icon={truckIcon}
          className={
            this.state.width < 1000 && this.state.selectionQueue[0] !== "truck"
              ? style.hidden
              : ""
          }
        >
          Free delivery on orders over $40.00
        </Option>
        <Option
          icon={heartIcon}
          className={
            this.state.width < 1000 && this.state.selectionQueue[0] !== "heart"
              ? style.hidden
              : ""
          }
        >
          50.000+ HAPPY CUSTOMERS
        </Option>
        <Option
          icon={check2Icon}
          className={
            this.state.width < 1000 && this.state.selectionQueue[0] !== "check2"
              ? style.hidden
              : ""
          }
        >
          100% Money Back Guarantee
        </Option>
        <Image
          src={rightArrow}
          className={this.state.width >= 1000 ? style.hidden : ""}
          onClick={this.rotateSelection}
        />
      </div>
    );
  }
}
