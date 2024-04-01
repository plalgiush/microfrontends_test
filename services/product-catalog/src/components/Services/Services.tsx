import { Box, Button, Grid, GridItem, Stack, Text } from "@chakra-ui/react"
import ListHeader from "@packages/shared/src/components/ListHeader/ListHeader"
import { bag, car, wallet } from '../../../assets/img'

const Services = () => {
    return (
        <Grid 
            templateAreas={`"delivery-header purchase wallet"
                            "delivery-footer purchase wallet"`}
            gridTemplateRows={'165px 70px'}
            gridTemplateColumns={'590px 1fr 1fr'}
            mb={12}
            gap='5'
            color='black'
        >
            <GridItem
                area={'delivery-header'}
                w='100%'
                p={30}
                backgroundColor={'#F6F7F8'}
                borderRadius={'24px'}
                bgImage={car}
                bgRepeat="no-repeat"
                bgPosition={'calc(100% - 30px) center'}
                backgroundSize={'128px'}
            >
                <Stack maxW={'364px'} spacing={2}>
                    <ListHeader fontSize='24px' lineHeight='28px'>
                        Доставка продуктов на дом от 30 минут
                    </ListHeader>
                    <Text fontSize={16} lineHeight={'16px'}>
                        Сэкономьте время, закажите онлайн!
                    </Text>
                </Stack>
            </GridItem>
            <GridItem
                area={'delivery-footer'}
                w={'100%'}
                alignContent={'center'}
                pl={'76px'}
                py={'9px'}
                pr={'16px'}
                backgroundColor={'#FD5018'}
                bgImage={bag}
                borderRadius={'50px'}
                bgRepeat="no-repeat"
                backgroundSize={'76px'}
            >
                <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
                    <Box>
                        <ListHeader fontSize={'13px'} lineHeight={'16px'} color='white'>
                            -25% на первый заказ
                        </ListHeader>
                        <Text fontSize={'13px'} lineHeight={'16px'} color='white'>
                            с промокодом СТАРТ25
                        </Text>
                    </Box>
                    <Button bg={'white'} color={'#FD5018'} borderRadius={'24px'}>
                        Заказать
                    </Button>
                </Stack>
            </GridItem>
            <GridItem
                area={'purchase'}
                w='100%'
                p={30}
                backgroundColor={'#F6F7F8'}
                borderRadius={'24px'}
            >
                <Stack spacing={4}>
                    <ListHeader fontSize='24px' lineHeight='28px'>
                        Оценивайте покупки в «Пятёрочке»
                    </ListHeader>
                    <Text fontSize={18} lineHeight={'21px'}>
                        523 тысячи человек поставили 22 миллиона оценок за последний месяц
                    </Text>
                </Stack>
            </GridItem>
            <GridItem
                area={'wallet'}
                w='100%'
                p={30}
                bgImage={wallet}
                bgRepeat="no-repeat"
                backgroundColor={'#F6F7F8'}
                borderRadius={'24px'}
                backgroundSize={'176px'}
                bgPosition={'100% 100%'}
            >
                <Stack spacing={2}>
                    <ListHeader fontSize='24px' lineHeight='28px'>
                        Вернем деньги без чека
                    </ListHeader>
                    <Text fontSize={18} lineHeight={'21px'}>
                        Если не устраивает качество товара
                    </Text>
                </Stack>
            </GridItem>
        </Grid>
    )
}

export default Services