"use client";

import { FloatingPortal } from "@floating-ui/react";
import { Button, Input } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import { useSidebarContext } from "../Context";
import { CloseIcon } from "../Icons";
import UserCard from "../UserCard";

type Props = {
  setFloating: (node: HTMLElement | null) => void;
  floatingStyles: React.CSSProperties;
};

export default function SecondarySidebar({
  setFloating,
  floatingStyles,
}: Props) {
  const { isSmallSidebar, isSearchOpen, isNotificationsOpen } =
    useSidebarContext();

  return (
    <AnimatePresence key="secondary-sidebar">
      {isSmallSidebar && (
        <FloatingPortal>
          <div ref={setFloating} style={floatingStyles}>
            <motion.div
              key="secondary-sidebar"
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{ opacity: 0, x: -50 }}
            >
              <div className="bg-background border-skin-elevated-separator relative h-screen w-[400px] overflow-y-auto border-r px-8">
                <div className="flex h-25 items-center">
                  <h1 className="text-2xl font-bold">
                    {isNotificationsOpen ? "Notifications" : "Search"}
                  </h1>
                </div>
                {isSearchOpen && (
                  <div className="relative">
                    <div className="relative">
                      <Input
                        placeholder="Search"
                        className="bg-skin-elevated-separator h-12 w-full rounded-lg pr-10 pl-4 outline-hidden"
                      />
                      <Button className="bg-skin-muted/20 text-foreground absolute top-1/2 right-3 flex aspect-square size-5 -translate-y-1/2 items-center justify-center rounded-full text-xs">
                        <CloseIcon className="size-3" />
                      </Button>
                    </div>
                    <div className="my-5 flex justify-between">
                      <h1 className="text-skin-muted text-sm font-bold">
                        Recent
                      </h1>
                      <Button className="text-skin-primary text-sm font-bold">
                        Clear all
                      </Button>
                    </div>
                    <div className="w-full space-y-4">
                      <UserCard />
                      <UserCard />
                    </div>
                  </div>
                )}
                {isNotificationsOpen && (
                  <div className="relative">
                    <div>Notification Open</div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </FloatingPortal>
      )}
    </AnimatePresence>
  );
}
