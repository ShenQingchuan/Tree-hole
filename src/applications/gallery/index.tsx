import { FC } from 'react';
import { View, Text } from '@tarojs/components'
import clsx from 'clsx';
import s from './styles.module.less';

export const AppGallery: FC = () => {
  return (
    <View className={clsx(s.app_anniversary, 'flex_col', 'center_all', 'h_full')}>
      <Text className={clsx('tc_white', 'fw_bold')}>树 · 屋 · 画 · 廊</Text>
    </View>
  )
}
