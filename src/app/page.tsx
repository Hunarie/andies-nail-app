'use client';

import { Container, AppShell } from '@mantine/core';
import Header from './components/layout/Header';
import NailCarousel from './components/common/NailCarousel';
import Footer from './components/layout/Footer';
import CalendlyModal from './components/common/CalendlyModal';
import styles from './page.module.css';
import { useCalendlyModal } from './hooks/useCalendlyModal';

export default function Home() {
  const { isOpen, openModal, closeModal } = useCalendlyModal();

  return (
    <AppShell
      header={{ height: 140 }}
      footer={{ height: 40 }}
      padding={0}
    >
      <AppShell.Header withBorder className={styles.header}>
        <Header onBookClick={openModal} />
      </AppShell.Header>

      <AppShell.Main className={styles.main}>
        <Container 
          size="100%" 
          className={styles.container}
        >
          <NailCarousel onBookClick={openModal} />
        </Container>
      </AppShell.Main>

      <AppShell.Footer className={styles.footer}>
        <Footer />
      </AppShell.Footer>

      <CalendlyModal 
        opened={isOpen} 
        onClose={closeModal} 
      />
    </AppShell>
  );
}
