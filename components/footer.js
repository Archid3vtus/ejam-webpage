import Image from "next/image";
import React from "react";
import style from "../styles/Footer.module.css";

import pipe from "../public/pipe.svg";
import lock from "../public/lock.svg";

export default function Footer() {
  return (
    <div className={style.footer}>
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
