import { useEffect, useState} from 'react';
import type ReactParallaxTilt from 'react-parallax-tilt';

type ParallaxTiltType = typeof ReactParallaxTilt;

const useParallaxTilt = (): ParallaxTiltType | null => {
    const [ParallaxTilt, setParallaxTilt] = useState<ParallaxTiltType | null>(null);

    useEffect(() => {
        import('react-parallax-tilt').then((module) => {
            // Assuming ReactParallaxTilt is the component exported by the module
            const ReactParallaxTilt = module.default;

            // Set the created component to state
            setParallaxTilt(() => ReactParallaxTilt);
        }).catch(e => console.error("cannot import react-parallax-tilt", e));
    }, []);

    return ParallaxTilt;
}

export default useParallaxTilt;
