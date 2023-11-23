import CategoryService from '@/service/Spotify/CategoryService';
import QueryString from 'qs';
import { useInfiniteQuery } from 'react-query';
import { CategoryKey, GetCategoriesRequest } from './useSpotifyCategoriesQuery';

export const useSpotifyCategoriesInfiniteQuery = (query: GetCategoriesRequest) => {
  return useInfiniteQuery(
    [CategoryKey, query],
    ({ pageParam }) =>
      CategoryService.getCategories({
        ...query,
        offset: pageParam,
      }),
    {
      getNextPageParam: (lastPage) => {
        const { next } = lastPage.data.categories;
        if (next) {
          const { offset } = QueryString.parse(next);
          return offset;
        }
        return null;
      },
      select: ({ pageParams, pages }) => {
        return {
          pages: pages.map((page) => page.data),
          pageParams,
        };
      },
    }
  );
};
