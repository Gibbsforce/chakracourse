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
        </>
    )
}
export default CenterSquareCircle