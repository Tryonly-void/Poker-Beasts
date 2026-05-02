import "./App.css";

const colorways = {
  "1": {
    name: "Colorway 1",
    text: "#FAF6F0",
    background: "#2B2D33",
    primary: "#2A6496",
    secondary: "#5BAFD6",
    accent: "#00C9A7",
  },
  "2": {
    name: "Colorway 2",
    text: "#FAF6F0",
    background: "#1E2A3A",
    primary: "#5B2D8F",
    secondary: "#F0783D",
    accent: "#F5C518",
  },
  "3": {
    name: "Colorway 3",
    text: "#F8FAFC",
    background: "#0F172A",
    primary: "#2563EB",
    secondary: "#22C55E",
    accent: "#F8FAFC",
  },
};

function App() {
  const params = new URLSearchParams(window.location.search);
  const selected = params.get("colorway") || "1";
  const theme = colorways[selected] || colorways["1"];

  return (
    <main
      style={{
        "--text": theme.text,
        "--background": theme.background,
        "--primary": theme.primary,
        "--secondary": theme.secondary,
        "--accent": theme.accent,
      }}
    >
      <nav className="nav">
        <div className="brand">Poker Beasts</div>
        <div className="links">
          <a href="/?colorway=1">Colorway 1</a>
          <a href="/?colorway=2">Colorway 2</a>
          <a href="/?colorway=3">Colorway 3</a>
        </div>
      </nav>

      <section className="hero">
        <p>{theme.name}</p>
        <h1>Colorway Preview</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipiscing elit.</span>
      </section>

      <section className="palette">
        <div className="swatch background">
          <span>Background</span>
          <strong>{theme.background}</strong>
        </div>
        <div className="swatch primary">
          <span>Primary</span>
          <strong>{theme.primary}</strong>
        </div>
        <div className="swatch secondary">
          <span>Secondary</span>
          <strong>{theme.secondary}</strong>
        </div>
        <div className="swatch accent">
          <span>Accent</span>
          <strong>{theme.accent}</strong>
        </div>
      </section>

      <section className="button-section">
        <h2>Buttons</h2>
        <div className="button-row">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-outline">Outline</button>
        </div>
      </section>

      <section className="cards">
        <article className="card card-primary">
          <p>Primary card</p>
          <h2>Lorem ipsum</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipiscing elit.</span>
        </article>

        <article className="card card-secondary">
          <p>Secondary card</p>
          <h2>Lorem ipsum</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipiscing elit.</span>
        </article>

        <article className="card card-accent">
          <p>Accent card</p>
          <h2>Lorem ipsum</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipiscing elit.</span>
        </article>
      </section>

      <section className="blocks">
        <div className="text-block">
          <p>Lorem ipsum</p>
          <h2>Lorem ipsum dolor sit amet</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            facilisis, neque vitae dignissim porta, libero velit bibendum massa.
          </span>
        </div>

        <div className="stats">
          <div>
            <strong>80%</strong>
            <span>Lorem</span>
          </div>
          <div>
            <strong>42</strong>
            <span>Ipsum</span>
          </div>
          <div>
            <strong>12K</strong>
            <span>Dolor</span>
          </div>
        </div>
      </section>

      <section className="progress-section">
        <h2>Progress module</h2>
        <div className="progress">
          <div></div>
        </div>
      </section>

      <footer>
        <span>Poker Beasts</span>
        <span>Lorem ipsum dolor sit amet.</span>
      </footer>
    </main>
  );
}

export default App;