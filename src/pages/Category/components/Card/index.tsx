import { Container, Title, TextContainer, ThumbnailContainer, Contents } from './style';

import { Flex } from '@/assets/style';
import { Link } from 'react-router-dom';

const Card = (props: SpotifyApi.PlaylistObjectSimplified): React.ReactElement => {
  const { id, images, name, description } = props;
  const { url } = images[0] || '';

  return (
    <Container column>
      <Link to={`/playlist/${id}`}>
        <ThumbnailContainer>
          <img src={url} />
        </ThumbnailContainer>

        <TextContainer column gap="8px">
          <Flex gap="4px" column>
            <Title>{name}</Title>
            <Contents dangerouslySetInnerHTML={{ __html: description || '' }} />
          </Flex>
        </TextContainer>
      </Link>
    </Container>
  );
};

export default Card;
