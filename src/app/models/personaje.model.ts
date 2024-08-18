export interface Personaje {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    location: {
      name: string;
    };
    origin: {
      name: string;
    };
  }
  
  export interface CharacterResponse {
    info: {
      count: number;
      pages: number;
    };
    results: Personaje[];
  }
  