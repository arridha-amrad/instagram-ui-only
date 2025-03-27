import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  stories: ReactNode;
};

export default function Layout({ children, stories }: Props) {
  return (
    <>
      <div className="mx-auto w-full max-w-[630px] flex-1 space-y-6 px-4">
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
