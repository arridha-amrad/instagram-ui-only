import { Button } from "@headlessui/react";
import { PencilIcon } from "./Icons";
import Image from "next/image";
import ChatCard from "./ChatCard";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full gap-4">
      <div className="border-r-skin-separator sticky top-0 h-screen basis-[24rem] overflow-y-auto border-r px-8">
        <div className="flex h-25 items-center">
          <div className="flex-1">
            <h1 className="text-xl font-bold">arridha2108</h1>
          </div>
          <Button>
            <PencilIcon />
          </Button>
        </div>
        <div className="pt-4 pb-4">
          <div className="relative w-fit overflow-hidden rounded-full">
            <Image
              width={74}
              height={74}
              priority
              src="/defaultAvatar.jpeg"
              alt="default-avatar"
              className="rounded-full object-fill"
            />
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <Button className="text-sm font-semibold">Messages</Button>
            <Button className="text-skin-muted text-sm font-semibold">
              Requests
            </Button>
          </div>
          <div className="space-y-4">
            {[...Array(50)].map((_, i) => (
              <ChatCard key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 bg-neutral-900">data</div>
    </div>
  );
}
