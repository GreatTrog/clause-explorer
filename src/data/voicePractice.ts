import { VoiceType } from '../types';
import type { PracticeQuestion } from './practiceQuestions';

export const VOICE_PRACTICE_QUESTIONS: PracticeQuestion[] = [
    // --- IDENTIFICATION ---
    {
        id: 'p-v-1',
        type: VoiceType.ACTIVE, // Tagging as Active for scoring bucket
        text: 'The chef cooked a delicious meal.',
        instructions: 'Find the Verb (Action Word)',
        chunks: [
            { id: 'c1', text: 'The chef ', isCorrect: false },
            { id: 'c2', text: 'cooked', isCorrect: true }, // Identify verb
            { id: 'c3', text: ' a delicious meal.', isCorrect: false },
        ],
        hint: 'Find the verb (action word).',
        explanation: '"Cooked" is the action performed by the chef.'
    },
    {
        id: 'p-v-2',
        type: VoiceType.PASSIVE,
        text: 'The meal was cooked by the chef.',
        instructions: 'Find the Passive Verb Phrase',
        chunks: [
            { id: 'c1', text: 'The meal ', isCorrect: false },
            { id: 'c2', text: 'was cooked', isCorrect: true }, // Identify full verb phrase
            { id: 'c3', text: ' by the chef.', isCorrect: false },
        ],
        hint: 'Find the full verb phrase (helper + action).',
        explanation: '"Was cooked" is the passive verb phrase.'
    },
    {
        id: 'p-v-3',
        type: VoiceType.PASSIVE,
        text: 'The window was broken by the ball.',
        instructions: 'Find the Agent (Who/What did it)',
        chunks: [
            { id: 'c1', text: 'The window was broken ', isCorrect: false },
            { id: 'c2', text: 'by the ball', isCorrect: true }, // Identify agent
            { id: 'c3', text: '.', isCorrect: false },
        ],
        hint: 'Find the agent (who did it). Look for "by".',
        explanation: '"By the ball" tells us what broke the window.'
    },
    {
        id: 'p-v-4',
        type: VoiceType.ACTIVE,
        text: 'Sarah is reading a book.',
        instructions: 'Find the Subject (Doer)',
        chunks: [
            { id: 'c1', text: 'Sarah', isCorrect: true }, // Identify subject (doer)
            { id: 'c2', text: ' is reading a book.', isCorrect: false },
        ],
        hint: 'Find the subject doing the action.',
        explanation: 'Sarah is the one doing the reading.'
    },

    // --- CONVERSION (Active -> Passive) ---
    // Note: These use the Multiple Choice format we will integrate
    {
        id: 'p-v-5',
        type: VoiceType.ACTIVE,
        text: 'Change to Passive: "The dog chased the cat."',
        options: [
            { id: 'o1', text: 'The cat was chased by the dog.', isCorrect: true },
            { id: 'o2', text: 'The cat is chasing the dog.', isCorrect: false },
            { id: 'o3', text: 'The dog was chased by the cat.', isCorrect: false },
        ],
        hint: 'Start with the object (the cat). Use "was" + past participle.',
        explanation: 'The object (cat) moves to the front. "Chased" becomes "was chased".'
    },
    {
        id: 'p-v-6',
        type: VoiceType.ACTIVE,
        text: 'Change to Passive: "Scientists discovered a new planet."',
        options: [
            { id: 'o1', text: 'A new planet is discovered by scientists.', isCorrect: false },
            { id: 'o2', text: 'A new planet was discovered by scientists.', isCorrect: true },
            { id: 'o3', text: 'Scientists were discovered by a new planet.', isCorrect: false },
        ],
        hint: 'Keep the past tense! "Discovered" -> "Was discovered".',
        explanation: 'Since "discovered" is past tense, use "was discovered".'
    },
    {
        id: 'p-v-7',
        type: VoiceType.ACTIVE,
        text: 'Change to Passive: "My mum makes the best cookies."',
        options: [
            { id: 'o1', text: 'The best cookies made my mum.', isCorrect: false },
            { id: 'o2', text: 'The best cookies are made by my mum.', isCorrect: true }, // Present tense
            { id: 'o3', text: 'The best cookies were made by my mum.', isCorrect: false },
        ],
        hint: 'The verb "makes" is Present Tense.',
        explanation: 'Use "are made" for Present Tense.'
    },

    // --- CONVERSION (Passive -> Active) ---
    {
        id: 'p-v-8',
        type: VoiceType.PASSIVE,
        text: 'Change to Active: "The song was sung by the choir."',
        options: [
            { id: 'o1', text: 'The choir sang the song.', isCorrect: true },
            { id: 'o2', text: 'The choir sings the song.', isCorrect: false },
            { id: 'o3', text: 'The song sang the choir.', isCorrect: false },
        ],
        hint: 'Who did the singing? Start with them.',
        explanation: 'The choir is the agent. "Was sung" becomes "sang" (Simple Past).'
    },
    {
        id: 'p-v-9',
        type: VoiceType.PASSIVE,
        text: 'Change to Active: "The homework is checked by the teacher."',
        options: [
            { id: 'o1', text: 'The teacher checked the homework.', isCorrect: false },
            { id: 'o2', text: 'The teacher checks the homework.', isCorrect: true },
            { id: 'o3', text: 'The homework checks the teacher.', isCorrect: false },
        ],
        hint: '"Is checked" is Present Tense.',
        explanation: 'For present tense, "is checked" becomes "checks".'
    },

    // --- MISCONCEPTIONS & TRICKY ONES ---
    {
        id: 'p-v-10',
        type: VoiceType.ACTIVE,
        text: 'Is this Passive? "The sun was shining brightly."',
        options: [
            { id: 'o1', text: 'Yes, it has "was".', isCorrect: false },
            { id: 'o2', text: 'No, it is Past Progressive.', isCorrect: true },
        ],
        hint: 'Is the sun receiving an action? No, it IS shining.',
        explanation: 'This is Active Voice (Past Progressive). The sun is doing the shining.'
    },
    {
        id: 'p-v-11',
        type: VoiceType.PASSIVE,
        text: 'Identify the Voice: "In 1066, the battle was won."',
        options: [
            { id: 'o1', text: 'Active', isCorrect: false },
            { id: 'o2', text: 'Passive', isCorrect: true },
        ],
        hint: 'Was the battle doing the winning, or was it won by someone?',
        explanation: 'Passive. The agent (Normans) is omitted. The battle received the winning.'
    },
    {
        id: 'p-v-12',
        type: VoiceType.ACTIVE,
        text: 'Identify the Voice: "Yesterday, the rain stopped."',
        options: [
            { id: 'o1', text: 'Active', isCorrect: true },
            { id: 'o2', text: 'Passive', isCorrect: false },
        ],
        hint: 'Did something stop the rain? Or did it just stop?',
        explanation: 'Active. The rain did the action of stopping.'
    },
    {
        id: 'p-v-13',
        type: VoiceType.PASSIVE, // Agentless
        text: 'What is missing? "My bike was stolen!"',
        options: [
            { id: 'o1', text: 'The Subject', isCorrect: false },
            { id: 'o2', text: 'The Verb', isCorrect: false },
            { id: 'o3', text: 'The Agent (Who did it)', isCorrect: true },
        ],
        hint: 'Do we know WHO stole the bike?',
        explanation: 'The agent is omitted. We don\'t know who stole it.'
    },
    {
        id: 'p-v-14',
        type: VoiceType.ACTIVE,
        text: 'Trick Question: "He got tired."',
        options: [
            { id: 'o1', text: 'Active', isCorrect: true },
            { id: 'o2', text: 'Passive', isCorrect: false },
        ],
        hint: 'Is "got" a passive helper verb? No.',
        explanation: 'Active. He performed the action of becoming tired.'
    },

    // --- MORE IDENTIFICATION & CONVERSION ---
    {
        id: 'p-v-15',
        type: VoiceType.PASSIVE,
        text: 'The treasure map was hidden by the pirates.',
        instructions: 'Find the Passive Verb Phrase',
        chunks: [
            { id: 'c1', text: 'The treasure map ', isCorrect: false },
            { id: 'c2', text: 'was hidden', isCorrect: true },
            { id: 'c3', text: ' by the pirates.', isCorrect: false },
        ],
        hint: 'Find the passive verb phrase.',
        explanation: '"Was hidden" is the action done to the map.'
    },
    {
        id: 'p-v-16',
        type: VoiceType.ACTIVE,
        text: 'The pirates hid the map.',
        instructions: 'Find the Subject (Agent)',
        chunks: [
            { id: 'c1', text: 'The pirates', isCorrect: true }, // Agent/Subject
            { id: 'c2', text: ' hid the map.', isCorrect: false },
        ],
        hint: 'Find who is doing the hiding.',
        explanation: 'The pirates are the subject doing the action.'
    },
    {
        id: 'p-v-17',
        type: VoiceType.PASSIVE,
        text: 'Change to Passive: "Everyone loves pizza."',
        options: [
            { id: 'o1', text: 'Pizza is loved by everyone.', isCorrect: true },
            { id: 'o2', text: 'Pizza was loved by everyone.', isCorrect: false },
            { id: 'o3', text: 'Pizza loves everyone.', isCorrect: false },
        ],
        hint: 'Keep the Present Tense.',
        explanation: '"Loves" (present) becomes "is loved" (present passive).'
    },
    {
        id: 'p-v-18',
        type: VoiceType.PASSIVE,
        text: 'Change to Active: "The letter was written by him."',
        options: [
            { id: 'o1', text: 'He writes the letter.', isCorrect: false },
            { id: 'o2', text: 'He wrote the letter.', isCorrect: true },
            { id: 'o3', text: 'Him wrote the letter.', isCorrect: false },
        ],
        hint: 'Change "him" to subject form "he".',
        explanation: '"Him" becomes "He" when it moves to the subject position. "Was written" -> "Wrote".'
    },
    {
        id: 'p-v-19',
        type: VoiceType.ACTIVE, // Misconception: Fronted Adverbial
        text: 'Is this Passive? "In the morning, the birds sang."',
        options: [
            { id: 'o1', text: 'Yes', isCorrect: false },
            { id: 'o2', text: 'No', isCorrect: true },
        ],
        hint: 'The sentence starts with "In the morning", but who is singing?',
        explanation: 'No. The birds are doing the singing. "In the morning" is just a time phrase.'
    },
    {
        id: 'p-v-20',
        type: VoiceType.PASSIVE, // Secret Agent
        text: 'Find the Secret (Missing) Agent: "The cake has been eaten!"',
        options: [
            { id: 'o1', text: 'The cake', isCorrect: false },
            { id: 'o2', text: 'Someone (unknown)', isCorrect: true },
            { id: 'o3', text: 'We', isCorrect: false },
        ],
        hint: 'Do we know who ate it?',
        explanation: 'The agent is missing! We assume "someone" ate it.'
    }
];
