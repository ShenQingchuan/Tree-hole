import { View } from '@tarojs/components'
import { FlexView } from 'src/components/flexView'
import { AppWidget } from 'src/components/appWidget'
import { AppAniversary } from 'src/applications/anniversary'
import { AppGallery } from 'src/applications/gallery'
import s from './styles.module.less'

export default function IndexPage() {
  return (
    <View className={s.page_index}>
      <View className={s.page_index__app_grid}>
        <AppWidget name='纪念日' tag='anniversary' grid={12} height='240rpx'>
          <AppAniversary />
        </AppWidget>

        <FlexView className='p_lr_16' grid={12} direction='column' justify='start'>
          <AppWidget  name='画廊'  tag='gallery' grid={24}  height='120rpx'>
            <AppGallery />
          </AppWidget>
          <FlexView className='p_lr_16 p_t_24 p_b_8 flex_1' direction='row' grid={24} justify='space-between'>
            <AppWidget name='密记'  tag='diary' grid={8}  height='70rpx' noShadow />
            <AppWidget name='许愿池'  tag='wishing_well' grid={8}  height='70rpx' noShadow />
          </FlexView>
        </FlexView>
      </View>
    </View>
  )
}
