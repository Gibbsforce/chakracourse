import { useState, useEffect } from "react"
import { Center, Box, Square, Circle } from "@chakra-ui/react"
// Pic
const CenterSquareCircle = () => {
    const [bigCircle, setBigCircle] = useState(Number)
    const [smallCircle, setSmallCircle] = useState(Number)
    useEffect(() => {
        if(bigCircle < 500) setBigCircle((prev) => prev + 1)
        if(smallCircle < 450) setSmallCircle((prev) => prev + 1)
    }, [smallCircle, bigCircle])
    return (
        <>
            <Circle
                bgColor="green.100"
                width={bigCircle}
                height={bigCircle}
                marginLeft="20px"
            >
                <Circle
                    bgColor="green.300"
                    width={smallCircle}
                    height={smallCircle}
                >
                    {smallCircle >=450 ? <p>Hello</p> : ""}
                </Circle>
            </Circle>
            <Square bgColor="gray.100">
                <Square bgColor="pink.600" width="200px" height="200px">
                    <Center>
                        <Square
                            bgColor="pink.400"
                            width="100px"
                            height="100px"
                            margTop="auto"
                        >
                            <Center>
                                <Circle
                                    as="button"
                                    width="50px"
                                    height="50px"
                                    bgColor="pink.200"
                                >
                                    Box
                                </Circle>
                            </Center>
                        </Square>
                    </Center>
                </Square>
            </Square>
        </>
    )
}
export default CenterSquareCircle