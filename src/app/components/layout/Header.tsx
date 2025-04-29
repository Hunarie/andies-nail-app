import { Button, Group, Stack, Title, Text, Anchor } from '@mantine/core';
import { IconBrandInstagram } from '@tabler/icons-react';
import Link from 'next/link';
import styles from './Header.module.css';

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  return (
    <Stack align="center" gap={0} className={styles.container}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Title 
          order={1} 
          className={styles.title}
          style={{ fontFamily: 'var(--font-akaya-kanadaka)' }}
        >
          Andie&apos;s Nail Bar
        </Title>
      </Link>
      <Group gap={40} mt="sm" justify="center" w="100%" pos="relative">
        <Group gap={40}>
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
        <Anchor 
          href="https://www.instagram.com/andiee.orozco2/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.instagramIcon}
          pos="absolute"
          right="2rem"
        >
          <IconBrandInstagram size={24} />
        </Anchor>
      </Group>
    </Stack>
  );
} 