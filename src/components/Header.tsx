import styles from './Header.module.css';
import feedLogo from '../assets/feed-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={feedLogo} alt='Logo ignite feed' />
      <strong>Ignite Feed</strong>
    </header>
  );
}
