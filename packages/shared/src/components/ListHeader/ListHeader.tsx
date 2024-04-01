import { Text } from "@chakra-ui/react"
import { ReactNode } from "react"

type ListHeaderProps = {
    children: ReactNode
    color?: string
    fontSize?: string
    lineHeight?: string
}

const ListHeader = ({ children, color, fontSize, lineHeight }: ListHeaderProps) => {
    return (
      <Text fontWeight={'600'} fontSize={fontSize} mb={2} color={color} lineHeight={lineHeight}>
        {children}
      </Text>
    )
}

export default ListHeader;