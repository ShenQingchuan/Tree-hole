import { View } from '@tarojs/components'
import { AppGridItem } from '../../components/appGridItem'
import { AppAniversary } from '../../applications/anniversary'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import s from './styles.module.less'

export default function IndexPage() {
  return (
    <View className={s.page_index}>
      <View className={s.page_index__app_grid}>
        <AppGridItem
          name="纪念日"
          width='360rpx' height='360rpx'
        >
          <AppAniversary />
        </AppGridItem>
      </View>
    </View>
  )
}
