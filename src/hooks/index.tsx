import React from 'react'

import { LoadingProvider } from './Loading'
import { PokemonProvider } from './Pokemon'

const AppProvider: React.FC = ({ children }) => {
  return (
    <LoadingProvider>
      <PokemonProvider>{children}</PokemonProvider>
    </LoadingProvider>
  )
}

export default AppProvider
