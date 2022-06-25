import { Box, Flex, AspectRatio } from "@chakra-ui/react"
// Pic
import pokemonPikachuRaichu from "../../assets/pokemonPikachuRaichu.jpg"
const BoxCard = () => {
    return (
        <>
            <Flex
                width="100%"
                height="400px"
                bgColor="#d10056"
                padding={2}
                d="flex"
                justify="space-evenly"
            >
                <AspectRatio flexGrow={5} ratio={1.85 / 1} maxW="350px">
                    <Box
                        maxW="350px"
                        bgColor="pink"
                        p={2}
                        borderTopRadius={4}
                        border={"solid 2px black"}
                        display="flex"
                        flexDirection="column"
                    >
                        <Box
                            as="h2" fontSize="40px"
                        >
                            Be my Valentine?
                        </Box>
                        <img src={pokemonPikachuRaichu} alt="my" />
                    </Box>
                </AspectRatio>
                <Box
                    as="button"
                    bgColor="#d7837f"
                    alignSelf="center"
                    border="solid 2px black"
                    p={4}
                    color="white"
                    fontSize="25px"
                    onClick={() => alert("I wanna sniff ur butt lol")}
                >
                    Click if u like me
                </Box>
            </Flex>
        </>
    )
}
export default BoxCard