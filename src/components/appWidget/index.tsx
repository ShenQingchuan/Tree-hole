import clsx from 'clsx';
import { View } from '@tarojs/components'
import { computeGridPercent, mergePropsStyle } from 'src/utils';
import s from './styles.module.less';

export interface AppWidgetProps {
  name: string;
  tag: string;
  grid: number;
  height: string;
  noShadow?: boolean;
}

export const AppWidget: ReactFC<AppWidgetProps> = (props) => {
  const { 
    tag, grid, height, noShadow,
    children, style, className
  } = props;

  const baseWidget = (
    <View 
      className={clsx(s.app_grid_item, tag,
        'flex_col', 'jyct_center', 'anis_center',
        noShadow && 'no_shadow',
        className,
      )}
      style={mergePropsStyle({
        width: `${computeGridPercent(grid)}%`,
        height,
      }, style)}
    >
      {children}
    </View>
  );

  return baseWidget;
}
