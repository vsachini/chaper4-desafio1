import { Box, Button, Center, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function Header() {
  const [displayBackButton, setDisplayBackButton] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname !== '/') {
      setDisplayBackButton(true)
    }
  }, [router.pathname])

  const handleGoBack = () => {
    router.back()
  }

  return (
    <Center h="6.25rem" w="100vw" position="relative">
      {displayBackButton && (
        <Box position="absolute" left="3.125rem" top="1.875rem">
          <Button onClick={handleGoBack} variant="unstyled">
            <Image src="/assets/back_button.svg" alt="back button" />
          </Button>
        </Box>
      )}

      <Image src="/assets/logo.svg" w="11.5rem" />
    </Center>
  )
}
