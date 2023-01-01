import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ChildrenRenderer} from 'src/components/childrenRenderer';
import {MainLayoutsProps} from './types';

export const MainLayout: React.FC<MainLayoutsProps> = ({
  children,
  shouldHaveTopInsets = true,
  horizontalPadding = 20,
}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        paddingTop: shouldHaveTopInsets ? top : 0,
        paddingHorizontal: horizontalPadding,
        flex: 1,
        backgroundColor: 'white',
      }}>
      {children && <ChildrenRenderer children={children} />}
    </View>
  );
};
