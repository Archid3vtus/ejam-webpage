import Image from "next/image";
import React, { Component } from "react";
import style from "../styles/Logobar.module.css";
import clarifion from "../public/images/clarifion logo.png";
import mcafee from "../public/images/McAfee.png";
import norton from "../public/images/Norton.png";

export default class logobar extends Component {
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
    return (
      <div
        className={`${style.logobar} ${
          this.state.width < 1000 ? style.logobarMobile : ""
        }`}
      >
        <div>
          <Image src={clarifion} />
        </div>
        <div>
          <Image src={mcafee} style={{ paddingRight: "20px" }} />
          <Image src={norton} />
        </div>
      </div>
    );
  }
}
