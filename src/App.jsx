import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'

export default function App() {
  return <div className="app-shell"><Header /><Routes><Route path="/" element={<HomePage />} /><Route path="/category/:slug" element={<CategoryPage />} /></Routes><Footer /></div>
}
