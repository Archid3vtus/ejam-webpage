import Image from "next/image";
import React from "react";
import style from "../styles/Logobar.module.css";
import clarifion from "../public/images/clarifion logo.png";
import mcafee from "../public/images/McAfee.png";
import norton from "../public/images/Norton.png";

export default function Logobar() {
  return (
    <div className={style.logobar}>
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
