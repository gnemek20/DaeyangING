import { useObserveElementHandler } from "@/functions/observeElement";
import styles from "@/styles/Company.module.css";
import animations from "@/styles/globalAnimations.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const coverImage = {
  src: require('@/public/images/companyCover.jpg'),
  alt: 'coverImage'
}

const advantage1Icon = {
  src: require('@/public/icons/advantage1.svg'),
  alt: 'advantage1'
}
const advantage2Icon = {
  src: require('@/public/icons/advantage2.svg'),
  alt: 'advantage2'
}
const advantage3Icon = {
  src: require('@/public/icons/advantage3.svg'),
  alt: 'advantage3'
}

const Company = () => {
  const introduceRef = useRef<HTMLDivElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);
  
  const [introduceAnimationCounter, setIntroduceAnimationCounter] = useState<number>(0);
  const [advantagesAnimationCounter, setAdvantagesAnimationCounter] = useState<number>(0);
  
  const observeIntroduceElement = useObserveElementHandler(introduceRef);
  const observeAdvantagesElement = useObserveElementHandler(advantagesRef);

  useEffect(() => {
    if (!observeIntroduceElement) return;

    let delay = 0;

    setIntroduceAnimationCounter(1);

    delay += 500;
    setTimeout(() => setIntroduceAnimationCounter(2), delay);

    delay += 250;
    setTimeout(() => setIntroduceAnimationCounter(3), delay);
  }, [observeIntroduceElement]);

  useEffect(() => {
    if (!observeAdvantagesElement) return;

    let delay = 0;

    setAdvantagesAnimationCounter(1);

    delay += 750;
    setTimeout(() => setAdvantagesAnimationCounter(2), delay);
  }, [observeAdvantagesElement]);

  return (
    <>
      <div ref={introduceRef} className={`${styles.introduce}`}>
        <div>
          <div className={`animation ${styles.coverImage} ${introduceAnimationCounter >= 1 ? animations.fadeLeft : ''}`}>
            <Image src={coverImage.src} alt={coverImage.alt} />
          </div>
        </div>
        <hr />
        <div>
          <div className={`${styles.introduceText}`}>
            <h1 className={`animation ${introduceAnimationCounter >= 2 ? animations.fadeUp : ''}`}>대양 아이엔지란?</h1>
            <div className={`animation ${introduceAnimationCounter >= 3 ? animations.fadeUp : ''}`}>
              <p>국내 최고의 패션 리더 그룹사들의 파트너로서</p>
              <p>20여 년간 끊임없는 신뢰와 열정으로 함께 걸어가고 있습니다.</p>
              <br />
              <p>최상의 품질, 빠른 생산 납기 시스템으로</p>
              <p>국내 20여 브랜드에 납품하고 있으며,</p>
              <br />
              <p>희망과 꿈을 이루어가는 고객사들의</p>
              <p>최고의 파트너가 되도록 더욱 노력하겠습니다.</p>
              <br />
              <p>패션의 완성을 위한 최고의 선택!</p>
              <p>Zipper 전문 회사 대양ING와 함께 경험해보세요.</p>
              <br />
              <p>주식회사 대양아이엔지ⓒ</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.merit}`}>
        <div className={`animation ${styles.inspiringText} ${advantagesAnimationCounter >= 1 ? animations.fadeUp : ''}`}>
          <hr />
          <div>
            <h1>최고의 작품을 위해</h1>
            <h1>대양ING가 약속드립니다.</h1>
          </div>
          <hr />
        </div>
        <div ref={advantagesRef} className={`${styles.advantages} ${advantagesAnimationCounter >= 2 ? animations.list : ''}`}>
          <div className={`animation`}>
            <Image src={advantage1Icon.src} alt={advantage1Icon.alt} />
            <div className={`${styles.advantageTitle}`}>
              <h1>빠른 응대</h1>
              <hr />
            </div>
          </div>
          <div className={`animation`}>
            <Image src={advantage2Icon.src} alt={advantage2Icon.alt} />
            <div className={`${styles.advantageTitle}`}>
              <h1>완벽한 품질</h1>
              <hr />
            </div>
          </div>
          <div className={`animation`}>
            <Image src={advantage3Icon.src} alt={advantage3Icon.alt} />
            <div className={`${styles.advantageTitle}`}>
              <h1>신속한 납기</h1>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;