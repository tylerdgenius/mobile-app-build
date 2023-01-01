export type ReturnedNewsEndpointData = {
  meta: {
    found: number;
    returned: number;
    limit: number;
    page: number;
  };
  data: News[];
};

export type News = {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: string;
  locale: string;
};

export type GetNewsHookProps = {
  url?: string;
  skip?: boolean;
  onSuccess?: (data: ReturnedNewsEndpointData) => void;
  onError?: (error: any) => void;
};
