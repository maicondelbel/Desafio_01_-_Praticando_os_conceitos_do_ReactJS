import toDoLogo from '../assets/logo-todo.svg';
import styles from './Header.module.css';

export function Header () {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="Logo do Todo App" />
    </header>
  )
}