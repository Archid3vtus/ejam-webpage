import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Logobar from "../components/logobar";
import Step from "../components/step";
import Footer from "../components/footer";
import NewMainContent from "../components/newMainContent";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />

      <Logobar />

      <div className={styles.title}>
        <div>
          <h1>Wait! Your Order In Progress.</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
        </div>
      </div>

      <div className={styles.stepBar}>
        <Step stepState="greenCheck">
          <span>Step 1 : </span>Cart Review
        </Step>
        <Step stepState="greenCheck">
          <span>Step 2 : </span>Checkout
        </Step>
        <Step stepState="step3selected">
          <span>Step 3 : </span>Special Offer
        </Step>
        <Step stepState="step4">
          <span>Step 4 : </span>Confirmation
        </Step>
      </div>

      <NewMainContent />

      <Footer />
    </div>
  );
}
