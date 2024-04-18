import Image from "next/image";
import styles from "./page.module.css";
import { Fragment } from "react";
import HeaderComponent from "@/components/common/Header";
import { AiOutlineShareAlt } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import Link from "next/link";
import MapSection from "@/components/home/MapSection";
import DetailSection from "@/components/home/DetailSection";

export default function Home() {
  return (
    <Fragment>
      <HeaderComponent rightElements={[
        <button
          onClick={() => {
            alert("복사");
          }}
          className={styles.box}
          style={{ marginRight: 8 }}
          key="button"
          >
            <AiOutlineShareAlt size={20} />
        </button>,
        <Link href='/feedback' className={styles.box} key='link'>
          <VscFeedback size={20}/>
        </Link>
      ]}/>

      <main style={{ position: 'relative', width: '100%', height: '100%' }}>
        <MapSection /> 
        <DetailSection />
      </main>
    </Fragment>
  );
}
