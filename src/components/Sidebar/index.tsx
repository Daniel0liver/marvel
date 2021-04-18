import React, { useState } from 'react';
import ReactSidebar from 'react-sidebar';

import SidebarContent from './SidebarContent';

interface ISidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: ISidebarProps) => {
  const [opened, setOpened] = useState(true);

  const handleOpen = (value: boolean) => {
    setOpened(value);
  };

  return (
    <ReactSidebar
      sidebar={<SidebarContent />}
      open={opened}
      docked={true}
      onSetOpen={handleOpen}
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
