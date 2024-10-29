import "./App.css";

function App() {
  return (
    <main className="main">
      <section className="info">
        <img src="fafa878.png" alt="" />
        <h1>4d results | FAFA878</h1>
        <h2> Play now and get welcome bonus</h2>
        <a href="https://fafa878.com" className="btn">
          <img src="play-now.gif" alt="play-now button" />
        </a>
      </section>
      <section className="result">
        <iframe
          src="https://4dresult88.com/api?region=home"
          frameborder="0"
          className="result-all"
        />
      </section>
    </main>
  );
}

export default App;
