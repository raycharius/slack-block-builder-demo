/* eslint-disable max-len */

import {
  Modal,
  Section,
  Divider,
  bold,
  SlackViewDto,
} from 'slack-block-builder';
import { getDayYear } from '../helper';

import type { Film } from '../entity';

export interface FilmInformationArgs {
  film: Film;
}

export const filmInformationModal = ({ film }: FilmInformationArgs): SlackViewDto => Modal()
  .title('Film Information')
  .blocks(
    Section({ text: `${bold('Title:')} ${film.title}` }),
    Divider(),
    Section({ text: bold('Overview:') }),
    Section({ text: film.overview }),
    Divider(),
    Section({ text: `${bold(':date:  Original Release Date:')} ${getDayYear(film.releaseDate)}` }),
    Divider(),
    Section()
      .fields(
        `${bold(':star:  Rating:')} ${Math.round(film.voteAverage)}/10`,
        `${bold(':thumbsup::skin-tone-4:  Vote Count:')} ${film.voteCount}`,
      ),
  )
  .close('Done')
  .buildToObject();
