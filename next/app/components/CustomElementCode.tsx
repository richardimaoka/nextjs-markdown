interface Props {
  children: React.ReactNode;
}

export function CustomElementCode(props: Props) {
  return <code>{props.children}</code>;
}
