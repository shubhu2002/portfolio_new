import { useEffect, useState } from 'react';

const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkIsMobile();

        // Event listener for window resize
        window.addEventListener('resize', checkIsMobile);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return isMobile;
};

export default useIsMobile;
