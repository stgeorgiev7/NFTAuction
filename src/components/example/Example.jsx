import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Paper className={classNames(styles.paper)}>
        <Logo type={'default'}/>
        <Logo type={'muted'}/>
          <Link href="/about" color="secondary">
            
          </Link>
        </Paper>
      </Container>
    </div>
  );
}
