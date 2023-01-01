import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SingleNewsProps} from './types';
import moment from 'moment';
import {truncateText} from 'text-shortener';

export const SingleNews: React.FC<SingleNewsProps> = ({singleNews}) => {
  return (
    <TouchableOpacity style={[styles.mainContainer]}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Image
            source={{
              uri:
                singleNews.image_url ||
                'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw358gSJ2B9WkZJUmTjmsypK&ust=1672668019827000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjDyYzEpvwCFQAAAAAdAAAAABAE',
            }}
            style={styles.avatarImage}
          />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{truncateText(singleNews.title, 20)}</Text>
        <Text style={styles.snippet}>
          {truncateText(singleNews.snippet, 34)}
        </Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.newsTime}>
          {moment(singleNews.published_at).format('hh:mm a')}
        </Text>
        <View style={styles.dots}>
          <></>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  avatarContainer: {
    flex: 0.2,
    backgroundColor: 'white',
  },
  titleContainer: {
    flex: 0.6,
  },
  timeContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  newsTime: {
    fontSize: 10,
    color: '#a9a9a9',
  },
  dots: {
    backgroundColor: 'purple',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  avatar: {
    elevation: 10,
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {
      height: 3,
      width: 3,
    },
  },
  avatarImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 25,
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
  },
  snippet: {
    fontSize: 11,
    fontWeight: '400',
  },
});
