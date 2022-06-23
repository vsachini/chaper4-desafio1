import { ChakraProvider, theme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../styles/swiper.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
