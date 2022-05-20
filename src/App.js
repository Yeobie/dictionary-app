import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <main>
          <Dictionary />
        </main>
        <footer className="Credits">
          <small>
            Created by{" "}
            <a
              href="https://github.com/Yeobie/dictionary-app"
              target="_blank"
              rel="noreferrer"
              title="My Github repository"
            >
              Ilaria Vilardi
            </a>{" "}
            with React and{" "}
            <a
              href="https://app.netlify.com/sites/friendly-stardust-5aa51e/deploys"
              target="_blank"
              rel="noreferrer"
              title="My Netlify"
            >
              hosted on Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
