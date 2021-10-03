/* eslint-disable max-len */

import {
  Modal,
  Section,
  Divider,
  Actions,
  Button,
  user,
  bold,
  SlackViewDto,
} from 'slack-block-builder';
import { actions } from '../constant';

export interface MainMenuArgs {
  userId: string;
}

type MenuButtonArg = { text: string, action: string };

const getMenuButton = ({ text, action }: MenuButtonArg) => Button()
  .text(text)
  .actionId(JSON.stringify({ action }));

const componentActions = [
  { text: 'Paginator Component', action: actions.renderAllFilms },
  { text: 'Accordion Component', action: actions.renderTopFilms },
];

export const mainMenu = ({ userId }: MainMenuArgs): SlackViewDto => Modal()
  .title('Block Builder Demo')
  .blocks(
    Section({ text: `Hey there, ${user(userId)}! :wave::skin-tone-4:` }),
    Section({ text: 'The purpose of this app is to provide a demonstration of how Block Builder works together with Bolt.' }),
    Section({ text: 'Just click one of buttons below to get started.' }),
    Divider(),
    Section({ text: bold('Component Demos') }),
    Section({ text: 'Block Builder provides a few popular UI components out of the box. Refer to the source code to learn more about how data is persisted from the Slack client back to the application.' }),
    Actions()
      .elements(componentActions.map((action) => getMenuButton(action))),
  )
  .close('Done')
  .buildToObject();
