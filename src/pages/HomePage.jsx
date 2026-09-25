import CategoryCard from '../components/CategoryCard'
import ContactSection from '../components/ContactSection'
import { categories } from '../data/products'

export default function HomePage() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-content"><span className="eyebrow hero-eyebrow">Wholesale, thoughtfully sourced</span><h1>Stocked for<br /><em>Singapore.</em></h1><p>From sesame and soyabean supply to premium sourced nuts with a reliable service for growing food businesses, we help brands and retailers stay ready for demand.</p><a className="button button-dark" href="#categories">Explore our range <span>↓</span></a></div>
          <div className="hero-visual"><img src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1800&q=90" alt="Singapore skyline and waterfront" /><div className="hero-note"><span className="note-dot" />Supplying businesses<br />across Singapore</div></div>
          <div className="hero-scroll">Scroll to explore <span>↓</span></div>
        </section>

        <section className="statement-section" id="about"><span className="section-number">01 / 04</span><div><span className="eyebrow">More than a supplier</span><h2>Built for<br /><em>Singapore trade.</em></h2></div><p>Kalki Business is a Singapore-based wholesale partner delivering dependable product quality and steady supply for businesses that need trust and reliability every day.</p></section>

        <section className="categories-section" id="categories"><div className="section-heading"><div><span className="eyebrow">The range</span><h2>Find your <em>fit.</em></h2></div><span className="section-number">02 / 04</span></div><div className="category-grid">{categories.map((category, index) => <CategoryCard category={category} index={index} key={category.slug} />)}</div><div className="category-foot"><span>Sesame, soyabean &amp; nuts supply</span><span>Tap a category to explore <span aria-hidden="true">↗</span></span></div></section>

        <section className="promise-section"><div className="promise-copy"><span className="eyebrow">The Kalki promise</span><h2>Dependable by<br /><em>design.</em></h2></div><div className="promise-list"><div><span>01</span><p>Quality you can trust</p></div><div><span>02</span><p>Supply you can plan around</p></div><div><span>03</span><p>A team that picks up fast</p></div></div></section>
        <ContactSection />
      </main>
    </>
  )
}
