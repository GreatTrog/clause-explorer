import { ClauseType } from '../types';
import type { PracticeQuestion } from './practiceQuestions';

export const CLAUSE_BOUNDARY_PRACTICE_QUESTIONS: PracticeQuestion[] = [
    // Punctuation Edit Questions (Inserting the punctuation)
    {
        id: 'cb-p-1',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Insert the semi-colon joining the two independent clauses.',
        hint: "Both sides are complete sentences.",
        text: 'The sun set the moon rose.',
        correctSentence: 'The sun set; the moon rose.'
    },
    {
        id: 'cb-p-2',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Insert the colon to introduce the explanation.',
        hint: "The second part explains why.",
        text: 'I stayed home I felt unwell.',
        correctSentence: 'I stayed home: I felt unwell.'
    },
    {
        id: 'cb-p-3',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Insert the dash for dramatic effect.',
        hint: "It's the dramatic break between the two clauses.",
        text: 'The doorbell rang no one was there.',
        correctSentence: 'The doorbell rang — no one was there.'
    },
    {
        id: 'cb-p-4',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Insert the semi-colon to link these related ideas.',
        hint: "Close connection between facts.",
        text: 'It was late the street was empty.',
        correctSentence: 'It was late; the street was empty.'
    },
    {
        id: 'cb-p-5',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Insert the colon used to introduce a reason.',
        hint: "Why did she scream?",
        text: 'She screamed a spider crawled by.',
        correctSentence: 'She screamed: a spider crawled by.'
    },

    // Multiple Choice Questions (Choosing the right punctuation)
    {
        id: 'cb-p-6',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Identify the mark that best joins these related ideas.',
        question: 'The match was over... our team had won.',
        options: [
            { id: 'a', text: 'Semi-colon (;)', isCorrect: true },
            { id: 'b', text: 'Comma (,)', isCorrect: false },
            { id: 'c', text: 'Question mark (?)', isCorrect: false }
        ],
        hint: "Both sides are complete sentences."
    },
    {
        id: 'cb-p-7',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Which punctuation introduces the explanation?',
        question: 'There was only one problem... we were lost.',
        options: [
            { id: 'a', text: 'Colon (:)', isCorrect: true },
            { id: 'b', text: 'Semi-colon (;)', isCorrect: false },
            { id: 'c', text: 'Dash (—)', isCorrect: false }
        ],
        hint: "The second part explains 'the problem'."
    },
    {
        id: 'cb-p-8',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Choose the most dramatic punctuation.',
        question: 'The trap was set... then he heard a snap.',
        options: [
            { id: 'a', text: 'Dash (—)', isCorrect: true },
            { id: 'b', text: 'Semi-colon (;)', isCorrect: false },
            { id: 'c', text: 'Full stop (.)', isCorrect: false }
        ],
        hint: "Look for the sudden interruption."
    },
    {
        id: 'cb-p-9',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Which sentence uses a semi-colon correctly?',
        options: [
            { id: 'a', text: 'I like cake; it is sweet.', isCorrect: true },
            { id: 'b', text: 'I like cake; because it is sweet.', isCorrect: false },
            { id: 'c', text: 'I like; cake.', isCorrect: false }
        ],
        hint: "A semi-colon joins two *independent* clauses."
    },
    {
        id: 'cb-p-10',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Which sentence uses a colon correctly?',
        options: [
            { id: 'a', text: 'He had a goal: he wanted to win.', isCorrect: true },
            { id: 'b', text: 'He had: a goal.', isCorrect: false },
            { id: 'c', text: 'He had a goal: to win.', isCorrect: false }
        ],
        hint: "In this module, both sides must be independent clauses."
    },

    // More insertions
    {
        id: 'cb-p-11',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Insert the dash for a sudden break.',
        hint: "Sudden turns use dashes.",
        text: 'The snow fell softly everything was white.',
        correctSentence: 'The snow fell softly — everything was white.'
    },
    {
        id: 'cb-p-12',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Which punctuation should join these linked ideas?',
        question: 'London is the capital... Paris is another big city.',
        options: [
            { id: 'a', text: 'Semi-colon (;)', isCorrect: true },
            { id: 'b', text: 'Colon (:)', isCorrect: false },
            { id: 'c', text: 'Dash (—)', isCorrect: false }
        ],
        hint: "They are related facts."
    },
    {
        id: 'cb-p-13',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Insert the colon revealing the secret.',
        hint: "The reveal follows the colon.",
        text: 'He opened the box it was empty.',
        correctSentence: 'He opened the box: it was empty.'
    },
    {
        id: 'cb-p-14',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Why is this semi-colon used?',
        question: 'The dog barked; the cat hid.',
        options: [
            { id: 'a', text: 'To link two related actions.', isCorrect: true },
            { id: 'b', text: 'To explain why the dog barked.', isCorrect: false },
            { id: 'c', text: 'To show a dramatic interruption.', isCorrect: false }
        ],
        hint: "The two events are happening together."
    },
    {
        id: 'cb-p-15',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Insert the dash for a dramatic finish.',
        hint: "Emphatic ending.",
        text: 'He tried his best it wasn\'t enough.',
        correctSentence: 'He tried his best — it wasn\'t enough.'
    },
    {
        id: 'cb-p-16',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Which sentence is WRONG?',
        options: [
            { id: 'a', text: 'Wait: for me.', isCorrect: true },
            { id: 'b', text: 'Wait: I am coming too.', isCorrect: false },
            { id: 'c', text: 'Wait; I will be there.', isCorrect: false }
        ],
        hint: "'For me' is not an independent clause."
    },
    {
        id: 'cb-p-17',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Insert the colon to introduce the result.',
        hint: "The second part is a direct result/explanation of the first.",
        text: 'He forgot his coat he was freezing.',
        correctSentence: 'He forgot his coat: he was freezing.'
    },
    {
        id: 'cb-p-18',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Insert the semi-colon joining related instructions.',
        hint: "Two independent commands.",
        text: 'Read the book watch the film.',
        correctSentence: 'Read the book; watch the film.'
    },
    {
        id: 'cb-p-19',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Which mark is most dramatic?',
        question: 'The cliff was steep... one slip meant disaster.',
        options: [
            { id: 'a', text: 'Dash (—)', isCorrect: true },
            { id: 'b', text: 'Semi-colon (;)', isCorrect: false },
            { id: 'c', text: 'Colon (:)', isCorrect: false }
        ],
        hint: "Emphasis and tension."
    },
    {
        id: 'cb-p-20',
        type: ClauseType.CLAUSE_BOUNDARIES,
        instructions: 'Can you use a full stop instead of a semi-colon?',
        options: [
            { id: 'a', text: 'Yes, if both sides are independent.', isCorrect: true },
            { id: 'b', text: 'No, never.', isCorrect: false },
            { id: 'c', text: 'Only if there is no verb.', isCorrect: false }
        ],
        hint: "The semi-colon test."
    }
];
