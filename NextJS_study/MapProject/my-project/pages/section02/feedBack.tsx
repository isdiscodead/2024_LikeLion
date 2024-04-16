import Image from "next/image";
import styles from "../../styles/header.module.scss";
import { Fragment } from "react";
import HeaderComponent from "@/components/common/Header";
import Link from "next/link";
import { AiOutlineShareAlt } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";

export default function FeedBack() {
  return (
    <>
      <HeaderComponent rightElements={[
        <button onClick={() => {
          alert("복사")
        }}
          className={styles.box}
          key={"button"}
        >
          <AiOutlineShareAlt size={20} />
        </button>,
        <Link href="/feedback" className={styles.box} key="link">
          <VscFeedback size={20} />
        </Link>
      ]}/>
      <main></main>
    </>
  );
}
