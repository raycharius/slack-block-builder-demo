import { filmInformationModal } from '../view';
import { filmRepository } from '../services';

import type { ActionMw } from '../types';

export interface FilmIdableAction {
  filmId: number;
}

export const renderFilmInfoModal: ActionMw = async ({
  action, client, ack, body,
}) => {
  try {
    // All action IDs are stringified objects
    const actionId: FilmIdableAction = JSON.parse(action.action_id);

    await ack();

    const film = await filmRepository.getById(actionId.filmId);

    if (!film) {
      throw new Error(`Could not find film with ID ${actionId.filmId}.`);
    }

    const view = filmInformationModal({ film });

    if (body.view) {
      await client.views.push({ view, trigger_id: body.trigger_id });

      return;
    }

    await client.views.open({ view, trigger_id: body.trigger_id });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
