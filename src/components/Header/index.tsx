import format from "date-fns/format";
import ptBr from "date-fns/locale/pt-BR";
import { useDark } from "../../contexts/DarkmodeContext";
import styles from "./styles.module.scss";

export default function Header() {
  const { isDarkModeActive, toggleDarkMode } = useDark();
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBr,
  });
  return (
    <header
      className={
        isDarkModeActive
          ? `${styles.headerContainer} ${styles.headerContainerDark}`
          : styles.headerContainer
      }
    >
      {isDarkModeActive ? (
        <img src="/logo-dark.svg" alt="Podcastr" />
      ) : (
        <img src="/logo.svg" alt="Podcastr" />
      )}
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
      <button type="button" onClick={toggleDarkMode}>
        {isDarkModeActive ? <img src="/light.svg" /> : <img src="/dark.svg" />}
      </button>
    </header>
  );
}
