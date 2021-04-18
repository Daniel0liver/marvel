import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import MarvelIcon from 'assets/images/marvel.svg';

import { useSidebarContext } from 'contexts/Sidebar';

import {
  Header,
  LeftContent,
  CenterContent,
  RightContent,
  Image,
  Button,
} from './styles';

const CustomHeader = () => {
  const { isOpenSidebar, setIsOpenSidebar } = useSidebarContext();

  const handleClickSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <Header>
      <LeftContent>
        <Button onClick={handleClickSidebar}>
          {isOpenSidebar ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </Button>
      </LeftContent>
      <CenterContent>
        <Image src={MarvelIcon} alt="Marvel logo" />
      </CenterContent>
      <RightContent />
    </Header>
  );
};

export default CustomHeader;
