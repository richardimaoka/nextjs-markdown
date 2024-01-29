import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
type Props = JSX.IntrinsicElements["code"];

export function CustomElementCode(props: Props) {
  const children = props.children;
  if (typeof children === "string") {
    return <SyntaxHighlighter>{children}</SyntaxHighlighter>;
  } else {
    return <></>;
  }
}
