'use client';

import { Modal } from '@mantine/core';
import { InlineWidget } from 'react-calendly';

interface CalendlyModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ opened, onClose }: CalendlyModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="auto"
      centered
      withCloseButton={false}
      padding={0}
      styles={{
        content: {
          maxWidth: '1000px',
          width: '90%',
          overflow: 'hidden'
        },
        body: {
          padding: 0,
          overflow: 'hidden'
        }
      }}
    >
      <div style={{ 
        height: 'min(800px, 90vh)', 
        width: '100%',
        overflow: 'hidden'
      }}>
        <InlineWidget
          url="https://calendly.com/jleeman2000"
          styles={{
            height: '100%',
            width: '100%',
            overflow: 'hidden'
          }}
        />
      </div>
    </Modal>
  );
} 