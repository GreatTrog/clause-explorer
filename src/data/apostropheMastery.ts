import { ClauseType } from '../types';
import { MasteryQuestionType, type MasteryQuestion } from './masteryQuestions';

export const APOSTROPHE_OMISSION_MASTERY_QUESTIONS: MasteryQuestion[] = [
    {
        id: 'om-m1',
        type: MasteryQuestionType.SELECT,
        clauseType: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Click the word that is a contraction (omission):',
        chunks: [
            { id: '1', text: 'The ', isCorrect: false },
            { id: '2', text: 'sun ', isCorrect: false },
            { id: '3', text: 'isn’t ', isCorrect: true },
            { id: '4', text: 'shining ', isCorrect: false },
            { id: '5', text: 'today.', isCorrect: false },
        ]
    },
    {
        id: 'om-m2',
        type: MasteryQuestionType.DRAG_DROP,
        instructions: 'Sort into Contractions and Non-Contractions:',
        zones: ['Contraction', 'Normal Word'],
        items: [
            { id: 'i1', text: 'will', category: 'Normal Word' },
            { id: 'i2', text: 'won’t', category: 'Contraction' },
            { id: 'i3', text: 'they’ve', category: 'Contraction' },
            { id: 'i4', text: 'them', category: 'Normal Word' },
        ]
    },
    {
        id: 'om-m3',
        type: MasteryQuestionType.CONTRACTION_EDIT,
        instructions: 'Type the contraction for the bold words:',
        sentence: 'I **do not** want any more.',
        correctAnswer: "don't",
    },
    {
        id: 'om-m4',
        type: MasteryQuestionType.TABLE,
        instructions: 'Classify as Correct or Incorrect omission:',
        columns: ['Correct', 'Incorrect'],
        rows: [
            { id: 'r1', text: "It's cold.", correctType: 'Correct' },
            { id: 'r2', text: "Im ready.", correctType: 'Incorrect' },
            { id: 'r3', text: "We're here.", correctType: 'Correct' },
            { id: 'r4', text: "Theyve gone.", correctType: 'Incorrect' },
        ]
    },
    {
        id: 'om-m5',
        type: MasteryQuestionType.SELECT,
        clauseType: 'Mistake',
        instructions: 'Find the mistake! Click the word where the apostrophe is WRONG:',
        chunks: [
            { id: '1', text: 'It’s ', isCorrect: false },
            { id: '2', text: 'true ', isCorrect: false },
            { id: '3', text: 'that ', isCorrect: false },
            { id: '4', text: 'he ', isCorrect: false },
            { id: '5', text: 'doesnt ', isCorrect: true },
            { id: '6', text: 'know ', isCorrect: false },
            { id: '7', text: 'what’s ', isCorrect: false },
            { id: '8', text: 'happening.', isCorrect: false },
        ]
    },
    {
        id: 'om-m6',
        type: MasteryQuestionType.COMPLETE,
        instructions: 'Choose the correct contraction to complete the sentence:',
        sentenceBefore: 'If ',
        sentenceAfter: ' coming, we should leave now.',
        options: [
            { id: 'o1', text: 'you’re', isCorrect: true },
            { id: 'o2', text: 'your', isCorrect: false },
            { id: 'o3', text: 'you are', isCorrect: false },
        ]
    },
    {
        id: 'om-m7',
        type: MasteryQuestionType.CONTRACTION_EDIT,
        instructions: 'Type the contraction for the bold words:',
        sentence: '**She has** finished her dinner.',
        correctAnswer: "She's",
    },
    {
        id: 'om-m8',
        type: MasteryQuestionType.MULTI_SELECT,
        instructions: 'Click all the words that could be shortened to "he’s":',
        chunks: [
            { id: '1', text: 'he is ', isCorrect: true },
            { id: '2', text: 'he has ', isCorrect: true },
            { id: '3', text: 'he was ', isCorrect: false },
        ]
    },
    {
        id: 'om-m9',
        type: MasteryQuestionType.DRAG_DROP,
        instructions: 'Match the pronouns to their "will" contraction:',
        zones: ['We’ll', 'They’ll', 'I’ll', 'You’ll'],
        items: [
            { id: 'i1', text: 'You will', category: 'You’ll' },
            { id: 'i2', text: 'We will', category: 'We’ll' },
            { id: 'i3', text: 'They will', category: 'They’ll' },
            { id: 'i4', text: 'I will', category: 'I’ll' },
        ]
    },
    {
        id: 'om-m10',
        type: MasteryQuestionType.TABLE,
        instructions: 'Is the highlighted word "it is" or "it has"?',
        columns: ['it is', 'it has'],
        rows: [
            { id: 'r1', text: "It's been a while.", correctType: 'it has' },
            { id: 'r2', text: "It's raining.", correctType: 'it is' },
            { id: 'r3', text: "It's grown a lot.", correctType: 'it has' },
            { id: 'r4', text: "It's a cat.", correctType: 'it is' },
        ]
    },
    {
        id: 'om-m11',
        type: MasteryQuestionType.CONTRACTION_EDIT,
        instructions: 'Type the contraction for the bold words:',
        sentence: '**They are** excited for the trip.',
        correctAnswer: "They're",
    },
    {
        id: 'om-m12',
        type: MasteryQuestionType.SELECT,
        clauseType: 'Mistake',
        instructions: 'Find the mistake! Click the word where the apostrophe is WRONG:',
        chunks: [
            { id: '1', text: 'He ', isCorrect: false },
            { id: '2', text: 'wont ', isCorrect: true },
            { id: '3', text: 'be ', isCorrect: false },
            { id: '4', text: 'able ', isCorrect: false },
            { id: '5', text: 'to ', isCorrect: false },
            { id: '6', text: 'help ', isCorrect: false },
            { id: '7', text: 'us.', isCorrect: false },
        ]
    },
    {
        id: 'om-m13',
        type: MasteryQuestionType.COMPLETE,
        instructions: 'Choose the correct contraction:',
        sentenceBefore: 'I ',
        sentenceAfter: ' seen him today.',
        options: [
            { id: 'o1', text: 'haven’t', isCorrect: true },
            { id: 'o2', text: 'havent', isCorrect: false },
            { id: 'o3', text: 'hasn’t', isCorrect: false },
        ]
    },
    {
        id: 'om-m14',
        type: MasteryQuestionType.DRAG_DROP,
        instructions: 'Sort into Contractions and Non-Contractions:',
        zones: ['Contraction', 'Normal Word'],
        items: [
            { id: 'i1', text: 'your', category: 'Normal Word' },
            { id: 'i2', text: 'who’s', category: 'Contraction' },
            { id: 'i3', text: 'hose', category: 'Normal Word' },
            { id: 'i4', text: 'you’re', category: 'Contraction' },
        ]
    },
    {
        id: 'om-m15',
        type: MasteryQuestionType.TABLE,
        instructions: 'Match the full words to the contraction:',
        columns: ['won’t', 'shouldn’t', 'can’t'],
        rows: [
            { id: 'r1', text: 'should not', correctType: 'shouldn’t' },
            { id: 'r2', text: 'cannot', correctType: 'can’t' },
            { id: 'r3', text: 'will not', correctType: 'won’t' },
        ]
    },
    {
        id: 'om-m16',
        type: MasteryQuestionType.CONTRACTION_EDIT,
        instructions: 'Type the contraction for the bold words:',
        sentence: '**We are** very proud of you.',
        correctAnswer: "We're",
    },
    {
        id: 'om-m17',
        type: MasteryQuestionType.MULTI_SELECT,
        instructions: 'Click all uses of "it’s" that are CORRECT (it is/has):',
        chunks: [
            { id: '1', text: "It’s raining. ", isCorrect: true },
            { id: '2', text: "The cat licked it’s paw. ", isCorrect: false },
            { id: '3', text: "It’s been fun.", isCorrect: true },
        ]
    },
    {
        id: 'om-m18',
        type: MasteryQuestionType.CONTRACTION_EDIT,
        instructions: 'Type the contraction for the bold words:',
        sentence: '**I have** got a surprise for you.',
        correctAnswer: "I've",
    },
    {
        id: 'om-m19',
        type: MasteryQuestionType.TABLE,
        instructions: 'Is the contraction used for Omission or is it a Mistake?',
        columns: ['Omission', 'Mistake'],
        rows: [
            { id: 'r1', text: "apple’s (plural)", correctType: 'Mistake' },
            { id: 'r2', text: "should’ve", correctType: 'Omission' },
            { id: 'r3', text: "jump’s (plural)", correctType: 'Mistake' },
            { id: 'r4', text: "couldn’t", correctType: 'Omission' },
        ]
    },
    {
        id: 'om-m20',
        type: MasteryQuestionType.SELECT,
        clauseType: 'Mistake',
        instructions: 'Find the mistake! Click the word where the apostrophe is wrong or missing:',
        chunks: [
            { id: '1', text: 'Im ', isCorrect: true },
            { id: '2', text: 'sure ', isCorrect: false },
            { id: '3', text: 'that ', isCorrect: false },
            { id: '4', text: 'it’s ', isCorrect: false },
            { id: '5', text: 'too ', isCorrect: false },
            { id: '6', text: 'late.', isCorrect: false },
        ]
    }
];

