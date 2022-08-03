import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { City } from '../continents'

interface CityCardProps {
  city: City
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Box h="17.4375rem" borderRadius="4px" border="1px solid" borderColor="yellow.500" overflow="hidden">
      <Image src={city.image} alt={city.name} w="100%" h="173px" />

      <Flex>
        <Box p="18px 24px" w="80%">
          <Text color="gray.900" fontSize="20px" fontWeight="600" mb="12px">
            {city.name}
          </Text>
          <Text color="gray.600" fontSize="16px" fontWeight="500">
            {city.country}
          </Text>
        </Box>
        <Flex justify="center" align="center">
          <Image src={city.countryFlagImage} alt={city.country} w="30px" h="30px" borderRadius="full" />
        </Flex>
      </Flex>
    </Box>
  )
}
