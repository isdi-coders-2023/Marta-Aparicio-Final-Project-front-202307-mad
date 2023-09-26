import styles from './footer.module.scss';
export function Footer() {
  return (
    <footer className={styles.footer}>
      <address>
        <span>https://github.com/martiap</span>
        <span>Ⓒ Yammy Piñami</span>
      </address>
    </footer>
  );
}
