import { ReactNode } from "react";
import { SidebarProvider } from "./sidebar/Context";
import Sidebar from "./sidebar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="container mx-auto flex min-h-screen">
      <div className="sticky top-0 h-screen basis-auto lg:basis-[300px]">
        <SidebarProvider>
          <Sidebar />
        </SidebarProvider>
      </div>
      {children}
    </div>
  );
}
