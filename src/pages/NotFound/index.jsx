import styles from "./notfound.module.css";
import { Button } from "../../components/Button";

export const NotFound = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Página não encontrada :(</h1>
        <Button href='/'>Voltar</Button>
      </div>
    </main>
  );
};
