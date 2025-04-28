import { Button, Group, Stack, Title, Text } from '@mantine/core';
import Link from 'next/link';
import styles from './Header.module.css';

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  return (
    <Stack align="center" gap={0} className={styles.container}>
      <Title order={1} className={styles.title}>
        Andie&apos;s Nail Bar
      </Title>
      <Group gap={40} mt="sm">
        <Text component={Link} href="/" className={styles.navLink}>Home</Text>
        <Text component={Link} href="/services" className={styles.navLink}>Services</Text>
        <Text component={Link} href="/gallery" className={styles.navLink}>Gallery</Text>
        <Text component={Link} href="/about" className={styles.navLink}>About</Text>
        <Text component={Link} href="/contact" className={styles.navLink}>Contact</Text>
        <Button
          variant="outline"
          color="dark"
          size="md"
          className={styles.bookButton}
          onClick={onBookClick}
        >
          Book Now
        </Button>
      </Group>
    </Stack>
  );
} 