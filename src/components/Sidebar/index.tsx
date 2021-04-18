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
        sidebar: { backgroundColor: 'rgb(230 36 41)', minWidth: '260px' },
        content: { backgroundColor: '#202020' },
      }}
    >
      {children}
    </ReactSidebar>
  );
};

export default Sidebar;
