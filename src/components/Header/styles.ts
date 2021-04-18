import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  background-color: #1f1f23;
  height: 52px;
  justify-content: space-between;
  padding: 0 15px;
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const CenterContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightContent = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 130px;
  height: auto;
`;

export const Button = styled.button`
  width: 37px;
  height: 37px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: solid 1px #f0131d;
  font-size: 22px;
  background: transparent;
  color: #fff;
  transition: 0.3s;

  &:hover,
  :focus,
  :active {
    background: #f0131d;
  }
`;
