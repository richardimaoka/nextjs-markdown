"use client";

import { Fragment, createElement, useEffect, useState } from "react";
import * as prod from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
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

export function RehypeClientComponent(props: Props) {
  const [Content, setContent] = useState(createElement(Fragment));

  useEffect(() => {
    // Custom React component mappings
    const customComponents: Partial<Components> = {
      code: CustomElementCode,
      pre: CustomElementPre,
    };

    (async function () {
      const file = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeReact, { ...production, components: customComponents })
        .process(props.markdownText);

      setContent(file.result);
    })();
  }, [props.markdownText]);

  return Content;
}
