import Image from "next/image";
import React, { Component } from "react";
import style from "../styles/Footer.module.css";

import pipe from "../public/pipe.svg";
import lock from "../public/lock.svg";

export default class footer extends Component {
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
        className={`${style.footer} ${
          this.state.width < 1000 ? style.footerMobile : ""
        }`}
      >
        <div>
          <p>Copyright (c) {new Date().getFullYear()}</p>
          <Image src={pipe} />
          <p>clarifionsupport@clarifion.com</p>
        </div>
        <div>
          <Image src={lock} />
          <p>Secure 256-bit SSL encryption.</p>
        </div>
      </div>
    );
  }
}
