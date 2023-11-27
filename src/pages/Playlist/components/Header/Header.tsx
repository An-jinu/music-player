import { Flex } from '@/assets/style';
import { useColorThief } from '@/hook/useColorThief';
import { AlbumImageContainer, Container, Description, Title } from './Header.style';
import Skeleton from './Skeleton';

interface Props {
  imageUrl: string;
  name?: string;
  description?: string | null;
  isLoading: boolean;
}

const Header = ({ description, imageUrl, isLoading, name }: Props) => {
  const palette = useColorThief(imageUrl);

  return (
    <Container alignItems="flex-end" style={{ backgroundColor: palette[0] }}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Flex alignItems="center" gap="24px">
          <AlbumImageContainer>
            <img src={imageUrl} alt="" />
          </AlbumImageContainer>
          <Flex column gap="10px">
            <Title>{name}</Title>
            <Description>{description}</Description>
          </Flex>
        </Flex>
      )}
    </Container>
  );
};

export default Header;
