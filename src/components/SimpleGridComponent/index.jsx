import { SimpleGrid, Box } from "@chakra-ui/react"
const SimpleGridComponent = () => {

    return (
        <>
            <SimpleGrid columns={5} spacing={10}>
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="100px" spacingX={5} spacingY={10}>
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
            </SimpleGrid>
            <SimpleGrid columns={[5, 4, 3, 2]} spacing="40px">
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
                <Box bg="tomato" h="80px" />
            </SimpleGrid>
        </>
    )
}
export default SimpleGridComponent