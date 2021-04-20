import {
  StyledCard,
  StyledHeader,
  StyledFooter,
  StyledImage,
  StyledH3,
} from './styles';

interface CharacterCardProps {
  data: {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      extension: string;
      path: string;
    };
  };
}

const CharacterCard = ({ data }: CharacterCardProps) => {
  return (
    <StyledCard>
      <StyledHeader>
        <StyledImage
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        />
      </StyledHeader>
      <StyledFooter>
        <StyledH3>{data.name}</StyledH3>
      </StyledFooter>
    </StyledCard>
  );
};

export default CharacterCard;
