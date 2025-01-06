import { Footer, Header } from "@/components";
import styles from "@/styles/Company.module.css";

const Company = () => {
  return (
    <>
      <Header />
      <div className={`${styles.introduce}`}>
        <div>
          <div className={`${styles.coverImage}`}>
            {/* 이미지 */}
          </div>
        </div>
        <div>
          <div className={`${styles.introduceText}`}>
            <h1>회사 소개하는 글</h1>
            <div>
              <p>장문의 글을 사용해주세요.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.merit}`}>
        <div className={`${styles.inspiringText}`}>
          <hr />
          <div>
            <h1>장점을 소개하는 문구</h1>
          </div>
          <hr />
        </div>
        <div className={`${styles.advantages}`}>
          <div>
            <div className={`${styles.advantageTitle}`}>
              <h1>장점</h1>
              <hr />
            </div>
          </div>
          <div>
            <div className={`${styles.advantageTitle}`}>
              <h1>장점</h1>
              <hr />
            </div>
          </div>
          <div>
            <div className={`${styles.advantageTitle}`}>
              <h1>장점</h1>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Company;