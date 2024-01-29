import * as fs from "fs/promises";
import { MarkdownEditor } from "./edit/MarkdownEditor";

export default async function Page() {
  const markdownText = await fs.readFile(
    process.cwd() + "/app/sample.md",
    "utf-8"
  );
  return <MarkdownEditor defaultMarkdownText={markdownText} />;
}
