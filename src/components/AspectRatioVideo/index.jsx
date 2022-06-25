import { AspectRatio } from "@chakra-ui/react"
const AspectRatioVideo = () => {
    return (
        <AspectRatio ratio={16/9}>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/M9k_9IVm7A4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </AspectRatio>
    )
}
export default AspectRatioVideo