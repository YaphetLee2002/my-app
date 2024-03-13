// ScrollOpacity.client.tsx
"use client";
import React, {ReactElement, useState, useEffect} from 'react';

interface ScrollOpacityProps {
    children: ReactElement;
}

function ScrollOpacity({children}: ScrollOpacityProps) {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = window.scrollY;
            let docHeight = document.body.offsetHeight;
            let winHeight = window.innerHeight;
            let scrollPercent = scrollTop / (docHeight - winHeight);
            let scrollPercentRounded = Math.round(scrollPercent * 100);
            setOpacity(scrollPercentRounded / 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return React.cloneElement(children, {style: {...children.props.style, opacity: opacity, transition: 'opacity 1s'}});
}

export default ScrollOpacity;
