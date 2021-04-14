import AppProvider from 'hooks'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokedex - Maxwell Kenned</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta
          name="description"
          content="Projeto de pokedex utilizando nextJS consumindo a pokeApi, feito por Maxwell kenned"
        />
      </Head>
      <GlobalStyles />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default App
