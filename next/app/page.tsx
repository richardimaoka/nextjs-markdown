import { Fragment, createElement, useEffect, useState } from "react";
import * as prod from "react/jsx-runtime";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { unified } from "unified";

// @ts-expect-error: the react types are missing.
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

const text = `<h2>Hello, world!</h2>
<p>Welcome to my page 👀</p>`;

/**
 * @param {string} text
 * @returns {JSX.Element}
 */
function useProcessor(text) {
  const [Content, setContent] = useState(createElement(Fragment));

  useEffect(
    function () {
      (async function () {
        const file = await unified()
          .use(rehypeParse, { fragment: true })
          .use(rehypeReact, production)
          .process(text);

        setContent(file.result);
      })();
    },
    [text]
  );

  return Content;
}

export default function App() {
  return useProcessor(text);
}
