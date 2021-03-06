import type { Film } from '../entity';
import type { IFilmRepository, GetAllPaginatedQuery } from '../repository';
import type { Nullable } from '../types';

export class FilmCollection implements IFilmRepository {
  private readonly items: Film[];

  constructor(films: Film[]) {
    this.items = films;
  }

  public add(film: Film): Promise<void> {
    this.items.push(film);

    return Promise.resolve();
  }

  public getAll(): Promise<Film[]> {
    return Promise.resolve(this.items);
  }

  public getAllPaginated(query: GetAllPaginatedQuery): Promise<Film[]> {
    return Promise.resolve(this.items.slice(query.skip, query.skip + query.take));
  }

  public getById(id: number): Promise<Nullable<Film>> {
    const result = this.items.find((film) => film.id === id);

    return Promise.resolve(result || null);
  }

  public countAll(): Promise<number> {
    return Promise.resolve(this.items.length);
  }

  public getTopByQuantity(quantity: number): Promise<Film[]> {
    const sorted = this.items
      .sort((compare, to) => {
        if (compare.voteAverage === to.voteAverage) {
          return 0;
        }
        return compare.voteAverage > to.voteAverage ? -1 : 1;
      });

    return Promise.resolve(sorted.slice(0, quantity));
  }
}
