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
  {
    slug: 'almonds',
    eyebrow: 'India-sourced premium mamra Almond nuts',
    name: 'Almonds',
    shortName: 'Almonds',
    description: 'Premium almonds sourced from India for foodservice, retail and wholesale buyers looking for dependable quality and consistent supply.',
    image: '/Product%20Images/Almonds.jpg',
    accent: '#d9c6a0',
    products: ['Whole almonds', 'Salted almonds'],
  },
  {
    slug: 'cashew',
    eyebrow: 'India-sourced high quality cashew nuts',
    name: 'Cashew',
    shortName: 'Cashew',
    description: 'Premium cashew nuts sourced from India for foodservice and retail with assurance of reliable supply and consistent quality',
    image: '/Product%20Images/Cashew.jpg',
    accent: '#e6c29b',
    products: ['Whole cashew nuts', 'Salted cashew nuts'],
  },
]

export const getCategory = (slug) => categories.find((category) => category.slug === slug)
