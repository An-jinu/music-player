import { SpotifyPageResponse } from './Common.model';

export interface Category {
  href: string;
  icons: [
    {
      url: string;
      height: number;
      width: number;
    }
  ];
  id: string;
  name: string;
}

export interface Categories {
  categories: SpotifyPageResponse<Category>;
}
