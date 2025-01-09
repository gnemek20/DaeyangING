import { Footer, Header, WelcomeAnimation } from "@/components";
import styles from "@/styles/Landing.module.css";
import { useRouter } from "next/router";

const Landing = () => {
  const router = useRouter();

  return (
    <>
      {/* <Header /> */}
      <WelcomeAnimation />
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
            <button onClick={() => router.push('/product')}>More View</button>
            <button onClick={() => router.push('/request')}>Contact</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;