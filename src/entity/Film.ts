export interface FilmAttributes {
  id: number;
  overview: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
  voteCount: number
}

export class Film {
  public readonly id: number;

  public readonly overview: string;

  public readonly releaseDate: string;

  public readonly title: string;

  public readonly voteAverage: number;

  public readonly voteCount: number;

  constructor(params: FilmAttributes) {
    this.id = params.id;
    this.overview = params.overview;
    this.releaseDate = params.releaseDate;
    this.title = params.title;
    this.voteAverage = params.voteAverage;
    this.voteCount = params.voteCount;
  }
}
