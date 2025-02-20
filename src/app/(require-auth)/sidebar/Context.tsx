"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type TContext = {
  isSmallSidebar: boolean;
  setSmallSidebar: Dispatch<SetStateAction<boolean>>;
  isNotificationsOpen: boolean;
  setNotificationsOpen: Dispatch<SetStateAction<boolean>>;
  isSearchOpen: boolean;
  setSearchOpen: Dispatch<SetStateAction<boolean>>;
};

const Context = createContext<TContext>({
  isSmallSidebar: false,
  setSmallSidebar: () => {},
  isNotificationsOpen: false,
  setNotificationsOpen: () => {},
  isSearchOpen: false,
  setSearchOpen: () => {},
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSmallSidebar, setSmallSidebar] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setSmallSidebar(false);
  }, [pathname]);

  useEffect(() => {
    if (!isSmallSidebar) {
      setSearchOpen(false);
      setNotificationsOpen(false);
    }
  }, [isSmallSidebar]);

  useEffect(() => {
    if (isSearchOpen) {
      setSmallSidebar(true);
      setNotificationsOpen(false);
    } else {
      if (!isNotificationsOpen) {
        setSmallSidebar(false);
      }
    }
    // eslint-disable-next-line
  }, [isSearchOpen]);

  useEffect(() => {
    if (isNotificationsOpen) {
      setSmallSidebar(true);
      setSearchOpen(false);
    } else {
      if (!isSearchOpen) {
        setSmallSidebar(false);
      }
    }
    // eslint-disable-next-line
  }, [isNotificationsOpen]);

  return (
    <Context
      value={{
        isSmallSidebar,
        setSmallSidebar,
        isNotificationsOpen,
        setNotificationsOpen,
        isSearchOpen,
        setSearchOpen,
      }}
    >
      {children}
    </Context>
  );
};

export const useSidebarContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("Component must be wrapped with SidebarProvider");

  return context;
};
