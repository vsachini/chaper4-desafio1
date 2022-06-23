import { Box, Flex, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Continent, continents } from '../continents'

interface LocationProps {
  continent: Continent
}

const Location = ({ continent }: LocationProps) => {
  if (!continent) return 'loading...'

  return (
    <Flex w="100vw" direction="column" align="center">
      <Box position="relative" mb="5rem">
        <Image src={continent.banner} alt="banner" w="100vw" h="500px" mb={['6rem', '6rem', 0]} />
        <Box position="absolute" bottom="5rem" left="2.5rem" color={['gray.900', 'gray.900', 'white']}>
          <Text fontSize={['2xl', '2xl', '4xl']} fontWeight="medium">
            {continent.title}
          </Text>
        </Box>
      </Box>
      <SimpleGrid columns={[1, 1, 2]}>
        <Text padding="2.5rem" pt="0">
          {continent.description}
        </Text>
        <SimpleGrid columns={3}>
          <VStack>
            <Text color="yellow.500" fontSize="3rem">
              {continent.countries}
            </Text>
            <Text color="gray.900" fontSize="1.5rem" lineHeight="0">
              países
            </Text>
          </VStack>
          <VStack>
            <Text color="yellow.500" fontSize="3rem">
              {continent.idioms}
            </Text>
            <Text color="gray.900" fontSize="1.5rem" lineHeight="0">
              línguas
            </Text>
          </VStack>
          <VStack>
            <Text color="yellow.500" fontSize="3rem">
              {continent.bestCities}
            </Text>
            <Text color="gray.900" fontSize="1.5rem" lineHeight="0">
              cidades +100
            </Text>
          </VStack>
        </SimpleGrid>
      </SimpleGrid>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = (ctx) => {
  return {
    paths: continents.map((continent) => `/${continent.id}`),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = (ctx) => {
  const continent = continents.find((cont) => cont.id === ctx.params?.locationId)

  return {
    props: {
      continent,
    },
    revalidate: 10000,
  }
}

export default Location
