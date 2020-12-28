import { createContext } from 'react'

const categoryContext = createContext({
  selectedCategory: null,
  setSelectedCategory: ()=>{}
})

export default categoryContext