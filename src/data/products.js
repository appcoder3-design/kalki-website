export const categories = [
  {
    slug: 'sesame',
    eyebrow: 'Golden trade staple',
    name: 'Sesame',
    shortName: 'Sesame',
    description: 'High-quality sesame supply for foodservice, retail and manufacturing operations across Singapore.',
    image: '/Product%20Images/Sesame.jfif',
    accent: '#f3d78b',
    products: ['White sesame seeds', 'Black sesame seeds', 'Sesame oil', 'Sesame paste'],
  },
  {
    slug: 'soyabean',
    eyebrow: 'Reliable plant protein',
    name: 'Soyabean',
    shortName: 'Soyabean',
    description: 'Dependable soyabean supply built for Kitchens, businesses and production lines that need consistency.',
    image: '/Product%20Images/Soyabean.jfif',
    accent: '#dfeec7',
    products: ['Soyabean meal', 'Soyabean oil', 'Whole soyabeans', 'Industrial and feed supply'],
  },
]

export const getCategory = (slug) => categories.find((category) => category.slug === slug)
