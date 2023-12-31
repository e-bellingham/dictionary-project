import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="body">
        <h1>.Dictionary.</h1>
        <Dictionary />
      </div>
      <footer>
        {" "}
        Coded by Elizabeth Bellingham and open-sourced on{" "}
        <a
          target="_blank"
          href="https://github.com/e-bellingham/dictionary-project"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
