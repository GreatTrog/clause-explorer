import { ClauseType } from '../types';
import type { LearnPage } from './curriculum';

export const PUNCTUATION_CURRICULUM: LearnPage[] = [
    {
        id: 'punctuation-ds-1',
        type: ClauseType.DIRECT_SPEECH,
        title: 'What is Direct Speech?',
        definition: 'Direct speech shows the exact words a character says. Use inverted commas around the spoken words.',
        mascotDialogue: 'Tom said, "I am ready." The words inside the marks are exactly what was spoken!',
        exampleSentence: 'Tom said, "I am ready."',
        highlightedText: '"I am ready."'
    },
    {
        id: 'punctuation-ds-2',
        type: ClauseType.DIRECT_SPEECH,
        title: 'Where do Inverted Commas go?',
        definition: 'They go before the first spoken word and after the last spoken word.',
        mascotDialogue: '"It’s cold outside," said Jack. Opening mark before It’s, closing mark after outside!',
        exampleSentence: '"It’s cold outside," said Jack.',
        highlightedText: ['"', '"']
    },
    {
        id: 'punctuation-ds-3',
        type: ClauseType.DIRECT_SPEECH,
        title: 'Punctuation inside the Speech',
        definition: 'Any punctuation that belongs to the speech (like !, ?, or .) must sit INSIDE the inverted commas.',
        mascotDialogue: '“Stop!” she shouted. The exclamation mark is part of the speech, so it stays inside!',
        exampleSentence: '“Stop!” she shouted.',
        highlightedText: '!”'
    },
    {
        id: 'punctuation-ds-4',
        type: ClauseType.DIRECT_SPEECH,
        title: 'Using a Reporting Clause',
        definition: 'A reporting clause tells us who is speaking (e.g., "he said", "Tom whispered"). Use a comma to separate it from the speech.',
        mascotDialogue: '“I don’t like spiders,” said Lucy. Use a lower-case letter for the reporting clause unless it starts with a name!',
        exampleSentence: '“I don’t like spiders,” said Lucy.',
        highlightedText: ',” said Lucy'
    },
    {
        id: 'punctuation-ds-5',
        type: ClauseType.DIRECT_SPEECH,
        title: 'Reporting Clause First',
        definition: 'If the reporting clause comes first, put a comma after it and capitalize the first word of the speech.',
        mascotDialogue: 'Dad whispered, "We should leave now." Comma after whispered, then capital W for the speech!',
        exampleSentence: 'Dad whispered, "We should leave now."',
        highlightedText: ', "W'
    },
    {
        id: 'punctuation-ds-6',
        type: ClauseType.DIRECT_SPEECH,
        title: 'Split Speech (Advanced)',
        definition: 'Sometimes the reporting clause interrupts the speech. Use two sets of inverted commas.',
        mascotDialogue: '“I don’t think,” she said, “this is a good idea.” Comma inside the first set, and no capital for "this"!',
        exampleSentence: '“I don’t think,” she said, “this is a good idea.”',
        highlightedText: ',” she said, “t'
    }
];
