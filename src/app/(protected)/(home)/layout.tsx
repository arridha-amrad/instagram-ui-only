import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  stories: ReactNode;
};

export default function Layout({ children, stories }: Props) {
  return (
    <>
      <div className="mx-auto w-full flex-1 space-y-4 sm:px-4 md:max-w-[630px]">
        {stories}
        {children}
      </div>
      <div className="hidden basis-[300px] xl:block">
        <div className="h-[100px]"></div>
        <div className="bg-emerald-600">Recommended users</div>
      </div>
    </>
  );
}
