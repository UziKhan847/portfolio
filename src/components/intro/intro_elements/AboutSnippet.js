import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


function AboutSnippet() {
    const code = `uzi@LMDE6:~$ figlet -f big ABOUT
          ____   ____  _    _ _______ 
    /\   |  _ \ / __ \| |  | |__   __|
   /  \  | |_) | |  | | |  | |  | |   
  / /\ \ |  _ <| |  | | |  | |  | |   
 / ____ \| |_) | |__| | |__| |  | |   
/_/    \_\____/ \____/ \____/   |_|   
                                      
uzi@LMDE6:~$ echo Hi, I'm Mohammad Uzair...
> 👋 Hi, I'm Mohammad Uzair
> 💻 Front‑End Mobile Developer (Flutter / Dart)
> 🎨 Graphics Designer (Inkscape)
> 🗓️ 1+ years experience
> 🚀 Passionate coder, honing my craft daily!
`;

    return (
        <div className="w-fit overflow-hidden rounded-none shadow-none">
            <SyntaxHighlighter
                language="bash"

                style={{}}
                wrapLongLines
                customStyle={{
                    backgroundColor: '#000',
                    color: '#0f0',
                    fontFamily: 'Consolas, "Courier New", monospace',
                    padding: '1rem',
                    border: '1px solid #333',
                    borderRadius: '0',

                }}
                codeTagProps={{
                    style: {
                        color: '#0f0',

                    },
                    className: `
                      text-[1vw] mobile-tall:text-[2.5vw]
                      leading-snug      
                    `
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}

export default AboutSnippet;
