import {useCallback, useEffect, useState} from 'react';
import {AbortController} from 'native-abort-controller';
import axios from 'axios';
import {GetNewsHookProps, News} from './types';

export const useGetNews = ({
  url = 'https://api.thenewsapi.com/v1/news/top?api_token=F1FSIWv7wHJUcQNlrBeqTQkQxQIeSkMEIjvZDeCX',
  skip = false,
  onError,
  onSuccess,
}: GetNewsHookProps) => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = useCallback(
    async (_controller: AbortController) => {
      setIsLoading(true);
      try {
        const {data} = await axios.get(url, {
          signal: _controller.signal,
        });

        setNews(data.data);

        onSuccess && onSuccess(data);
      } catch (err) {
        console.error({
          message: 'Error occurred when fetching data from endpoint',
          location: 'use_get_news_hook',
        });
        onError && onError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [onError, onSuccess, url],
  );

  useEffect(() => {
    const controller = new AbortController();
    if (!skip) {
      fetchNews(controller);
    }
    return () => controller.abort();
  }, [fetchNews, skip]);

  return {
    news,
    isLoading,
    setIsLoading,
    triggerFetch: fetchNews,
  };
};
