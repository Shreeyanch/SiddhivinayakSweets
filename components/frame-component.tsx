import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  lETTERLOGO2?: string;

  /** Style props */
  propFlexDirection?: CSSProperties["flexDirection"];

  /** Action props */
  onLETTERLOGOClick?: () => void;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  lETTERLOGO2,
  propFlexDirection,
  onLETTERLOGOClick,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  const onLETTERLOGOClick1 = useCallback(() => {
    window.open("https://www.samparka.info/");
  }, []);

  return (
    <div
      className={[styles.frameWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.poweredByParent}>
        <div className={styles.poweredBy}>powered by</div>
        <img
          className={styles.letterLogo2}
          alt=""
          src={lETTERLOGO2}
          onClick={onLETTERLOGOClick}
        />
      </div>
    </div>
  );
};

export default FrameComponent;
