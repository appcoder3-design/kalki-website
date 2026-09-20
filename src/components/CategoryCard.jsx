import { Link } from 'react-router-dom'

export default function CategoryCard({ category, index }) {
  return (
    <Link className="category-card" to={`/category/${category.slug}`} style={{ '--card-accent': category.accent }}>
      <div className="category-image-wrap">
        <img src={category.image} alt={category.name} className="category-image" />
        <span className="card-index">0{index + 1}</span>
        <span className="card-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="category-card-copy">
        <span className="eyebrow">{category.eyebrow}</span>
        <h3>{category.name}</h3>
        <p>{category.description}</p>
      </div>
    </Link>
  )
}
