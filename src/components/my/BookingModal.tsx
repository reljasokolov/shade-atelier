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
                src="https://studio24.bg/m/sashka-markov-p17679?m?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaePzBppPAqj9Jz2BewXhggyLsqOZQWxKXohaIGpukD7W0HRTyr3Z4n5fD6Hdw_aem_xS-P4jzlfh1WREO7IOg7cg&m"
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
