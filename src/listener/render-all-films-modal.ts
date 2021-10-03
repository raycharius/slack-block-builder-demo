import { allFilmsModal } from '../view';
import { filmRepository } from '../services';

import type { ActionMw } from '../types';

export interface PaginatedAction {
  action: string;
  page?: number;
  offset?: number;
}

export const renderAllFilmsModal: ActionMw = async ({
  action, client, ack, body,
}) => {

  // All action IDs are stringified objects, here we're extracting the data from the paginator
  const actionId: PaginatedAction = JSON.parse(action.action_id); // All action IDs are stringified objects

  await ack();

  const perPage = 3;
  const [films, totalFilms] = await Promise.all([
    filmRepository.getAllPaginated({
      skip: actionId.offset || 0, // If opened with shortcut, this is undefined
      take: perPage,
    }),
    filmRepository.countAll(),
  ]);

  const view = allFilmsModal({
    films,
    totalFilms,
    perPage,
    page: actionId.page || 1, // If opened with shortcut, this is undefined
    userId: body.user.id,
  });

  if (body.view) {
    await client.views.update({ view, view_id: body.view.id });

    return;
  }

  await client.views.open({ view, trigger_id: body.trigger_id });
};
