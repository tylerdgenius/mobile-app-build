export type ChildrenRendererType<T = undefined> = React.FC<{
  children: JSX.Element | JSX.Element[];
  otherProps?: T;
}>;
