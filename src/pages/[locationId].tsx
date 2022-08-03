import { Box, Flex, GridItem, Heading, Image, SimpleGrid, Text, Tooltip, VStack } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { CityCard } from '../components/CityCard'
import { Continent, continents } from '../continents'

interface LocationProps {
  continent: Continent
}

const tooltipMessage =
  'Cities like Hong Kong, Bangkok, and London have led city destination rankings for years, but movement within the ranks below them—revealed in the above infographic—help to highlight the intriguing travel trends happening before COVID-19.'

const Location = ({ continent }: LocationProps) => {
  if (!continent) return 'loading...'

  return (
    <Flex w="100vw" direction="column" align="center">
      <Flex direction="column" position="relative" mb={['0', '0', '5rem']} align="center">
        <Image src={continent.banner} alt="banner" w="100vw" maxH={['auto', 'auto', '500px']} />
        <Box position="relative" maxW={['80%', '80%', '72.5rem']} w="100%">
          <Text fontSize={['3rem', '3rem', '3rem']} fontWeight="medium" color="white" position="absolute" bottom="3.6875rem" left="0">
            {continent.title}
          </Text>
        </Box>
      </Flex>
      <SimpleGrid columns={[1, 1, 2]} maxW={['80%', '80%', '72.5rem']}>
        <GridItem>
          <Text maxW="37.5rem" pt="0" w="100%">
            {continent.description}
          </Text>
        </GridItem>
        <GridItem>
          <SimpleGrid columns={3}>
            <VStack>
              <Text color="yellow.500" fontSize="3rem">
                {continent.countries}
              </Text>
              <Text color="gray.900" fontSize="1.5rem" align="center">
                países
              </Text>
            </VStack>
            <VStack>
              <Text color="yellow.500" fontSize="3rem">
                {continent.idioms}
              </Text>
              <Text color="gray.900" fontSize="1.5rem" align="center">
                línguas
              </Text>
            </VStack>
            <VStack>
              <Text color="yellow.500" fontSize="3rem">
                {continent.bestCities}
              </Text>
              <Flex>
                <Text color="gray.900" fontSize="1.5rem" align="center" mr="1">
                  cidades +100
                </Text>
                <Tooltip label={tooltipMessage} aria-label="A tooltip">
                  <Image src="/assets/info.svg" alt="info cidades +100" />
                </Tooltip>
              </Flex>
            </VStack>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
      <Box mt="5rem" w="100%" maxW={['80%', '80%', '72.5rem']}>
        <Heading fontWeight="500" fontSize="36px" color="gray.900" mb="2.5rem">
          Cidades +100
        </Heading>
        <SimpleGrid spacing="45px" columns={[1, 1, 4]}>
          {continent?.cities?.map((city) => (
            <CityCard city={city} key={city?.id} />
          ))}
        </SimpleGrid>
      </Box>
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
