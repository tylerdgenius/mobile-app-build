import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: undefined;
  Messages: undefined;
  Location: undefined;
  User: undefined;
};

export type HomeScreenTab = BottomTabScreenProps<RootStackParamList, 'Home'>;
export type MessagesScreenTab = BottomTabScreenProps<
  RootStackParamList,
  'Messages'
>;
export type LocationScreenTab = BottomTabScreenProps<
  RootStackParamList,
  'Location'
>;
export type UserScreenTab = BottomTabScreenProps<RootStackParamList, 'User'>;
