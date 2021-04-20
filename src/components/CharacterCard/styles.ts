import styled from 'styled-components';

export const StyledCard = styled.div`
  position: relative;
  width: 300px;
  height: auto;
  margin: 20px;
`;

export const StyledHeader = styled.figure``;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 300px;
  height: 60px;

  position: absolute;
  bottom: 0;
  padding-left: 1rem;
  border-left: solid 4px #e62429;

  background-color: rgba(14, 14, 16, 0.8);
  color: #fff;
`;

export const StyledImage = styled.img`
  display: block;
  margin: 0;
  object-fit: cover;
  object-position: center center;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export const StyledH3 = styled.h3`
  color: #fff;
`;
