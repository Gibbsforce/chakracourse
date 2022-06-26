import { useState } from "react"
import { Box, Grid, GridItem, Button, color } from "@chakra-ui/react"
// Pic
import pokemonPikachuRaichu from "../../assets/pokemonPikachuRaichu.jpg"
const GridComponent = () => {
    const colors = ["gray", "teal", "purple", "pink", "red", "orange"]
    const [index, setIndex] = useState(Number)
    const changeColor = () => {
        index >= colors.length - 1 ? setIndex(0) : setIndex(index + 1)
    }
    return (
        <>
            <Grid templateColumns="repeat(5, 1fr)" gap="2" paddingTop="20px">
                <Box w="100%" h="55px" bg="blue.500" />
                <Box w="100%" h="55px" bg="blue.500" />
                <Box w="100%" h="55px" bg="blue.500" />
                <Box w="100%" h="55px" bg="blue.500" />
                <Box w="100%" h="55px" bg="blue.500" />
            </Grid>
            <Grid
                h="200px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap="2"
                paddingTop="20px"
            >
                <GridItem rowSpan={2} colSpan={1} bg="Tomato" >1</GridItem>
                <GridItem colSpan={2} bg="papayawhip" >2</GridItem>
                <GridItem colSpan={2} bg="papayawhip" >3</GridItem>
                <GridItem colSpan={4} bg="Tomato" >4</GridItem>
            </Grid>
            <Grid templateColumns="repeat(5, 1fr)" gap={6} paddingTop={25} >
                <GridItem colSpan={2} h="10" bg="tomato" >Left</GridItem>
                <GridItem colStart={4} colEnd={6} h="10" bg="papayawhip" >Right</GridItem>
            </Grid>
            <Grid templateColumns="repeat(6, 1fr)" gap={6} paddingTop={25} >
                <GridItem colSpan={5} h="10" bg="pink.500" >
                    <Grid templateColumns="repeat(6, 1fr)" gap={0} >
                        <GridItem colSpan={1} h={10} bg={`${colors[index]}.100`} />
                        <GridItem colSpan={1} h={10} bg={`${colors[index]}.200`} />
                        <GridItem colSpan={1} h={10} bg={`${colors[index]}.300`} />
                        <GridItem colSpan={1} h={10} bg={`${colors[index]}.400`} />
                        <GridItem colSpan={1} h={10} bg={`${colors[index]}.500`} />
                        <GridItem colSpan={1} h={10} bg={`${colors[index]}.600`} />
                    </Grid>
                </GridItem>
                <GridItem
                    as="button"
                    colSpan={1}
                    h="10"
                    bg="turquoise"
                    onClick={() => changeColor()}
                >
                    Colorize!
                </GridItem>
            </Grid>
        </>
    )
}
export default GridComponent