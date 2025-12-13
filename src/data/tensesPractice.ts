import { TenseType } from '../types';
import type { Chunk } from './practiceQuestions'; // Re-use Chunk interface

// Re-using the structure but distinguishing by 'style'
export interface HighlightQuestion {
    id: string;
    style: 'HIGHLIGHT';
    type: TenseType;
    instructions: string;
    hint: string;
    chunks: Chunk[];
}

export interface MultipleChoiceQuestionData {
    id: string;
    style: 'MULTIPLE_CHOICE';
    type: TenseType;
    question: string;
    options: { id: string; text: string; isCorrect: boolean }[];
    hint?: string;
}

export type TensePracticeQuestion = HighlightQuestion | MultipleChoiceQuestionData;

export const TENSES_PRACTICE_QUESTIONS: TensePracticeQuestion[] = [
    // ==========================================
    // SIMPLE PAST (10 Questions)
    // ==========================================
    {
        id: 'tp-sp-1',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_PAST,
        question: "Which sentence is in the Simple Past Tense?",
        options: [
            { id: '1', text: "I play football.", isCorrect: false },
            { id: '2', text: "I played football.", isCorrect: true },
            { id: '3', text: "I will play football.", isCorrect: false }
        ]
    },
    {
        id: 'tp-sp-2',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_PAST,
        instructions: "Tap the verb in the Simple Past tense.",
        hint: "Look for -ed or irregular past verbs.",
        chunks: [
            { id: '1', text: "Yesterday, I ", isCorrect: false },
            { id: '2', text: "visited", isCorrect: true },
            { id: '3', text: " my grandma.", isCorrect: false }
        ]
    },
    {
        id: 'tp-sp-3',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_PAST,
        instructions: "Tap the irregular past verb.",
        hint: "It doesn't end in -ed!",
        chunks: [
            { id: '1', text: "We ", isCorrect: false },
            { id: '2', text: "went", isCorrect: true },
            { id: '3', text: " to the park.", isCorrect: false }
        ]
    },
    {
        id: 'tp-sp-4',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_PAST,
        question: "Choose the correct past form of 'eat':",
        options: [
            { id: '1', text: "eated", isCorrect: false },
            { id: '2', text: "ate", isCorrect: true },
            { id: '3', text: "eaten", isCorrect: false }
        ]
    },
    {
        id: 'tp-sp-5',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_PAST,
        instructions: "Tap the verb.",
        hint: "What did the dog do?",
        chunks: [
            { id: '1', text: "The dog ", isCorrect: false },
            { id: '2', text: "barked", isCorrect: true },
            { id: '3', text: " at the cat.", isCorrect: false }
        ]
    },
    {
        id: 'tp-sp-6',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_PAST,
        question: "Which word completes the sentence: 'I ___ my homework last night.'",
        options: [
            { id: '1', text: "do", isCorrect: false },
            { id: '2', text: "did", isCorrect: true },
            { id: '3', text: "done", isCorrect: false }
        ]
    },
    {
        id: 'tp-sp-7',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_PAST,
        instructions: "Tap the verb.",
        hint: "Look for the action word.",
        chunks: [
            { id: '1', text: "She ", isCorrect: false },
            { id: '2', text: "saw", isCorrect: true },
            { id: '3', text: " a shooting star.", isCorrect: false }
        ]
    },
    {
        id: 'tp-sp-8',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_PAST,
        question: "What is the Simple Past of 'run'?",
        options: [
            { id: '1', text: "ran", isCorrect: true },
            { id: '2', text: "runned", isCorrect: false },
            { id: '3', text: "running", isCorrect: false }
        ]
    },
    {
        id: 'tp-sp-9',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_PAST,
        instructions: "Tap the past tense verb.",
        hint: "It happened in the past.",
        chunks: [
            { id: '1', text: "They ", isCorrect: false },
            { id: '2', text: "built", isCorrect: true },
            { id: '3', text: " a sandcastle.", isCorrect: false }
        ]
    },
    {
        id: 'tp-sp-10',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_PAST,
        question: "Which sentence is NOT Simple Past?",
        options: [
            { id: '1', text: "He walked home.", isCorrect: false },
            { id: '2', text: "He is walking home.", isCorrect: true },
            { id: '3', text: "He ran home.", isCorrect: false }
        ]
    },

    // ==========================================
    // SIMPLE PRESENT (10 Questions)
    // ==========================================
    {
        id: 'tp-spr-1',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_PRESENT,
        question: "Choose the correct Simple Present sentence:",
        options: [
            { id: '1', text: "She walks to school.", isCorrect: true },
            { id: '2', text: "She walked to school.", isCorrect: false },
            { id: '3', text: "She is walking to school.", isCorrect: false }
        ]
    },
    {
        id: 'tp-spr-2',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_PRESENT,
        instructions: "Tap the verb.",
        hint: "It's a fact or habit.",
        chunks: [
            { id: '1', text: "The sun ", isCorrect: false },
            { id: '2', text: "rises", isCorrect: true },
            { id: '3', text: " in the east.", isCorrect: false }
        ]
    },
    {
        id: 'tp-spr-3',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_PRESENT,
        question: "Complete the sentence: 'He ___ ice cream.'",
        options: [
            { id: '1', text: "like", isCorrect: false },
            { id: '2', text: "likes", isCorrect: true },
            { id: '3', text: "liking", isCorrect: false }
        ]
    },
    {
        id: 'tp-spr-4',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_PRESENT,
        instructions: "Tap the verb.",
        hint: "Look for the action word.",
        chunks: [
            { id: '1', text: "Birds ", isCorrect: false },
            { id: '2', text: "fly", isCorrect: true },
            { id: '3', text: " south for winter.", isCorrect: false }
        ]
    },
    {
        id: 'tp-spr-5',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_PRESENT,
        question: "Which sentence talks about a habit?",
        options: [
            { id: '1', text: "I brush my teeth every day.", isCorrect: true },
            { id: '2', text: "I brushed my teeth yesterday.", isCorrect: false },
            { id: '3', text: "I am brushing my teeth.", isCorrect: false }
        ]
    },
    {
        id: 'tp-spr-6',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_PRESENT,
        instructions: "Tap the verb.",
        hint: "Watch out for the 's'!",
        chunks: [
            { id: '1', text: "My cat ", isCorrect: false },
            { id: '2', text: "sleeps", isCorrect: true },
            { id: '3', text: " all day.", isCorrect: false }
        ]
    },
    {
        id: 'tp-spr-7',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_PRESENT,
        question: "Select the correct form: 'They ___ heavily.'",
        options: [
            { id: '1', text: "breaths", isCorrect: false },
            { id: '2', text: "breathe", isCorrect: true },
            { id: '3', text: "breathing", isCorrect: false }
        ]
    },
    // Retrying Q7 with simpler verb to avoid spelling ambiguity
    {
        id: 'tp-spr-7-fix',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_PRESENT,
        question: "Select the correct form: 'They ___ very fast.'",
        options: [
            { id: '1', text: "run", isCorrect: true },
            { id: '2', text: "runs", isCorrect: false },
            { id: '3', text: "running", isCorrect: false }
        ]
    },
    {
        id: 'tp-spr-8',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_PRESENT,
        instructions: "Tap the verb.",
        hint: "It helps define the subject.",
        chunks: [
            { id: '1', text: "Water ", isCorrect: false },
            { id: '2', text: "is", isCorrect: true },
            { id: '3', text: " essential for life.", isCorrect: false }
        ]
    },
    {
        id: 'tp-spr-9',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_PRESENT,
        question: "Which is Simple Present?",
        options: [
            { id: '1', text: "I study English.", isCorrect: true },
            { id: '2', text: "I studied English.", isCorrect: false },
            { id: '3', text: "I will study English.", isCorrect: false }
        ]
    },
    {
        id: 'tp-spr-10',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_PRESENT,
        instructions: "Tap the verb.",
        hint: "Action word.",
        chunks: [
            { id: '1', text: "Do you ", isCorrect: false },
            { id: '2', text: "know", isCorrect: true },
            { id: '3', text: " the answer?", isCorrect: false }
        ]
    },

    // ==========================================
    // SIMPLE FUTURE (10 Questions)
    // ==========================================
    {
        id: 'tp-sf-1',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_FUTURE,
        instructions: "Tap the verb phrase in the Simple Future.",
        hint: "Look for 'will'.",
        chunks: [
            { id: '1', text: "Tomorrow we ", isCorrect: false },
            { id: '2', text: "will go", isCorrect: true },
            { id: '3', text: " to the beach.", isCorrect: false }
        ]
    },
    {
        id: 'tp-sf-2',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_FUTURE,
        question: "Which sentence is Simple Future?",
        options: [
            { id: '1', text: "It will rain.", isCorrect: true },
            { id: '2', text: "It rained.", isCorrect: false },
            { id: '3', text: "It is raining.", isCorrect: false }
        ]
    },
    {
        id: 'tp-sf-3',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_FUTURE,
        instructions: "Tap the future tense verb.",
        hint: "Look for 'will'.",
        chunks: [
            { id: '1', text: "She ", isCorrect: false },
            { id: '2', text: "will help", isCorrect: true },
            { id: '3', text: " you later.", isCorrect: false }
        ]
    },
    {
        id: 'tp-sf-4',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_FUTURE,
        question: "Complete: 'Next year, I ___ turn ten.'",
        options: [
            { id: '1', text: "am", isCorrect: false },
            { id: '2', text: "will", isCorrect: true },
            { id: '3', text: "did", isCorrect: false }
        ]
    },
    {
        id: 'tp-sf-5',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_FUTURE,
        instructions: "Tap the verb.",
        hint: "Something that hasn't happened yet.",
        chunks: [
            { id: '1', text: "The bus ", isCorrect: false },
            { id: '2', text: "will arrive", isCorrect: true },
            { id: '3', text: " soon.", isCorrect: false }
        ]
    },
    {
        id: 'tp-sf-6',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_FUTURE,
        question: "Which word signals the future?",
        options: [
            { id: '1', text: "Yesterday", isCorrect: false },
            { id: '2', text: "Tomorrow", isCorrect: true },
            { id: '3', text: "Now", isCorrect: false }
        ]
    },
    {
        id: 'tp-sf-7',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_FUTURE,
        instructions: "Tap the verb phrase.",
        hint: "Look for 'will'.",
        chunks: [
            { id: '1', text: "I ", isCorrect: false },
            { id: '2', text: "will call", isCorrect: true },
            { id: '3', text: " you back.", isCorrect: false }
        ]
    },
    {
        id: 'tp-sf-8',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_FUTURE,
        question: "Select the correct sentence:",
        options: [
            { id: '1', text: "We will visited the zoo.", isCorrect: false },
            { id: '2', text: "We will visit the zoo.", isCorrect: true },
            { id: '3', text: "We will visits the zoo.", isCorrect: false }
        ]
    },
    {
        id: 'tp-sf-9',
        style: 'HIGHLIGHT',
        type: TenseType.SIMPLE_FUTURE,
        instructions: "Tap the future verb.",
        hint: "Look for 'shall' or 'will'.",
        chunks: [
            { id: '1', text: "We ", isCorrect: false },
            { id: '2', text: "shall overcome", isCorrect: true },
            { id: '3', text: " one day.", isCorrect: false }
        ]
    },
    {
        id: 'tp-sf-10',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.SIMPLE_FUTURE,
        question: "Which sentence uses 'will' correctly?",
        options: [
            { id: '1', text: "He will to go home.", isCorrect: false },
            { id: '2', text: "He will goes home.", isCorrect: false },
            { id: '3', text: "He will go home.", isCorrect: true }
        ]
    },

    // ==========================================
    // PAST PROGRESSIVE (10 Questions)
    // ==========================================
    {
        id: 'tp-pp-1',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PAST_PROGRESSIVE,
        question: "Which sentence uses the Past Progressive?",
        options: [
            { id: '1', text: "I was sleeping.", isCorrect: true },
            { id: '2', text: "I slept.", isCorrect: false },
            { id: '3', text: "I have slept.", isCorrect: false }
        ]
    },
    {
        id: 'tp-pp-2',
        style: 'HIGHLIGHT',
        type: TenseType.PAST_PROGRESSIVE,
        instructions: "Tap the Past Progressive verb phrase.",
        hint: "Look for 'was' or 'were' + ing.",
        chunks: [
            { id: '1', text: "She ", isCorrect: false },
            { id: '2', text: "was running", isCorrect: true },
            { id: '3', text: " in the park.", isCorrect: false }
        ]
    },
    {
        id: 'tp-pp-3',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PAST_PROGRESSIVE,
        question: "Complete: 'They ___ playing football.'",
        options: [
            { id: '1', text: "was", isCorrect: false },
            { id: '2', text: "were", isCorrect: true },
            { id: '3', text: "are", isCorrect: false } // 'are' is Present Progressive
        ]
    },
    {
        id: 'tp-pp-4',
        style: 'HIGHLIGHT',
        type: TenseType.PAST_PROGRESSIVE,
        instructions: "Tap the verb phrase.",
        hint: "Happening in the past.",
        chunks: [
            { id: '1', text: "It ", isCorrect: false },
            { id: '2', text: "was snowing", isCorrect: true },
            { id: '3', text: " all night.", isCorrect: false }
        ]
    },
    {
        id: 'tp-pp-5',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PAST_PROGRESSIVE,
        question: "Which sentence means the action was ongoing in the past?",
        options: [
            { id: '1', text: "I read a book.", isCorrect: false },
            { id: '2', text: "I was reading a book.", isCorrect: true },
            { id: '3', text: "I am reading a book.", isCorrect: false }
        ]
    },
    {
        id: 'tp-pp-6',
        style: 'HIGHLIGHT',
        type: TenseType.PAST_PROGRESSIVE,
        instructions: "Tap the verb phrase.",
        hint: "Look for 'was' + ing.",
        chunks: [
            { id: '1', text: "He ", isCorrect: false },
            { id: '2', text: "was cooking", isCorrect: true },
            { id: '3', text: " dinner when I arrived.", isCorrect: false }
        ]
    },
    {
        id: 'tp-pp-7',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PAST_PROGRESSIVE,
        question: "Choose correct form: 'You ___ sleeping.'",
        options: [
            { id: '1', text: "was", isCorrect: false },
            { id: '2', text: "were", isCorrect: true },
            { id: '3', text: "is", isCorrect: false }
        ]
    },
    {
        id: 'tp-pp-8',
        style: 'HIGHLIGHT',
        type: TenseType.PAST_PROGRESSIVE,
        instructions: "Tap the continuous action.",
        hint: "Look for 'were' + ing.",
        chunks: [
            { id: '1', text: "The birds ", isCorrect: false },
            { id: '2', text: "were singing", isCorrect: true },
            { id: '3', text: " in the trees.", isCorrect: false }
        ]
    },
    {
        id: 'tp-pp-9',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PAST_PROGRESSIVE,
        question: "Which is NOT Past Progressive?",
        options: [
            { id: '1', text: "He was jumping.", isCorrect: false },
            { id: '2', text: "They were laughing.", isCorrect: false },
            { id: '3', text: "She is dancing.", isCorrect: true } // Present Progressive
        ]
    },
    {
        id: 'tp-pp-10',
        style: 'HIGHLIGHT',
        type: TenseType.PAST_PROGRESSIVE,
        instructions: "Tap the verb phrase.",
        hint: "What was happening?",
        chunks: [
            { id: '1', text: "I ", isCorrect: false },
            { id: '2', text: "was dreaming", isCorrect: true },
            { id: '3', text: " of dragons.", isCorrect: false }
        ]
    },

    // ==========================================
    // PRESENT PROGRESSIVE (10 Questions)
    // ==========================================
    {
        id: 'tp-prp-1',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PRESENT_PROGRESSIVE,
        question: "Which sentence uses the Present Progressive?",
        options: [
            { id: '1', text: "I am eating.", isCorrect: true },
            { id: '2', text: "I ate.", isCorrect: false },
            { id: '3', text: "I was eating.", isCorrect: false }
        ]
    },
    {
        id: 'tp-prp-2',
        style: 'HIGHLIGHT',
        type: TenseType.PRESENT_PROGRESSIVE,
        instructions: "Tap the Present Progressive verb phrase.",
        hint: "Look for 'is', 'am', or 'are' + ing.",
        chunks: [
            { id: '1', text: "The dog ", isCorrect: false },
            { id: '2', text: "is barking", isCorrect: true },
            { id: '3', text: " loudly.", isCorrect: false }
        ]
    },
    {
        id: 'tp-prp-3',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PRESENT_PROGRESSIVE,
        question: "Complete: 'Look! It ___ raining.'",
        options: [
            { id: '1', text: "is", isCorrect: true },
            { id: '2', text: "was", isCorrect: false },
            { id: '3', text: "will", isCorrect: false }
        ]
    },
    {
        id: 'tp-prp-4',
        style: 'HIGHLIGHT',
        type: TenseType.PRESENT_PROGRESSIVE,
        instructions: "Tap the verb phrase.",
        hint: "Happening right now.",
        chunks: [
            { id: '1', text: "We ", isCorrect: false },
            { id: '2', text: "are learning", isCorrect: true },
            { id: '3', text: " grammar.", isCorrect: false }
        ]
    },
    {
        id: 'tp-prp-5',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PRESENT_PROGRESSIVE,
        question: "Which sentence implies action RIGHT NOW?",
        options: [
            { id: '1', text: "I read every day.", isCorrect: false },
            { id: '2', text: "I am reading now.", isCorrect: true },
            { id: '3', text: "I read yesterday.", isCorrect: false }
        ]
    },
    {
        id: 'tp-prp-6',
        style: 'HIGHLIGHT',
        type: TenseType.PRESENT_PROGRESSIVE,
        instructions: "Tap the verb.",
        hint: "Look for 'am' + ing.",
        chunks: [
            { id: '1', text: "I ", isCorrect: false },
            { id: '2', text: "am writing", isCorrect: true },
            { id: '3', text: " a letter.", isCorrect: false }
        ]
    },
    {
        id: 'tp-prp-7',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PRESENT_PROGRESSIVE,
        question: "Select the correct form: 'They ___ playing.'",
        options: [
            { id: '1', text: "is", isCorrect: false },
            { id: '2', text: "am", isCorrect: false },
            { id: '3', text: "are", isCorrect: true }
        ]
    },
    {
        id: 'tp-prp-8',
        style: 'HIGHLIGHT',
        type: TenseType.PRESENT_PROGRESSIVE,
        instructions: "Tap the action happening now.",
        hint: "Look for 'are' + ing.",
        chunks: [
            { id: '1', text: "The cars ", isCorrect: false },
            { id: '2', text: "are moving", isCorrect: true },
            { id: '3', text: " slowly.", isCorrect: false }
        ]
    },
    {
        id: 'tp-prp-9',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PRESENT_PROGRESSIVE,
        question: "Which is NOT Present Progressive?",
        options: [
            { id: '1', text: "She is singing.", isCorrect: false },
            { id: '2', text: "They were singing.", isCorrect: true }, // Past Progressive
            { id: '3', text: "We are singing.", isCorrect: false }
        ]
    },
    {
        id: 'tp-prp-10',
        style: 'HIGHLIGHT',
        type: TenseType.PRESENT_PROGRESSIVE,
        instructions: "Tap the verb phrase.",
        hint: "Current action.",
        chunks: [
            { id: '1', text: "He ", isCorrect: false },
            { id: '2', text: "is fixing", isCorrect: true },
            { id: '3', text: " the bike.", isCorrect: false }
        ]
    },


    // ==========================================
    // PRESENT PERFECT (10 Questions)
    // ==========================================
    {
        id: 'tp-perf-1',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PRESENT_PERFECT,
        question: "Which sentence is Present Perfect?",
        options: [
            { id: '1', text: "He has finished his work.", isCorrect: true },
            { id: '2', text: "He finished his work.", isCorrect: false },
            { id: '3', text: "He had finished his work.", isCorrect: false }
        ]
    },
    {
        id: 'tp-perf-2',
        style: 'HIGHLIGHT',
        type: TenseType.PRESENT_PERFECT,
        instructions: "Tap the Present Perfect verb phrase.",
        hint: "Look for 'have' or 'has'.",
        chunks: [
            { id: '1', text: "We ", isCorrect: false },
            { id: '2', text: "have visited", isCorrect: true },
            { id: '3', text: " that place before.", isCorrect: false }
        ]
    },
    {
        id: 'tp-perf-3',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PRESENT_PERFECT,
        question: "Complete: 'She ___ lost her keys.'",
        options: [
            { id: '1', text: "have", isCorrect: false },
            { id: '2', text: "has", isCorrect: true },
            { id: '3', text: "had", isCorrect: false }
        ]
    },
    {
        id: 'tp-perf-4',
        style: 'HIGHLIGHT',
        type: TenseType.PRESENT_PERFECT,
        instructions: "Tap the verb phrase.",
        hint: "Has it happened recently?",
        chunks: [
            { id: '1', text: "I ", isCorrect: false },
            { id: '2', text: "have eaten", isCorrect: true },
            { id: '3', text: " breakfast already.", isCorrect: false }
        ]
    },
    {
        id: 'tp-perf-5',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PRESENT_PERFECT,
        question: "Which form uses 'have' correctly?",
        options: [
            { id: '1', text: "They has played.", isCorrect: false },
            { id: '2', text: "They have played.", isCorrect: true },
            { id: '3', text: "They having played.", isCorrect: false }
        ]
    },
    {
        id: 'tp-perf-6',
        style: 'HIGHLIGHT',
        type: TenseType.PRESENT_PERFECT,
        instructions: "Tap the verb phrase.",
        hint: "Look for 'have' or 'has' + past participle.",
        chunks: [
            { id: '1', text: "The train ", isCorrect: false },
            { id: '2', text: "has arrived", isCorrect: true },
            { id: '3', text: " at the station.", isCorrect: false }
        ]
    },
    {
        id: 'tp-perf-7',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PRESENT_PERFECT,
        question: "How do you form the Present Perfect?",
        options: [
            { id: '1', text: "have/has + past participle", isCorrect: true },
            { id: '2', text: "was/were + ing", isCorrect: false },
            { id: '3', text: "will + verb", isCorrect: false }
        ]
    },
    {
        id: 'tp-perf-8',
        style: 'HIGHLIGHT',
        type: TenseType.PRESENT_PERFECT,
        instructions: "Tap the verb.",
        hint: "Look for 'have'.",
        chunks: [
            { id: '1', text: "You ", isCorrect: false },
            { id: '2', text: "have seen", isCorrect: true },
            { id: '3', text: " this movie.", isCorrect: false }
        ]
    },
    {
        id: 'tp-perf-9',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PRESENT_PERFECT,
        question: "Which sentence implies a result NOW?",
        options: [
            { id: '1', text: "I broke my leg.", isCorrect: false },
            { id: '2', text: "I have broken my leg.", isCorrect: true },
            { id: '3', text: "I had broken my leg.", isCorrect: false }
        ]
    },
    {
        id: 'tp-perf-10',
        style: 'HIGHLIGHT',
        type: TenseType.PRESENT_PERFECT,
        instructions: "Tap the verb phrase.",
        hint: "Action completed recently.",
        chunks: [
            { id: '1', text: "She ", isCorrect: false },
            { id: '2', text: "has decided", isCorrect: true },
            { id: '3', text: " to go.", isCorrect: false }
        ]
    },

    // ==========================================
    // PAST PERFECT (10 Questions)
    // ==========================================
    {
        id: 'tp-pap-1',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PAST_PERFECT,
        question: "Which sentence uses the Past Perfect?",
        options: [
            { id: '1', text: "She had left before I arrived.", isCorrect: true },
            { id: '2', text: "She has left.", isCorrect: false },
            { id: '3', text: "She left.", isCorrect: false }
        ]
    },
    {
        id: 'tp-pap-2',
        style: 'HIGHLIGHT',
        type: TenseType.PAST_PERFECT,
        instructions: "Tap the Past Perfect verb phrase.",
        hint: "Look for 'had' + past participle.",
        chunks: [
            { id: '1', text: "The movie ", isCorrect: false },
            { id: '2', text: "had started", isCorrect: true },
            { id: '3', text: " when we got there.", isCorrect: false }
        ]
    },
    {
        id: 'tp-pap-3',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PAST_PERFECT,
        question: "Which helper verb is used for Past Perfect?",
        options: [
            { id: '1', text: "Have", isCorrect: false },
            { id: '2', text: "Has", isCorrect: false },
            { id: '3', text: "Had", isCorrect: true }
        ]
    },
    {
        id: 'tp-pap-4',
        style: 'HIGHLIGHT',
        type: TenseType.PAST_PERFECT,
        instructions: "Tap the verb phrase.",
        hint: "Something happened before another past event.",
        chunks: [
            { id: '1', text: "We ", isCorrect: false },
            { id: '2', text: "had finished", isCorrect: true },
            { id: '3', text: " dinner when the phone rang.", isCorrect: false }
        ]
    },
    {
        id: 'tp-pap-5',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PAST_PERFECT,
        question: "Complete: 'They ___ already gone.'",
        options: [
            { id: '1', text: "has", isCorrect: false },
            { id: '2', text: "had", isCorrect: true },
            { id: '3', text: "have", isCorrect: false }
        ]
    },
    {
        id: 'tp-pap-6',
        style: 'HIGHLIGHT',
        type: TenseType.PAST_PERFECT,
        instructions: "Tap the verb phrase.",
        hint: "Action happened before another past event.",
        chunks: [
            { id: '1', text: "He realized he ", isCorrect: false },
            { id: '2', text: "had forgotten", isCorrect: true },
            { id: '3', text: " his wallet.", isCorrect: false }
        ]
    },
    {
        id: 'tp-pap-7',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PAST_PERFECT,
        question: "Which sentence comes first in time?",
        options: [
            { id: '1', text: "I went to bed.", isCorrect: false },
            { id: '2', text: "I had brushed my teeth.", isCorrect: true },
            { id: '3', text: "(Both happen at same time)", isCorrect: false }
        ]
    },
    {
        id: 'tp-pap-8',
        style: 'HIGHLIGHT',
        type: TenseType.PAST_PERFECT,
        instructions: "Tap the verb phrase.",
        hint: "It stopped raining before we went out.",
        chunks: [
            { id: '1', text: "The rain ", isCorrect: false },
            { id: '2', text: "had stopped", isCorrect: true },
            { id: '3', text: " so we went out.", isCorrect: false }
        ]
    },
    {
        id: 'tp-pap-9',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.PAST_PERFECT,
        question: "Select the correct form:",
        options: [
            { id: '1', text: "She had ate.", isCorrect: false },
            { id: '2', text: "She has eaten.", isCorrect: false },
            { id: '3', text: "She had eaten.", isCorrect: true }
        ]
    },
    {
        id: 'tp-pap-10',
        style: 'HIGHLIGHT',
        type: TenseType.PAST_PERFECT,
        instructions: "Tap the verb phrase.",
        hint: "Seen before that moment.",
        chunks: [
            { id: '1', text: "I knew I ", isCorrect: false },
            { id: '2', text: "had seen", isCorrect: true },
            { id: '3', text: " him before.", isCorrect: false }
        ]
    },

    // ==========================================
    // MODALS (10 Questions)
    // ==========================================
    {
        id: 'tp-mod-1',
        style: 'HIGHLIGHT',
        type: TenseType.MODAL,
        instructions: "Tap the Modal Verb.",
        hint: "A helping verb like can, must, should.",
        chunks: [
            { id: '1', text: "You ", isCorrect: false },
            { id: '2', text: "must", isCorrect: true },
            { id: '3', text: " listen carefully.", isCorrect: false }
        ]
    },
    {
        id: 'tp-mod-2',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.MODAL,
        question: "Which word is a Modal Verb?",
        options: [
            { id: '1', text: "Run", isCorrect: false },
            { id: '2', text: "Table", isCorrect: false },
            { id: '3', text: "Should", isCorrect: true }
        ]
    },
    {
        id: 'tp-mod-3',
        style: 'HIGHLIGHT',
        type: TenseType.MODAL,
        instructions: "Tap the Modal.",
        hint: "Looking for ability.",
        chunks: [
            { id: '1', text: "I ", isCorrect: false },
            { id: '2', text: "can", isCorrect: true },
            { id: '3', text: " jump very high.", isCorrect: false }
        ]
    },
    {
        id: 'tp-mod-4',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.MODAL,
        question: "Which sentence shows possibility?",
        options: [
            { id: '1', text: "It might rain.", isCorrect: true },
            { id: '2', text: "It will rain.", isCorrect: false }, // Will is future fact
            { id: '3', text: "It rains.", isCorrect: false }
        ]
    },
    {
        id: 'tp-mod-5',
        style: 'HIGHLIGHT',
        type: TenseType.MODAL,
        instructions: "Tap the Modal.",
        hint: "Look for 'should'.",
        chunks: [
            { id: '1', text: "We ", isCorrect: false },
            { id: '2', text: "should", isCorrect: true },
            { id: '3', text: " share our toys.", isCorrect: false }
        ]
    },
    {
        id: 'tp-mod-6',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.MODAL,
        question: "Which sentence shows prohibition?",
        options: [
            { id: '1', text: "You must not run.", isCorrect: true },
            { id: '2', text: "You can run.", isCorrect: false },
            { id: '3', text: "You run.", isCorrect: false }
        ]
    },
    {
        id: 'tp-mod-7',
        style: 'HIGHLIGHT',
        type: TenseType.MODAL,
        instructions: "Tap the Modal Verb.",
        hint: "Looking for 'would'.",
        chunks: [
            { id: '1', text: "I ", isCorrect: false },
            { id: '2', text: "would", isCorrect: true },
            { id: '3', text: " like a cookie.", isCorrect: false }
        ]
    },
    {
        id: 'tp-mod-8',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.MODAL,
        question: "Which word is NOT a modal?",
        options: [
            { id: '1', text: "Might", isCorrect: false },
            { id: '2', text: "Could", isCorrect: false },
            { id: '3', text: "Played", isCorrect: true }
        ]
    },
    {
        id: 'tp-mod-9',
        style: 'HIGHLIGHT',
        type: TenseType.MODAL,
        instructions: "Tap the Modal.",
        hint: "Asking gracefully.",
        chunks: [
            { id: '1', text: "", isCorrect: false },
            { id: '2', text: "May", isCorrect: true },
            { id: '3', text: " I have some water?", isCorrect: false }
        ]
    },
    {
        id: 'tp-mod-10',
        style: 'MULTIPLE_CHOICE',
        type: TenseType.MODAL,
        question: "Replace 'can' with another modal: 'I can swim.' to show possibility.",
        options: [
            { id: '1', text: "could", isCorrect: true },
            { id: '2', text: "must", isCorrect: false },
            { id: '3', text: "shall", isCorrect: false }
        ]
    }
];
