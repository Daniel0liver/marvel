import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 1.5rem;
  flex-direction: column;
`;

export const Header = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navigation = styled.section`
  flex: 2 1 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const List = styled.ul`
  flex: 1;
  padding: 1.5rem 0;
`;
export const ListItem = styled.li`
  display: flex;
`;

export const Link = styled(RouteLink)`
  flex: 1;
  padding: 1rem;
  color: rgb(255, 255, 255);
  transition: 0.3s;
  border-radius: 5px;

  &:hover,
  :active,
  :focus {
    background: rgb(208 30 34);
  }
`;

export const Image = styled.img`
  width: 120px;
  height: auto;
`;
