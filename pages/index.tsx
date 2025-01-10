import { WelcomeAnimation } from "@/components";
import styles from "@/styles/Landing.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const sampleImages = [
  {
    src: require('@/public/images/landingSample1.jpg'),
    alt: 'smapleImage1'
  },
  {
    src: require('@/public/images/landingSample2.jpg'),
    alt: 'smapleImage2'
  },
  {
    src: require('@/public/images/landingSample3.jpg'),
    alt: 'smapleImage3'
  },
  {
    src: require('@/public/images/landingSample4.jpg'),
    alt: 'smapleImage4'
  }
];

const Landing = () => {
  const router = useRouter();

  return (
    <>
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
          <div className={`${styles.sampleImages}`}>
            {
              sampleImages.map((sampleImage) => (
                <div>
                  <Image src={sampleImage.src} alt={sampleImage.alt} />
                </div>
              ))
            }
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