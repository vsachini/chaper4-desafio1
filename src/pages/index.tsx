import { Box, Center, Divider, Flex, Image, Link as ChakraLink, Stack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { continents } from '../continents'

const Home: NextPage = () => {
  return (
    <Flex w="100vw" direction="column" align="center">
      <Box position="relative" mb="5rem">
        <Image src="/assets/banner.png" alt="banner" w="100%" mb={['6rem', '6rem', 0]} />
        <Box position="absolute" top="5rem" left="2.5rem" color={['gray.900', 'gray.900', 'gray.300']}>
          <Text fontSize={['2xl', '2xl', '4xl']} fontWeight="medium">
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text fontSize={['lg', 'lg', 'xl']} maxW="60%">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
      </Box>
      <Flex w="100%" maxW="77.5rem" direction="column">
        <Stack direction={['column', 'column', 'row']} spacing="8.125rem" justify="center" w="100%" mb="5rem">
          <Center flexDirection="column">
            <Image src="/assets/cocktail.svg" mb="6" />
            <Text color="gray.900" fontSize="2xl">
              Vida noturna
            </Text>
          </Center>
          <Center flexDirection="column">
            <Image src="/assets/surf.svg" mb="6" />
            <Text color="gray.900" fontSize="2xl">
              Praia
            </Text>
          </Center>
          <Center flexDirection="column">
            <Image src="/assets/building.svg" mb="6" />
            <Text color="gray.900" fontSize="2xl">
              Moderno
            </Text>
          </Center>
          <Center flexDirection="column">
            <Image src="/assets/museum.svg" mb="6" />
            <Text color="gray.900" fontSize="2xl">
              Clássico
            </Text>
          </Center>
          <Center flexDirection="column">
            <Image src="/assets/earth.svg" mb="6" />
            <Text color="gray.900" fontSize="2xl">
              E mais...
            </Text>
          </Center>
        </Stack>

        <Center mb="3.25rem">
          <Divider w="5.625rem" h="2px" bg="gray.900" />
        </Center>

        <VStack textAlign="center" mb="3.25rem">
          <Text color="gray.900" fontSize="3xl">
            Vamos nessa? <br /> Então escolha seu continente
          </Text>
        </VStack>

        <Center w="100%" h="28.125rem" mb="2.5rem">
          <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} color="yellow">
            {continents.map((continent) => (
              <SwiperSlide>
                <Link href={`/${continent.id}`} passHref>
                  <ChakraLink>
                    <Box position="relative">
                      <Image src={continent.banner} key={continent.id} w="100%" h={['20rem', '20rem', '28.125rem']} />
                      <Flex
                        position="absolute"
                        background="rgba(28, 20, 1, 0.35)"
                        w="100%"
                        h={['20rem', '20rem', '28.125rem']}
                        top={0}
                        direction="column"
                        align="center"
                        justify="center"
                      >
                        <Text fontSize={['3xl', '3xl', '5xl']} color="gray.300">
                          {continent.title}
                        </Text>
                        <Text fontSize={['lg', 'lg', '2xl']} color="gray.300" maxW={['60%', '60%', 'unset']}>
                          {continent.subtitle}
                        </Text>
                      </Flex>
                    </Box>
                  </ChakraLink>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Center>
      </Flex>
    </Flex>
  )
}

export default Home
