import { Button, Group, Stack, Title, Text, Anchor } from "@mantine/core";
import { IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";
import Link from "next/link";
import styles from "./Header.module.css";
import { imperialScript } from "@/app/fonts";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  return (
    <Stack className={styles.stack}>
      <Link href="/" className={styles.link}>
        <Title className={`${styles.title} ${imperialScript.className}`}>
          Andie Orozco&apos;s Nails
        </Title>
      </Link>
      <Group className={styles.group}>
        <Group className={styles.linkGroup}>
          <Text component={Link} href="/" className={styles.navLink}>
            Home
          </Text>
          <Text component={Link} href="/services" className={styles.navLink}>
            Services
          </Text>
          <Text component={Link} href="/gallery" className={styles.navLink}>
            Gallery
          </Text>
          <Text component={Link} href="/about" className={styles.navLink}>
            About
          </Text>
          <Text component={Link} href="/contact" className={styles.navLink}>
            Contact
          </Text>
          <Button className={styles.bookButton} onClick={onBookClick}>
            Book Now
          </Button>
        </Group>
        <Group className={styles.iconGroup}>
          <Anchor
            href="https://www.tiktok.com/@andieorozco4"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconAnchor}
          >
            <IconBrandTiktok className={styles.icons} />
          </Anchor>
          <Anchor
            href="https://www.instagram.com/andiee.orozco2/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconAnchor}
          >
            <IconBrandInstagram className={styles.icons} />
          </Anchor>
        </Group>
      </Group>
    </Stack>
  );
}
