import {
  Button,
  Group,
  Stack,
  Title,
  Text,
  Anchor,
  Drawer,
  Burger,
} from "@mantine/core";
import { IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";
import Link from "next/link";
import styles from "./Header.module.css";
import { imperialScript } from "@/app/fonts";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

interface HeaderProps {
  onBookClick: () => void;
}

interface NavLinkProps {
  href: string;
  label: string;
  isMobile: boolean;
  onClick: () => void;
}

const NavLink = ({ href, label, isMobile, onClick }: NavLinkProps) => (
  <Text
    component={Link}
    href={href}
    className={`${styles.navLink} ${isMobile ? styles.mobileNavLink : ""}`}
    onClick={onClick}
  >
    {label}
  </Text>
);

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ onBookClick }: HeaderProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 48em)") ?? false;

  const navLinks = (
    <>
      {NAV_ITEMS.map(({ href, label }) => (
        <NavLink
          key={href}
          href={href}
          label={label}
          isMobile={isMobile}
          onClick={close}
        />
      ))}
      <Button
        className={styles.bookButton}
        onClick={() => {
          close();
          onBookClick();
        }}
      >
        Book Now
      </Button>
    </>
  );

  const socialLinks = (
    <Group className={isMobile ? styles.mobileSocialLinks : styles.socialLinks}>
      <Anchor
        href="https://www.tiktok.com/@andieorozco4"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <IconBrandTiktok className={styles.socialIcon} />
      </Anchor>
      <Anchor
        href="https://www.instagram.com/andiee.orozco2/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <IconBrandInstagram className={styles.socialIcon} />
      </Anchor>
    </Group>
  );

  return (
    <Stack className={styles.container}>
      <div className={styles.mobileContainer}>
        <Link href="/" className={`${styles.link} ${styles.mobileTitle}`}>
          <Title className={`${styles.title} ${imperialScript.className}`}>
            Andie Orozco&apos;s Nails
          </Title>
        </Link>
        {isMobile && (
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
            className={styles.mobileMenuButton}
          />
        )}
      </div>

      {isMobile ? (
        <Drawer
          opened={opened}
          onClose={close}
          position="right"
          size="100%"
          padding="md"
          className={styles.drawerContent}
        >
          <Stack className={styles.mobileMenu}>
            {navLinks}
            {socialLinks}
          </Stack>
        </Drawer>
      ) : (
        <Group className={styles.nav}>
          <Group className={styles.navLinks}>{navLinks}</Group>
          {socialLinks}
        </Group>
      )}
    </Stack>
  );
}
