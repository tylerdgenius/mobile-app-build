import {FlatList} from 'react-native';
import React from 'react';
import {SingleNews} from './singleNews';
import {AllNewsProps} from './types';
import {News} from 'src/hooks/types';
import {EmptyNews} from './emptyNews';

export const AllNews: React.FC<AllNewsProps> = ({news}) => {
  return (
    <FlatList<News>
      data={news}
      renderItem={({item, index}) => (
        <SingleNews singleNews={item} index={index} />
      )}
      ListEmptyComponent={<EmptyNews />}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
    // <View></View>
  );
};
