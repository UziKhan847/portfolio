const DartPadEmbed = ({ gistId }) => {
    // 1️⃣ Build the URL that the iframe will load.
    const src = `https://dartpad.dev/embed-inline.html?id=${gistId}&theme=dark&split=50`;

    return (


        <iframe
            src={src}
            className="w-[80%] h-[80%] border rounded-lg shadow-md"
            allow="accelerometer; camera; microphone; geolocation; encrypted-media"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            title="DartPad Embed"
        ></iframe>

    );
};

export default DartPadEmbed;
