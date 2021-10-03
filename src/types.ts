import {
  Middleware,
  SlackCommandMiddlewareArgs,
  SlackActionMiddlewareArgs,
  BlockAction,
} from '@slack/bolt';

export type Nullable<T> = T | null;

export type CommandMw = Middleware<SlackCommandMiddlewareArgs>;

export type ActionMw = Middleware<SlackActionMiddlewareArgs<BlockAction>>;
