import { RehypeComponent } from "./components/RehypeComponent";

const text = `<h2>Hello, world!</h2>
<p>Welcome to my page 👀</p>`;

export default function Page() {
  return <RehypeComponent htmlText={text} />;
}
