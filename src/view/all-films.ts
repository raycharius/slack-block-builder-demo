/* eslint-disable max-len */

import {
  Modal,
  Section,
  Divider,
  Button,
  Paginator,
  user,
  bold,
  SlackViewDto,
} from 'slack-block-builder';
import { actions } from '../constant';
import { getDayYear } from '../helper';

import type { Film } from '../entity';

export interface AllFilmsArgs {
  userId: string;
  films: Film[];
  perPage: number;
  page: number;
  totalFilms: number;
}

export const allFilms = (params: AllFilmsArgs): SlackViewDto => Modal()
  .title('All Films')
  .blocks(
    Section({ text: `Hey there, ${user(params.userId)}! :wave::skin-tone-4:` }),
    Section({ text: 'Looking for something great to watch tonight? You are in the right place!' }),
    Paginator<Film>({
      items: params.films,
      perPage: params.perPage,
      page: params.page,
      totalItems: params.totalFilms,
      actionId: ({ offset, page }) => JSON.stringify({ action: actions.renderAllFilms, page, offset }),
      blocksForEach: ({ item: film }) => [
        Divider(),
        Section({ text: `${bold(':film_frames:  Title:')} ${film.title}` })
          .accessory(
            Button({ text: 'More Information' })
              .actionId(JSON.stringify({ action: actions.renderFilmInfo, filmId: film.id })),
          ),
        Section()
          .fields(
            `${bold(':date:  Year:')} ${getDayYear(film.releaseDate)}`,
            `${bold(':star:  Rating:')} ${Math.round(film.voteAverage)}/10`,
          ),
      ],
    }).getBlocks(),
  )
  .close('Done')
  .buildToObject();
