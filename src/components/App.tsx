import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        Hello World
      </div>
    </>
  );
}

export default App;
