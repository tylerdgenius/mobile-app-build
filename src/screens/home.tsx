import {AbortController} from 'native-abort-controller';
import React from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useGetNews} from 'src/hooks/useGetNews';
import {BackButton, SearchBar} from '../components';
import {HomeScreenTab} from '../navigation/types';
import {AllNews} from './components';

export const HomeScreen: React.FC<HomeScreenTab> = ({}) => {
  const {top} = useSafeAreaInsets();

  const {news, isLoading, setIsLoading, triggerFetch} = useGetNews({
    url: 'https://api.thenewsapi.com/v1/news/top?api_token=F1FSIWv7wHJUcQNlrBeqTQkQxQIeSkMEIjvZDeCX&locale=us&limit=3',
  });

  const controller = new AbortController();

  const onRefresh = React.useCallback(() => {
    setIsLoading(true);
    triggerFetch(controller);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerFetch, setIsLoading]);

  return (
    <View style={[styles.homeContainer, {paddingTop: top}]}>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Search</Text>
        <SearchBar />
      </View>
      <View style={styles.newsContainer}>
        <Text style={[styles.searchText, styles.newsText]}>News</Text>
      </View>
      <View style={styles.scrollNewsSection}>
        {isLoading && <ActivityIndicator />}
        <ScrollView
          style={styles.scrollNewsContainer}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
          }>
          <AllNews news={news} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  backButtonContainer: {
    flex: 0.1,
    justifyContent: 'center',
  },
  newsContainer: {
    flex: 0.05,
  },
  searchContainer: {
    flex: 0.2,
  },
  scrollNewsSection: {
    flex: 0.63,
    // paddingVertical: 20,
    paddingBottom: 20,
  },
  scrollNewsContainer: {
    flex: 1,
  },
  searchText: {
    fontSize: 25,
    fontWeight: '800',
  },
  newsText: {
    fontSize: 23,
  },
});
