import { Footer, Header } from "@/components";
import styles from "@/styles/Guide.module.css";

const Guide = () => {
  return (
    <>
      <div className={`${styles.guide}`}>
        <div className={`${styles.map}`}>
          <div className={`${styles.naver}`} />
          <div className={`${styles.cover}`} />
        </div>
        <div className={`${styles.inform}`}>
          <div>
            <p>서울특별시 종로구 김상옥로 59,</p>
            <p>한아빌딩 3층</p>
          </div>
          <hr />
          <div>
            <p>동대문역 기준 ~위치</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guide;