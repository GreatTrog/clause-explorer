import { ClauseType } from '../types';
import type { LearnPage } from './curriculum';

export const CLAUSE_BOUNDARY_CURRICULUM: LearnPage[] = [
    {
        id: 'cb-1',
        type: ClauseType.CLAUSE_BOUNDARIES,
        title: 'What Is an Independent Clause?',
        definition: 'An **independent clause** makes sense on its own and could be a complete sentence.',
        mascotDialogue: "If it can stand alone like a boss, it's an independent clause!",
        exampleSentence: "The storm grew louder.",
        highlightedText: "The storm grew louder"
    },
    {
        id: 'cb-2',
        type: ClauseType.CLAUSE_BOUNDARIES,
        title: 'Using a Semi-colon ( ; )',
        definition: 'A **semi-colon** joins two closely related independent clauses. Both sides must work as full sentences.',
        mascotDialogue: "It's like a soft full stop. It keeps the two ideas close together!",
        exampleSentence: "The storm grew louder; the sky turned black.",
        highlightedText: ";"
    },
    {
        id: 'cb-3',
        type: ClauseType.CLAUSE_BOUNDARIES,
        title: 'When to Choose a Semi-colon',
        definition: 'Use a semi-colon when ideas are linked in meaning and you want a strong connection.',
        mascotDialogue: "Test it: can you replace it with a full stop? If yes, you're on the right track!",
        exampleSentence: "She practised every day; she wanted to improve.",
        highlightedText: ";"
    },
    {
        id: 'cb-4',
        type: ClauseType.CLAUSE_BOUNDARIES,
        title: 'Using a Colon ( : )',
        definition: 'A **colon** introduces or explains the second independent clause. Think of it as meaning "because" or "here’s why".',
        mascotDialogue: "The second part is like the big reveal or the reason for the first part!",
        exampleSentence: "He had one fear: he hated heights.",
        highlightedText: ":"
    },
    {
        id: 'cb-5',
        type: ClauseType.CLAUSE_BOUNDARIES,
        title: 'When to Choose a Colon',
        definition: 'Use a colon when the second clause explains the first, gives a reason, or reveals information.',
        mascotDialogue: "Remember: both sides should still be independent clauses in this rule!",
        exampleSentence: "She made a decision: she would leave at dawn.",
        highlightedText: ":"
    },
    {
        id: 'cb-6',
        type: ClauseType.CLAUSE_BOUNDARIES,
        title: 'Using a Dash ( — )',
        definition: 'A **dash** creates a dramatic or sudden break between independent clauses.',
        mascotDialogue: "It's the dramatic actor of punctuation! Boom — something happened!",
        exampleSentence: "He was about to speak — the lights went out.",
        highlightedText: "—"
    },
    {
        id: 'cb-7',
        type: ClauseType.CLAUSE_BOUNDARIES,
        title: 'When to Choose a Dash',
        definition: 'Use a dash for something unexpected, for emphasis, or when the tone is dramatic/informal.',
        mascotDialogue: "Dashes are great in stories to show tension or a sharp turn in the action.",
        exampleSentence: "She thought she was safe — she was wrong.",
        highlightedText: "—"
    },
    {
        id: 'cb-8',
        type: ClauseType.CLAUSE_BOUNDARIES,
        title: 'Choosing the Right Punctuation',
        definition: 'Semi-colons link; colons explain; dashes add drama.',
        mascotDialogue: "Think about the *feeling* you want to give the reader.",
        exampleSentence: "He didn’t run; he stayed calm.",
        highlightedText: ";"
    },
    {
        id: 'cb-9',
        type: ClauseType.CLAUSE_BOUNDARIES,
        title: 'Common Misconceptions',
        definition: 'Don\'t use these like commas, and don\'t use them before incomplete clauses.',
        mascotDialogue: "❌ I ran; because I was late. (Because I was late is NOT independent!)",
        exampleSentence: "She was scared: she hated the dark.",
        highlightedText: ":"
    },
    {
        id: 'cb-10',
        type: ClauseType.CLAUSE_BOUNDARIES,
        title: 'Final Check',
        definition: 'Can both sides stand alone? What is the relationship? If in doubt, use a full stop.',
        mascotDialogue: "Check both sides! If one side is weak, the punctuation won't hold up.",
        exampleSentence: "The path was clear; we started our journey.",
        highlightedText: ";"
    }
];
