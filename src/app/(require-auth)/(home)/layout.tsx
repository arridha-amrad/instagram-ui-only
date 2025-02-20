import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  stories: ReactNode;
};

export default function Layout({ children, stories }: Props) {
  return (
    <>
      <div className="flex-1 px-4">
        <div className="flex h-[100px] items-center justify-start">
          {stories}
        </div>
        {children}
      </div>
      <div className="hidden basis-[300px] xl:block">
        <div className="h-[100px]"></div>
        <div className="bg-emerald-600">Recommended users</div>
      </div>
    </>
  );
}
