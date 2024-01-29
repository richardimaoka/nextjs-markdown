import { RehypeServerComponent } from "./components/RehypeServerComponent";
import * as fs from "fs/promises";

export default async function Page() {
  const markdownText = await fs.readFile(
    process.cwd() + "/app/sample.md",
    "utf-8"
  );
  return <RehypeServerComponent markdownText={markdownText} />;
}
