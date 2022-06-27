import { useState } from "react"
import { Stack, Input, InputGroup, InputLeftAddon, InputRightAddon, InputRightElement, Button } from "@chakra-ui/react"
const InputComponent = () => {
    const [show, setShow] = useState(Boolean)
    const handleClick = () => setShow(!show)
    return (
        <>
            <Stack spacing={4}>
                <InputGroup>
                    <InputLeftAddon children="+555"/>
                    <Input type="tel" placeholder="phone number"/>
                </InputGroup>
                <InputGroup size="sm">
                    <InputLeftAddon children="https://"/>
                    <Input placeholder="my website"/>
                    <InputRightAddon children=".com"/>
                </InputGroup>
            </Stack>
            <Stack spacing={4}>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                    />
                    <InputRightElement w="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "hide" : "show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Stack>
        </>
    )
}
export default InputComponent