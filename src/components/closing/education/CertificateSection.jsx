import React from 'react';

function CertificateSection({ title, date, timeSpent, project, certificateLink, linkText, certificateImg, linkColor }) {
    return (
        <section>
            <p className="font-bold text-[0.8em]">{title}</p>
            <p className="text-[0.6em]">{date}</p>
            <ul className="list-disc list-inside space-y-2 text-[0.5em]">
                <li>Time spent: {timeSpent}</li>
                <li>Final Project: {project}</li>
                <a
                    href={certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-${linkColor}-300 hover:underline`}>
                    {linkText}
                </a>
            </ul>
        </section>
    );
}

export default CertificateSection;
