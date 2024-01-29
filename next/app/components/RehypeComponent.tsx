import * as prod from "react/jsx-runtime";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { unified } from "unified";

// @ts-expect-error: the react types are missing.
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

interface Props {
  htmlText: string;
}

export async function RehypeComponent(props: Props) {
  const file = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, production)
    .process(props.htmlText);

  return file.result;
}
