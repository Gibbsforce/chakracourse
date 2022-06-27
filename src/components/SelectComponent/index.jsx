import { useState } from "react"
import { Box, Select, Text } from "@chakra-ui/react"
import { BellIcon } from "@chakra-ui/icons"
const SelectComponent = () => {
    const [value, setValue] = useState("Sub")
    return (
        <>
            <Box p={4}>
                <Text>{value}</Text>
                <Select
                    placeholder="select stuff"
                    size="lg"
                    variant="filled"
                    value={value}
                    icon={<BellIcon />}
                    onChange={(e) => setValue(e.target.value)}
                >
                    <option value="Sub">Sub to my channel</option>
                    <option value="Pikachu">Pet my Pokemon, Pikachu</option>
                    <option value="Beer">Have a beer with me</option>
                </Select>
            </Box>
        </>
    )
}
export default SelectComponent