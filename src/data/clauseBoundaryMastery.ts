import { type MasteryQuestion, MasteryQuestionType } from './masteryQuestions';

export const CLAUSE_BOUNDARY_MASTERY_QUESTIONS: MasteryQuestion[] = [
    // Drag and Drop (Sorting valid vs invalid)
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'cb-m-1',
        instructions: 'Sort these based on whether the semi-colon is used correctly (joining two independent clauses).',
        zones: ['Correct', 'Incorrect'],
        items: [
            { id: 'i1', text: 'I love winter; it is cold.', category: 'Correct' },
            { id: 'i2', text: 'I love winter; because it is cold.', category: 'Incorrect' },
            { id: 'i3', text: 'She sang; he danced.', category: 'Correct' },
            { id: 'i4', text: 'She sang; beautifully.', category: 'Incorrect' },
        ]
    },
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'cb-m-2',
        instructions: 'Sort based on whether the colon correctly joins two independent clauses.',
        zones: ['Correct', 'Incorrect'],
        items: [
            { id: 'i1', text: 'He knew why: he had failed.', category: 'Correct' },
            { id: 'i2', text: 'He knew: why he had failed.', category: 'Incorrect' },
            { id: 'i3', text: 'There was a secret: she was a spy.', category: 'Correct' },
            { id: 'i4', text: 'The secret: was a spy.', category: 'Incorrect' },
        ]
    },

    // Table Classification (Matching tone/purpose)
    {
        type: MasteryQuestionType.TABLE,
        id: 'cb-m-3',
        instructions: 'Match each sentence to its primary punctuation purpose.',
        columns: ['Linking Related Facts', 'Introducing a Reason', 'Dramatic Emphasis'],
        rows: [
            { id: 'r1', text: 'The door creaked — he was not alone.', correctType: 'Dramatic Emphasis' },
            { id: 'r2', text: 'He was tired; he went to bed.', correctType: 'Linking Related Facts' },
            { id: 'r3', text: 'There was a reason: he was late.', correctType: 'Introducing a Reason' },
            { id: 'r4', text: 'I tried; I failed.', correctType: 'Linking Related Facts' },
        ]
    },

    // Multi-select (Spotting misconceptions)
    {
        type: MasteryQuestionType.MULTI_SELECT,
        id: 'cb-m-4',
        instructions: 'Select all the sentences where the punctuation joined TWO independent clauses.',
        chunks: [
            { id: 'c1', text: 'I ran home; I was late.', isCorrect: true },
            { id: 'c2', text: 'I ran home; because I was late.', isCorrect: false },
            { id: 'c3', text: 'He had a cat: its name was Fluff.', isCorrect: true },
            { id: 'c4', text: 'He had a cat: Fluff.', isCorrect: false },
            { id: 'c5', text: 'The end was near — he knew it.', isCorrect: true },
        ]
    },

    // Sentence Completion (Red Herrings)
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'cb-m-5',
        instructions: 'Complete the sentence using a colon to join two independent clauses.',
        sentenceBefore: 'Sarah had a big surprise: ',
        sentenceAfter: '.',
        options: [
            { id: 'o1', text: 'she had won the lottery', isCorrect: true },
            { id: 'o2', text: 'winning the lottery', isCorrect: false },
            { id: 'o3', text: 'a huge lottery win', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'cb-m-6',
        instructions: 'Complete the sentence using a dash for a dramatic ending.',
        sentenceBefore: 'I looked out the window — ',
        sentenceAfter: '.',
        options: [
            { id: 'o1', text: 'the ghost was gone', isCorrect: true },
            { id: 'o2', text: 'seeing the ghost', isCorrect: false },
            { id: 'o3', text: 'a spooky ghost', isCorrect: false },
        ]
    },

    // Text Input (Correcting misconceptions)
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'cb-m-7',
        instructions: 'Change the comma to a semi-colon.',
        question: 'The wind blew hard, the trees swayed.',
        originalText: 'The wind blew hard, the trees swayed.',
        correctSentence: 'The wind blew hard; the trees swayed.',
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'cb-m-8',
        instructions: 'Introduce the reason with a colon.',
        question: 'He was happy he had finished his work.',
        originalText: 'He was happy he had finished his work.',
        correctSentence: 'He was happy: he had finished his work.',
    },

    // Punctuation Edit
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'cb-m-9',
        instructions: 'Correct the punctuation usage.',
        question: 'He stayed inside; because it was raining.',
        originalText: 'He stayed inside; because it was raining.',
        correctSentence: 'He stayed inside because it was raining.',
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'cb-m-10',
        instructions: 'Use a dash for drama.',
        question: 'The lights flickered. He was alone.',
        originalText: 'The lights flickered. He was alone.',
        correctSentence: 'The lights flickered — he was alone.',
    },

    // More varied challenges
    {
        type: MasteryQuestionType.TABLE,
        id: 'cb-m-11',
        instructions: 'Independent Clause or Fragment (Incomplete)?',
        columns: ['Independent', 'Fragment'],
        rows: [
            { id: 'r1', text: 'the sun shining brightly', correctType: 'Fragment' },
            { id: 'r2', text: 'the sun shines brightly', correctType: 'Independent' },
            { id: 'r3', text: 'because it is hot', correctType: 'Fragment' },
            { id: 'r4', text: 'it is hot', correctType: 'Independent' },
        ]
    },
    {
        type: MasteryQuestionType.MULTI_SELECT,
        id: 'cb-m-12',
        instructions: 'Select the sentences where BOTH sides of the punctuation can stand alone as complete sentences.',
        chunks: [
            { id: 'c1', text: 'It was midnight; the clock struck one.', isCorrect: true },
            { id: 'c2', text: 'It was midnight; after the party.', isCorrect: false },
            { id: 'c3', text: 'The truth was out: he was innocent.', isCorrect: true },
            { id: 'c4', text: 'The truth was: he was innocent.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'cb-m-13',
        instructions: 'Correct this sentence where a colon is used WRONGLY (not joining an independent clause). Remove the colon.',
        originalText: 'I have: a plan.',
        correctSentence: 'I have a plan.',
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'cb-m-14',
        instructions: 'A semi-colon joins ideas that are...',
        sentenceBefore: 'A semi-colon joins ideas that are ',
        sentenceAfter: '.',
        options: [
            { id: 'o1', text: 'closely related', isCorrect: true },
            { id: 'o2', text: 'completely different', isCorrect: false },
            { id: 'o3', text: 'very short', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'cb-m-15',
        instructions: 'Which mark belongs? Match the sentence to the best punctuation.',
        zones: [';', ':', '—'],
        items: [
            { id: 'i1', text: 'I liked the book... it was exciting.', category: ';' },
            { id: 'i2', text: 'I knew it... she had lied to me!', category: '—' },
            { id: 'i3', text: 'The result was clear... he had won.', category: ':' },
            { id: 'i4', text: 'The wind howled... the sea roared.', category: ';' },
        ]
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'cb-m-16',
        instructions: 'Add the missing colon.',
        question: 'The car stopped it had run out of fuel.',
        originalText: 'The car stopped it had run out of fuel.',
        correctSentence: 'The car stopped: it had run out of fuel.',
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'cb-m-17',
        instructions: 'Fix the comma splice by using a semi-colon to join the two independent clauses.',
        question: 'The rain stopped, the rainbow appeared.',
        originalText: 'The rain stopped, the rainbow appeared.',
        correctSentence: 'The rain stopped; the rainbow appeared.',
    },
    {
        type: MasteryQuestionType.MULTI_SELECT,
        id: 'cb-m-18',
        instructions: 'Select all CORRECT uses of a semi-colon.',
        chunks: [
            { id: 'c1', text: 'Birds fly; fish swim.', isCorrect: true },
            { id: 'c2', text: 'Birds fly; when they have wings.', isCorrect: false },
            { id: 'c3', text: 'I am hungry; I want lunch.', isCorrect: true },
            { id: 'c4', text: 'I am hungry; although I ate.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'cb-m-19',
        instructions: 'Indpendent Clause vs Subordinate Clause.',
        zones: ['Independent', 'Subordinate'],
        items: [
            { id: 'i1', text: 'The sky is blue', category: 'Independent' },
            { id: 'i2', text: 'Although the sky is blue', category: 'Subordinate' },
            { id: 'i3', text: 'Wait for me', category: 'Independent' },
            { id: 'i4', text: 'Until you wait for me', category: 'Subordinate' },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'cb-m-20',
        instructions: 'Finish the check.',
        sentenceBefore: 'Before using a semi-colon, ask: Can both sides ',
        sentenceAfter: '?',
        options: [
            { id: 'o1', text: 'stand alone as sentences', isCorrect: true },
            { id: 'o2', text: 'be very long', isCorrect: false },
            { id: 'o3', text: 'have commas', isCorrect: false },
        ]
    }
];
