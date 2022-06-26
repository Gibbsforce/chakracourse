import { useState } from "react"
import { Box, Stack, Button, Spinner, ButtonGroup, HStack, Circle, Image, Square, VStack, Text } from "@chakra-ui/react"
import { PhoneIcon, WarningIcon } from "@chakra-ui/icons"
// Pic
import pokemonPikachuRaichu from "../../assets/pokemonPikachuRaichu.jpg"
const ButtonComponent = () => {
    const [value, setValue]= useState(Boolean)
    return (
        <>
            <Stack spacing={4} direction="row" align="center">
                <Button colorScheme="facebook" size="xs" variant="solid">Subscribe to my chennel</Button>
                <Button colorScheme="whatsapp" size="sm" variant="outline">Order Beer</Button>
                <Button colorScheme="linkedin" size="md" variant="ghost">Order TP</Button>
                <Button colorScheme="twitter" size="lg" variant="link">Go to my OnlyFans</Button>
            </Stack>
            <Stack spacing={4} direction="row" align="center">
                <Button
                    isLoading
                    loadingText="Loading Content"
                    variant="outline"
                    spinnerPlacement="start"
                >
                    Subscribe to my channel
                </Button>
                <Button
                    isLoading
                    loadingText="Left Spinner Example"
                    variant="outline"
                    spinnerPlacement="end"
                >
                    Left Spinner
                </Button>
                <Button
                    colorScheme="linkedin"
                    variant="outline"
                    rightIcon={<Spinner />}
                >
                    Example
                </Button>
                <Button
                    colorScheme="linkedin"
                    variant="outline"
                    rightIcon={<PhoneIcon />}
                    leftIcon={<WarningIcon />}
                >
                    Both Sides
                </Button>
            </Stack>
            <ButtonGroup variant="link" spacing={5}>
                <Button colorScheme="blue">Subscribe to my channel</Button>
                <Button colorScheme="linkedin">Buy food</Button>
                <Button variant="outline">Cry all day long</Button>
            </ButtonGroup>
            <Box width="100%" height="500px" bgColor="gray.300">
                <HStack spacing="50px">
                    <Circle width="200px" height="200px"> 
                        <Image
                            src={pokemonPikachuRaichu}
                            objectFit="cover"
                            boxSize="200px"
                            borderRadius="full"
                        />
                    </Circle>
                    <Box>
                        <Square width="100" height="200px" bgColor="blackAlpha.100">
                            <VStack>
                                <Text fontSize="xl">Want to subscribe to my OnlyPokemon?</Text>
                                <ButtonGroup variant="solid" spacing="7px">
                                    <Button
                                        isLoading={value}
                                        onClick={() => setValue(true)}
                                        colorScheme="blue"
                                    >
                                        Sub to my OnlyPokemon
                                    </Button>
                                    <Button colorScheme="linkedin">Buy me treats</Button>
                                    <Button onClick={() => setValue(false)}>Cancel</Button>
                                </ButtonGroup>
                            </VStack>
                        </Square>
                    </Box>
                </HStack>
            </Box>
        </>
    )
}
export default ButtonComponent