import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Head from "../header/Header";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Head/>

      <Container className={classNames(styles.container)} maxWidth="xl">

        <Paper className={classNames(styles.paper)}>

          <Link href="/about" color="secondary">

          </Link>
        </Paper>
      </Container>
    </div>
  );
}
