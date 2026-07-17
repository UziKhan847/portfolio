import React from 'react';

// Tailwind can only see fully-spelled-out class names at build time, so a
// dynamic string like `text-${linkColor}-300` gets purged from the production
// build and the colour silently disappears. Map to complete class names instead.
const LINK_COLOR_CLASSES = {
    red: 'text-red-300',
    blue: 'text-blue-300',
    green: 'text-green-300',
};

function CertificateSection({ title, date, timeSpent, project, certificateLink, linkText, linkColor }) {
    const linkClass = LINK_COLOR_CLASSES[linkColor] ?? 'text-blue-300';

    return (
        <section>
            <p className="font-bold text-[0.8em]">{title}</p>
            <p className="text-[0.6em]">{date}</p>
            <ul className="list-disc list-inside space-y-2 text-[0.5em]">
                <li>Time spent: {timeSpent}</li>
                <li>Final Project: {project}</li>
            </ul>
            <a
                href={certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} text-[0.5em] hover:underline`}>
                {linkText}
            </a>
        </section>
    );
}

export default CertificateSection;
