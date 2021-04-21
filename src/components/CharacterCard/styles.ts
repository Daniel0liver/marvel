import styled from 'styled-components';

export const StyledCard = styled.div`
  position: relative;
  width: 270px;
  height: 300px;
  margin: 20px;
  border-radius: 10px;
  background-color: #1f1f23;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.1);
      cursor: pointer;
    }

    span {
      background-size: 100% 100%;
    }
  }
`;

export const StyledHeader = styled.figure``;

export const StyledFooter = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 300px;
  height: 50px;

  position: absolute;
  bottom: 0;
  padding-left: 1rem;
  border-left: solid 5px #e62429;
  transition: background-size 0.3s 0s;

  background: linear-gradient(to right, #e62429, #e62429);
  background-color: rgba(14, 14, 16, 0.8);
  background-repeat: no-repeat;
  background-size: 0 100%;
  color: #fff;
`;

export const StyledImage = styled.img`
  display: block;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 300px;
  transform: scale(1);
  transition: all 0.3s linear;
`;

export const StyledH3 = styled.h3`
  color: #fff;
`;
