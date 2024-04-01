'use client'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import ListHeader from '@packages/shared/src/components/ListHeader/ListHeader'

export default function Footer() {
  return (
    <Box
      my={'120px'}
      bg={'white'}
      color={'gray.600'}>
      <Container maxW='100%' m={0} p={0}>
        <SimpleGrid
          fontSize={'16px'}
          templateColumns={{ sm: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr' }}
          spacing={4}>
          <Stack maxW={'fit-content'} align={'flex-start'}>
            <ListHeader color={'gray.300'}>Покупателям</ListHeader>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Каталог акций
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Магазины
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Акции партнеров
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              В вашу пользу
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Сервис Пакет
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Подарочная карта
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Оценка товаров
            </Box>
          </Stack>
          <Stack maxW={'fit-content'} align={'flex-start'}>
            <ListHeader color={'gray.300'}>О Пятёрочке</ListHeader>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Новости компании
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Обратная связь
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Горячая линия по этике
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              О компании
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Правовая информация
            </Box>
          </Stack>
          <Stack maxW={'fit-content'} align={'flex-start'}>
            <ListHeader color={'gray.300'}>Карьера</ListHeader>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Вакансии в магазине
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Стажировка для студентов
            </Box>
          </Stack>
          <Stack maxW={'fit-content'} align={'flex-start'}>
            <ListHeader color={'gray.300'}>Партнерам</ListHeader>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Поставщикам
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Аренда площадей
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Франшиза
            </Box>
          </Stack>
          <Stack maxW={'fit-content'} align={'flex-start'}>
            <ListHeader color={'gray.300'}>Детский клуб</ListHeader>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Преимущества клуба
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Партнеры клуба
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Акции клуба
            </Box>
            <Box as="a" href={'#'} _hover={{textDecoration: "underline"}}>
              Статьи
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}