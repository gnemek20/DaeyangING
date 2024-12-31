import styles from "@/styles/Header.module.css";
import { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  const useScrollHandler = () => {
    const scrollRef = useRef<() => void>(null);
    const throttleTimerRef = useRef<NodeJS.Timeout>(null);
    
    if (!scrollRef.current) {
      scrollRef.current = (() => {
        return () => {
          if (!throttleTimerRef.current) {
            const before = window.scrollY;
            
            throttleTimerRef.current = setTimeout(() => {
              throttleTimerRef.current = null;
              const after = window.scrollY;
              const target = headerRef.current;
              
              if (before > after) {
                target?.setAttribute('class', `${styles.header}`)
              }
              else if (before < after) {
                target?.setAttribute('class', `${styles.header} ${styles.headerHide}`)
              }
            }, 100);
          }
        }
      })();
    }
    
    return scrollRef.current;
  }
  
  const scrollHandler = useScrollHandler();
  
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  return (
    <div ref={headerRef} className={`${styles.header}`}>
      {/* 헤더 추가 */}
    </div>
  );
}

export default Header;