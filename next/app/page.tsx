import { RehypeComponent } from "./components/RehypeComponent";

const text = `# A first-level heading
## A second-level heading
### A third-level heading`;

export default function Page() {
  return <RehypeComponent markdownText={text} />;
}
