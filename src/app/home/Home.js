// src/app/home/Home.js
import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Bem-vindo!</h1>
      <div className={styles.options}>
        <Link href="/agendar">
          <a className={styles.button}>Agendar um horário</a>
        </Link>
        <Link href="/meus-agendamentos">
          <a className={styles.button}>Meus agendamentos</a>
        </Link>
      </div>
    </div>
  );
}
