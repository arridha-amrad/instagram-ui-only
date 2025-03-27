"use client";

import { baseUrl } from "@/config";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 overflow-hidden rounded-full">
        <Image
          className="h-full w-full object-cover"
          alt="Profile"
          width={50}
          height={50}
          src={`${baseUrl}/defaultAvatar.jpeg`}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h1 className="text-sm font-bold">arridhaamrad</h1>
          <span>·</span>
          <h3 className="text-foreground/50 text-sm font-light">10 hari</h3>
        </div>
        <p className="text-xs">Jakarta, Indonesia</p>
      </div>
      <button onClick={() => setOpen(true)}>
        <svg
          aria-label="Options"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Options</title>
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="6" cy="12" r="1.5"></circle>
          <circle cx="18" cy="12" r="1.5"></circle>
        </svg>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="fixed inset-0 flex w-screen items-center justify-center p-4 transition duration-300 ease-out data-[closed]:opacity-0"
        transition
      >
        <DialogBackdrop className="bg-background/70 fixed inset-0" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="bg-bg-secondary relative flex w-full max-w-sm flex-col rounded-xl">
            <button className="h-12 w-max self-center text-sm font-medium text-red-400">
              Report
            </button>
            <div className="bg-foreground/10 h-px w-full"></div>
            <button className="h-12 w-max self-center text-sm font-medium text-red-400">
              Unfollow
            </button>
            <div className="bg-foreground/10 h-px w-full"></div>
            <button className="h-12 w-max self-center text-sm">
              Mark as favorite
            </button>
            <div className="bg-foreground/10 h-px w-full"></div>
            <button className="h-12 w-max self-center text-sm">
              Go to post
            </button>
            <div className="bg-foreground/10 h-px w-full"></div>
            <button className="h-12 w-max self-center text-sm">
              Share to...
            </button>
            <div className="bg-foreground/10 h-px w-full"></div>
            <button className="h-12 w-max self-center text-sm">
              Copy link
            </button>
            <div className="bg-foreground/10 h-px w-full"></div>
            <button className="h-12 w-max self-center text-sm">Embed</button>
            <div className="bg-foreground/10 h-px w-full"></div>
            <button className="h-12 w-max self-center text-sm">
              About this account
            </button>
            <div className="bg-foreground/10 h-px w-full"></div>
            <button
              onClick={() => setOpen(false)}
              className="h-12 w-max self-center text-sm"
            >
              Cancel
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default Header;
