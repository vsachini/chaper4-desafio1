import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      500: '#FFBA08',
    },
    gray: {
      900: '#47585B',
      300: '#F5F8FA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  components: {
    Button: {
      defaultProps: {
        variant: 'contained',
        colorScheme: 'yellow',
      },
    },
  },
})
