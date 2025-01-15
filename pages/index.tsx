import { WelcomeAnimation } from "@/components";
import { useObserveElementHandler } from "@/functions/observeElement";
import styles from "@/styles/Landing.module.css";
import animations from "@/styles/globalAnimations.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

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

  const inspiringTextRef = useRef<HTMLDivElement>(null);
  const inspiringSightsHr = useRef<HTMLHRElement>(null);

  const [animationCounter, setAnimationCounter] = useState<number>(0);

  const observeElementHandler = useObserveElementHandler(inspiringSightsHr);

  useEffect(() => {
    if (!observeElementHandler) return;

    let delay = 0;

    setAnimationCounter(1);

    delay += 1500;
    setTimeout(() => setAnimationCounter(2), delay);

    delay += 750;
    setTimeout(() => setAnimationCounter(3), delay);
  }, [observeElementHandler]);

  return (
    <>
      <WelcomeAnimation />
      <div className={`${styles.summary}`}>
        <div ref={inspiringTextRef} className={`${styles.inspiringText} ${useObserveElementHandler(inspiringTextRef) ? animations.fadeUp : ''}`}>
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
              sampleImages.map((sampleImage, index) => (
                <div className={`animation ${animationCounter >= 2 ? animations.slideUp : ''}`} key={index}>
                  <Image src={sampleImage.src} alt={sampleImage.alt} />
                </div>
              ))
            }
          </div>
          <hr ref={inspiringSightsHr} className={`animation ${animationCounter >= 1 ? animations.expand : ''}`} />
          <div className={`animation ${styles.actionButtons} ${animationCounter >= 3 ? animations.fadeIn : ''}`}>
            <button onClick={() => router.push('/product')}>More View</button>
            <button onClick={() => router.push('/request')}>Contact</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;