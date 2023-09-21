import styles from '../error-page/error-page.module.scss';
export default function ErrorPage() {
  return (
    <main className={styles.errorPage}>
      <span className={styles.text}>Error 404</span>
      <span>Page not Found</span>
      <a href="/">INICIO</a>
    </main>
  );
}
