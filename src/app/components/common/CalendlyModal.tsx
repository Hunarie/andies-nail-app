"use client";

import { Modal } from "@mantine/core";
import { InlineWidget } from "react-calendly";
import { useMediaQuery } from "@mantine/hooks";

interface CalendlyModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ opened, onClose }: CalendlyModalProps) {
  const isMobile = useMediaQuery("(max-width: 48em)") ?? false;

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
          maxWidth: isMobile ? "100%" : "1000px",
          width: isMobile ? "100%" : "90%",
          overflow: "hidden",
          height: isMobile ? "100%" : "auto",
          maxHeight: isMobile ? "100vh" : "90vh",
        },
        body: {
          padding: 0,
          overflow: "hidden",
          height: "100%",
        },
      }}
    >
      <div
        style={{
          height: isMobile ? "100%" : "min(800px, 90vh)",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <InlineWidget
          url="https://calendly.com/jleeman2000"
          styles={{
            height: "100%",
            width: "100%",
            overflow: "hidden",
          }}
        />
      </div>
    </Modal>
  );
}
