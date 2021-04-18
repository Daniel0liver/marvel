import React, { useState } from 'react';

import SidebarContext from './Context';

interface SidebarProviderProps {
  children: React.ReactNode;
}

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
