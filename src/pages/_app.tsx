import Header from "../components/Header";
import Player from "../components/Player";
import DarkModeProvider from "../contexts/DarkmodeContext";
import PlayerContextProvider from "../contexts/PlayerContext";
import styles from "../styles/app.module.scss";

import "../styles/global.scss";
function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <PlayerContextProvider>
        <div className={styles.wrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
      </PlayerContextProvider>
    </DarkModeProvider>
  );
}

export default MyApp;
