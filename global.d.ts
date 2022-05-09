declare module "*.less" {
  const styles: Record<string, string>;
  export default styles;
}
declare module "*.png" { const value: string; export default value }
declare module "*.jpg" { const value: string; export default value }
declare module "*.jpeg" { const value: string; export default value }

type ReactFC<P = {}> = React.FC<P & {
  className?: string;
  style?: React.CSSProperties;
}>;
