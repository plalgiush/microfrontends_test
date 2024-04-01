import { Box, Button, Container, Input, Stack } from "@chakra-ui/react";
import ListHeader from "@packages/shared/src/components/ListHeader/ListHeader";

const NewsLetter = () => {
    return (
        <Box mt={10}>
            <Container maxW='100%' p={6} bg={'#66CCFF'} borderRadius={'24px'}>
                <Stack width={'auto'} display={'flex'} flexDirection={{ base:'column' , xl:'row' }} justifyContent={'space-between'} align={'center'}>
                    <ListHeader color={'white'} fontSize='32px'>Подписывайтесь на наши акции</ListHeader>
                    <Stack direction={'row'}>
                        <Input
                            width={'328px'}
                            placeholder={'Введите ваш Email'}
                            bg={'white'}
                            border={0}
                            borderRadius={'xl'}
                            fontSize={'15px'}
                        />
                        <Button
                            borderRadius={'3xl'}
                            bg={'white'}
                            fontSize={'13px'}
                            _hover={{
                                bg: 'gray.100'
                            }}
                        >
                            Подписаться
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

export default NewsLetter;