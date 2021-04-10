import React, { createContext, useContext, useState } from 'react'

interface ILoadingContextData {
  loading: boolean
  setLoading(data: boolean): void
}

const LoadingContext = createContext<ILoadingContextData>(
  {} as ILoadingContextData
)

const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

const useLoading = (): ILoadingContextData => {
  const context = useContext(LoadingContext)

  if (!context) {
    throw new Error('useLoading must be use within LoadingProvider')
  }

  return context
}

export { useLoading, LoadingProvider }
