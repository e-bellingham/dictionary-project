import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1 className="text-primary">Dictionary</h1>
      <Dictionary />
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
