import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    //<QueryClientProvider client={queryClient}>
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
    //<ReactQueryDevtools />
    //</QueryClientProvider>
  )
}

export default MyApp;