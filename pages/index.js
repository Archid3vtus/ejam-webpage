import React, { Component } from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Logobar from "../components/logobar";
import Step from "../components/step";
import Footer from "../components/footer";
import Maincontent from "../components/mainContent";

export default class Home extends Component {
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
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar />

        <Logobar />

        <div
          className={`${styles.title} ${
            this.state.width < 1000 ? styles.titleMobile : ""
          }`}
        >
          <div>
            <h1>Wait! Your Order In Progress.</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
          </div>
        </div>

        <div className={styles.stepBar}>
          <Step stepState="greenCheck">
            <p>
              <span>Step 1 : </span>Cart Review
            </p>
          </Step>
          <Step stepState="greenCheck">
            <p>
              <span>Step 2 : </span>Checkout
            </p>
          </Step>
          <Step stepState="step3selected">
            <p className={this.state.width < 1000 ? styles.bold : ""}>
              <span>Step 3 : </span>Special Offer
            </p>
          </Step>
          <Step stepState="step4">
            <p>
              <span>Step 4 : </span>Confirmation
            </p>
          </Step>
        </div>

        <Maincontent />

        <Footer />
      </div>
    );
  }
}
