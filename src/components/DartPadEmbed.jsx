import { useState } from 'react';

// DartPad retired its old embed-*.html pages; the currently supported way to
// embed (per the dart-lang/dart-pad Embedding Guide) is a plain iframe
// pointing at dartpad.dev with the gist id. This loads the full DartPad UI
// (editor + Run button), so visitors can run the code right in the card.
//
// DartPad is a multi-megabyte Flutter web app, so it's only mounted once the
// visitor asks for it — otherwise it would download and run while the
// projects section is still scroll-animating.
function DartPadEmbed({ gistId, title }) {
    const [active, setActive] = useState(false);

    if (!active) {
        return (
            <div className='h-full w-full flex items-center justify-center'>
                <button
                    type='button'
                    onClick={() => setActive(true)}
                    className='px-[1.5em] py-[0.8em] rounded-xl border border-white bg-black/60 text-white font-firaCode text-[1.4vw] mobile-tall:text-[4vw] hover:bg-white hover:text-black transition'>
                    ▶ Run it in DartPad
                </button>
            </div>
        );
    }

    return (
        <iframe
            src={`https://dartpad.dev/?id=${gistId}&theme=dark`}
            className="w-full h-full border-0 rounded-xl shadow-2xl bg-[#1b1b1f]"
            allow="clipboard-write"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            title={`${title} — DartPad`}
        />
    );
}

export default DartPadEmbed;
