import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function WelcomeSnippet({ isPortrait }) {
    const code = `void welcome() {
  const String name   = 'Mohammad Uzair';
  const String title  = 'Front-End Engineer';
  const List<String> languages = [
    'English - الإنجليزية',
    'Arabic - العربية',
    'Urdu - الأردية'
  ];

  // WELCOME TO MY PORTFOLIO!
  // أهلا وسهلا ومرحبا
}`;

    return (

        <div className="w-fit overflow-hidden shadow-lg">
            <SyntaxHighlighter
                language="dart"
                style={vscDarkPlus}
                wrapLongLines
                customStyle={{
                    margin: 0,
                    padding: isPortrait ? '1vh' : '1vw',
                    lineHeight: '1',
                    letterSpacing: 'normal',
                    whiteSpace: 'pre'
                }}
                codeTagProps={{
                    className: "text-[1vw] mobile-tall:text-[2.8vw] leading-snug"
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>

    );
}

export default WelcomeSnippet;
