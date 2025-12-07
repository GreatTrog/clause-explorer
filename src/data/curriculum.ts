import { ClauseType } from '../types';

export interface LearnPage {
    id: string;
    type: ClauseType;
    title: string;
    definition: string;
    mascotDialogue: string;
    exampleSentence: string;
    highlightedText: string;
}

export const LEARN_CONTENT: LearnPage[] = [
    // --- Main Clauses ---
    {
        id: 'learn-main-1',
        type: ClauseType.MAIN,
        title: 'What is a Main Clause?',
        definition: 'A main clause is a group of words that contains a subject and a verb and makes complete sense on its own.',
        mascotDialogue: "It's like a boss! It doesn't need anyone else to help it stand up.",
        exampleSentence: "The cat sat on the mat.",
        highlightedText: "The cat sat on the mat"
    },
    {
        id: 'learn-main-2',
        type: ClauseType.MAIN,
        title: 'Spotting Main Clauses',
        definition: 'Even inside a longer sentence, the main clause is the part that could be a sentence all by itself.',
        mascotDialogue: "Look for the part that sounds finished if you read it alone.",
        exampleSentence: "While it was raining, looking out the window, I drank hot cocoa.",
        highlightedText: "I drank hot cocoa"
    },

    // --- Subordinate Clauses ---
    {
        id: 'learn-sub-1',
        type: ClauseType.SUBORDINATE,
        title: 'What is a Subordinate Clause?',
        definition: 'A subordinate clause adds more information to the main clause but does NOT make sense on its own.',
        mascotDialogue: "It needs a helper word (conjunction) like 'because', 'although', or 'if' to start.",
        exampleSentence: "We went inside because it started to rain.",
        highlightedText: "because it started to rain"
    },
    {
        id: 'learn-sub-2',
        type: ClauseType.SUBORDINATE,
        title: 'Subordinate Clauses can move!',
        definition: 'You can often swap the order of the clauses. The subordinate clause can come first!',
        mascotDialogue: "Notice the comma when the subordinate clause comes first!",
        exampleSentence: "Because it started to rain, we went inside.",
        highlightedText: "Because it started to rain"
    },

    // --- Relative Clauses ---
    {
        id: 'learn-rel-1',
        type: ClauseType.RELATIVE,
        title: 'What is a Relative Clause?',
        definition: 'A relative clause gives us more information about a noun (a person, place, or thing).',
        mascotDialogue: "It usually starts with 'who', 'which', 'that', 'whose', or 'where'.",
        exampleSentence: "The boy, who was wearing a red hat, waved at me.",
        highlightedText: "who was wearing a red hat"
    },
    {
        id: 'learn-rel-2',
        type: ClauseType.RELATIVE,
        title: 'Dropping in Relative Clauses',
        definition: 'Relative clauses are often dropped right into the middle of a main clause.',
        mascotDialogue: "It's like a sandwich filling! The main clause is the bread on either side.",
        exampleSentence: "The cake that my mum baked was delicious.",
        highlightedText: "that my mum baked"
    }
];
