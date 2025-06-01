import { useEffect } from "react";

import { NAV_ITEMS } from "~/constants";
import { useAppStore } from "~/store/app";
import { getId } from "~/utils";

export const useActiveSection = () => {
    // const activeSectionId = useAppStore().activeSectionId;
    const setActiveSectionId= useAppStore().setActiveSectionId;

    const handleScrollSpy = () => {
        const sectionIds = NAV_ITEMS.map((item) => getId(item.name));
        let activeSection = -1;

        for (let i = 0; i < sectionIds.length; i++) {
            const sectionId = sectionIds[i];
            const sectionElement = sectionId && document.getElementById(sectionId);

            if (sectionElement) {
                const rect = sectionElement.getBoundingClientRect();

                if (
                    (rect.top <= 5 && rect.bottom >= 5) ||
                    (rect.top >= 0 && rect.top <= window.innerHeight/2)
                ) {
                    activeSection = i;
                    break;
                }
            }
        }
        setActiveSectionId(activeSection);
    };

    // const handleScrollSpy = () => {
    //     const sectionIds = NAV_ITEMS.map((item) => getId(item.name));
    //     let activeSection = -1;

    //     for (let i = 0; i < sectionIds.length; i++) {
    //         const sectionId = sectionIds[i];
    //         const sectionElement = sectionId && document.getElementById(sectionId);

    //         if (sectionElement) {
    //             const rect = sectionElement.getBoundingClientRect();
    //             // console.log(rect.top, rect.bottom, window.innerHeight, window.innerHeight/2 )
    //             const sectionCenter = rect.top + window.innerHeight / 2;

    //             if (
    //                 (rect.top <= 5 && rect.bottom >= 5) ||
    //                 (sectionCenter >= 0 && sectionCenter <= window.innerHeight)
    //             ) {
    //                 activeSection = i;
    //                 break;
    //             }
    //         }
    //     }
    //     setActiveSectionId(activeSection);
    // };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollSpy);
        return () => {
            window.removeEventListener("scroll", handleScrollSpy);
        };
    }, []);

    // useEffect(() => {
    //     console.log(activeSectionId);
    // }, [activeSectionId])
    

    return {};
};