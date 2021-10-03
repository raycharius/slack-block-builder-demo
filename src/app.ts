import { App } from '@slack/bolt';
import * as env from 'dotenv';
import { actions, commands } from './constant';
import * as listeners from './listener';
import { blockActionIncludes } from './helper';

env.config();

const app = new App({
  token: process.env.BOT_TOKEN,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

app.command(commands.blockBuilder, listeners.renderMainMenuModal);

app.action(blockActionIncludes(actions.renderAllFilmsModal), listeners.renderAllFilmsModal);
app.action(blockActionIncludes(actions.renderFilmInfoModal), listeners.renderFilmInfoModal);
app.action(blockActionIncludes(actions.renderTopFilmsModal), listeners.renderTopFilmsModal);

// eslint-disable-next-line no-console
app.error(async (error) => console.log(error));

(async () => {
  await app.start();

  // eslint-disable-next-line no-console
  console.log('⚡️ Block Builder demo app up and running!');
})();
