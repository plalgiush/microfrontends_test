import { Box, Flex, Square, Text } from "@chakra-ui/react";

const Test = () => {
    return (
        <Flex color='white'>
            <Box flex={{ base:'1', md:'2' }} maxW={{ base:'150px', md:'none' }} bg='green.500'>
                <Text>Box 1</Text>
            </Box>
            <Square flex={{ base:'2', md:'1' }} maxW={{ md:'150px'}} bg='blue.500' size='150px'>
                <Text>Box 2</Text>
            </Square>
            <Box flex={{ base:'1', md:'2' }} maxW={{ base:'150px', md:'none' }} bg='tomato'>
                <Text>Box 3</Text>
            </Box>
        </Flex>
    )
}

export default Test