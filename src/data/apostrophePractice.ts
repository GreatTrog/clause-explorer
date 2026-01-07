import { ClauseType } from '../types';

export const APOSTROPHE_PRACTICE_QUESTIONS = [
    // --- OMISSION (Contractions) - 20 Questions ---

    // Typing (10)
    {
        id: 'apo-om-p1',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Type the contraction for the bold words:',
        sentence: 'I **do not** think it is raining.',
        correctAnswer: "don't",
        hint: "Don't forget the apostrophe replaces the 'o'!"
    },
    {
        id: 'apo-om-p2',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Type the contraction for the bold words:',
        sentence: '**We will** be there in five minutes.',
        correctAnswer: "We'll",
    },
    {
        id: 'apo-om-p3',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Type the contraction for the bold words:',
        sentence: '**She is** very happy today.',
        correctAnswer: "She's",
    },
    {
        id: 'apo-om-p4',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Type the contraction for the bold words:',
        sentence: '**They have** finished their work.',
        correctAnswer: "They've",
    },
    {
        id: 'apo-om-p5',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Type the contraction for the bold words:',
        sentence: 'You **should not** play in the road.',
        correctAnswer: "shouldn't",
    },
    {
        id: 'apo-om-p6',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Type the contraction for the bold words:',
        sentence: 'I **cannot** wait for summer.',
        correctAnswer: "can't",
    },
    {
        id: 'apo-om-p7',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Type the contraction for the bold words:',
        sentence: '**He is** going to the park.',
        correctAnswer: "He's",
    },
    {
        id: 'apo-om-p8',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Type the contraction for the bold words:',
        sentence: '**It is** a very big box.',
        correctAnswer: "It's",
    },
    {
        id: 'apo-om-p9',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Type the contraction for the bold words:',
        sentence: '**They will** be here at six.',
        correctAnswer: "They'll",
    },
    {
        id: 'apo-om-p10',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Type the contraction for the bold words:',
        sentence: '**Who is** calling me?',
        correctAnswer: "Who's",
    },

    // Multiple Choice (5)
    {
        id: 'apo-om-p11',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Which is the correct contraction for "we are"?',
        options: [
            { id: 'o1', text: "we're", isCorrect: true },
            { id: 'o2', text: "were", isCorrect: false },
            { id: 'o3', text: "we'are", isCorrect: false },
        ]
    },
    {
        id: 'apo-om-p12',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Which sentence is punctuated correctly?',
        options: [
            { id: 'o1', text: "I dont know.", isCorrect: false },
            { id: 'o2', text: "I don't know.", isCorrect: true },
            { id: 'o3', text: "I do'nt know.", isCorrect: false },
        ]
    },
    {
        id: 'apo-om-p13',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Identify the contraction for "will not":',
        options: [
            { id: 'o1', text: "willn't", isCorrect: false },
            { id: 'o2', text: "won't", isCorrect: true },
            { id: 'o3', text: "wont", isCorrect: false },
        ]
    },
    {
        id: 'apo-om-p14',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Choose the correct contraction of "it is":',
        options: [
            { id: 'o1', text: "its", isCorrect: false },
            { id: 'o2', text: "it's", isCorrect: true },
        ]
    },
    {
        id: 'apo-om-p15',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Which word is shortened from "they have"?',
        options: [
            { id: 'o1', text: "they've", isCorrect: true },
            { id: 'o2', text: "theyve", isCorrect: false },
            { id: 'o3', text: "they're", isCorrect: false },
        ]
    },

    // Identification (5)
    {
        id: 'apo-om-p16',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Click the word that contains an apostrophe for omission:',
        chunks: [
            { id: 'c1', text: 'I ', isCorrect: false },
            { id: 'c2', text: "won't ", isCorrect: true },
            { id: 'c3', text: 'forget.', isCorrect: false },
        ]
    },
    {
        id: 'apo-om-p17',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Click the contraction:',
        chunks: [
            { id: 'c1', text: 'I ', isCorrect: false },
            { id: 'c2', text: 'wonder ', isCorrect: false },
            { id: 'c3', text: 'where ', isCorrect: false },
            { id: 'c4', text: "he's ", isCorrect: true },
            { id: 'c5', text: 'going.', isCorrect: false },
        ]
    },
    {
        id: 'apo-om-p18',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Find the omission apostrophe:',
        chunks: [
            { id: 'c1', text: 'She ', isCorrect: false },
            { id: 'c2', text: "doesn't ", isCorrect: true },
            { id: 'c3', text: 'like ', isCorrect: false },
            { id: 'c4', text: 'peas.', isCorrect: false },
        ]
    },
    {
        id: 'apo-om-p19',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Click the word that is a shortened form of "I am":',
        chunks: [
            { id: 'c1', text: "I'm ", isCorrect: true },
            { id: 'c2', text: "ready.", isCorrect: false },
        ]
    },
    {
        id: 'apo-om-p20',
        type: ClauseType.APOSTROPHE_OMISSION,
        instructions: 'Identify the contraction:',
        chunks: [
            { id: 'c1', text: "We'll ", isCorrect: true },
            { id: 'c2', text: "see ", isCorrect: false },
            { id: 'c3', text: "you ", isCorrect: false },
            { id: 'c4', text: "soon.", isCorrect: false },
        ]
    },

    // --- POSSESSION - 20 Questions ---

    // Punctuation Edit (10)
    {
        id: 'apo-pos-p1',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Add the missing apostrophe:',
        text: 'The boys coat was blue.',
        correctSentence: "The boy's coat was blue.",
        hint: "The coat belongs to the boy."
    },
    {
        id: 'apo-pos-p2',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Add the missing apostrophe:',
        text: 'Jamess car is fast.',
        correctSentence: "James's car is fast.",
    },
    {
        id: 'apo-pos-p3',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Add the missing apostrophe:',
        text: 'The cats whiskers are long.',
        correctSentence: "The cat's whiskers are long.",
    },
    {
        id: 'apo-pos-p4',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Add the missing apostrophe for many pupils:',
        text: 'The pupils scores were excellent.',
        correctSentence: "The pupils' scores were excellent.",
    },
    {
        id: 'apo-pos-p5',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Add the missing apostrophe:',
        text: 'The childrens playground is fun.',
        correctSentence: "The children's playground is fun.",
    },
    {
        id: 'apo-pos-p6',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Add the missing apostrophe:',
        text: 'Peoples opinions can differ.',
        correctSentence: "People's opinions can differ.",
    },
    {
        id: 'apo-pos-p7',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Add the missing apostrophe:',
        text: 'The car engine is loud.',
        correctSentence: "The car's engine is loud.",
    },
    {
        id: 'apo-pos-p8',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Add the missing apostrophe for many boys:',
        text: 'The boys changing room is there.',
        correctSentence: "The boys' changing room is there.",
    },
    {
        id: 'apo-pos-p9',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Add the missing apostrophe (singular):',
        text: 'The princess crown was gold.',
        correctSentence: "The princess's crown was gold.",
    },
    {
        id: 'apo-pos-p10',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Add the missing apostrophe (shared):',
        text: 'Sam and Alexs room.',
        correctSentence: "Sam and Alex's room.",
    },

    // Multiple Choice (5)
    {
        id: 'apo-pos-p11',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Which shows the desk belongs to the teacher?',
        options: [
            { id: 'o1', text: "the teachers desk", isCorrect: false },
            { id: 'o2', text: "the teacher's desk", isCorrect: true },
            { id: 'o3', text: "the teachers' desk", isCorrect: false },
        ]
    },
    {
        id: 'apo-pos-p12',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Which is correct for many dogs?',
        options: [
            { id: 'o1', text: "the dogs' bowls", isCorrect: true },
            { id: 'o2', text: "the dog's bowls", isCorrect: false },
        ]
    },
    {
        id: 'apo-pos-p13',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Identify the plural possessive:',
        options: [
            { id: 'o1', text: "men's", isCorrect: true },
            { id: 'o2', text: "mens", isCorrect: false },
            { id: 'o3', text: "mens's", isCorrect: false },
        ]
    },
    {
        id: 'apo-pos-p14',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Which sentence is right?',
        options: [
            { id: 'o1', text: "The cat licked its paw.", isCorrect: true },
            { id: 'o2', text: "The cat licked it's paw.", isCorrect: false },
        ]
    },
    {
        id: 'apo-pos-p15',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Choose the correct singular possessive:',
        options: [
            { id: 'o1', text: "London's streets", isCorrect: true },
            { id: 'o2', text: "Londons streets", isCorrect: false },
        ]
    },

    // Identification (5)
    {
        id: 'apo-pos-p16',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Click the word showing possession:',
        chunks: [
            { id: 'c1', text: 'I ', isCorrect: false },
            { id: 'c2', text: 'saw ', isCorrect: false },
            { id: 'c3', text: "Sara's ", isCorrect: true },
            { id: 'c4', text: 'cat.', isCorrect: false },
        ]
    },
    {
        id: 'apo-pos-p17',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Find the possessive noun:',
        chunks: [
            { id: 'c1', text: 'Look ', isCorrect: false },
            { id: 'c2', text: 'at ', isCorrect: false },
            { id: 'c3', text: 'the ', isCorrect: false },
            { id: 'c4', text: "tree's ", isCorrect: true },
            { id: 'c5', text: 'leaves.', isCorrect: false },
        ]
    },
    {
        id: 'apo-pos-p18',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Identify the ownership:',
        chunks: [
            { id: 'c1', text: "Tom's ", isCorrect: true },
            { id: 'c2', text: 'hat ', isCorrect: false },
            { id: 'c3', text: 'is ', isCorrect: false },
            { id: 'c4', text: 'red.', isCorrect: false },
        ]
    },
    {
        id: 'apo-pos-p19',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Click the word with a plural possessive apostrophe:',
        chunks: [
            { id: 'c1', text: 'The ', isCorrect: false },
            { id: 'c2', text: "boys' ", isCorrect: true },
            { id: 'c3', text: 'coats.', isCorrect: false },
        ]
    },
    {
        id: 'apo-pos-p20',
        type: ClauseType.APOSTROPHE_POSSESSION,
        instructions: 'Find the possessive:',
        chunks: [
            { id: 'c1', text: "Doughnuts ", isCorrect: false },
            { id: 'c2', text: "are ", isCorrect: false },
            { id: 'c3', text: "everyone's ", isCorrect: true },
            { id: 'c4', text: "favourite.", isCorrect: false },
        ]
    }
];
