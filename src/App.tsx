import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tom Marren</h1>
        <h2 style={{ margin: "0 0 40px 0" }}>Software Engineer</h2>
        <div>
          <a
            style={{ marginRight: "20px", color: "white" }}
            href="https://github.com/thomasmarren"
          >
            Github
          </a>
          <span style={{ marginRight: "20px" }}>•</span>
          <a
            style={{ color: "white" }}
            href="https://linkedin.com/in/marrenthomas/"
          >
            Linkedin
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
