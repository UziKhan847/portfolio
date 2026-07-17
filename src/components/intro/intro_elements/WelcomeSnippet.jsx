import React from 'react';
// PrismLight only bundles the languages you explicitly register, instead of
// all ~200 that the default `Prism` build pulls in. This is the single biggest
// reason the production bundle was oversized.
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import dart from 'react-syntax-highlighter/dist/esm/languages/prism/dart';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('dart', dart);

function WelcomeSnippet() {
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
                    padding: 'var(--snippet-pad)',
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
