'use client'

import { useEffect, useRef } from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  topText: string;
  bottomText: string;
  equalWidth?: boolean;
}

export const Logo = ({ topText, bottomText, equalWidth = false }: LogoProps) => {
  const topRef = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    console.log("topText", topText);
    if (equalWidth && topRef.current && bottomRef.current) {
      const bottomWidth = bottomRef.current.offsetWidth;
      const topEl = topRef.current;
      let fontSize = parseInt(window.getComputedStyle(topEl).fontSize);
      console.log("bottomWidth", bottomWidth);
      console.log("topEl.offsetWidth", topEl.offsetWidth);
      while (topEl.offsetWidth < bottomWidth && fontSize < 100) {
        fontSize += 1;
        topEl.style.fontSize = `${fontSize}px`;
        console.log("1", topEl.offsetWidth, bottomWidth);
      }
      
      while (topEl.offsetWidth > bottomWidth && fontSize > 12) {
        fontSize -= 1;
        topEl.style.fontSize = `${fontSize}px`;
        console.log("2", topEl.offsetWidth, bottomWidth);
      }
    }
  }, [equalWidth, topText, bottomText]);

  return (
    <div className={styles.logo}>
      <span ref={topRef} className={styles.topText}>{topText}</span>
      <span ref={bottomRef} className={styles.bottomText}>{bottomText}</span>
    </div>
  );
};