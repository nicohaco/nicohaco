// @flow

export type Params = {
  q: string;
  _sort: '-viewCounter' | '+viewCounter';
  _limit: number;
  fields: string;
  targets: 'title';
  _context: 'nicoapi';
};

export type ResultSchema = {
  tags: string;
  title: string;
  contentId: string;
  startTime: string;
  viewCounter: number;
  description: string;
  categoryTags: string;
  thumbnailUrl: string;
  mylistCounter: number;
  commentCounter: number;
};
