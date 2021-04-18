import Marvel from 'assets/images/marvel.svg';

import {
  Container,
  Header,
  Image,
  Navigation,
  List,
  ListItem,
  Link,
} from './styles';

const SidebarContent = () => {
  return (
    <Container>
      <Header>
        <Image src={Marvel} alt="Marvel logo" />
      </Header>
      <Navigation>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/characters">Characters</Link>
          </ListItem>
          <ListItem>
            <Link to="/series">Series</Link>
          </ListItem>
        </List>
      </Navigation>
    </Container>
  );
};

export default SidebarContent;
