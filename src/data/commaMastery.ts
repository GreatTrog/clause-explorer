import { ClauseType } from '../types';
import { MasteryQuestionType } from './masteryQuestions';
import type { MasteryQuestion } from './masteryQuestions';

export const COMMA_MASTERY_QUESTIONS: MasteryQuestion[] = [
    {
        id: 'commas-mastery-list-1',
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        instructions: 'Add three commas to separate the five exhibits.',
        originalText: 'The display included a model train a brass bell an old station clock a bundle of tickets and a railway map.',
        correctSentence: 'The display included a model train, a brass bell, an old station clock, a bundle of tickets and a railway map.',
    },
    {
        id: 'commas-mastery-list-2',
        type: MasteryQuestionType.MULTI_SELECT,
        instructions: 'Select the two parts that should each end with a comma.',
        chunks: [
            { id: 'c1', text: 'The club members can', isCorrect: false },
            { id: 'c2', text: 'design a badge', isCorrect: true },
            { id: 'c3', text: 'weave a bracelet', isCorrect: true },
            { id: 'c4', text: 'bake a loaf', isCorrect: false },
            { id: 'c5', text: 'or make a kite.', isCorrect: false },
        ],
    },
    {
        id: 'commas-mastery-list-3',
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        instructions: 'Add two commas to separate the four actions.',
        originalText: 'Rafi checked the tyre pressure tightened the handlebars adjusted the seat and tested the brakes.',
        correctSentence: 'Rafi checked the tyre pressure, tightened the handlebars, adjusted the seat and tested the brakes.',
    },
    {
        id: 'commas-mastery-fronted-1',
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        instructions: 'Add a comma after the whole fronted adverbial.',
        originalText: 'At the bottom of the steep stone staircase a narrow passage led to the cellar.',
        correctSentence: 'At the bottom of the steep stone staircase, a narrow passage led to the cellar.',
    },
    {
        id: 'commas-mastery-fronted-2',
        type: MasteryQuestionType.SELECT,
        clauseType: ClauseType.COMMAS,
        instructions: 'Select the word that should be followed by a comma.',
        chunks: [
            { id: 'c1', text: 'Until', isCorrect: false },
            { id: 'c2', text: ' the ', isCorrect: false },
            { id: 'c3', text: 'floodwater ', isCorrect: false },
            { id: 'c4', text: 'dropped ', isCorrect: true },
            { id: 'c5', text: 'the footpath stayed closed.', isCorrect: false },
        ],
    },
    {
        id: 'commas-mastery-fronted-3',
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        instructions: 'Move the comma to the end of the fronted adverbial.',
        originalText: 'Without, making a sound the fox slipped through the hedge.',
        correctSentence: 'Without making a sound, the fox slipped through the hedge.',
    },
    {
        id: 'commas-mastery-clarity-1',
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        instructions: 'Add two commas to show that four separate things were sold.',
        originalText: 'The stall sold chocolate biscuits jam and chutney.',
        correctSentence: 'The stall sold chocolate, biscuits, jam and chutney.',
    },
    {
        id: 'commas-mastery-clarity-2',
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        instructions: 'Add one comma to show that the speaker is talking directly to Jordan.',
        originalText: 'Can you help Jordan?',
        correctSentence: 'Can you help, Jordan?',
    },
    {
        id: 'commas-mastery-clarity-3',
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        instructions: 'Add two commas to show that every flag was striped and every flag blew down.',
        originalText: 'The flags which were striped blew down in the storm.',
        correctSentence: 'The flags, which were striped, blew down in the storm.',
    },
    {
        id: 'commas-mastery-clarity-4',
        type: MasteryQuestionType.SELECT,
        clauseType: ClauseType.COMMAS,
        instructions: 'Select the sentence where Niko calls a person.',
        chunks: [
            { id: 'c1', text: 'When Niko called the guard, dogs began to bark.', isCorrect: true },
            { id: 'c2', text: ' When Niko called, the guard dogs began to bark.', isCorrect: false },
        ],
    },
    {
        id: 'commas-mastery-mixed-1',
        type: MasteryQuestionType.TABLE,
        instructions: 'Choose the job of the comma or commas in each sentence.',
        rowHeader: 'Sentence',
        columns: ['Separate list items', 'End a fronted adverbial', 'Mark extra information'],
        rows: [
            { id: 'r1', text: 'Once the path was clear, we set off.', correctType: 'End a fronted adverbial' },
            { id: 'r2', text: 'The shelter, which had a tin roof, kept us dry.', correctType: 'Mark extra information' },
            { id: 'r3', text: 'Evie borrowed a ruler, a pencil and a rubber.', correctType: 'Separate list items' },
            { id: 'r4', text: 'In the shade of the oak, the grass stayed cool.', correctType: 'End a fronted adverbial' },
        ],
    },
    {
        id: 'commas-mastery-mixed-2',
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        instructions: 'Add three commas to mark the fronted adverbial and separate the four items.',
        originalText: 'Before the gates opened the volunteers put out benches lanterns signs and bins.',
        correctSentence: 'Before the gates opened, the volunteers put out benches, lanterns, signs and bins.',
    },
];
