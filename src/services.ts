import { Film } from './entity';
import { FilmCollection } from './collection';
import { IFilmRepository } from './repository';
import { filmDataMocks } from './data';

// Init a mocked repository in application services
const films = filmDataMocks
  .sort((compare, to) => compare.title.localeCompare(to.title))
  .map((film) => new Film(film));

export const filmRepository: IFilmRepository = new FilmCollection(films);
