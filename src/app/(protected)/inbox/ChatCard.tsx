"use client";

import Image from "next/image";
import { formatDistanceToNowStrict } from "date-fns";

function ChatCard() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-fit shrink-0 overflow-hidden rounded-full">
        <Image
          width={56}
          height={56}
          priority
          src="/defaultAvatar.jpeg"
          alt="default-avatar"
          className="rounded-full object-fill"
        />
      </div>
      <div className="space-y-2">
        <h1 className="block text-sm">Lisandro Martinez</h1>
        <p className="text-skin-muted line-clamp-1 text-xs font-light">
          You: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
          nesciunt?
        </p>
      </div>
      <div>
        <p className="text-skin-muted w-max text-xs font-light">
          {formatDistanceToNowStrict(new Date("2025-02-17T09:03:42.282Z"))}
        </p>
      </div>
    </div>
  );
}

export default ChatCard;
