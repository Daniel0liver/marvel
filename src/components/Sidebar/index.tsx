import React from 'react';
import ReactSidebar from 'react-sidebar';

import { useSidebarContext } from 'contexts/Sidebar';

import SidebarContent from './SidebarContent';

interface ISidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: ISidebarProps) => {
  const { isOpenSidebar } = useSidebarContext();

  return (
    <ReactSidebar
      sidebar={<SidebarContent />}
      open={isOpenSidebar}
      docked={isOpenSidebar}
      styles={{
        sidebar: { backgroundColor: '#e62429', minWidth: '260px' },
        content: { backgroundColor: '#0e0e10' },
      }}
    >
      {children}
    </ReactSidebar>
  );
};

export default Sidebar;
