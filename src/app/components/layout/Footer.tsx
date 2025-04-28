import { Text } from '@mantine/core';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Text size="sm" c="dimmed" ta="center">
          © 2025 Andie&apos;s Nail Bar. All rights reserved.
        </Text>
      </div>
    </footer>
  );
} 