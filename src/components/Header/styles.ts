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
`;

export const CenterContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightContent = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 130px;
  height: auto;
`;
