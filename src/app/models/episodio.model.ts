export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    created: string;
  }
  
  export interface EpisodeResponse {
    info: {
      count: number;
      pages: number;
    };
    results: Episode[];
  }
  