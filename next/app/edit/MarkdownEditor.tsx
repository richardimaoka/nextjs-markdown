"use client";

import { RehypeClientComponent } from "../components/RehypeClientComponent";
import styles from "./MarkdownEditor.module.css";
import { useEffect, useState } from "react";

interface Props {
  defaultMarkdownText: string;
}

export function MarkdownEditor(props: Props) {
  const [markdownText, setMarkdownText] = useState("");

  useEffect(() => {
    console.log("useEffect MarkdownEditor");
    setMarkdownText(props.defaultMarkdownText);
  }, [props.defaultMarkdownText]);

  return (
    <div className={styles.component}>
      <div className={styles.left}>
        <textarea
          className={styles.textarea}
          onChange={(e) => {
            setMarkdownText(e.target.value);
          }}
          value={markdownText}
        />
      </div>
      <div className={styles.right}>
        <RehypeClientComponent markdownText={markdownText} />
      </div>
    </div>
  );
}
