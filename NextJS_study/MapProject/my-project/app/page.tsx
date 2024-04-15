import Image from "next/image";
import styles from "./page.module.css";
import { Fragment } from "react";
import HeaderComponent from "@/components/common/Header";

export default function Home() {
  return (
    <Fragment>
      <HeaderComponent />
      <main></main>
    </Fragment>
  );
}
