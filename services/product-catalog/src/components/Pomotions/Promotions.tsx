import { Grid, GridItem, Stack, Text } from "@chakra-ui/react"
// @ts-ignore
import { observer } from 'mobx-react-lite'
import { bread, deliver, meat, milk, percent, pizza, promotion } from '../../../assets/img'

const Promotions = observer(() => {
    return (
        <>
            <Grid
                templateAreas={`"header-left header-center header-right"
                                "left center right"
                                "left footer footer"`}
                gridTemplateRows={'160px 1fr 160px'}
                gridTemplateColumns={'590px 1fr 1fr'}
                mt={12}
                h='650px'
                gap='5'
                color='black'
                fontWeight='bold'
            >
                <GridItem
                    area={'header-left'}
                    p={30}
                    bgImage={promotion}
                    bgRepeat="no-repeat"
                    bgPosition={'calc(100% - 30px) 100%'}
                    backgroundColor='#E2F5B9'
                    borderRadius={'24px'}
                >
                    <Text maxW={'320px'} lineHeight={'35px'} fontSize={'32px'}>
                        Еженедельные акции
                    </Text>
                </GridItem>
                <GridItem
                    area={'left'}
                    p={30}
                    bgImage={percent}
                    bgRepeat="no-repeat"
                    bgSize={'336px'}
                    bgPosition={'100% 100%'}
                    backgroundColor='#F95A56'
                    borderRadius={'24px'}
                >
                    <Stack spacing={4}>
                        <Text fontSize={'44px'} lineHeight={'44px'} color={'white'}>
                            Акции и скидки
                        </Text>
                        <Text maxW={263} fontSize={'24px'} fontWeight={400} lineHeight={'28px'} color={'white'}>
                            Более 2000 товаров co скидками
                        </Text>
                    </Stack>
                </GridItem>
                <GridItem
                    area={'header-center'}
                    p={30}
                    bgImage={bread}
                    bgRepeat="no-repeat"
                    bgSize={'160px'}
                    bgPosition={'100% 100%'}
                    backgroundColor='#F9ECCD'
                    borderRadius={'24px'}
                >
                    <Text fontSize={'24px'} lineHeight={'26px'}>
                        Хлеб и выпечка
                    </Text>
                </GridItem>
                <GridItem
                    area={'header-right'}
                    p={30}
                    bgImage={pizza}
                    bgRepeat="no-repeat"
                    bgSize={'200px'}
                    bgPosition={'100% 100%'}
                    backgroundColor='#FAE2D2'
                    borderRadius={'24px'}
                >
                    <Text fontSize={'24px'} lineHeight={'26px'}>
                        Готовая еда
                    </Text>
                </GridItem>
                <GridItem
                    area={'center'}
                    p={30}
                    bgImage={milk}
                    bgRepeat="no-repeat"
                    bgSize={'220px'}
                    bgPosition={'100% 100%'}
                    backgroundColor='#C7E2FD'
                    borderRadius={'24px'}
                >
                    <Text fontSize={'24px'} lineHeight={'26px'}>
                        Молочная продукция и яйца
                    </Text>
                </GridItem>
                <GridItem
                    area={'right'}
                    p={30}
                    bgImage={meat}
                    bgRepeat="no-repeat"
                    bgSize={'220px'}
                    bgPosition={'100% 100%'}
                    backgroundColor='#FBD8D8'
                    borderRadius={'24px'}
                >
                    <Text fontSize={'24px'} lineHeight={'26px'}>
                        Мясо, птица, колбасы
                    </Text>
                </GridItem>
                <GridItem
                    area={'footer'}
                    p={30}
                    bgImage={deliver}
                    bgRepeat="no-repeat"
                    bgSize={'220px'}
                    bgPosition={'100% 100%'}
                    backgroundColor='#36B368'
                    borderRadius={'24px'}
                >
                    <Stack spacing={2}>
                        <Text fontSize={'32px'} lineHeight={'35px'} color={'white'}>
                            Посмотреть каталог
                        </Text>
                        <Text maxW={263} fontSize={'18px'} fontWeight={400} lineHeight={'22px'} color={'white'}>
                            Более 5000 наименований товаров c доставкой на дом
                        </Text>
                    </Stack>
                </GridItem>
            </Grid>
        </>
    )
})

export default Promotions