import Header from "./Components/Header/Header";
import './globalStyle.scss';
import s from './app.module.scss';
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <div className={s.content}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
