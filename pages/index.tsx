import { Footer, Header } from "@/components";
import styles from "@/styles/Landing.module.css";

const Landing = () => {
  return (
    <>
      <Header />
      <div>
        {/* 랜딩 애니메이션 */}
      </div>
      <div className={`${styles.summary}`}>
        <div className={`${styles.inspiringText}`}>
          <hr />
          <div>
            <h1>패션의 완성을 위해 달리는 당신에게</h1>
            <h1>날개를 달아드리겠습니다.</h1>
          </div>
          <hr />
        </div>
        <div className={`${styles.inspiringSights}`}>
          <div className={`${styles.comeDownImages}`}>
            {/* 이미지들 추가 */}
          </div>
          <hr />
          <div className={`${styles.actionButtons}`}>
            <button>More View</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;