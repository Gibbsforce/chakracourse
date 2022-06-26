import { useState } from "react";
import { Editable, EditablePreview, EditableInput } from "@chakra-ui/react"
const EditableComponent = () => {
    const [value, setValue] = useState("Enter a value")
    return (
        <>
            <Editable
                value={value ? value : "Enter a value"}
                bgColor="gray.100"
                textAlign="center"
            >
                <EditablePreview />
                <EditableInput onChange={(e) => setValue(e.target.value)}/>
            </Editable>
        </>
    )
}
export default EditableComponent