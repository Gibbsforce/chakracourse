import { useState } from "react"
import { Flex, Center, Text, Circle, Image, Spacer, Button, Box } from "@chakra-ui/react"
// Pic
import pokemonPikachuRaichu from "../../assets/pokemonPikachuRaichu.jpg"
const FlexComponent = () => {
    const [index, setIndex]= useState(Number)
    const survey =[
        {
            question: "Do u like Pikachu",
            value: "0.04"
        },
        {
            question: "Do u like pizza",
            value: "1.0"
        },
        {
            question: "Do u like pizza",
            value: "1.8"
        },
        {
            question: "Do u like coding",
            value: "1000"
        },
    ]
    const updateIndex = () => {
        if (index >= 3) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }
    return (
        <>
            <Flex bgColor="teal.100" h="400px" justify="space-around" align="center">
                <Center w="100px" h="100px" bgColor="green.500">
                    <Text>Box 1</Text>
                </Center>
                <Spacer />
                <Center w="100px" h="150px" bgColor="red.500">
                    <Text>Box 2</Text>
                </Center>
                <Spacer />
                <Circle>
                    <Image
                        src={pokemonPikachuRaichu}
                        alt=""
                        borderRadius="full"
                        boxSize="100px"
                    />
                </Circle>
                <Spacer />
                <Center w="100px" h="150px" bgColor="aqua">
                    <Text>Box 3</Text>
                </Center>
            </Flex>
            <Text fontSize="4xl">Survey</Text>
            <Flex direction="row" p="3">
                <Text fontSize="2xl">{survey[index].question}</Text>
                <Button marginLeft="30px" onClick={() => updateIndex()} >Next Question</Button>
            </Flex>
            <Flex>
                <Box
                    width="10px"
                    height="100px"
                    bgColor="blueviolet"
                    flexGrow={survey[index].value}
                />
                <Spacer bgColor="aquamarine" />
            </Flex>
        </>
    )
}
export default FlexComponent