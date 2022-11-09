import TextAnimation from "react-text-animations";


const AnimatedText = () => {
    return (
        <TextAnimation.Slide 
        target="services" 
        text={['Entreprenuerial experts','Real-time Professionals','and Work-place Comfort']} 
        cname="textAnimation"
        id="textAnimation__slide"
        animation={{
            duration:1000,
            delay:2000,
            timingFunction:'ease-out',
        }}
        loop={true}
    >
    Explore Unique blend of services
    </TextAnimation.Slide>
    )
}

export default AnimatedText


