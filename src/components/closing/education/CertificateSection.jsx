// Tailwind can only see fully-spelled-out class names at build time, so a
// dynamic string like `text-${linkColor}-300` gets purged from the production
// build and the colour silently disappears. Map to complete class names instead.
const LINK_COLOR_CLASSES = {
    red: 'text-red-300',
    blue: 'text-blue-300',
    green: 'text-green-300',
    amber: 'text-amber-300',
};

function CertificateSection({ title, subtitle, details = [], link, linkText, linkColor, status }) {
    const linkClass = LINK_COLOR_CLASSES[linkColor] ?? 'text-blue-300';

    return (
        <section>
            <h3 className="font-bold text-[0.8em]">{title}</h3>
            <p className="text-[0.6em]">{subtitle}</p>
            {details.length > 0 && (
                <ul className="list-disc list-inside space-y-2 text-[0.5em]">
                    {details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
            )}
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} text-[0.5em] hover:underline`}>
                    {linkText}
                </a>
            )}
            {status && <p className={`${linkClass} text-[0.5em]`}>{status}</p>}
        </section>
    );
}

export default CertificateSection;
