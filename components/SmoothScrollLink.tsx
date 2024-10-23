import React from 'react';

type SmoothScrollLinkProps = {
    href: string;
    text: string;
};

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ href, text }) => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <a
            className="underline text-blue-700 hover:text-indigo-400 transition-colors duration-500"
            href={href}
            onClick={handleScroll}
        >
            {text}
        </a>
    );
};

export default SmoothScrollLink;
