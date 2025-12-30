import { type ReactNode } from "react";
import { Header } from "../header/index";
import { Footer } from "../footer/index";
import styles from "./index.module.css";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
