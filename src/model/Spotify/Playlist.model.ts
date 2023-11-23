import { AddedBy, ExternalUrls, Image, SpotifyPageResponse } from './Common.model';
import { Track } from './Track.model';
export interface Owner {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

export interface PlayListTrack {
  added_at: string;
  added_by: AddedBy;
  is_local: boolean;
  track: Track;
}

export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: SpotifyPageResponse<PlayListTrack>;
  type: string;
  uri: string;
}

export interface Playlists {
  message?: string;
  playlists: SpotifyPageResponse<Playlist>;
}
