import clsx from 'clsx';
import { View } from '@tarojs/components'
import { computeGridPercent, mergePropsStyle } from 'src/utils';
import s from './styles.module.less';

export interface GridViewProps {
  grid: number;
  height?: string;
  direction: 'row' | 'column';
  justify: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
}

export const FlexView: ReactFC<GridViewProps> = (props) => {
  const { 
    grid, direction, justify,
    children, height, className, style,
  } = props;

  return (
    <View 
      className={clsx(
        s.grid_view, 
        direction === 'row' ? 'flex_row' : 'flex_col',
        className,
      )}
      style={mergePropsStyle({
        width: `${computeGridPercent(grid)}%`,
        justifyContent: direction === 'row' ? justify : 'flex-start',
        alignItems: direction === 'row' ? 'center' : 'flex-start',
        height: height || 'auto'
      }, style)}
    >
      {children}
    </View>
  )
}
