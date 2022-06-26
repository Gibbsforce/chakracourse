import { VStack, Checkbox } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons"
// Pic
const CheckboxComponent = () => {
    return (
        <>
            <VStack>
                <Checkbox defaultChecked colorScheme="red" size="sm">Sub to this channel</Checkbox>
                <Checkbox colorScheme="cyan" size="md" spacing="10px">Enter to win $ 1.00</Checkbox>
                <Checkbox icon={<PhoneIcon />} colorScheme="purple" size="lg">O'Doyle Rules</Checkbox>
            </VStack>
        </>
    )
}
export default CheckboxComponent