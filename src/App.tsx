import Routes from 'routes';

import { SidebarProvider } from './contexts/Sidebar';

import { GlobalStyle } from 'styles/global';

const App = () => {
  return (
    <SidebarProvider>
      <GlobalStyle />
      <Routes />
    </SidebarProvider>
  );
};

export default App;
