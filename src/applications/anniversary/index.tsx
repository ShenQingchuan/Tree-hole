import { View, Text } from '@tarojs/components'
import { FC } from 'react';
import clsx from 'clsx'
import s from './styles.module.less';

export interface AppAniversaryProps {

}

export const AppAniversary: FC<AppAniversaryProps> = () => {
  return (
    <View className={clsx(s.app_anniversary, 'flex_col', 'center_all', 'h_full')}>
      <View className={clsx(s.app_anniversary__highlight, 'flex_col')}>
        <Text className={clsx(s.app_anniversary__highlight_text, 'fc_n600')}>和琳琳在一起已经</Text>
        <Text className={clsx(s.app_anniversary__highlight_days, 'fs_81', 'fw_bold')}>
          1021
          <Text className='fs_24 fc_n600'>天了</Text>
        </Text>
      </View>
    </View>
  )
}