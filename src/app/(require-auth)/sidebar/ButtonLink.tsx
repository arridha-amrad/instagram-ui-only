"use client";

import { cn } from "@/app/utils";
import { Button } from "@headlessui/react";
import mergeRefs from "merge-refs";
import { usePathname } from "next/navigation";
import { HTMLAttributes, ReactNode, Ref, useRef } from "react";
import { useSidebarContext } from "./Context";

type Props = {
  callback?: VoidFunction;
  activePath?: string;
  activeIcon: ReactNode;
  icon: ReactNode;
  label: string;
  ref?: Ref<HTMLButtonElement>;
} & HTMLAttributes<HTMLElement>;

export default function ButtonLink({
  activeIcon,
  callback,
  activePath,
  icon,
  label,
  ref,
  ...props
}: Props) {
  const { isSmallSidebar, isNotificationsOpen, isSearchOpen } =
    useSidebarContext();
  const pathname = usePathname();
  const isActive = pathname === activePath;
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const onClick = () => {
    if (callback) {
      callback();
    } else {
      btnRef.current?.click();
    }
  };

  const currentIcon = () => {
    if (label === "Search") {
      return isSearchOpen ? activeIcon : icon;
    } else if (label === "Notifications") {
      return isNotificationsOpen ? activeIcon : icon;
    } else {
      return isActive ? activeIcon : icon;
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex w-fit cursor-pointer items-center rounded-lg hover:bg-neutral-500/20",
        !isSmallSidebar && "lg:pr-4",
      )}
      tabIndex={0}
    >
      <Button
        {...props}
        ref={mergeRefs(btnRef, ref)}
        className={cn(
          "ring-skin-muted flex aspect-square h-12 w-fit cursor-pointer items-center justify-center rounded-lg",
        )}
      >
        {currentIcon()}
      </Button>
      {!isSmallSidebar && (
        <span
          className={cn(
            "hidden pl-2 lg:block",
            isActive ? "font-bold" : "font-normal",
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
