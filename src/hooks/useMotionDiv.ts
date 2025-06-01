import { type HTMLAttributes,useEffect, useState } from 'react';
import { type HTMLMotionProps } from 'framer-motion';

type MotionStyle = {
    // scale?: number | MotionValue<number>;
    // top?: MotionValue<number> | string;
    // ... other properties ...
};

type MotionDivType = React.ElementType<
    HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div"> & { style?: MotionStyle }
>;

const useMotionDiv = (): MotionDivType | null => {
    const [MotionDiv, setMotionDiv] = useState<MotionDivType | null>(null);

    useEffect(() => {
        import('framer-motion').then((motion) => {
            setMotionDiv(motion.motion.div as MotionDivType);
        }).catch(e => console.error("failed to import framer-motion", e));
    }, []);

    return MotionDiv;
}

export default useMotionDiv;


// import { useEffect, useState, HTMLAttributes } from 'react';
// import { HTMLMotionProps } from 'framer-motion';

// type MotionDivType = React.ElementType<HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div">>;

// const useMotionDiv = (): MotionDivType | null => {
//     const [MotionDiv, setMotionDiv] = useState<MotionDivType | null>(null);

//     useEffect(() => {
//         import('framer-motion').then((motion) => {
//             setMotionDiv(motion.motion.div as MotionDivType);
//         });
//     }, []);

//     return MotionDiv;
// }

// export default useMotionDiv;
