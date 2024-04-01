import { Box, ChakraProvider } from "@chakra-ui/react"
import { HelmetProvider } from "react-helmet-async"

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <ChakraProvider>
            <HelmetProvider>
                <Box maxW='1200px' px={'10px'} mx="auto">
                    {children}
                </Box>
            </HelmetProvider>
        </ChakraProvider>
    )
}

export default Layout