import { Text } from "@mantine/core";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Text className={styles.text}>
          © 2025 Andie Orozco&apos;s Nails. All rights reserved.
        </Text>
      </div>
    </footer>
  );
}
