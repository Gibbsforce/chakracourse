import { Container, Flex, Square, Circle } from "@chakra-ui/react"
// Pic
import pokemonPikachuRaichu from "../../assets/pokemonPikachuRaichu.jpg"
const ContainerStyle = () => {
    return (
        <>
            <>
                <Container maxW="container.xl" bgColor="blackAlpha.100" centerContent>Extra Large Content</Container>
                <Container maxW="container.lg" bgColor="blackAlpha.200" centerContent>Large Content</Container>
                <Container maxW="container.md" bgColor="blackAlpha.300" centerContent>Medium Content</Container>
                <Container maxW="container.sm" bgColor="blackAlpha.400" centerContent>Small Content</Container>
                <Container bgColor="red.400" centerContent>Content</Container>
            </>
            <>
                <Container maxW="container.xl" bgColor="blackAlpha.500">
                    <Flex d="flex" flexDirection="row" alignContent="space-evenly" w="100%">
                        <Square bgColor="whitesmoke" flexGrow="2" maxW="50%">
                            <img src={pokemonPikachuRaichu} alt=""/>
                        </Square>
                        <Square bgColor="whitesmoke" flexGrow="2" maxW="50%">
                            <Circle w="200px" h="200px" bgColor="orange.200">
                                Boop me
                            </Circle>
                        </Square>
                    </Flex>
                </Container>
            </>
        </>
    )
}
export default ContainerStyle