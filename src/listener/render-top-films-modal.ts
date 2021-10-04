import { topFilmsModal } from '../view';
import { filmRepository } from '../services';

import type { ActionMw } from '../types';

export interface ExpandableAction {
  expandedItems?: number[];
}

export const renderTopFilmsModal: ActionMw = async ({
  action, client, ack, body,
}) => {
  try {
    // All action IDs are stringified objects, here we're extracting the data from the accordion
    const actionId: ExpandableAction = JSON.parse(action.action_id);

    await ack();

    const films = await filmRepository.getTopByQuantity(5);
    const view = topFilmsModal({
      films,
      userId: body.user.id,
      expandedItems: actionId.expandedItems || [], // If opened with shortcut, this is undefined
    });

    if (body.view) {
      await client.views.update({ view, view_id: body.view.id });

      return;
    }

    await client.views.open({ view, trigger_id: body.trigger_id });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