export const APOSTROPHE_POSSESSION_MASTERY_QUESTIONS: MasteryQuestion[] = [
    {
        id: 'pos-m1',
        type: MasteryQuestionType.SELECT,
        clauseType: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Click the word that shows possession:',
        chunks: [
            { id: '1', text: "It's ", isCorrect: false },
            { id: '2', text: 'a ', isCorrect: false },
            { id: '3', text: 'shame ', isCorrect: false },
            { id: '4', text: 'the ', isCorrect: false },
            { id: '5', text: 'children’s ', isCorrect: true },
            { id: '6', text: 'toys ', isCorrect: false },
            { id: '7', text: "weren't ", isCorrect: false },
            { id: '8', text: 'noisy.', isCorrect: false },
        ]
    },
    {
        id: 'pos-m2',
        type: MasteryQuestionType.DRAG_DROP,
        instructions: 'Sort into Singular Possession and Plural Possession:',
        zones: ['Plural', 'Singular'],
        items: [
            { id: 'i1', text: 'dogs’', category: 'Plural' },
            { id: 'i2', text: 'dog’s', category: 'Singular' },
            { id: 'i3', text: 'boy’s', category: 'Singular' },
            { id: 'i4', text: 'boys’', category: 'Plural' },
        ]
    },
    {
        id: 'pos-m3',
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        instructions: 'Add the missing apostrophe to show possession:',
        originalText: 'The teacher pen was red.',
        correctSentence: "The teacher's pen was red.",
    },
    {
        id: 'pos-m4',
        type: MasteryQuestionType.TABLE,
        instructions: 'Classify as Correct or Incorrect possession:',
        columns: ['Correct', 'Incorrect'],
        rows: [
            { id: 'r1', text: "The cats's bowl (one cat)", correctType: 'Incorrect' },
            { id: 'r2', text: "London's streets", correctType: 'Correct' },
            { id: 'r3', text: "The puppys' toy (one puppy)", correctType: 'Incorrect' },
            { id: 'r4', text: "James's coat", correctType: 'Correct' },
        ]
    },
    {
        id: 'pos-m5',
        type: MasteryQuestionType.SELECT,
        clauseType: 'Mistake',
        instructions: 'Find the mistake! Click the word where the apostrophe is wrong:',
        chunks: [
            { id: '1', text: "I've ", isCorrect: false },
            { id: '2', text: 'bought ', isCorrect: false },
            { id: '3', text: 'four ', isCorrect: false },
            { id: '4', text: 'banana’s ', isCorrect: true },
            { id: '5', text: 'from ', isCorrect: false },
            { id: '6', text: 'the ', isCorrect: false },
            { id: '7', text: "farmer's ", isCorrect: false },
            { id: '8', text: 'market.', isCorrect: false },
        ]
    },
    {
        id: 'pos-m6',
        type: MasteryQuestionType.COMPLETE,
        instructions: 'Choose the correct form to show plural possession:',
        sentenceBefore: 'All the ',
        sentenceAfter: ' books were on the shelf.',
        options: [
            { id: 'o1', text: 'pupils’', isCorrect: true },
            { id: 'o2', text: 'pupils', isCorrect: false },
            { id: 'o3', text: 'pupil’s', isCorrect: false },
        ]
    },
    {
        id: 'pos-m7',
        type: MasteryQuestionType.COMPLETE,
        instructions: 'Choose the correct form for irregular plurals:',
        sentenceBefore: 'The ',
        sentenceAfter: ' coats were in the lobby.',
        options: [
            { id: 'o1', text: 'men’s', isCorrect: true },
            { id: 'o2', text: 'mens’', isCorrect: false },
            { id: 'o3', text: 'mens', isCorrect: false },
        ]
    },
    {
        id: 'pos-m8',
        type: MasteryQuestionType.MULTI_SELECT,
        instructions: 'Click all the words with a plural apostrophe (ownership by many):',
        chunks: [
            { id: '1', text: "The ", isCorrect: false },
            { id: '2', text: "boys' ", isCorrect: true },
            { id: '3', text: "coats ", isCorrect: false },
            { id: '4', text: "weren't ", isCorrect: false },
            { id: '5', text: "in ", isCorrect: false },
            { id: '6', text: "the ", isCorrect: false },
            { id: '7', text: "girls' ", isCorrect: true },
            { id: '8', text: "lockers ", isCorrect: false },
            { id: '9', text: "because ", isCorrect: false },
            { id: '10', text: "of ", isCorrect: false },
            { id: '11', text: "the ", isCorrect: false },
            { id: '12', text: "teacher's ", isCorrect: false },
            { id: '13', text: "rule.", isCorrect: false },
        ]
    },
    {
        id: 'pos-m9',
        type: MasteryQuestionType.DRAG_DROP,
        instructions: 'Is it Shared or Separate possession?',
        zones: ['Shared', 'Separate'],
        items: [
            { id: 'i1', text: 'Jim and Bob’s room', category: 'Shared' },
            { id: 'i2', text: 'Jim’s and Bob’s rooms', category: 'Separate' },
            { id: 'i3', text: 'Mum and Dad’s car', category: 'Shared' },
            { id: 'i4', text: 'Mum’s and Dad’s cars', category: 'Separate' },
        ]
    },
    {
        id: 'pos-m10',
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        instructions: 'Add the missing apostrophe (plural):',
        originalText: 'The trees leaves were falling.',
        correctSentence: "The trees' leaves were falling.",
    },
    {
        id: 'pos-m11',
        type: MasteryQuestionType.TABLE,
        instructions: 'Which type of noun is showing possession?',
        columns: ['Irregular Plural', 'Singular', 'Regular Plural'],
        rows: [
            { id: 'r1', text: "children’s", correctType: 'Irregular Plural' },
            { id: 'r2', text: "boy’s", correctType: 'Singular' },
            { id: 'r3', text: "boys’", correctType: 'Regular Plural' },
            { id: 'r4', text: "women’s", correctType: 'Irregular Plural' },
        ]
    },
    {
        id: 'pos-m12',
        type: MasteryQuestionType.MULTI_SELECT,
        instructions: 'Click all the words where the apostrophe is WRONG:',
        chunks: [
            { id: '1', text: "It's ", isCorrect: false },
            { id: '2', text: 'a ', isCorrect: false },
            { id: '3', text: 'shame ', isCorrect: false },
            { id: '4', text: 'the ', isCorrect: false },
            { id: '5', text: 'dog’s ', isCorrect: true },
            { id: '6', text: 'were ', isCorrect: false },
            { id: '7', text: 'running ', isCorrect: false },
            { id: '8', text: 'toward’s ', isCorrect: true },
            { id: '9', text: 'the ', isCorrect: false },
            { id: '10', text: 'park.', isCorrect: false },
        ]
    },
    {
        id: 'pos-m13',
        type: MasteryQuestionType.COMPLETE,
        instructions: 'Choose the correctly punctuated singular name:',
        sentenceBefore: 'I borrow ',
        sentenceAfter: ' pencil.',
        options: [
            { id: 'o1', text: 'Thomas’s', isCorrect: true },
            { id: 'o2', text: 'Thomass', isCorrect: false },
            { id: 'o3', text: 'Thomass’', isCorrect: false },
        ]
    },
    {
        id: 'pos-m14',
        type: MasteryQuestionType.DRAG_DROP,
        instructions: 'Which category?',
        zones: ['Possession', 'Just Plural'],
        items: [
            { id: 'i1', text: 'cats are loud', category: 'Just Plural' },
            { id: 'i2', text: 'cat’s whiskers', category: 'Possession' },
            { id: 'i3', text: 'cars drive fast', category: 'Just Plural' },
            { id: 'i4', text: 'car’s door', category: 'Possession' },
        ]
    },
    {
        id: 'pos-m15',
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        instructions: 'Punctuate the plural possession:',
        originalText: 'The players boots were dirty.',
        correctSentence: "The players' boots were dirty.",
    },
    {
        id: 'pos-m16',
        type: MasteryQuestionType.SELECT,
        clauseType: 'Mistake',
        instructions: 'Click the word where the apostrophe is wrong (it’s a plural, not possession):',
        chunks: [
            { id: '1', text: 'Buy ', isCorrect: false },
            { id: '2', text: "today's ", isCorrect: false },
            { id: '3', text: 'fresh ', isCorrect: false },
            { id: '4', text: 'orange’s ', isCorrect: true },
            { id: '5', text: 'for ', isCorrect: false },
            { id: '6', text: 'fifty ', isCorrect: false },
            { id: '7', text: 'pence!', isCorrect: false },
        ]
    },
    {
        id: 'pos-m17',
        type: MasteryQuestionType.TABLE,
        instructions: 'Correct or Incorrect?',
        columns: ['Correct', 'Incorrect'],
        rows: [
            { id: 'r1', text: "The peoples' choice", correctType: 'Incorrect' },
            { id: 'r2', text: "The people's choice", correctType: 'Correct' },
            { id: 'r3', text: "The boy's hats (many boys)", correctType: 'Incorrect' },
            { id: 'r4', text: "The boy's hats (one boy)", correctType: 'Correct' },
        ]
    },
    {
        id: 'pos-m18',
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        instructions: 'Punctuate correctly (singular possession):',
        originalText: 'The princess crown was missing.',
        correctSentence: "The princess's crown was missing.",
    },
    {
        id: 'pos-m19',
        type: MasteryQuestionType.SELECT,
        clauseType: 'Possession',
        instructions: 'Find the possessive apostrophe among red herrings:',
        chunks: [
            { id: '1', text: "It’s ", isCorrect: false },
            { id: '2', text: "clear ", isCorrect: false },
            { id: '3', text: "that ", isCorrect: false },
            { id: '4', text: "the ", isCorrect: false },
            { id: '5', text: "bus’s ", isCorrect: true },
            { id: '6', text: "engine ", isCorrect: false },
            { id: '7', text: "won’t ", isCorrect: false },
            { id: '8', text: "start.", isCorrect: false },
        ]
    },
    {
        id: 'pos-m20',
        type: MasteryQuestionType.COMPLETE,
        instructions: 'Choose the right one for plural possession:',
        sentenceBefore: 'We visited the ',
        sentenceAfter: ' assembly.',
        options: [
            { id: 'o1', text: 'teachers’', isCorrect: true },
            { id: 'o2', text: 'teacher’s', isCorrect: false },
            { id: 'o3', text: 'teachers', isCorrect: false },
        ]
    }
];

// Combine them for any component that still needs the single array
export const APOSTROPHE_MASTERY_QUESTIONS = [
    ...APOSTROPHE_OMISSION_MASTERY_QUESTIONS,
    ...APOSTROPHE_POSSESSION_MASTERY_QUESTIONS
];
