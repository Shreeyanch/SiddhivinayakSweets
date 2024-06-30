import type { NextPage } from "next";
import Form from "../components/form";
import FrameComponent from "../components/frame-component";
import styles from "./feed-back.module.css";

const FeedBack: NextPage = () => {
  return (
    <div className={styles.feedback}>
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeader}>
          <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
          <div className={styles.siddhivinayak}>SIDDHIVINAYAK</div>
          <div
            className={styles.sweetsAndSavouries}
          >{`SWEETS AND SAVOURIES `}</div>
        </div>
        <Form />
      </div>
      <FrameComponent
        lETTERLOGO2="/letter-logo-2@2x.png"
        propFlexDirection="row"
      />
    </div>
  );
};

export default FeedBack;
