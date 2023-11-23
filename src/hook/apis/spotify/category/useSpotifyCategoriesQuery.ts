import CategoryService from '@/service/Spotify/CategoryService';
import { useQuery } from 'react-query';

export const CategoryKey = '/browse/categories';

export interface GetCategoriesRequest {
  country?: string;
  locale?: string;
  limit?: number;
  offset?: number;
}

export const useSpotifyCategoriesQuery = (query: GetCategoriesRequest) => {
  return useQuery([CategoryKey, query], () => CategoryService.getCategories(query), {
    select: ({ data }) => {
      return data;
    },
  });
};
