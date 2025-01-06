import styles from "@/styles/Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const homeIcon = {
  src: require('@/public/icons/home.svg')
}
const companyIcon = {
  src: require('@/public/icons/company.svg')
}
const zipperIcon = {
  src: require('@/public/icons/zipper.svg')
}
const adviceIcon = {
  src: require('@/public/icons/advice.svg')
}
const locationIcon = {
  src: require('@/public/icons/location.svg')
}

const Header = () => {
  const router = useRouter();

  const headerRef = useRef<HTMLDivElement>(null);

  const useScrollHandler = () => {
    const scrollRef = useRef<() => void>(null);
    const throttleTimerRef = useRef<NodeJS.Timeout>(undefined);
    
    if (!scrollRef.current) {
      scrollRef.current = (() => {
        return () => {
          if (!throttleTimerRef.current) {
            const before = window.scrollY;
            
            throttleTimerRef.current = setTimeout(() => {
              throttleTimerRef.current = undefined;

              const after = window.scrollY;
              const offset = before - after;

              const target = headerRef.current;
              
              if (offset > 0) {
                target?.setAttribute('class', `${styles.header}`);
              }
              else if (offset < 0) {
                target?.setAttribute('class', `${styles.header} ${styles.headerHide}`);
              }
            }, 100);
          }
        }
      })();
    }
    
    return scrollRef.current;
  }

  const useToggleHandler = () => {
    const toggleRef = useRef<() => void>(null);
    const timerRef = useRef<NodeJS.Timeout>(undefined);
    
    if (!toggleRef.current) {
      toggleRef.current = (() => {
        return () => {
          const targetTag = ((event as PointerEvent).target as HTMLElement).tagName;
          if (['TD'].includes(targetTag)) return;

          if (!timerRef.current) {
            const before = window.scrollY;

            timerRef.current = setTimeout(() => {
              timerRef.current = undefined;

              const after = window.scrollY;
              const offset = before - after;

              const target = headerRef.current;

              if (offset === 0) {
                target?.classList.toggle(styles.headerHide);
              }
            }, 100);
          }
        }
      })();
    }

    return toggleRef.current;
  }
  
  const scrollHandler = useScrollHandler();
  const toggleHandler = useToggleHandler();
  
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    document.addEventListener('click', toggleHandler);
    
    return () => {
      document.removeEventListener('scroll', scrollHandler);
      document.removeEventListener('click', toggleHandler);
    }
  }, []);

  return (
    <div ref={headerRef} className={`${styles.header}`}>
      <div className={`${styles.category}`}>
        <div onClick={() => router.push('/')}>
          <p className={`${styles.onlyPc}`}>메인 페이지</p>
          <Image className={`${styles.onlyMobile}`} src={homeIcon.src} alt="" />
        </div>
        <div onClick={() => router.push('/company')}>
          <p className={`${styles.onlyPc}`}>회사 소개</p>
          <Image className={`${styles.onlyMobile}`} src={companyIcon.src} alt="" />
        </div>
        <div onClick={() => router.push('/product')}>
          <p className={`${styles.onlyPc}`}>제품 소개</p>
          <Image className={`${styles.onlyMobile}`} src={zipperIcon.src} alt="" />
        </div>
        <div onClick={() => router.push('/')}>
          <p className={`${styles.onlyPc}`}>발주 문의</p>
          <Image className={`${styles.onlyMobile}`} src={adviceIcon.src} alt="" />
        </div>
        <div onClick={() => router.push('/')}>
          <p className={`${styles.onlyPc}`}>오시는 길</p>
          <Image className={`${styles.onlyMobile}`} src={locationIcon.src} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;