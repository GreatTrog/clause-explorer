import { ClauseType, TenseType, VoiceType, WordClassType } from '../types';

export interface Chunk {
    id: string;
    text: string;
    isCorrect: boolean;
}

export interface PracticeQuestion {
    id: string;
    type: ClauseType | TenseType | VoiceType | WordClassType;
    instructions?: string; // Optional because sometime we use question text
    text?: string; // Some questions use text instead of instructions
    hint: string;
    chunks?: Chunk[]; // Optional for Highlight questions
    options?: { id: string; text: string; isCorrect: boolean }[]; // Optional for MC questions
    correctSentence?: string | string[]; // For PunctuationEditor
    explanation?: string; // Explanation for answer
    question?: string; // Text for MC questions
}

// Helper to generate chunks where one is correct
// This helps keep the file size manageable if I wanted to generate them, 
// but for explicit control I will write them out.

export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
    // ============================================
    // MAIN CLAUSES (20 Questions)
    // ============================================
    { id: 'm-1', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "It stands alone.", chunks: [{ id: '1', text: 'Although it rained, ', isCorrect: false }, { id: '2', text: 'we played football', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-2', type: ClauseType.MAIN, instructions: 'Find the MAIN clause.', hint: "The main idea.", chunks: [{ id: '1', text: 'The cat slept', isCorrect: true }, { id: '2', text: ' whilst the dog barked', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-3', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "Independent.", chunks: [{ id: '1', text: 'If you help me, ', isCorrect: false }, { id: '2', text: 'I will help you', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-4', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "Complete thought.", chunks: [{ id: '1', text: 'I like apples', isCorrect: true }, { id: '2', text: ' because they are crunchy', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-5', type: ClauseType.MAIN, instructions: 'Find the MAIN clause.', hint: "Makes sense alone.", chunks: [{ id: '1', text: 'When the bell rings, ', isCorrect: false }, { id: '2', text: 'line up quietly', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-6', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "The boss clause.", chunks: [{ id: '1', text: 'The sun came out', isCorrect: true }, { id: '2', text: ' after the storm', isCorrect: false }] }, // 'after the storm' is a prepositional phrase, technically not a clause unless 'after the storm passed'. Let's keep it simple or make it a clause.
    { id: 'm-6b', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "The boss clause.", chunks: [{ id: '1', text: 'The sun came out', isCorrect: true }, { id: '2', text: ' after the clouds cleared', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-7', type: ClauseType.MAIN, instructions: 'Find the MAIN clause.', hint: "Core sentence.", chunks: [{ id: '1', text: 'My mum is kind', isCorrect: true }, { id: '2', text: ' although she is strict', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-8', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "Main action.", chunks: [{ id: '1', text: 'Unless you run, ', isCorrect: false }, { id: '2', text: 'you will miss the bus', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-9', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "Stands alone.", chunks: [{ id: '1', text: 'The bird flew away', isCorrect: true }, { id: '2', text: ' when it saw the cat', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-10', type: ClauseType.MAIN, instructions: 'Find the MAIN clause.', hint: "Independent.", chunks: [{ id: '1', text: 'Wherever you go, ', isCorrect: false }, { id: '2', text: 'I will follow', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-11', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "Makes sense.", chunks: [{ id: '1', text: 'He ate the cake', isCorrect: true }, { id: '2', text: ' that sat on the table', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-12', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "Main thought.", chunks: [{ id: '1', text: 'Since it is late, ', isCorrect: false }, { id: '2', text: 'we should go to bed', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-13', type: ClauseType.MAIN, instructions: 'Find the MAIN clause.', hint: "The primary statement.", chunks: [{ id: '1', text: 'The game ended', isCorrect: true }, { id: '2', text: ' before I arrived', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-14', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "Stands alone.", chunks: [{ id: '1', text: 'Even if you try, ', isCorrect: false }, { id: '2', text: 'it will be hard', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-15', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "Main part.", chunks: [{ id: '1', text: 'She laughed', isCorrect: true }, { id: '2', text: ' because the joke was funny', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-16', type: ClauseType.MAIN, instructions: 'Find the MAIN clause.', hint: "Independent.", chunks: [{ id: '1', text: 'As long as you are safe, ', isCorrect: false }, { id: '2', text: 'nothing else matters', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-17', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "The boss.", chunks: [{ id: '1', text: 'The stars twinkle', isCorrect: true }, { id: '2', text: ' when the sky is dark', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-18', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "Makes sense.", chunks: [{ id: '1', text: 'Until the bell rings, ', isCorrect: false }, { id: '2', text: 'remain seated', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-19', type: ClauseType.MAIN, instructions: 'Find the MAIN clause.', hint: "Independent.", chunks: [{ id: '1', text: 'We visited the park', isCorrect: true }, { id: '2', text: ' where we saw ducks', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'm-20', type: ClauseType.MAIN, instructions: 'Tap the MAIN clause.', hint: "Main sentence.", chunks: [{ id: '1', text: 'Once I finish my work, ', isCorrect: false }, { id: '2', text: 'I will play games', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },

    // ============================================
    // SUBORDINATE CLAUSES (20 Questions)
    // ============================================
    { id: 's-1', type: ClauseType.SUBORDINATE, instructions: 'Tap the SUBORDINATE clause.', hint: "Starts with a conjunction.", chunks: [{ id: '1', text: 'I was happy ', isCorrect: false }, { id: '2', text: 'because I won', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-2', type: ClauseType.SUBORDINATE, instructions: 'Find the SUBORDINATE clause.', hint: "Depends on the main clause.", chunks: [{ id: '1', text: 'Although tired, ', isCorrect: true }, { id: '2', text: 'he kept running', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-3', type: ClauseType.SUBORDINATE, instructions: 'Tap the SUBORDINATE clause.', hint: "Helper clause.", chunks: [{ id: '1', text: 'We will stay inside ', isCorrect: false }, { id: '2', text: 'if it rains', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-4', type: ClauseType.SUBORDINATE, instructions: 'Tap the SUBORDINATE clause.', hint: "Adds info.", chunks: [{ id: '1', text: 'As I ate lunch, ', isCorrect: true }, { id: '2', text: 'the phone rang', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-5', type: ClauseType.SUBORDINATE, instructions: 'Find the SUBORDINATE clause.', hint: "Not a complete sentence.", chunks: [{ id: '1', text: 'She practiced ', isCorrect: false }, { id: '2', text: 'until she improved', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-6', type: ClauseType.SUBORDINATE, instructions: 'Tap the SUBORDINATE clause.', hint: "Starts with 'Since'.", chunks: [{ id: '1', text: 'Since you asked, ', isCorrect: true }, { id: '2', text: 'I will tell you', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-7', type: ClauseType.SUBORDINATE, instructions: 'Tap the SUBORDINATE clause.', hint: "Starts with 'while'.", chunks: [{ id: '1', text: 'I read ', isCorrect: false }, { id: '2', text: 'while waiting', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-8', type: ClauseType.SUBORDINATE, instructions: 'Find the SUBORDINATE clause.', hint: "Starts with 'even though'.", chunks: [{ id: '1', text: 'Even though shy, ', isCorrect: true }, { id: '2', text: 'she sang loudly', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-9', type: ClauseType.SUBORDINATE, instructions: 'Tap the SUBORDINATE clause.', hint: "Starts with 'before'.", chunks: [{ id: '1', text: 'Wash up ', isCorrect: false }, { id: '2', text: 'before we eat', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-10', type: ClauseType.SUBORDINATE, instructions: 'Tap the SUBORDINATE clause.', hint: "Starts with 'after'.", chunks: [{ id: '1', text: 'After he left, ', isCorrect: true }, { id: '2', text: 'it was quiet', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-11', type: ClauseType.SUBORDINATE, instructions: 'Find the SUBORDINATE clause.', hint: "Starts with 'unless'.", chunks: [{ id: '1', text: 'Unless you study, ', isCorrect: true }, { id: '2', text: 'you may struggle', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-12', type: ClauseType.SUBORDINATE, instructions: 'Tap the SUBORDINATE clause.', hint: "Starts with 'whenever'.", chunks: [{ id: '1', text: 'Whenever I smile, ', isCorrect: true }, { id: '2', text: 'you smile back', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-13', type: ClauseType.SUBORDINATE, instructions: 'Tap the SUBORDINATE clause.', hint: "Starts with 'because'.", chunks: [{ id: '1', text: 'The plant grew ', isCorrect: false }, { id: '2', text: 'because it rained', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-14', type: ClauseType.SUBORDINATE, instructions: 'Find the SUBORDINATE clause.', hint: "Starts with 'so that'.", chunks: [{ id: '1', text: 'I ran fast ', isCorrect: false }, { id: '2', text: 'so that I would win', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-15', type: ClauseType.SUBORDINATE, instructions: 'Tap the SUBORDINATE clause.', hint: "Starts with 'once'.", chunks: [{ id: '1', text: 'Once we are done, ', isCorrect: true }, { id: '2', text: 'we can play', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-16', type: ClauseType.SUBORDINATE, instructions: 'Tap the SUBORDINATE clause.', hint: "Starts with 'provided that'.", chunks: [{ id: '1', text: 'You can go ', isCorrect: false }, { id: '2', text: 'provided that you are safe', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-17', type: ClauseType.SUBORDINATE, instructions: 'Find the SUBORDINATE clause.', hint: "Starts with 'whereas'.", chunks: [{ id: '1', text: 'I like blue ', isCorrect: false }, { id: '2', text: 'whereas he likes red', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-18', type: ClauseType.SUBORDINATE, instructions: 'Tap the SUBORDINATE clause.', hint: "Starts with 'although'.", chunks: [{ id: '1', text: 'Although small, ', isCorrect: true }, { id: '2', text: 'the ant is strong', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-19', type: ClauseType.SUBORDINATE, instructions: 'Tap the SUBORDINATE clause.', hint: "Starts with 'if'.", chunks: [{ id: '1', text: 'If it snows, ', isCorrect: true }, { id: '2', text: 'we build a snowman', isCorrect: false }, { id: '3', text: '.', isCorrect: false }] },
    { id: 's-20', type: ClauseType.SUBORDINATE, instructions: 'Find the SUBORDINATE clause.', hint: "Starts with 'until'.", chunks: [{ id: '1', text: 'Wait here ', isCorrect: false }, { id: '2', text: 'until I return', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },

    // ============================================
    // RELATIVE CLAUSES (20 Questions)
    // ============================================
    // ... I'll ensure 20 here too by duplicating pattern but unique sentences.
    { id: 'r-1', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Describes the noun.", chunks: [{ id: '1', text: 'The boy ', isCorrect: false }, { id: '2', text: 'who runs fast', isCorrect: true }, { id: '3', text: ' won the race.', isCorrect: false }] },
    { id: 'r-2', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'which'.", chunks: [{ id: '1', text: 'My bike, ', isCorrect: false }, { id: '2', text: 'which is blue', isCorrect: true }, { id: '3', text: ', is new.', isCorrect: false }] },
    { id: 'r-3', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'that'.", chunks: [{ id: '1', text: 'The cake ', isCorrect: false }, { id: '2', text: 'that I baked', isCorrect: true }, { id: '3', text: ' smells good.', isCorrect: false }] },
    { id: 'r-4', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'whose'.", chunks: [{ id: '1', text: 'The girl ', isCorrect: false }, { id: '2', text: 'whose dog is cute', isCorrect: true }, { id: '3', text: ' smiled.', isCorrect: false }] },
    { id: 'r-5', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'where'.", chunks: [{ id: '1', text: 'This is the park ', isCorrect: false }, { id: '2', text: 'where we played', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'r-6', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'when'.", chunks: [{ id: '1', text: 'I remember the time ', isCorrect: false }, { id: '2', text: 'when we met', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'r-7', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'who'.", chunks: [{ id: '1', text: 'My dad, ', isCorrect: false }, { id: '2', text: 'who is tall', isCorrect: true }, { id: '3', text: ', likes cooking.', isCorrect: false }] },
    { id: 'r-8', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'that'.", chunks: [{ id: '1', text: 'The book ', isCorrect: false }, { id: '2', text: 'that you gave me', isCorrect: true }, { id: '3', text: ' is funny.', isCorrect: false }] },
    { id: 'r-9', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'which'.", chunks: [{ id: '1', text: 'The car, ', isCorrect: false }, { id: '2', text: 'which stopped', isCorrect: true }, { id: '3', text: ', was nice.', isCorrect: false }] },
    { id: 'r-10', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'who'.", chunks: [{ id: '1', text: 'The teacher ', isCorrect: false }, { id: '2', text: 'who helped me', isCorrect: true }, { id: '3', text: ' is absent.', isCorrect: false }] },
    { id: 'r-11', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'whose'.", chunks: [{ id: '1', text: 'The man ', isCorrect: false }, { id: '2', text: 'whose car broke', isCorrect: true }, { id: '3', text: ' called for help.', isCorrect: false }] },
    { id: 'r-12', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'where'.", chunks: [{ id: '1', text: 'The house ', isCorrect: false }, { id: '2', text: 'where I live', isCorrect: true }, { id: '3', text: ' is small.', isCorrect: false }] },
    { id: 'r-13', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'that'.", chunks: [{ id: '1', text: 'The pizza ', isCorrect: false }, { id: '2', text: 'that we ate', isCorrect: true }, { id: '3', text: ' was hot.', isCorrect: false }] },
    { id: 'r-14', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'who'.", chunks: [{ id: '1', text: 'My friend, ', isCorrect: false }, { id: '2', text: 'who likes cats', isCorrect: true }, { id: '3', text: ', has three.', isCorrect: false }] },
    { id: 'r-15', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'which'.", chunks: [{ id: '1', text: 'The film, ', isCorrect: false }, { id: '2', text: 'which was scary', isCorrect: true }, { id: '3', text: ', ended well.', isCorrect: false }] },
    { id: 'r-16', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'when'.", chunks: [{ id: '1', text: 'Summer is ', isCorrect: false }, { id: '2', text: 'when it is hot', isCorrect: true }, { id: '3', text: '.', isCorrect: false }] },
    { id: 'r-17', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'who'.", chunks: [{ id: '1', text: 'The doctor ', isCorrect: false }, { id: '2', text: 'who saw me', isCorrect: true }, { id: '3', text: ' was nice.', isCorrect: false }] },
    { id: 'r-18', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'whose'.", chunks: [{ id: '1', text: 'The queen, ', isCorrect: false }, { id: '2', text: 'whose crown shone', isCorrect: true }, { id: '3', text: ', waved.', isCorrect: false }] },
    { id: 'r-19', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'that'.", chunks: [{ id: '1', text: 'The keys ', isCorrect: false }, { id: '2', text: 'that I lost', isCorrect: true }, { id: '3', text: ' were found.', isCorrect: false }] },
    { id: 'r-20', type: ClauseType.RELATIVE, instructions: 'Tap the RELATIVE clause.', hint: "Starts with 'where'.", chunks: [{ id: '1', text: 'The school ', isCorrect: false }, { id: '2', text: 'where we learn', isCorrect: true }, { id: '3', text: ' is big.', isCorrect: false }] },

    // ============================================
    // SPOTTER TASKS: CONJUNCTIONS (10 Questions)
    // ============================================
    {
        id: 'c-1',
        type: ClauseType.CONJUNCTION,
        instructions: 'Tap the CONJUNCTION.',
        hint: "The word that joins clauses.",
        chunks: [{ id: '1', text: 'I went home ', isCorrect: false }, { id: '2', text: 'because', isCorrect: true }, { id: '3', text: ' I was tired', isCorrect: false }]
    },
    {
        id: 'c-2',
        type: ClauseType.CONJUNCTION,
        instructions: 'Tap the CONJUNCTION.',
        hint: "Joins the helper clause.",
        chunks: [{ id: '1', text: 'We played ', isCorrect: false }, { id: '2', text: 'until', isCorrect: true }, { id: '3', text: ' it got dark', isCorrect: false }]
    },
    {
        id: 'c-3',
        type: ClauseType.CONJUNCTION,
        instructions: 'Find the CONJUNCTION.',
        hint: "At the start.",
        chunks: [{ id: '1', text: 'If', isCorrect: true }, { id: '2', text: ' you smile, ', isCorrect: false }, { id: '3', text: 'I smile.', isCorrect: false }]
    },
    {
        id: 'c-4',
        type: ClauseType.CONJUNCTION,
        instructions: 'Tap the CONJUNCTION.',
        hint: "Shows time relation.",
        chunks: [{ id: '1', text: 'Wash your hands ', isCorrect: false }, { id: '2', text: 'before', isCorrect: true }, { id: '3', text: ' you eat.', isCorrect: false }]
    },
    {
        id: 'c-5',
        type: ClauseType.CONJUNCTION,
        instructions: 'Tap the CONJUNCTION.',
        hint: "Shows contrast.",
        chunks: [{ id: '1', text: 'Although', isCorrect: true }, { id: '2', text: ' it rained, ', isCorrect: false }, { id: '3', text: 'we had fun.', isCorrect: false }]
    },
    {
        id: 'c-6',
        type: ClauseType.CONJUNCTION,
        instructions: 'Find the CONJUNCTION.',
        hint: "Shows reason.",
        chunks: [{ id: '1', text: 'Since', isCorrect: true }, { id: '2', text: ' you are here, ', isCorrect: false }, { id: '3', text: 'help me.', isCorrect: false }]
    },
    {
        id: 'c-7',
        type: ClauseType.CONJUNCTION,
        instructions: 'Tap the CONJUNCTION.',
        hint: "Shows condition.",
        chunks: [{ id: '1', text: 'Unless', isCorrect: true }, { id: '2', text: ' you try, ', isCorrect: false }, { id: '3', text: 'you won\'t know.', isCorrect: false }]
    },
    {
        id: 'c-8',
        type: ClauseType.CONJUNCTION,
        instructions: 'Tap the CONJUNCTION.',
        hint: "Shows time.",
        chunks: [{ id: '1', text: 'I saw him ', isCorrect: false }, { id: '2', text: 'while', isCorrect: true }, { id: '3', text: ' walking.', isCorrect: false }]
    },
    {
        id: 'c-9',
        type: ClauseType.CONJUNCTION,
        instructions: 'Find the CONJUNCTION.',
        hint: "Shows time.",
        chunks: [{ id: '1', text: 'After', isCorrect: true }, { id: '2', text: ' school finished, ', isCorrect: false }, { id: '3', text: 'we played.', isCorrect: false }]
    },
    {
        id: 'c-10',
        type: ClauseType.CONJUNCTION,
        instructions: 'Tap the CONJUNCTION.',
        hint: "Shows reason.",
        chunks: [{ id: '1', text: 'I ran ', isCorrect: false }, { id: '2', text: 'so that', isCorrect: true }, { id: '3', text: ' I was on time.', isCorrect: false }]
    },

    // ============================================
    // SPOTTER TASKS: PRONOUNS (10 Questions)
    // ============================================
    {
        id: 'p-1',
        type: ClauseType.PRONOUN,
        instructions: 'Tap the RELATIVE PRONOUN.',
        hint: "Replaces the noun 'boy'.",
        chunks: [{ id: '1', text: 'The boy ', isCorrect: false }, { id: '2', text: 'who', isCorrect: true }, { id: '3', text: ' sat there was sad.', isCorrect: false }]
    },
    {
        id: 'p-2',
        type: ClauseType.PRONOUN,
        instructions: 'Find the RELATIVE PRONOUN.',
        hint: "Refers to the 'cake'.",
        chunks: [{ id: '1', text: 'The cake ', isCorrect: false }, { id: '2', text: 'which', isCorrect: true }, { id: '3', text: ' I ate was tasty.', isCorrect: false }]
    },
    {
        id: 'p-3',
        type: ClauseType.PRONOUN,
        instructions: 'Tap the RELATIVE PRONOUN.',
        hint: "Refers to the 'house'.",
        chunks: [{ id: '1', text: 'This is the house ', isCorrect: false }, { id: '2', text: 'that', isCorrect: true }, { id: '3', text: ' Jack built.', isCorrect: false }]
    },
    {
        id: 'p-4',
        type: ClauseType.PRONOUN,
        instructions: 'Tap the RELATIVE PRONOUN.',
        hint: "Shows possession.",
        chunks: [{ id: '1', text: 'The man ', isCorrect: false }, { id: '2', text: 'whose', isCorrect: true }, { id: '3', text: ' hat fell was cross.', isCorrect: false }]
    },
    {
        id: 'p-5',
        type: ClauseType.PRONOUN,
        instructions: 'Find the RELATIVE PRONOUN.',
        hint: "Refers to a place.",
        chunks: [{ id: '1', text: 'The shop ', isCorrect: false }, { id: '2', text: 'where', isCorrect: true }, { id: '3', text: ' I buy sweets is open.', isCorrect: false }]
    },
    {
        id: 'p-6',
        type: ClauseType.PRONOUN,
        instructions: 'Tap the RELATIVE PRONOUN.',
        hint: "Refers to a time.",
        chunks: [{ id: '1', text: 'I remember the day ', isCorrect: false }, { id: '2', text: 'when', isCorrect: true }, { id: '3', text: ' we met.', isCorrect: false }]
    },
    {
        id: 'p-7',
        type: ClauseType.PRONOUN,
        instructions: 'Tap the RELATIVE PRONOUN.',
        hint: "Refers to 'teacher'.",
        chunks: [{ id: '1', text: 'My teacher, ', isCorrect: false }, { id: '2', text: 'who', isCorrect: true }, { id: '3', text: ' is kind, helps us.', isCorrect: false }]
    },
    {
        id: 'p-8',
        type: ClauseType.PRONOUN,
        instructions: 'Tap the RELATIVE PRONOUN.',
        hint: "Refers to 'car'.",
        chunks: [{ id: '1', text: 'The car ', isCorrect: false }, { id: '2', text: 'which', isCorrect: true }, { id: '3', text: ' is red costs a lot.', isCorrect: false }]
    },
    {
        id: 'p-9',
        type: ClauseType.PRONOUN,
        instructions: 'Find the RELATIVE PRONOUN.',
        hint: "Refers to 'book'.",
        chunks: [{ id: '1', text: 'The book ', isCorrect: false }, { id: '2', text: 'that', isCorrect: true }, { id: '3', text: ' I read was funny.', isCorrect: false }]
    },
    {
        id: 'p-10',
        type: ClauseType.PRONOUN,
        instructions: 'Tap the RELATIVE PRONOUN.',
        hint: "Possession.",
        chunks: [{ id: '1', text: 'The dog ', isCorrect: false }, { id: '2', text: 'whose', isCorrect: true }, { id: '3', text: ' tail wagged was happy.', isCorrect: false }]
    },
];
