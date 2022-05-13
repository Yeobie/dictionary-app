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
            <a href="https://github.com/Yeobie/dictionary-app">
              Ilaria Vilardi
            </a>{" "}
            with React.
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
