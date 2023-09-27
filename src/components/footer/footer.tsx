import { BsGithub } from 'react-icons/bs';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <address>
        <a
          href="https://github.com/martiap"
          target="_blank"
          aria-label="Link a mi perfil de GitHub"
        >
          Yammy Piñami
          <span>
            <BsGithub />
          </span>
        </a>
      </address>
    </footer>
  );
}
