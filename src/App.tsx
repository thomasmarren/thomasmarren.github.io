import "./App.css";
import github from "./github.png";
import linkedin from "./linkedin.png";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <header className="App-header">
        <h1>Tom Marren</h1>
        <h2 style={{ margin: "0 0 40px 0" }}>Software Engineer</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a
            style={{ marginRight: "50px", color: "white" }}
            href="https://github.com/thomasmarren"
          >
            <img
              src={github}
              style={{ height: "50px", width: "50px" }}
              alt="github"
            />
          </a>
          <a
            style={{ color: "white" }}
            href="https://linkedin.com/in/marrenthomas"
          >
            <img
              src={linkedin}
              style={{ height: "50px", width: "50px" }}
              alt="linkedin"
            />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
