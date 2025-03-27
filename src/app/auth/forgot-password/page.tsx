import InstagramLogo from "@/app/components/InatagramLogo";
import { Button } from "@headlessui/react";
import InstagramDownloadLinks from "@/app/components/InstagramDownloadLinks";
import FormForgotPassword from "./Form";
import Link from "next/link";
import { page } from "@/app/pageLinks";

export default function Page() {
  return (
    <main className="flex w-full max-w-[350px] flex-1 flex-col items-center justify-center gap-4">
      <main className="border-skin-elevated-separator flex w-full flex-col items-center justify-center rounded-lg border px-8 py-4">
        <div className="mt-6">
          <InstagramLogo />
        </div>
        <div className="my-3 mb-6 space-y-3">
          <h1 className="text-skin-muted text-center leading-tight font-bold">
            Find your account
          </h1>
          <p className="text-skin-muted text-center text-sm">
            Enter your username or email
          </p>
        </div>
        <FormForgotPassword />
        <div className="text-skin-muted my-5 text-sm">
          <span>Back to &nbsp;</span>
          <Link className="text-skin-primary" href={page.login}>
            login
          </Link>
        </div>
        <div className="mb-6 w-full">
          <Button className="bg-background border-skin-primary text-skin-primary w-full rounded-lg border py-2 text-sm font-semibold">
            Login With Facebook
          </Button>
        </div>
      </main>
      <div className="mb-8">
        <InstagramDownloadLinks />
      </div>
    </main>
  );
}
