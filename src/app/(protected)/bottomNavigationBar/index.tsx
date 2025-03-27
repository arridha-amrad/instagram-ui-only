"use client";

import { useRouter } from "next/navigation";
import ButtonLink from "../sidebar/ButtonLink";
import {
  DefaultAvatar,
  ExploreFilledIcon,
  ExploreOutlinedIcon,
  HomeFill,
  HomeOutlinedIcon,
  MessengerFilledIcon,
  MessengerOutlinedIcon,
  NewPostIcon,
  ReelsFilledIcon,
  ReelsOutlinedIcon,
} from "../sidebar/Icons";
import { page } from "@/app/pageLinks";

function BottomNavigationBar() {
  const router = useRouter();
  return (
    <div className="fixed inset-x-0 bottom-0 block md:hidden">
      <div className="bg-background border-foreground/20 relative flex h-13 items-center justify-evenly border-t">
        <ButtonLink
          activeIcon={<HomeFill />}
          icon={<HomeOutlinedIcon />}
          activePath="/"
          callback={() => router.push(page.home)}
          label="Home"
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
          activeIcon={<NewPostIcon />}
          icon={<NewPostIcon />}
          callback={() => {}}
          label="New Post"
        />
        <ButtonLink
          activeIcon={<MessengerFilledIcon />}
          icon={<MessengerOutlinedIcon />}
          callback={() => router.push(page.inbox)}
          activePath={page.inbox}
          label="Messages"
        />
        <ButtonLink
          activeIcon={<DefaultAvatar />}
          icon={<DefaultAvatar />}
          callback={() => {}}
          label="Profile"
        />
      </div>
    </div>
  );
}

export default BottomNavigationBar;
