import React from 'react';

function DartPadEmbed({ gistId }) {
    // Query params must be separated with "&", not a second "?".
    const src = `https://dartpad.dev/embed-inline.html?id=${gistId}&theme=dark`;

    return (
        <iframe
            src={src}
            className="w-[80%] h-[80%] border rounded-lg shadow-md"
            allow="accelerometer; camera; microphone; geolocation; encrypted-media"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            title="DartPad Embed"
        />
    );
}

export default DartPadEmbed;
