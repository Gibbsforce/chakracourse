import { useState } from "react"
import { Box, Stack, RadioGroup, Radio, Text } from "@chakra-ui/react"
const RadioButton = () => {
    const [value, setValue] = useState("1")
    return (
        <>
            <Box p={4}>
                <Text>{value}</Text>
                <RadioGroup onChange={setValue} value={value}>
                    <Stack direction="row">
                        <Radio value="1" size="sm">First</Radio>
                        <Radio value="2" size="md" isInvalid>Second</Radio>
                        <Radio value="3" colorScheme="red" size="lg" isDisabled>Third - Don't choose me</Radio>
                    </Stack>
                </RadioGroup>
            </Box>
        </>
    )
}
export default RadioButton