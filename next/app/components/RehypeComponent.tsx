import * as prod from "react/jsx-runtime";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import { unified } from "unified";

// @ts-expect-error: the react types are missing.
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

interface Props {
  markdownText: string;
}

export async function RehypeComponent(props: Props) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, production)
    .process(props.markdownText);

  return file.result;
}
