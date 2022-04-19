import { View } from '@tarojs/components'
import { FC } from 'react';
import s from './styles.module.less';

export interface AppGridItemProps {
  name: string;
  grid: number;
  height: string;
}

export const AppGridItem: FC<AppGridItemProps> = (props) => {
  const { grid, height, children } = props;

  return (
    <View 
      className={s.app_grid_item}
      style={{
        width: `${6.25 * grid}%`,
        height 
      }}
    >
      {children}
    </View>
  )
}
