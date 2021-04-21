import { useFetchApi } from 'hooks';
import CharacterCard from 'components/CharacterCard';
import Loading from 'components/Loading';
import { StyledContainer } from './styles';

const Characters = () => {
  const { data, isFetching } = useFetchApi('characters');

  return (
    <StyledContainer>
      {!isFetching ? (
        data?.results.map((item) => (
          <CharacterCard key={String(item.id)} data={item} />
        ))
      ) : (
        <Loading />
      )}
    </StyledContainer>
  );
};

export default Characters;
