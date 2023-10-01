import React from "react";
import style from "../styles/Navbar.module.css";
import checkIcon from "../public/check.svg";
import truckIcon from "../public/truck.svg";
import heartIcon from "../public/heart.svg";
import check2Icon from "../public/check2.svg";
import Image from "next/image";

function Option(props) {
  return (
    <div>
      <Image src={props.icon} />
      <p>{props.children}</p>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <Option icon={checkIcon}>30-DAY SATISFACTION GUARANTEE</Option>
      <Option icon={truckIcon}>Free delivery on orders over $40.00</Option>
      <Option icon={heartIcon}>50.000+ HAPPY CUSTOMERS</Option>
      <Option icon={check2Icon}>100% Money Back Guarantee</Option>
    </div>
  );
}
