const categories = [
  {
    name: "Beauty",
    description: "Skincare, grooming tools, and high-usage essentials.",
    focus: "Best on value and repeat-purchase volume",
  },
  {
    name: "Home & Kitchen",
    description: "Air fryers, espresso gear, storage, and small appliances.",
    focus: "Price-per-use and bundle value",
  },
  {
    name: "Fashion",
    description: "Everyday basics, outerwear, and seasonal must-haves.",
    focus: "Fit, value, and return risk",
  },
];

const scoreboard = [
  { label: "Beauty", amazon: "Amazon lead", costco: "Costco close second" },
  { label: "Home & Kitchen", amazon: "Amazon advantage", costco: "Costco bundle win" },
  { label: "Fashion", amazon: "Amazon breadth", costco: "Costco value play" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Prototype · Amazon vs Costco</p>
          <h1>Rivalry Picks</h1>
          <p className="lead">
            A static proof-of-concept comparing Amazon and Costco across the categories that matter most for everyday value: beauty, home & kitchen, and fashion.
          </p>
          <div className="cta-row">
            <a href="#categories" className="button primary">See the categories</a>
            <a href="#scoreboard" className="button secondary">View the scorecard</a>
          </div>
          <p className="prototype-note">
            Sample data only. No live affiliate IDs, no real retailer approvals, and no indexing until launch review is complete.
          </p>
        </div>

        <div className="hero-panel">
          <div className="panel-chip">Today&apos;s value call</div>
          <div className="panel-grid">
            <div>
              <span className="brand amazon">Amazon</span>
              <strong>Best for convenience</strong>
              <small>Fast shipping and broader assortment</small>
            </div>
            <div>
              <span className="brand costco">Costco</span>
              <strong>Best for bulk value</strong>
              <small>Better unit economics on repeat buys</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="scoreboard">
        <div className="section-header">
          <p className="eyebrow">Scoreboard</p>
          <h2>Who wins each category?</h2>
        </div>
        <div className="scoreboard-grid">
          {scoreboard.map((item) => (
            <article key={item.label} className="score-card">
              <p className="card-label">{item.label}</p>
              <div className="score-lines">
                <div>
                  <span className="brand amazon">Amazon</span>
                  <strong>{item.amazon}</strong>
                </div>
                <div>
                  <span className="brand costco">Costco</span>
                  <strong>{item.costco}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="categories">
        <div className="section-header">
          <p className="eyebrow">Target categories</p>
          <h2>Built for the highest-intent comparison moments</h2>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <article key={category.name} className="category-card">
              <p className="card-label">{category.name}</p>
              <h3>{category.description}</h3>
              <p>{category.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section steps">
        <div className="section-header">
          <p className="eyebrow">How the funnel works</p>
          <h2>Simple, conversion-focused, and easy to test</h2>
        </div>
        <div className="steps-grid">
          <div>
            <span>01</span>
            <h3>Publish a hot comparison</h3>
            <p>Short-form videos and deal alerts highlight Amazon vs Costco value tension.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Send traffic to a landing page</h3>
            <p>Visitors compare a product, see the winner, and land on the retailer link.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Track performance</h3>
            <p>Measure which categories convert most strongly before launch-grade monetization.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Rivalry Picks is a public proof-of-concept site for testing demand and messaging.</p>
        <p>Not a live affiliate program, not final legal copy, and no production retailer approvals yet.</p>
      </footer>
    </main>
  );
}
