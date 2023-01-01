import {ViewStyle} from 'react-native';
import {TypeMapper} from '../types';

export type MainLayoutsProps = {
  children?: JSX.Element | JSX.Element[];
  shouldHaveTopInsets?: boolean;
  horizontalPadding?: TypeMapper<ViewStyle, 'paddingHorizontal'>;
};
