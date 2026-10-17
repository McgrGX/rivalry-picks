import Image from "next/image";

const categories = [
  {
    name: "Beauty",
    description: "Skincare, grooming tools, and high-usage essentials.",
    focus: "Best on value and repeat-purchase volume",
    image: "/images/beauty-serum.jpg",
    imageAlt: "Unbranded amber skincare dropper bottle in natural light",
    number: "01",
  },
  {
    name: "Home & Kitchen",
    description: "Air fryers, espresso gear, storage, and small appliances.",
    focus: "Price-per-use and bundle value",
    image: "/images/kitchen.jpg",
    imageAlt: "Home cook preparing a meal in a bright kitchen",
    number: "02",
  },
  {
    name: "Fashion",
    description: "Everyday basics, outerwear, and seasonal must-haves.",
    focus: "Fit, value, and return risk",
    image: "/images/fashion-rail.jpg",
    imageAlt: "A considered edit of clothing on a rail",
    number: "03",
  },
];

const scoreboard = [
  { label: "Beauty", amazon: "Amazon lead", costco: "Costco close second" },
  { label: "Home & Kitchen", amazon: "Amazon advantage", costco: "Costco bundle win" },
  { label: "Fashion", amazon: "Amazon breadth", costco: "Costco value play" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-rule" /> The value face-off · US + Canada</p>
            <h1>Two carts.<br /><em>One winner.</em></h1>
          <p className="lead">
            We put the everyday essentials head-to-head and show the math behind every call. No hype. Just the bundle, the unit price, and the receipt.
          </p>
          <div className="cta-row">
            <a href="#categories" className="button primary">Pick a category <span aria-hidden="true">↘</span></a>
            <a href="#scoreboard" className="text-link">See this edition’s calls <span aria-hidden="true">↗</span></a>
          </div>
            <p className="prototype-note"><span className="status-dot" /> Prototype edition <span className="note-divider">/</span> sample pricing only</p>
          </div>
          <div className="hero-art" aria-label="Illustrative product categories">
            <div className="hero-photo hero-photo-main">
              <Image src="/images/kitchen.jpg" alt="Illustrative home-kitchen scene" fill priority sizes="(max-width: 850px) 100vw, 55vw" />
              <span className="photo-caption">THE HOME EDIT <b>·</b> SAMPLE SCENE</span>
            </div>
            <div className="hero-photo hero-photo-beauty">
              <Image src="/images/beauty-serum.jpg" alt="Illustrative skincare product" fill sizes="180px" />
              <span className="photo-index">01 / BEAUTY</span>
            </div>
            <div className="hero-photo hero-photo-fashion">
              <Image src="/images/fashion-rail.jpg" alt="Illustrative fashion edit" fill sizes="180px" />
              <span className="photo-index">03 / STYLE</span>
            </div>
            <div className="hero-sticker"><span>THE</span><strong>PRICE<br />CHECK</strong><i>RP / 01</i></div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Comparison principles"><span>NO SPONSORED VERDICTS</span><i>✳</i><span>UNIT PRICE MATTERS</span><i>✳</i><span>BUNDLES GET COUNTED</span><i>✳</i><span>US + CANADA</span><i>✳</i><span>NO SPONSORED VERDICTS</span></div>

      <div className="content-wrap">
      <section className="section scoreboard-section" id="scoreboard">
        <div className="section-header">
          <div><p className="eyebrow">Scoreboard <span className="section-index">/ 01</span></p><h2>Today&apos;s category calls</h2></div>
          <p className="section-aside">Early editorial hypotheses<br />awaiting verified field checks</p>
        </div>
        <div className="scoreboard-grid">
          {scoreboard.map((item) => (
            <article key={item.label} className="score-card">
              <div className="score-top"><p className="card-label">{item.label}</p><span aria-hidden="true">↗</span></div>
              <div className="score-lines">
                <div className="score-side"><span className="brand amazon">AMAZON</span><strong>{item.amazon}</strong></div>
                <div className="score-versus">VS</div>
                <div className="score-side"><span className="brand costco">COSTCO</span><strong>{item.costco}</strong></div>
              </div>
              <div className="score-rule"><span /></div>
              <small>VERDICT IN PROGRESS</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="categories">
        <div className="section-header">
          <div><p className="eyebrow">The shortlist <span className="section-index">/ 02</span></p><h2>Where value gets interesting</h2></div>
          <p className="section-aside">Three categories. Real differences.<br />One useful decision at a time.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <article key={category.name} className="category-card">
              <div className="category-image"><Image src={category.image} alt={category.imageAlt} fill sizes="(max-width: 700px) 100vw, 33vw" /><span className="category-number">{category.number}</span></div>
              <div className="category-copy"><p className="card-label">CATEGORY {category.number}</p><h3>{category.name}</h3><p>{category.description}</p><div className="category-focus"><span>THE LENS</span><strong>{category.focus}</strong></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section method-section" id="method">
        <div className="section-header">
          <div><p className="eyebrow">Our method <span className="section-index">/ 03</span></p><h2>Every verdict earns its keep.</h2></div>
          <p className="section-aside">Editorial standard: if we can&apos;t show the work,<br />we don&apos;t call a winner.</p>
        </div>
        <div className="steps-grid">
          <div><span>01</span><h3>Same item?</h3><p>We separate exact matches from bundles and closest alternatives.</p></div>
          <div><span>02</span><h3>Same math.</h3><p>Pack size, delivery, membership, and per-use value all count.</p></div>
          <div><span>03</span><h3>Show receipts.</h3><p>Dates, sources, and changes stay visible. No pay-to-win verdicts.</p></div>
        </div>
      </section>

      <section className="closing-band"><span className="closing-mark">RP</span><div><p className="eyebrow">The point isn&apos;t the rivalry.</p><h2>It&apos;s knowing what your money gets you.</h2></div><a href="#categories" className="closing-link">RUN THE NUMBERS <span aria-hidden="true">↗</span></a></section>
      <footer className="footer"><p>Rivalry Picks is an independent prototype. Amazon and Costco have not sponsored or endorsed this site.</p><p>Illustrative imagery and sample comparisons only. No live prices, retailer approvals, or affiliate links.</p></footer>
      </div>
    </main>
  );
}
