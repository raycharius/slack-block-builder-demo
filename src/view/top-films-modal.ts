/* eslint-disable max-len */

import {
  Modal,
  Section,
  Divider,
  Accordion,
  user,
  bold,
  SlackViewDto,
} from 'slack-block-builder';
import { actions } from '../constant';
import { getDayYear } from '../helper';

import type { Film } from '../entity';

export interface TopFilmsArgs {
  userId: string;
  films: Film[];
  expandedItems: number[];
}

export const topFilmsModal = (params: TopFilmsArgs): SlackViewDto => Modal()
  .title('Top Films')
  .blocks(
    Section({ text: `Hey there, ${user(params.userId)}! :wave::skin-tone-4:` }),
    Section({ text: 'Looking for something great to watch tonight? You are in the right place! These are our top films.' }),
    Divider(),
    Accordion<Film>({
      items: params.films,
      expandedItems: params.expandedItems,
      collapseOnExpand: true,
      titleText: ({ item: film }) => bold(film.title),
      actionId: ({ expandedItems }) => JSON.stringify({ action: actions.renderTopFilmsModal, expandedItems }),
      blocksForExpanded: ({ item: film }) => [
        Section({ text: bold('Overview:') }),
        Section({ text: film.overview }),
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
