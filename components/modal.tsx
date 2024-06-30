import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./modal.module.css";

export type ModalType = {
  className?: string;
};

const Modal: NextPage<ModalType> = ({ className = "" }) => {
  const router = useRouter();

  const onStarRatingClick = useCallback(() => {
    window.location.href = "https://reviewthis.biz/SiddhibinayakSweets";
  }, []);

  const onStarRatingClick1 = useCallback(() => {
    router.push("/feed-back");
  }, [router]);

  return (
    <div className={[styles.modal, className].join(" ")}>
      <div className={styles.pleaseRateYour}>Please rate your experience.</div>
      <div className={styles.starRatingParent}>
        <button className={styles.starRating} onClick={onStarRatingClick}>
          <div className={styles.excellent}>EXCELLENT:</div>
          <div className={styles.starGroup}>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded3}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded3}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
          </div>
        </button>
        <button className={styles.starRating1} onClick={onStarRatingClick}>
          <div className={styles.good}>GOOD:</div>
          <div className={styles.starGroup1}>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded3}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar1.svg" />
            </div>
          </div>
        </button>
        <button className={styles.starRating2} onClick={onStarRatingClick1}>
          <div className={styles.good}>AVERAGE:</div>
          <div className={styles.starGroup1}>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded12}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar1.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar1.svg" />
            </div>
          </div>
        </button>
        <button className={styles.starRating3} onClick={onStarRatingClick1}>
          <div className={styles.fair}>FAIR:</div>
          <div className={styles.starGroup1}>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded3}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar1.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar1.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar1.svg" />
            </div>
          </div>
        </button>
        <button className={styles.starRating4} onClick={onStarRatingClick1}>
          <div className={styles.needImprovement}>
            <span className={styles.needImprovementTxtContainer}>
              <p className={styles.need}>NEED</p>
              <p className={styles.need}>IMPROVEMENT:</p>
            </span>
          </div>
          <div className={styles.starGroup1}>
            <div className={styles.buttonrounded3}>
              <img className={styles.iconstar} alt="" src="/iconstar.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar1.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar1.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar1.svg" />
            </div>
            <div className={styles.buttonrounded}>
              <img className={styles.iconstar} alt="" src="/iconstar1.svg" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Modal;
