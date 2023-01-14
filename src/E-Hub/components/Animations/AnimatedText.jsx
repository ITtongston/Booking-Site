import TextAnimation from "react-text-animations";



const AnimatedText = () => {
    return (
        <TextAnimation.Slide 
        target="services" 
        text={['Entrepreneurial workspaces','Entrepreneurial enterprise','Entrepreneurial media','Entrepreneurial education']} 
        cname="textAnimation"
        id="textAnimation__slide"
        animation={{
            duration:1000,
            delay:2000,
            timingFunction:'ease-out',
        }}
        loop={true}
    >
    First Class blend of services
    </TextAnimation.Slide>
    )
}

export default AnimatedText


