import { useState } from "react";
import { FormControl, FormLabel, Input, FormHelperText, Box, Center, Text, SimpleGrid, Button } from "@chakra-ui/react"
const FormControlComponent = () => {
    const [value, setValue] = useState("Enter a value")
    return (
        <>
            <Box bgColor="blue.50">
                <Center>
                    <Text fontSize="3xl">Sign up for yummy pizza</Text>
                </Center>
                <SimpleGrid>
                    <FormControl id="name" isRequired>
                        <FormLabel>Full Name</FormLabel>
                        <Input type="text" border="1px solid black"/>
                        <FormHelperText>
                            We'll use this for your invite!
                        </FormHelperText>
                    </FormControl>
                </SimpleGrid>
                <Box width="100%" height="50px" bgColor="blue.50"/>
                <SimpleGrid>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input type="text" border="1px solid black"/>
                        <FormHelperText>
                            This is for the free pizza!
                        </FormHelperText>
                    </FormControl>
                </SimpleGrid>
                <Box width="100%" height="50px" bgColor="blue.50"/>
                <Center>
                    <Button bgColor="green" color="white">
                        Sign Up for get the pizza
                    </Button>
                </Center>
                <Box width="100%" height="50px" bgColor="blue.50"/>
            </Box>
        </>
    )
}
export default FormControlComponent