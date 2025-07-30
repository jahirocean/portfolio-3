import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turned your idea into Reality. We bring together the teams from the
          global tech industy.
        </p>

        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src="/hero.png" width={500} height={500} alt="Hero Image" className={styles.img} />
      </div>
    </div>
  );
}
