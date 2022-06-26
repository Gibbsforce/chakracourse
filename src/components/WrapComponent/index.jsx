import { Wrap, WrapItem, Center, Image } from "@chakra-ui/react"
// Pic
import pokemonPikachuRaichu from "../../assets/pokemonPikachuRaichu.jpg"
const WrapComponent = () => {
    return (
        <>
            <Wrap spacing="30px" align="center" justify="center" bgColor="gray.200">
                <WrapItem><Center w="180px" h="80px" bg="red.200" >Box 1</Center></WrapItem>
                <WrapItem><Center w="180px" h="40px" bg="green.200" >Box 2</Center></WrapItem>
                <WrapItem><Center w="120px" h="80px" bg="tomato" >Box 3</Center></WrapItem>
                <WrapItem><Center w="180px" h="40px" bg="blue.200" >Box 4</Center></WrapItem>
                <WrapItem><Center w="180px" h="75px" bg="blackAlpha.500" >Box 4</Center></WrapItem>
            </Wrap>
            <Wrap
                spacing="30px"
                justify="center"
                align="center"
                bgColor="gray.200"
                paddingTop="40px"
            >
                <WrapItem>
                    <Center w="180px" bg="red.200">
                        <Image src={pokemonPikachuRaichu} objectFit="scale-down"/>
                    </Center>
                </WrapItem>
                <WrapItem w="380px">
                    <Wrap>
                        <Center bg="green.200">
                            This is my Pokemon Pikachu. He is my best friend and I love him!
                        </Center>
                        <Center bg="green.200">
                            He sometimes chewson stuff he isn't supposed to, but that's okay. He is a Pokemon.
                        </Center>
                    </Wrap>
                </WrapItem>
            </Wrap>
        </>
    )
}
export default WrapComponent