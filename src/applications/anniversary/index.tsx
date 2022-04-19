import { View, Text } from '@tarojs/components'
import { FC } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import s from './styles.module.less';

export interface AppAniversaryProps {

}

export const AppAniversary: FC<AppAniversaryProps> = () => {
  return (
    <View className={clsx(s.app_anniversary, 'flex_col', 'center_all', 'h_full')}>
      <View className={clsx(s.app_anniversary__highlight, 'flex_col')}>
        <Text className={clsx(s.app_anniversary__highlight_text, 'tc_white')}>
          💗 和琳琳在一起已经
        </Text>
        <View 
          className={
            clsx(
              s.app_anniversary__highlight_days,
              'fs_81', 'fw_bold', 'tc_white', 'flex_row', 'center_all',
            )}
          >
          {dayjs().diff(dayjs('2019-06-21'), 'day')}
          <Text 
            className={clsx(
              s.app_anniversary__highlight_days_label,
              'fs_32', 'fw_400', 'tc_white', 'm_l_8', 'p_8',
            )}
          >
            DAYS
          </Text>
        </View>
      </View>
    </View>
  )
}