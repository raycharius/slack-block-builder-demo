import { mainMenuModal } from '../view';

import type { CommandMw } from '../types';

export const renderMainMenuModal: CommandMw = async ({ body, client, ack }) => {
  const { trigger_id, user_id } = body;

  await ack();

  const view = mainMenuModal({ userId: user_id });

  await client.views.open({ view, trigger_id });
};
