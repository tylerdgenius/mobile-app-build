import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: undefined;
  Messages: undefined;
  Location: undefined;
  User: undefined;
};

export type HomeScreenTab = BottomTabScreenProps<RootStackParamList, 'Home'>;
