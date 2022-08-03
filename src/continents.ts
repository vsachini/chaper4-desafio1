import { faker } from '@faker-js/faker'

export interface City {
  id: string
  name: string
  image: string
  countryFlagImage: string
  country: string
}

export interface Continent {
  id: string
  title: string
  subtitle: string
  banner: string
  description: string
  countries: number
  idioms: number
  bestCities: number
  cities: City[]
}

export const continents: Continent[] = [
  {
    id: 'northamerica',
    title: 'América do Norte',
    subtitle: 'A América do Norte corresponde à parte norte do continente americano',
    banner: '/assets/northamerica.jpg',
    description:
      'North America is a continent in the Northern Hemisphere and almost entirely within the Western Hemisphere.[b] It is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the southeast by South America and the Caribbean Sea, and to the west and south by the Pacific Ocean. Because it is on the North American Tectonic Plate, Greenland is included as a part of North America geographically. ',
    countries: 50,
    idioms: 60,
    bestCities: 27,
    cities: new Array(10).fill('').map((_) => ({
      id: faker.datatype.uuid(),
      name: faker.address.cityName(),
      image: faker.image.city(undefined, undefined, true),
      countryFlagImage: faker.image.abstract(),
      country: faker.address.country(),
    })),
  },
  {
    id: 'southamerica',
    title: 'América do Sul',
    subtitle: 'O mais bonito do mundo',
    banner: '/assets/southamerica.jpg',
    description:
      'South America is a continent entirely in the Western Hemisphere[note 6] and mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere. It can also be described as the southern subregion of a single continent called America.',
    countries: 50,
    idioms: 60,
    bestCities: 10,
    cities: new Array(10).fill('').map((_) => ({
      id: faker.datatype.uuid(),
      name: faker.address.cityName(),
      image: faker.image.city(undefined, undefined, true),
      countryFlagImage: faker.image.abstract(),
      country: faker.address.country(),
    })),
  },
  {
    id: 'asia',
    title: 'Ásia',
    subtitle: 'O continente mais populoso do mundo',
    banner: '/assets/asia.jpg',
    description:
      'Earths largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe, and the continental landmass of Afro-Eurasia with Africa and Europe. Asia covers an area of 44,579,000 square kilometres (17,212,000 sq mi), about 30% of Earths total land area and 8.7% of the Earths total surface area.',
    countries: 50,
    idioms: 60,
    bestCities: 30,
    cities: new Array(10).fill('').map((_) => ({
      id: faker.datatype.uuid(),
      name: faker.address.cityName(),
      image: faker.image.city(undefined, undefined, true),
      countryFlagImage: faker.image.abstract(),
      country: faker.address.country(),
    })),
  },
  {
    id: 'africa',
    title: 'África',
    subtitle: 'O segundo continente mais populoso do mundo',
    banner: '/assets/africa.jpg',
    description:
      'Africa is the worlds second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earths total surface area and 20% of its land area.',
    countries: 50,
    idioms: 60,
    bestCities: 23,
    cities: new Array(10).fill('').map((_) => ({
      id: faker.datatype.uuid(),
      name: faker.address.cityName(),
      image: faker.image.city(undefined, undefined, true),
      countryFlagImage: faker.image.abstract(),
      country: faker.address.country(),
    })),
  },
  {
    id: 'europe',
    title: 'Europa',
    subtitle: 'O continente mais antigo do mundo',
    banner: '/assets/europe.jpg',
    description:
      'Europe is a continent, also recognised as a part of Eurasia, located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. Comprising the westernmost peninsulas of Eurasia,[10] it shares the continental landmass of Afro-Eurasia with both Asia and Africa. It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south and Asia to the east. Europe is commonly considered to be separated from Asia by the watershed of the Ural Mountains, the Ural River, the Caspian Sea, the Greater Caucasus, the Black Sea and the waterways of the Turkish Straits.[11] Although much of this border is over land, Europe is almost always recognised as its own continent because of its great physical size and the weight of its history and traditions. ',
    countries: 50,
    idioms: 60,
    bestCities: 5,
    cities: new Array(10).fill('').map((_) => ({
      id: faker.datatype.uuid(),
      name: faker.address.cityName(),
      image: faker.image.city(undefined, undefined, true),
      countryFlagImage: faker.image.abstract(),
      country: faker.address.country(),
    })),
  },
  {
    id: 'oceania',
    title: 'Oceania',
    subtitle: 'Australia e Nova Zelandia',
    banner: '/assets/oceania.jpg',
    description:
      'Oceania (UK: /ˌoʊsiˈɑːniə, ˌoʊʃi-, -ˈeɪn-/, US: /ˌoʊʃiˈæniə/ (listen), /-ˈɑːn-/)[4] is a geographical region that includes Australasia, Melanesia, Micronesia, and Polynesia.[5][6] Spanning the Eastern and Western hemispheres, Oceania is estimated to have a land area of 8,525,989 square kilometres (3,291,903 sq mi)[discuss] and a population of over 41 million. When compared with the continents, the region of Oceania is the smallest in land area and the second smallest in population after Antarctica. Its six major population centres are Sydney, Melbourne, Brisbane, Perth, Auckland, and Adelaide. ',
    countries: 50,
    idioms: 60,
    bestCities: 5,
    cities: new Array(10).fill('').map((_) => ({
      id: faker.datatype.uuid(),
      name: faker.address.cityName(),
      image: faker.image.city(undefined, undefined, true),
      countryFlagImage: faker.image.abstract(),
      country: faker.address.country(),
    })),
  },
]
