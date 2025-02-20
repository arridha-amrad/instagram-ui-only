"use client";

import {
  Button,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { forwardRef, ReactNode, Ref } from "react";
import ButtonLink from "./ButtonLink";
import {
  ActivityIcon,
  MoonIcon,
  OptionsFilledIcon,
  OptionsOutlinedIcon,
  ReportProblemIcon,
  SaveIcon,
  SettingsIcon,
} from "./Icons";

// eslint-disable-next-line
const TriggerButton = forwardRef((props, ref: Ref<HTMLButtonElement>) => {
  return (
    <ButtonLink
      ref={ref}
      {...props}
      activeIcon={<OptionsFilledIcon />}
      icon={<OptionsOutlinedIcon />}
      label="More"
    />
  );
});

export default function Options() {
  return (
    <Popover className="relative z-[99]">
      <PopoverButton as={TriggerButton} />
      <PopoverPanel
        anchor={{ gap: "0.5rem", to: "top start" }}
        className="bg-skin-elevated-separator left-10 flex w-56 flex-col overflow-hidden rounded-lg"
      >
        <div className="bg-skin-elevated-separator relative z-[99] flex flex-col gap-2 rounded-lg p-2">
          <OptionsButton icon={<SettingsIcon />} label="Settings" />
          <OptionsButton icon={<ActivityIcon />} label="Recent Activity" />
          <OptionsButton icon={<SaveIcon />} label="Saved" />
          <OptionsButton icon={<MoonIcon />} label="Switch Appearance" />
          <OptionsButton
            icon={<ReportProblemIcon />}
            label="Report a Problem"
          />
          <hr className="bg-skin-muted/20 my-2 h-px w-full border-0" />
          <OptionsButton label="Switch Account" />
          <OptionsButton label="Logout" />
        </div>
      </PopoverPanel>
    </Popover>
  );
}

const OptionsButton = ({
  icon,
  label,
}: {
  label: string;
  icon?: ReactNode;
}) => {
  return (
    <Button className="hover:bg-background/50 flex h-10 cursor-pointer items-center gap-4 rounded-lg p-4">
      {icon}
      {label}
    </Button>
  );
};
