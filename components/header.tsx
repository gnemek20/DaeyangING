import styles from "@/styles/Header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

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

  type pathNames = '/' | '/company' | '/product' | '/request' | '/guide';
  const [path, setPath] = useState<pathNames>();

  const pathName = usePathname();

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
          const targetClass = ((event as PointerEvent).target as HTMLElement).classList.value;
          const targetTag = ((event as PointerEvent).target as HTMLElement).tagName;
          
          if (targetClass.includes('Header')) return;
          else if (targetClass.includes('label')) return;
          else if (targetClass.includes('cover')) return;
          else if (targetTag.includes('TD')) return;
          else if (targetTag.includes('INPUT')) return;
          else if (targetTag.includes('TEXTAREA')) return;
          else if (targetTag.includes('LABEL')) return;
          else if (targetTag.includes('AREA')) return;
          else if (targetTag.includes('BUTTON')) return;

          if (!timerRef.current) {
            timerRef.current = setTimeout(() => {
              timerRef.current = undefined;

              const target = headerRef.current;
              target?.classList.toggle(styles.headerHide);
            }, 100);
          }
        }
      })();
    }

    return toggleRef.current;
  }
  
  const scrollHandler = useScrollHandler();
  const toggleHandler = useToggleHandler();

  const routerPush = (location: pathNames) => {
    setPath(location);
    router.push(location);
  }

  useEffect(() => {
    const path = pathName as pathNames;
    setPath(path);

    const target = headerRef.current;
    target?.setAttribute('class', `${styles.header}`);
  }, [pathName]);
  
  useEffect(() => {
    scrollHandler();
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
        <div className={`${path === '/' && styles.selected}`} onClick={() => routerPush('/')}>
          <p className={`${styles.onlyPc}`}>메인 페이지</p>
          <Image className={`${styles.onlyMobile}`} src={homeIcon.src} alt="" />
        </div>
        <div className={`${path === '/company' && styles.selected}`} onClick={() => routerPush('/company')}>
          <p className={`${styles.onlyPc}`}>회사 소개</p>
          <Image className={`${styles.onlyMobile}`} src={companyIcon.src} alt="" />
        </div>
        <div className={`${path === '/product' && styles.selected}`} onClick={() => routerPush('/product')}>
          <p className={`${styles.onlyPc}`}>제품 소개</p>
          <Image className={`${styles.onlyMobile}`} src={zipperIcon.src} alt="" />
        </div>
        <div className={`${path === '/request' && styles.selected}`} onClick={() => routerPush('/request')}>
          <p className={`${styles.onlyPc}`}>상담 문의</p>
          <Image className={`${styles.onlyMobile}`} src={adviceIcon.src} alt="" />
        </div>
        <div className={`${path === '/guide' && styles.selected}`} onClick={() => routerPush('/guide')}>
          <p className={`${styles.onlyPc}`}>오시는 길</p>
          <Image className={`${styles.onlyMobile}`} src={locationIcon.src} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;