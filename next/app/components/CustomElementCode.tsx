import styles from "./CustomElementCode.module.css";

type Props = JSX.IntrinsicElements["code"];

export function CustomElementCode(props: Props) {
  return <code className={styles.component}>{props.children}</code>;
}
