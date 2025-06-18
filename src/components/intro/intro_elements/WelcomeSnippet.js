import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function WelcomeSnippet() {
    const code = `void welcome() {
  const String name   = 'Mohammad Uzair';
  const String title  = 'Front-End Engineer';
  const List<String> languages = [
    'English',
    'Arabic',
    'Urdu'
  ];

  // WELCOME TO MY PORTFOLIO!
}`;

    return (

        <div className="w-2x1 overflow-hidden shadow-lg">
            <SyntaxHighlighter
                language="dart"
                style={vscDarkPlus}
                wrapLongLines
                customStyle={{ margin: 0, padding: '2rem' }}
                codeTagProps={{
                    className: "text-[1vw] mobile-tall:text-[2.5vw] leading-snug"
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>

    );
}

export default WelcomeSnippet;
