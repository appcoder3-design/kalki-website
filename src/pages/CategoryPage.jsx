import { Link, useParams } from 'react-router-dom'
import { getCategory } from '../data/products'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = getCategory(slug)

  if (!category) return <main className="not-found"><h1>Category not found.</h1><Link to="/">Back to home</Link></main>

  return <main className="category-page"><section className="category-hero" style={{ '--hero-accent': category.accent }}><div className="category-hero-copy"><Link className="back-link" to="/">← All categories</Link><span className="eyebrow">{category.eyebrow}</span><h1>{category.name}<br /><em>for every day.</em></h1><p>{category.description}</p><a className="button button-dark" href="/#contact">Ask about this range <span>↗</span></a></div><div className="category-hero-image"><img src={category.image} alt={category.name} /><span className="hero-image-label">Kalki / {category.shortName}</span></div></section><section className="category-detail"><div><span className="eyebrow">Inside the range</span><h2>Built for<br /><em>busy shelves.</em></h2></div><div className="product-list">{category.products.map((product, index) => <div className="product-line" key={product}><span>0{index + 1}</span><h3>{product}</h3><span>↗</span></div>)}<p>Our full catalogue changes with the seasons and your needs. Contact us for current availability, formats and trade pricing.</p><a className="text-link" href="/#contact">Request the latest catalogue <span>↗</span></a></div></section></main>
}
