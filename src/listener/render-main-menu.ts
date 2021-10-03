import { mainMenu } from '../view';

import type { CommandMw } from '../types';

export const renderMainMenu: CommandMw = async ({ body, client, ack }) => {
  const { trigger_id, user_id } = body;

  await ack();

  const view = mainMenu({ userId: user_id });

  await client.views.open({ view, trigger_id });
};
