import type { CSSProperties } from "react";
import { GRID_UNIT_PERCENTAGE } from "src/constants";

export const computeGridPercent = (grid: number) => Number(GRID_UNIT_PERCENTAGE * grid).toFixed(2);
export const mergePropsStyle = (baseStyle: CSSProperties, propsStyle: CSSProperties | undefined) => propsStyle ? { ...baseStyle, ...propsStyle } : baseStyle;
