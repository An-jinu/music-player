import Card from '../Card';
import Skeleton from '../Card/Skeleton';
import { Container } from './style';
import InfiniteScroll from 'react-infinite-scroller';
import { useSpotifyPlaylistsInfiniteQuery } from '@/hook/apis/spotify/playlist/useSpotifyPlaylistsInfiniteQuery';

const CardList = (): React.ReactElement => {
  // 웹툰 데이터를 무한 스크롤로 불러오기 위한 custom hook 사용
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } = useSpotifyPlaylistsInfiniteQuery('0JQ5DAqbMKFQtzIMjOW2bE', { limit: 10 });

  return (
    <InfiniteScroll hasMore={hasNextPage} loadMore={() => !isFetchingNextPage && fetchNextPage()} threshold={500}>
      <Container gap="24px 16px">
        {isLoading ? (
          <Skeleton repeat={20} />
        ) : (
          <>
            {data?.pages.map((page) => {
              return page.playlists.items.map((playlist) => {
                return playlist && <Card {...playlist} key={playlist.id} />;
              });
            })}

            {isFetchingNextPage && <Skeleton repeat={10} />}
          </>
        )}
      </Container>
    </InfiniteScroll>
  );
};

export default CardList;
