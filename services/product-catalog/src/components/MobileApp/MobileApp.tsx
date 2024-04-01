import { Box, Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react';
import { phone } from '../../../assets/img';
import { Club, Delivery, Stars, Store } from '../../../assets/icons';
import ListHeader from '@packages/shared/src/components/ListHeader/ListHeader';

const MobileApp = () => {
    return (
        <Stack
            w={'100%'}
            h={578}
            mt={12}
            p={'40px'}
            bg={'#F6F7F8'}
            bgImage={phone}
            bgRepeat={'no-repeat'}
            bgPosition={'100% 100%'}
            bgSize={'478px'}
            borderRadius={'24px'}
        >
            <Stack spacing={24}>
                <Box maxW={480}>
                    <ListHeader fontSize='40px'>
                        Пятёрочка всегда рядом
                    </ListHeader>
                    <Text fontSize={'24px'} lineHeight={'34px'}>
                        Скачайте мобильное приложение и получите еще больше возможностей
                    </Text>
                </Box>
                <Grid maxW={659} templateColumns='repeat(2, 1fr)' templateRows='repeat(2, 1fr)' gap={8}>
                    <GridItem w='100%' maxW={256}>
                        <Stack spacing={4} direction={'column'}>
                            <Stars width={40} height={40} />
                            <Text fontSize={'16px'} lineHeight={'22px'}>
                                Предложения и акции на основе ваших покупок
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem w='100%'>
                        <Stack spacing={4} direction={'column'}>
                            <Delivery width={40} height={40} />
                            <Text fontSize={'16px'} lineHeight={'22px'}>
                                Экспресс-доставка от 30 минут
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem w='100%' maxW={256}>
                        <Stack spacing={4} direction={'column'}>
                            <Store width={40} height={40} />
                            <Text fontSize={'16px'} lineHeight={'22px'}>
                                Ассортимент, цены и акции супермаркета у вас в смартфоне
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem w='100%'>
                        <Stack spacing={4} direction={'column'}>
                            <Club width={40} height={40} />
                            <Text fontSize={'16px'} lineHeight={'22px'}>
                                Информация о балансе баллов, доступных купонах и истории покупок
                            </Text>
                        </Stack>
                    </GridItem>
                </Grid>
            </Stack>
        </Stack>
    )
}

export default MobileApp;