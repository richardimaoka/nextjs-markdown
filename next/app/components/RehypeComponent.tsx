import * as prod from "react/jsx-runtime";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import { CustomElementCode } from "./CustomElementCode";
import { Components } from "rehype-react";
import { CustomElementPre } from "./CustomElementPre";

// @ts-expect-error: the react types are missing.
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

interface Props {
  markdownText: string;
}

export async function RehypeComponent(props: Props) {
  // Custom React component mappings
  const customComponents: Partial<Components> = {
    code: CustomElementCode,
    pre: CustomElementPre,
  };

  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, { ...production, components: customComponents })
    .process(props.markdownText);

  return file.result;
}
