import { AspectRatio } from "@chakra-ui/react"
// Pic
import pokemonPikachuRaichu from "../../assets/pokemonPikachuRaichu.jpg"
const AspectRatioPicture = () => {
    return (
        <AspectRatio ratio={16/9}>
            <img src={pokemonPikachuRaichu} alt=""/>
        </AspectRatio>
    )
}
export default AspectRatioPicture