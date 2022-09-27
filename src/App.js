import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="Logo" />
          <h5 className="logoText">OlenaKut</h5>
        </header>
      </div>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer text-center m-5">
        Coded by{" "}
        <a
          href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BD%D0%B0-%D0%BA%D1%83%D1%82%D0%B0%D1%81%D0%B5%D0%B2%D0%B8%D1%87-b0b99a24b/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Olena Kutasevych
        </a>{" "}
        and is
        <a
          href="https://github.com/OlenaKut/react-weather-app.git"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-soursed on GitHub
        </a>
      </footer>
    </div>
  );
}
