import React, { Component } from "react";
import Image from "next/image";
import style from "../styles/Step.module.css";
import greenCheck from "../public/green check.svg";
import step3Selected from "../public/step 3 filled.svg";
import step4 from "../public/step 4 blank.svg";

export default class step extends Component {
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
    const mapStepStateToVector = {
      greenCheck: greenCheck,
      step3selected: step3Selected,
      step4: step4,
    };

    return (
      <div className={this.state.width < 1000 ? style.stepMobile : style.step}>
        <Image
          src={mapStepStateToVector[this.props.stepState]}
          className={this.state.width < 1000 ? style.iconMobile : ""}
        />
        {this.props.children}
      </div>
    );
  }
}
