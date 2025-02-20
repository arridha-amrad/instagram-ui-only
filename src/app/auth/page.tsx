import InstagramLogo from "@/app/components/InatagramLogo";
import InstagramDownloadLinks from "@/app/components/InstagramDownloadLinks";
import { page } from "@/app/pageLinks";
import Link from "next/link";
import FormLogin from "./FormLogin";
import Phone from "./Phone";

export default function Page() {
  return (
    <main className="flex w-full flex-1 items-center justify-center gap-4">
      <div className="hidden transition-all duration-100 ease-in lg:block">
        <Phone />
      </div>
      <div className="flex w-full max-w-xs flex-col">
        <div className="border-skin-elevated-separator flex flex-col items-center justify-center rounded-lg border">
          <div className="my-8">
            <InstagramLogo />
          </div>
          <FormLogin />
          <div className="my-6">
            <Link className="text-skin-link text-sm font-semibold" href="/">
              Forgot password
            </Link>
          </div>
        </div>
        <div className="border-skin-elevated-separator mt-4 flex items-center justify-center rounded-lg border p-4">
          <p className="text-sm">
            Don&apos;t have an account?&nbsp;
            <Link
              className="text-skin-primary font-semibold"
              href={page.signup}
            >
              Sign Up
            </Link>
          </p>
        </div>
        <div className="my-4">
          <InstagramDownloadLinks />
        </div>
      </div>
    </main>
  );
}
