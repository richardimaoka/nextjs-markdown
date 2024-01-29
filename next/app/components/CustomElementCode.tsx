import styles from "./CustomElementCode.module.css";

interface Props {
  children: React.ReactNode;
}

export function CustomElementCode(props: Props) {
  return <code className={styles.component}>{props.children}</code>;
}
