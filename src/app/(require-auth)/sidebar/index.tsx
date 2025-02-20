"use client";

import { cn } from "@/app/utils";
import { useSidebarContext } from "./Context";

import {
  DefaultAvatar,
  ExploreFilledIcon,
  ExploreOutlinedIcon,
  HomeFill,
  HomeOutlinedIcon,
  IGLogo,
  Logo,
  MessengerFilledIcon,
  MessengerOutlinedIcon,
  NewPostIcon,
  NotificationsFilledIcon,
  NotificationsOutlinedIcon,
  ReelsFilledIcon,
  ReelsOutlinedIcon,
  SearchFilledIcon,
  SearchOutlinedIcon,
  ThreadIcon,
} from "./Icons";
import SecondarySidebar from "./SecondarySidebar";

import { page } from "@/app/pageLinks";
import { autoUpdate, offset, shift, useFloating } from "@floating-ui/react";
import { useRouter } from "next/navigation";
import ButtonLink from "./ButtonLink";
import Options from "./Options";
import useClickOutside from "@/hooks/useClickOutside";

export default function Sidebar() {
  const {
    isSmallSidebar,
    setSmallSidebar,
    setSearchOpen,
    setNotificationsOpen,
  } = useSidebarContext();

  const router = useRouter();

  const { refs, floatingStyles } = useFloating({
    placement: "right-end",
    strategy: "fixed",
    middleware: [offset(5), shift()],
    whileElementsMounted: autoUpdate,
  });

  const clickOutsideRef = useClickOutside(() => setSmallSidebar(false));

  return (
    <aside ref={refs.setReference} className={cn("min-h-screen w-fit")}>
      <SecondarySidebar
        setFloating={refs.setFloating}
        floatingStyles={floatingStyles}
      />
      <div
        ref={clickOutsideRef}
        className="flex h-screen w-fit flex-col overflow-y-auto px-1"
      >
        <div className="mb-2 flex-1">
          <div
            className={cn(
              "flex h-25 items-center",
              isSmallSidebar ? "aspect-square w-12 justify-center" : "px-3",
            )}
          >
            {isSmallSidebar ? (
              <IGLogo />
            ) : (
              <>
                <div className="block lg:hidden">
                  <IGLogo />
                </div>
                <div className="hidden lg:block">
                  <Logo />
                </div>
              </>
            )}
          </div>
          <div className="space-y-2">
            <ButtonLink
              activeIcon={<HomeFill />}
              icon={<HomeOutlinedIcon />}
              activePath="/"
              callback={() => router.push("/")}
              label="Home"
            />
            <ButtonLink
              icon={<SearchOutlinedIcon />}
              activeIcon={<SearchFilledIcon />}
              callback={() => {
                setSearchOpen((val) => !val);
              }}
              label="Search"
            />
            <ButtonLink
              activeIcon={<ExploreFilledIcon />}
              icon={<ExploreOutlinedIcon />}
              callback={() => router.push(page.explore)}
              label="Explore"
            />
            <ButtonLink
              activeIcon={<ReelsFilledIcon />}
              icon={<ReelsOutlinedIcon />}
              callback={() => router.push(page.reels)}
              label="Reels"
            />
            <ButtonLink
              activeIcon={<MessengerFilledIcon />}
              icon={<MessengerOutlinedIcon />}
              callback={() => router.push(page.inbox)}
              activePath={page.inbox}
              label="Messages"
            />
            <ButtonLink
              activeIcon={<NotificationsFilledIcon />}
              icon={<NotificationsOutlinedIcon />}
              callback={() => {
                setNotificationsOpen((val) => !val);
              }}
              label="Notifications"
            />
            <ButtonLink
              activeIcon={<NewPostIcon />}
              icon={<NewPostIcon />}
              callback={() => setSmallSidebar((val) => !val)}
              label="New Post"
            />
            <ButtonLink
              activeIcon={<DefaultAvatar />}
              icon={<DefaultAvatar />}
              callback={() => setSmallSidebar((val) => !val)}
              label="Profile"
            />
          </div>
        </div>
        <div className="mb-8 space-y-2">
          <ButtonLink
            activeIcon={<ThreadIcon />}
            icon={<ThreadIcon />}
            callback={() => setSmallSidebar((val) => !val)}
            label="Threads"
          />
          <Options />
        </div>
      </div>
    </aside>
  );
}
