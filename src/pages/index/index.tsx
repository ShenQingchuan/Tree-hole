import { View, Text } from '@tarojs/components'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import s from './index.module.less'

export default function IndexPage() {
  return (
    <View className={s.page_index}>
      <Text>Hello world!</Text>
    </View>
  )
}
