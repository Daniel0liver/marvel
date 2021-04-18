import { createContext } from 'react';

interface SidebarContextProps {
  isOpenSidebar: boolean;
  setIsOpenSidebar: (isOpenSidebar: boolean) => void;
}

const SidebarContext = createContext({} as SidebarContextProps);

export default SidebarContext;
