import { useState } from "react"
import { Stack, Box, HStack, VStack, Flex, Image, Center, Text } from "@chakra-ui/react"
// Pic
import pokemonPikachuRaichu from "../../assets/pokemonPikachuRaichu.jpg"
import pokemonCharizard from "../../assets/pokemonCharizard.jpg"
import pokemonKoraidonMiraidon from "../../assets/pokemonKoraidonMiraidon.png"
import pokemonPikachuSobbleScorbunnyGrookey from "../../assets/pokemonPikachuSobbleScorbunnyGrookey.jpg"
import pokemonQuaxlySprigatitoFuecoco from "../../assets/pokemonQuaxlySprigatitoFuecoco.jpg"
const StackComponent = () => {
    const [myPic, setMyPic] =useState(pokemonPikachuRaichu)
    return (
        <>
            <Stack spacing="24px" direction={["column-reverse", "column", "row"]} >
                <Box w="40px" h="40px" bgColor="yellow.200" >1</Box>
                <Box w="40px" h="40px" bgColor="tomato" >2</Box>
                <Box w="40px" h="40px" bgColor="pink.100" >3</Box>
            </Stack>
            <Box p={4} >
                <HStack
                    p={4}
                    bgColor="gray.400"
                    borderBottomWidth="14px"
                    paddingBottom="14px"
                    marginBottom="14px"
                    divider={<Box border="1px solid black" w={10} h={10} bgColor="black" />}
                >
                    <Box w="40px" h="40px" bg="yellow.200" >1</Box>
                    <Box w="40px" h="40px" bg="tomato" >2</Box>
                    <Box w="40px" h="40px" bg="pink.100" >3</Box>
                </HStack>
            </Box>
            <Box p={4}>
                <VStack
                    spacing="24px"
                    p={4}
                    bgColor="gray.400"
                    h="100%"
                    divider={<Box border="1px solid black" w="100%" h={10} bgColor="black" />}
                >
                    <Flex
                        w="400px"
                        h="400px"
                        bg="yellow.200"
                        direction="column"
                        alignItems="center"
                    >
                        <Image
                            paddingTop="20px"
                            boxSize="300px"
                            objectFit="cover"
                            src={myPic}
                            alt=""
                        />
                        <Center>
                            <Text>My Pokemon</Text>
                        </Center>
                        <Center>
                            <Text>They're my buddies</Text>
                        </Center>
                    </Flex>
                    <Box w="200px" h="40px" bg="tomato" >
                        <HStack>
                            <Image
                                src={pokemonPikachuRaichu}
                                alt=""
                                boxSize="40px"
                                objectFit="cover"
                                cursor="pointer"
                                onClick={() => setMyPic(pokemonPikachuRaichu)}
                            />
                            <Image
                                src={pokemonCharizard}
                                alt=""
                                boxSize="40px"
                                objectFit="cover"
                                cursor="pointer"
                                onClick={() => setMyPic(pokemonCharizard)}
                            />
                            <Image
                                src={pokemonKoraidonMiraidon}
                                alt=""
                                boxSize="40px"
                                objectFit="cover"
                                cursor="pointer"
                                onClick={() => setMyPic(pokemonKoraidonMiraidon)}
                            />
                            <Image
                                src={pokemonPikachuSobbleScorbunnyGrookey}
                                alt=""
                                boxSize="40px"
                                objectFit="cover"
                                cursor="pointer"
                                onClick={() => setMyPic(pokemonPikachuSobbleScorbunnyGrookey)}
                            />
                            <Image
                                src={pokemonQuaxlySprigatitoFuecoco}
                                alt=""
                                boxSize="40px"
                                objectFit="cover"
                                cursor="pointer"
                                onClick={() => setMyPic(pokemonQuaxlySprigatitoFuecoco)}
                            />
                        </HStack>
                    </Box>
                </VStack>
            </Box>
        </>
    )
}
export default StackComponent