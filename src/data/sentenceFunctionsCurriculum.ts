import { SentenceFunction } from '../types';
import type { LearnPage } from './curriculum';

export const SENTENCE_FUNCTIONS_CURRICULUM: LearnPage[] = [
    {
        id: 'sentence-functions-learn-statement',
        type: SentenceFunction.STATEMENT,
        title: 'Statements give information',
        definition: 'A **statement** tells you something. The subject usually comes before the verb, and the sentence usually ends with a full stop.',
        mascotDialogue: 'Find who or what the sentence is about, then check what it tells you about them.',
        exampleSentence: 'The footpath is closed for repairs.',
        highlightedText: 'The footpath is',
    },
    {
        id: 'sentence-functions-learn-question',
        type: SentenceFunction.QUESTION,
        title: 'Questions ask for information',
        definition: 'A direct **question** asks something and ends with a question mark. It may begin with a word such as **where**, or put a verb such as **can** or **is** before the subject.',
        mascotDialogue: 'Compare “The gate is locked.” with “Is the gate locked?” The order of the words changes the function.',
        exampleSentence: 'Where shall we meet after choir?',
        highlightedText: ['Where shall we', '?'],
    },
    {
        id: 'sentence-functions-learn-command',
        type: SentenceFunction.COMMAND,
        title: 'Commands tell someone what to do',
        definition: 'A **command** gives an instruction. It often starts with a verb, such as **fold** or **close**. The person being told what to do is usually understood to be **you**.',
        mascotDialogue: '“Please” can make a command polite. A command can end with a full stop or an exclamation mark.',
        exampleSentence: 'Please stack the trays beside the sink.',
        highlightedText: 'stack',
    },
    {
        id: 'sentence-functions-learn-exclamation',
        type: SentenceFunction.EXCLAMATION,
        title: 'Exclamations express strong feeling',
        definition: 'In these exercises, an **exclamation** starts with **what** or **how** and expresses a strong feeling, such as surprise or admiration. It usually ends with an exclamation mark.',
        mascotDialogue: 'Read the whole sentence for its function. “Stand back!” also has an exclamation mark and gives a command.',
        exampleSentence: 'How bright the lanterns look tonight!',
        highlightedText: ['How bright', '!'],
    },
    {
        id: 'sentence-functions-learn-reported-question',
        type: SentenceFunction.STATEMENT,
        title: 'A statement can report a question',
        definition: 'A statement can tell you what someone asked. A direct question puts the question to the reader or listener.',
        mascotDialogue: '“When does the bakery open?” asks directly. The example reports what someone asked, so it ends with a full stop.',
        exampleSentence: 'Jaya asked when the bakery opened.',
        highlightedText: ['Jaya asked', 'the bakery opened.'],
    },
    {
        id: 'sentence-functions-learn-delayed-command',
        type: SentenceFunction.COMMAND,
        title: 'Find the instruction after the opener',
        definition: 'A command can begin with a group of words that explains when, where or why to do something. The instruction can come after those words.',
        mascotDialogue: 'Ask yourself which verb tells the listener what to do.',
        exampleSentence: 'When the bell rings, collect your belongings.',
        highlightedText: 'collect',
    },
];
