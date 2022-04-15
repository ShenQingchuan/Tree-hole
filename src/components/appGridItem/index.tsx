import { View } from '@tarojs/components'
import { FC } from 'react';
import s from './styles.module.less';

export interface AppGridItemProps {
  name: string;
  width: string;
  height: string;
}

export const AppGridItem: FC<AppGridItemProps> = (props) => {
  const { width, height, children } = props;

  return (
    <View 
      className={s.app_grid_item}
      style={{ width, height }}
    >
      {children}
    </View>
  )
}
