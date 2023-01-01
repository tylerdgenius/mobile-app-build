import {News} from 'src/hooks/types';

export type SingleNewsProps = {
  singleNews: News;
  index: number;
};

export type AllNewsProps = {
  news: News[];
};
