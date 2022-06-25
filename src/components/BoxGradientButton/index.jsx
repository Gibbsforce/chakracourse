import { useState } from "react"
import { Box, Button } from "@chakra-ui/react"
const BoxGradientButton = () => {
  const [direction, setDirection] = useState([
    "to-t",
    "to-tr",
    "to-r",
    "to-br",
    "to-b",
    "to-bl",
    "to-l",
    "to-tl",
  ])
  const [index, setIndex] = useState(Number)
  const rotateGradient = () => {
    if (index === direction.length - 1) setIndex(0)
    setIndex((previous) => previous + 1)
  }
  return (
    <>
      In index: {index}: {direction[index]}
      <Box
        w="50%"
        h="300px"
        bgGradient={`linear(${direction[index]}, red.100, blue.300)`}
      >
        <Button
          left="20%"
          top="20%"
          bgGradient={`linear(${direction[index]}, red.100, blue.300)`}
          onClick={() => rotateGradient()}
        >
          Click Click
        </Button>
      </Box>
    </>
  )
}
export default BoxGradientButton
