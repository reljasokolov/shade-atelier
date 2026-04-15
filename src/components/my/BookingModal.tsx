"use client";

import { useState } from "react";
import { Dialog, Portal } from "@chakra-ui/react";

export default function BookingModal({ children }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)}>{children}</span>

      <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop bg="blackAlpha.600" backdropFilter="blur(8px)" />

          <Dialog.Positioner>
            <Dialog.Content
              maxW="900px"
              h="80vh"
              borderRadius="20px"
              overflow="hidden"
            >
              <iframe
                src="https://tidycal.com/reljasokolov05"
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
}
