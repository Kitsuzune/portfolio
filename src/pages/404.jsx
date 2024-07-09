import React from 'react'
import Lottie from 'react-lottie';
import Animation from '../assets/lotties/404.json';
import { Container } from 'react-bootstrap';

const NotFound = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Container>
            <Lottie
                options={defaultOptions}
                height={'100%'}
                width={'100%'}
            />
        </Container>
    )
}

export default NotFound