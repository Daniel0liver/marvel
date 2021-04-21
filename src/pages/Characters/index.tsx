import { useFetchApi } from 'hooks';
import CharacterCard from 'components/CharacterCard';
import { StyledContainer } from './styles';

const Characters = () => {
  const { data } = useFetchApi('characters');

  return (
    <StyledContainer>
      {data?.results.map((item) => (
        <CharacterCard key={String(item.id)} data={item} />
      ))}
    </StyledContainer>
  );
};

export default Characters;
