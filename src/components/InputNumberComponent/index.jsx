import { useState, useEffect } from "react"
import { Box, HStack, PinInput, PinInputField } from "@chakra-ui/react"
const InputNumberComponent = () => {
    const [value, setValue] = useState()
    useEffect(() => {
        if (value === "1234") alert ("u get a piiza")
    }, [value])
    return (
        <>
            <Box p={4}>
                <HStack>
                    <PinInput type="alphanumeric" size="lg" defaultValue="sub" placeholder="-" onChange={(e) => setValue(e)} >
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>
            </Box>
        </>
    )
}
export default InputNumberComponent