import type { Film } from '../entity';
import type { Nullable } from '../types';

export interface GetAllPaginatedQuery {
  skip: number;
  take: number;
}

export interface IFilmRepository {
  add(film: Film): Promise<void>

  getById(id: number): Promise<Nullable<Film>>;

  getAll(): Promise<Film[]>;

  getAllPaginated(query: GetAllPaginatedQuery): Promise<Film[]>;

  countAll(): Promise<number>;
}
