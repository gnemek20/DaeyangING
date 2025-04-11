import styles from "@/styles/WelcomeAnimation.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Zipper = ({ animationCounter }: { animationCounter: number }) => {
  const sliderIcon = {
    src: require('@/public/icons/slider.svg'),
    alt: 'sliderIcon'
  }

  return (
    <div className={`${styles.zipper} ${styles.zipperShow} ${animationCounter >= 1 && styles.playAnimation}`}>
      <hr className={`${styles.zipperLine}`} />
      <Image className={`${styles.sliderIcon} ${styles.sliderMove} ${animationCounter >= 2 && styles.playAnimation}`} src={sliderIcon.src} alt={sliderIcon.alt} />
      <h1 className={`${styles.zipperText} ${styles.reversal}`}>IMPRESSIVE</h1>
    </div>
  );
}

const TypingText = ({ className, value, delay, playAnimation }: { className?: string, value: string, delay: number, playAnimation: boolean }) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (!playAnimation) return;

    let string = '';
    let i = 0;
    const typing = setInterval(() => {
      if (i < value.length) {
        string += value.charAt(i++);
        setText(string);
      }
      else {
        clearInterval(typing);
      }
    }, delay);
  }, [playAnimation]);

  return (
    <p className={`${styles.typingText} ${styles.typingShow} ${playAnimation && styles.playAnimation} ${className}`}>{ text }</p>
  );
}

const WelcomeAnimation = () => {
  const [animationCounter, setAnimationCounter] = useState<number>(0);

  const logoIcon = {
    src: require('@/public/icons/logo.svg'),
    alt: 'logoIcon'
  }

  const downArrowIcon = {
    src: require('@/public/icons/downArrow.svg'),
    alt: 'downArrowIcon'
  }

  useEffect(() => {
    let counter = 0;
    let delay = 1750;

    const plusAnimationCounter = (counter: number, delay: number) => {
      setTimeout(() => setAnimationCounter(counter), delay);
    }

    // show zipper
    plusAnimationCounter(++counter, delay);
    
    // move slider
    delay += 1000;
    plusAnimationCounter(++counter, delay);
    
    // show "부드럽게"
    delay += 750;
    plusAnimationCounter(++counter, delay);
    
    // inverse background
    delay += 1000 + 750;
    plusAnimationCounter(++counter, delay);
    
    // show "날개"
    delay += 1200;
    plusAnimationCounter(++counter, delay);
    
    // typing "가 될 수 있도록"
    delay += 750;
    plusAnimationCounter(++counter, delay);

    // erase panel
    delay += 1250 + (175 * 9);
    plusAnimationCounter(++counter, delay);
    
    // expand logo line
    delay += 500 + 1250;
    plusAnimationCounter(++counter, delay);
    
    // show "패션에 새로운 날개를 달다"
    delay += 500;
    plusAnimationCounter(++counter, delay);
    
    // show logo
    delay += 750;
    plusAnimationCounter(++counter, delay);
    
    // show emphasize scroll
    delay += 1250;
    plusAnimationCounter(++counter, delay);
  }, []);

  return (
    <div className={`${styles.canvas}`}>
      <div className={`${styles.backgroundInverse} ${animationCounter >= 4 && styles.playAnimation} ${animationCounter >= 7 && styles.panelFadeOut}`}>
        <TypingText value="당신의 지퍼가" delay={200} playAnimation={animationCounter >= 0} />
        <p className={`${styles.softSlideIn} ${animationCounter >= 3 && styles.playAnimation}`}>부드럽고</p>
        <Zipper animationCounter={animationCounter} />
        <p className={`${styles.reversal}`}>인상적인</p>
        <h1 className={`${styles.reversal} ${styles.wingFadeIn} ${animationCounter >= 5 && styles.playAnimation}`}>날개</h1>
        <TypingText className={`${styles.reversal}`} value="가 될 수 있도록" delay={175} playAnimation={animationCounter >= 6} />
      </div>
      <div>
        <p className={`${styles.logoTextSlideIn} ${animationCounter >= 9 && styles.playAnimation}`}>패션에 새로운 날개를 달다</p>
        <hr className={`${styles.logoLine} ${styles.logoLineExpand} ${animationCounter >= 8 && styles.playAnimation}`} />
        <Image className={`${styles.logo} ${styles.logoSlideIn} ${animationCounter >= 10 && styles.playAnimation}`} src={logoIcon.src} alt={logoIcon.alt} />
      </div>
      <div className={`${styles.emphasizeScrollFadeIn} ${animationCounter >= 11 && styles.playAnimation}`}>
        <Image className={`${styles.emphasizeScroll} ${styles.emphasizeScrollSliding}`} src={downArrowIcon.src} alt={downArrowIcon.alt} />
      </div>
    </div>
  );
}

export default WelcomeAnimation;