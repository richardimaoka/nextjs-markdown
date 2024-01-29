import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
type Props = JSX.IntrinsicElements["code"];

export function CustomElementCode(props: Props) {
  const children = props.children;
  if (typeof children === "string") {
    const multiLine = children.includes("\n");
    if (multiLine) {
      return <SyntaxHighlighter>{children}</SyntaxHighlighter>;
    } else {
      return (
        <SyntaxHighlighter
          customStyle={{ display: "inline", padding: "0" }}
          PreTag={"span"}
        >
          {children}
        </SyntaxHighlighter>
      );
    }
  } else {
    return <></>;
  }
}
