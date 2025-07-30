import React from "react";
import styles from './footer.module.css'
import Image from "next/image";
const Footer = () => {

    
  return (
    <div className={styles.container}>
      <div>© 2025 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
      
        <Image
        src="/1.png"
        alt="jahir Dev facebook"
        height={15}
        width={15}
        className={styles.icon}
        
        />
        <Image
        src="/2.png"
        alt="jahir Dev"
        height={15}
        width={15}
        className={styles.icon}
        
        />
        <Image
        src="/3.png"
        alt="jahir Dev"
        height={15}
        width={15}
        className={styles.icon}
        
        />
        <Image
        src="/4.png"
        alt="jahir Dev"
        height={15}
        width={15}
        className={styles.icon}
        
        />
        </div>
      
    </div>
  );
};

export default Footer;
