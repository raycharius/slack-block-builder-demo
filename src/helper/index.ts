const includes = (string: string): RegExp => new RegExp(`.*${string}`, 'g');

export interface BlockActionIncludes {
  type: 'block_actions',
  action_id: RegExp;
}

export const blockActionIncludes = (string: string): BlockActionIncludes => ({
  type: 'block_actions',
  action_id: includes(string),
});

export const getDayYear = (date: string): string => `<!date^${Math
  .floor(new Date(date)
    .getTime() / 1000)}^{date}|${date}>`;
