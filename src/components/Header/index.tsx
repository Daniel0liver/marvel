import MarvelIcon from 'assets/images/marvel.svg';

import { useSidebarContext } from 'contexts/Sidebar';

import {
  Header,
  LeftContent,
  CenterContent,
  RightContent,
  Image,
} from './styles';

const CustomHeader = () => {
  const { isOpenSidebar, setIsOpenSidebar } = useSidebarContext();

  const handleClickSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <Header>
      <LeftContent>
        <button onClick={handleClickSidebar}>Show sidebar</button>
      </LeftContent>
      <CenterContent>
        <Image src={MarvelIcon} alt="Marvel logo" />
      </CenterContent>
      <RightContent />
    </Header>
  );
};

export default CustomHeader;
