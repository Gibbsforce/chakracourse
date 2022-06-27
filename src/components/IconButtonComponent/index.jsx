import { IconButton, Box, ButtonGroup } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
const IconButtonComponent = () => {
    return (
        <>
            <Box padding={4}>
                <ButtonGroup>
                    <IconButton
                        colorScheme="messenger"
                        aria-label="search database"
                        icon={<SearchIcon />}
                        size="xs"
                        variant="outline"
                    />
                    <IconButton
                        colorScheme="messenger"
                        aria-label="search database"
                        icon={<SearchIcon />}
                        size="sm"
                        variant="link"
                    />
                    <IconButton
                        colorScheme="messenger"
                        aria-label="search database"
                        icon={<SearchIcon />}
                        size="md"
                        variant="ghost"
                    />
                    <IconButton
                        colorScheme="messenger"
                        aria-label="search database"
                        icon={<SearchIcon />}
                        size="lg"
                        variant="unstyled"
                    />
                    <IconButton
                        colorScheme="messenger"
                        aria-label="search database"
                        icon={<SearchIcon />}
                        size="lg"
                        variant="solid"
                    />
                </ButtonGroup>
            </Box>
        </>
    )
}
export default IconButtonComponent