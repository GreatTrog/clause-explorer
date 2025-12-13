import React from 'react';

interface MarkdownTextProps {
    text: string;
    className?: string; // Allow passing className for styling the wrapper if needed, though we return Fragment mainly.
}

/**
 * Simple Markdown renderer.
 * Supports:
 * - **bold**
 * - *italic*
 * - \n (newlines)
 * 
 * Does NOT support nested styles heavily or complex markdown.
 */
export const MarkdownText: React.FC<MarkdownTextProps> = ({ text, className }) => {
    if (!text) return null;

    // Split by newlines first
    const lines = text.split('\n');

    const renderContent = () => (
        <>
            {lines.map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                    {parseLine(line)}
                    {lineIndex < lines.length - 1 && <br />}
                </React.Fragment>
            ))}
        </>
    );

    if (className) {
        return <span className={className}>{renderContent()}</span>;
    }

    return renderContent();
};

const parseLine = (line: string) => {
    // 1. Split by **bold**
    const parts = line.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
            // Found bold, remove ** and return strong. 
            // We do NOT process italics INSIDE bold in this simple version unless we recurse.
            // Let's assume no nesting for this simple requirement.
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }

        // 2. Split by *italic* for non-bold parts
        // Note: We use lazy match .*? to assume * is not part of the text usually. 
        // A smarter regex would be needed for complex cases, but this fits our Controlled Data.
        const subParts = part.split(/(\*.*?\*)/g);

        return (
            <React.Fragment key={index}>
                {subParts.map((subPart, subIndex) => {
                    // Check strict starts/ends to avoid matching "2 * 3 = 6" if written as * 3 = * (unlikely in text)
                    // But generally *italic* format.
                    if (subPart.startsWith('*') && subPart.endsWith('*') && subPart.length >= 2) {
                        return <em key={subIndex}>{subPart.slice(1, -1)}</em>;
                    }
                    return subPart;
                })}
            </React.Fragment>
        );
    });
};
