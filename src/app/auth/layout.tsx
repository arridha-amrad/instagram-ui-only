import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const links = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Locations",
  "Instagram Lite",
  "Threads",
  "Contact Uploading & Non-Users",
  "Meta Verified",
  "Meta Indonesia",
];

export default function Layout({ children }: Props) {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center flex-col py-4">
      {children}
      <footer className="w-full mt-2">
        <div className="w-full flex justify-center gap-4 items-center flex-wrap">
          {links.map((link, i) => (
            <a key={i} className="block text-xs text-skin-muted" href="/auth">
              {link}
            </a>
          ))}
        </div>
        <p className="text-center text-skin-muted text-xs pt-4">
          &copy; {new Date().getFullYear()} Instagram from Meta
        </p>
      </footer>
    </div>
  );
}
