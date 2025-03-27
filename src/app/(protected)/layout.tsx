import { ReactNode } from "react";
import { SidebarProvider } from "./sidebar/Context";
import Sidebar from "./sidebar";
import BottomNavigationBar from "./bottomNavigationBar";
import TopNavigationBar from "./topNavigationBar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="container mx-auto flex min-h-screen">
      <TopNavigationBar />
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>
      {children}
      <BottomNavigationBar />
    </div>
  );
}
