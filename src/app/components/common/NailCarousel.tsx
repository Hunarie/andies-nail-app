import { Button, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import styles from './NailCarousel.module.css';

interface NailCarouselProps {
  onBookClick: () => void;
}

export default function NailCarousel({ onBookClick }: NailCarouselProps) {
  return (
    <div className={styles.container}>
      <Carousel withIndicators height={700} loop>
        <Carousel.Slide>
          <Image 
            src="https://images.unsplash.com/photo-1630843599725-32ead7671867?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Nails 1" 
            height={700} 
            fit="cover" 
            radius="md" 
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image 
            src="https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Nails 2" 
            height={700} 
            fit="cover" 
            radius="md" 
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image 
            src="https://images.unsplash.com/photo-1619615787228-ce0fa8440e18?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Nails 3" 
            height={700} 
            fit="cover" 
            radius="md" 
          />
        </Carousel.Slide>
      </Carousel>
      <Button
        variant="filled"
        size="xl"
        className={styles.bookButton}
        onClick={onBookClick}
      >
        Book Now
      </Button>
    </div>
  );
} 