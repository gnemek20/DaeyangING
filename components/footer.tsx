import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={`${styles.brand}`}>
        <p>패션에 새로운 날개를 달다 - 대양ING</p>
      </div>
      <div className={`${styles.footer}`}>
        <div>
          <p>대양ING</p>
          <p>서울특별시 종로구 김상옥록 59, 한아빌딩 3층</p>
        </div>
        <div>
          <div>
            <p>사업자번호: 869-81-02857</p>
            <p>도매 및 소매, 제조업: ZIPPER 외 의류 부자재</p>
          </div>
          <div>
            <p>전화번호: 010-3744-3084</p>
            <p>이메일: kyounghwa_kim@daeyanging.com</p>
          </div>
        </div>
        <div>
          <p>주식회사 대양아이엔지 ⓒ</p>
        </div>
      </div>
    </>
  );
}

export default Footer;