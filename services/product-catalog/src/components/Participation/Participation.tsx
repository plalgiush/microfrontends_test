import { Box, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import ListHeader from '@packages/shared/src/components/ListHeader/ListHeader';
import { coffee, coffee_2, drinks, scores } from '../../../assets/img';

const Participation = () => {
    return (
        <>
            <ListHeader fontSize='24px'>Успейте поучаствовать <ChevronRightIcon /></ListHeader>
            <Grid
                templateColumns={{ base:'repeat(2, 1fr)',  sm:'repeat(3, 1fr)', xl:'repeat(6, 1fr)'}}
                templateRows={{ base:'repeat(3, 1fr)', sm:'repeat(2, 1fr)', xl:'1fr' }}
                mt={6}
                gap={5}
            >
                <GridItem w='100%'>
                    <Stack
                        display={'flex'}
                        align={{ base:'center', xl:'flex-start'}}
                        spacing={6}
                    >
                        <Box
                            w={{ base:120, md:150, lg:165, xl:183 }}
                            h={{ base:120, md:150, lg:165, xl:183 }}
                            bgImage={coffee}
                            bgSize={'contain'}
                            borderRadius={'24px'}
                        />
                        <Stack
                            spacing={2}
                            textAlign={{base:'center', xl:'start'}}
                        >
                            <Text fontSize={16} lineHeight={'16px'} color={'gray.500'}>
                                До 12 октября
                            </Text>
                            <Text fontSize={16} lineHeight={'19px'}>
                                Экономьте c Комбо Экономбо
                            </Text>
                        </Stack>
                    </Stack>
                </GridItem>
                <GridItem w='100%'>
                    <Stack
                        display={'flex'}
                        align={{ base:'center', xl:'flex-start'}}
                        spacing={6}
                    >
                        <Box
                            w={{ base:120, md:150, lg:165, xl:183 }}
                            h={{ base:120, md:150, lg:165, xl:183 }}
                            bgImage={scores}
                            bgSize={'contain'}
                            borderRadius={'24px'}
                        />
                        <Stack
                            spacing={2}
                            textAlign={{base:'center', xl:'start'}}
                        >
                            <Text fontSize={16} lineHeight={'16px'} color={'gray.500'}>
                                До 12 октября
                            </Text>
                            <Text>
                                Экономьте c Комбо Экономбо
                            </Text>
                        </Stack>
                    </Stack>
                </GridItem>
                <GridItem w='100%'>
                    <Stack
                        display={'flex'}
                        align={{ base:'center', xl:'flex-start'}}
                        spacing={6}
                    >
                        <Box
                            w={{ base:120, md:150, lg:165, xl:183 }}
                            h={{ base:120, md:150, lg:165, xl:183 }}
                            bgImage={drinks}
                            bgSize={'contain'}
                            borderRadius={'24px'}
                        />
                        <Stack
                            spacing={2}
                            textAlign={{base:'center', xl:'start'}}
                        >
                            <Text fontSize={16} lineHeight={'16px'} color={'gray.500'}>
                                До 12 октября
                            </Text>
                            <Text>
                                Экономьте c Комбо Экономбо
                            </Text>
                        </Stack>
                    </Stack>
                </GridItem>
                <GridItem w='100%'>
                    <Stack
                        display={'flex'}
                        align={{ base:'center', xl:'flex-start'}}
                        spacing={6}
                    >
                        <Box
                            w={{ base:120, md:150, lg:165, xl:183 }}
                            h={{ base:120, md:150, lg:165, xl:183 }}
                            bgImage={coffee_2}
                            bgSize={'contain'}
                            borderRadius={'24px'}
                        />
                        <Stack
                            spacing={2}
                            textAlign={{base:'center', xl:'start'}}
                        >
                            <Text fontSize={16} lineHeight={'16px'} color={'gray.500'}>
                                До 12 октября
                            </Text>
                            <Text>
                                Экономьте c Комбо Экономбо
                            </Text>
                        </Stack>
                    </Stack>
                </GridItem>
                <GridItem w='100%'>
                    <Stack
                        display={'flex'}
                        align={{ base:'center', xl:'flex-start'}}
                        spacing={6}
                    >
                        <Box
                            w={{ base:120, md:150, lg:165, xl:183 }}
                            h={{ base:120, md:150, lg:165, xl:183 }}
                            bgImage={coffee}
                            bgSize={'contain'}
                            borderRadius={'24px'}
                        />
                        <Stack
                            spacing={2}
                            textAlign={{base:'center', xl:'start'}}
                        >
                            <Text fontSize={16} lineHeight={'16px'} color={'gray.500'}>
                                До 12 октября
                            </Text>
                            <Text>
                                Экономьте c Комбо Экономбо
                            </Text>
                        </Stack>
                    </Stack>
                </GridItem>
                <GridItem w='100%'>
                    <Stack
                        display={'flex'}
                        align={{ base:'center', xl:'flex-start'}}
                        spacing={6}
                    >
                        <Box
                            w={{ base:120, md:150, lg:165, xl:183 }}
                            h={{ base:120, md:150, lg:165, xl:183 }}
                            bgImage={drinks}
                            bgSize={'contain'}
                            borderRadius={'24px'}
                        />
                        <Stack
                            spacing={2}
                            textAlign={{base:'center', xl:'start'}}
                        >
                            <Text fontSize={16} lineHeight={'16px'} color={'gray.500'}>
                                До 12 октября
                            </Text>
                            <Text>
                                Экономьте c Комбо Экономбо
                            </Text>
                        </Stack>
                    </Stack>
                </GridItem>
            </Grid>
        </>
    )
}

export default Participation;