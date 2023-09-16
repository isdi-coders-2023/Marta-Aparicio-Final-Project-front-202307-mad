import styles from '../header/header.module.scss';
export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src="../../../assets/pinapple.svg" alt="Piña" />
        <hgroup>
          <h1>Yummy Piñami</h1>
          <p>Recetas</p>
        </hgroup>
      </div>
    </header>
  );
}
