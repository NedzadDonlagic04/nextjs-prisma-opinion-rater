'use client'

import { useEffect } from 'react'

export default function FaviconSetup() {
    useEffect(() => {
        const matcher: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        const iconLink: HTMLLinkElement = document.createElement('link');

        iconLink.rel = 'icon';
        iconLink.href = '/icon-light.png';
        
        if(matcher.matches) iconLink.href = '/icon-dark.png';

        document.head.appendChild(iconLink);
    }, []);

    return null;
}