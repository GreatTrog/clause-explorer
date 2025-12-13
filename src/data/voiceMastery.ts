import type { MasteryQuestion } from './masteryQuestions';
import { MasteryQuestionType } from './masteryQuestions';
import { VoiceType } from '../types';

export const VOICE_MASTERY_QUESTIONS: MasteryQuestion[] = [
    // --- DRAG AND DROP (Sort Active vs Passive) ---
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'vm-dd-1',
        instructions: 'Sort into Active or Passive Voice.',
        zones: [VoiceType.ACTIVE, VoiceType.PASSIVE],
        items: [
            { id: 'i1', text: 'I ate the apple', category: VoiceType.ACTIVE },
            { id: 'i2', text: 'The apple was eaten', category: VoiceType.PASSIVE },
            { id: 'i3', text: 'The ball was thrown', category: VoiceType.PASSIVE },
            { id: 'i4', text: 'She threw the ball', category: VoiceType.ACTIVE },
            { id: 'i5', text: 'Birds fly', category: VoiceType.ACTIVE },
            { id: 'i6', text: 'Stamps are collected by him', category: VoiceType.PASSIVE },
        ]
    },

    // --- TABLE CLASSIFICATION (Identify Agent Status) ---
    // Note: We need a way to classify "Has Agent" vs "Agent Omitted". 
    // Since our Table support is generic, we can map VoiceType.PASSIVE to "Passive" but maybe use specific texts.
    // Let's stick to Active vs Passive for the table for now as it maps to types.
    {
        type: MasteryQuestionType.TABLE,
        id: 'vm-tab-1',
        instructions: 'Is it Active or Passive?',
        columns: [VoiceType.ACTIVE, VoiceType.PASSIVE],
        rows: [
            { id: 'r1', text: 'The dog barked', correctType: VoiceType.ACTIVE },
            { id: 'r2', text: 'The car was washed', correctType: VoiceType.PASSIVE },
            { id: 'r3', text: 'Mistakes were made', correctType: VoiceType.PASSIVE },
            { id: 'r4', text: 'We made mistakes', correctType: VoiceType.ACTIVE },
        ]
    },

    // --- SELECTION (Find the Passive Verb) ---
    {
        type: MasteryQuestionType.SELECT,
        id: 'vm-sel-1',
        clauseType: VoiceType.PASSIVE,
        instructions: 'Tap the Passive Verb Phrase.',
        chunks: [
            { id: 'c1', text: 'The treasure ', isCorrect: false },
            { id: 'c2', text: 'was buried', isCorrect: true },
            { id: 'c3', text: ' deep underground.', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.SELECT,
        id: 'vm-sel-2',
        clauseType: VoiceType.PASSIVE,
        instructions: 'Find the Passive Verb Phrase.',
        chunks: [
            { id: 'c1', text: 'New laws ', isCorrect: false },
            { id: 'c2', text: 'are passed', isCorrect: true },
            { id: 'c3', text: ' every year.', isCorrect: false },
        ]
    },

    // --- SENTENCE COMPLETION (Choose correct passive form) ---
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'vm-comp-1',
        instructions: 'Complete the passive sentence (Past Tense).',
        sentenceBefore: 'The window ',
        sentenceAfter: ' by the storm.',
        options: [
            { id: 'o1', text: 'was broken', isCorrect: true },
            { id: 'o2', text: 'broke', isCorrect: false },
            { id: 'o3', text: 'is broken', isCorrect: false },
        ]
    },
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'vm-comp-2',
        instructions: 'Complete with the correct helper verb.',
        sentenceBefore: 'The emails ',
        sentenceAfter: ' sent yesterday.',
        options: [
            { id: 'o1', text: 'were', isCorrect: true },
            { id: 'o2', text: 'was', isCorrect: false },
            { id: 'o3', text: 'are', isCorrect: false },
        ]
    },

    // --- DRAG AND DROP (Transformation Matching logic - simplified to sorting) ---
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'vm-dd-2',
        instructions: 'Sort: Is the Agent (doer) showing or hidden?',
        // We need new categories for this? 
        // Our system is typed to GrammarCategory (Clause | Tense | Voice).
        // Let's use Active/Passive broadly but instructions guide it.
        // Actually, "Agent Hidden" is still Passive.
        // Let's stick to standard Active/Passive sorting but with trickier sentences.
        zones: [VoiceType.ACTIVE, VoiceType.PASSIVE],
        items: [
            { id: 'i1', text: 'Someone stole my bike', category: VoiceType.ACTIVE },
            { id: 'i2', text: 'My bike was stolen', category: VoiceType.PASSIVE },
            { id: 'i3', text: 'The cake has been eaten', category: VoiceType.PASSIVE },
            { id: 'i4', text: 'We ate the cake', category: VoiceType.ACTIVE },
        ]
    },

    // --- SELECTION (Find the Agent) ---
    // Note: We need a way to tell the Select component what "category" to accept.
    // It currently takes `clauseType: GrammarCategory`.
    // If we want to find the Agent, we might need a question type update or just use instructions.
    // But specific "Find the Agent" is hard if type is strict.
    // Let's use Select to "Find the Active Subject" vs "Find the Passive Verb".

    {
        type: MasteryQuestionType.SELECT,
        id: 'vm-sel-3',
        clauseType: VoiceType.ACTIVE, // Using Active type to mean "Find the doer"
        instructions: 'Tap the Subject (Doer).',
        chunks: [
            { id: 'c1', text: 'The ', isCorrect: false },
            { id: 'c2', text: 'fox', isCorrect: true },
            { id: 'c3', text: ' jumped over the fence.', isCorrect: false },
        ]
    },

    // --- TABLE (Agent vs Agentless Passive) ---
    // This is hard without new types. Let's do Tense identification within Passive.
    {
        type: MasteryQuestionType.TABLE,
        id: 'vm-tab-2',
        instructions: 'Past Passive vs Present Passive',
        // We'd need to add these combos to types if we want strict checking. 
        // OR we can just use the generic Table with strings if we supported that.
        // Since we don't, let's stick to Active/Passive sorting.
        columns: [VoiceType.ACTIVE, VoiceType.PASSIVE],
        rows: [
            { id: 'r1', text: 'She writes books', correctType: VoiceType.ACTIVE },
            { id: 'r2', text: 'Books are written by her', correctType: VoiceType.PASSIVE },
            { id: 'r3', text: 'The homework is done', correctType: VoiceType.PASSIVE },
            { id: 'r4', text: 'He does his homework', correctType: VoiceType.ACTIVE },
        ]
    },

    // --- COMPLETE (Choose the agent) ---
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'vm-comp-3',
        instructions: 'Who performed the action?',
        sentenceBefore: 'The picture was painted by ',
        sentenceAfter: '.',
        options: [
            { id: 'o1', text: 'the artist', isCorrect: true },
            { id: 'o2', text: 'the paint', isCorrect: false },
            { id: 'o3', text: 'the canvas', isCorrect: false },
        ]
    },

    // --- DRAG AND DROP (Mix) ---
    {
        type: MasteryQuestionType.DRAG_DROP,
        id: 'vm-dd-3',
        instructions: 'Active (Doer -> Action) vs Passive (Action -> Doer)',
        zones: [VoiceType.ACTIVE, VoiceType.PASSIVE],
        items: [
            { id: 'i1', text: 'The wind blew the leaves', category: VoiceType.ACTIVE },
            { id: 'i2', text: 'The leaves were blown', category: VoiceType.PASSIVE },
            { id: 'i3', text: 'I fixed the car', category: VoiceType.ACTIVE },
            { id: 'i4', text: 'The car was fixed', category: VoiceType.PASSIVE },
            { id: 'i5', text: 'Dad cooked dinner', category: VoiceType.ACTIVE },
            { id: 'i6', text: 'Dinner is served', category: VoiceType.PASSIVE },
        ]
    },

    // --- NEW ADDITIONS (Total 20) ---

    // 1. Semantic Difference (Image 1 Style)
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'vm-comp-4',
        instructions: 'What is the main difference?',
        sentenceBefore: '1. Toby broke the glass.\n2. The glass was broken.\n\n',
        sentenceAfter: '',
        options: [
            { id: 'o1', text: 'One keeps the doer secret', isCorrect: true },
            { id: 'o2', text: 'One is about an accident', isCorrect: false },
            { id: 'o3', text: 'One is happening now', isCorrect: false },
        ]
    },

    // 2. Transformation Gap Fill (Image 2 Style)
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'vm-comp-5',
        instructions: 'Change to Passive Voice.',
        sentenceBefore: 'Active: The teacher opened the window.\n\nPassive: The window ',
        sentenceAfter: ' by the teacher.',
        options: [
            { id: 'o1', text: 'was opened', isCorrect: true },
            { id: 'o2', text: 'is opening', isCorrect: false },
            { id: 'o3', text: 'has opened', isCorrect: false },
        ]
    },

    // 3. Semantic (Why use passive?)
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'vm-comp-6',
        instructions: 'Why use the Passive voice here?',
        sentenceBefore: '"The experiment was completed successfully."\nWe use passive here because: ',
        sentenceAfter: '',
        options: [
            { id: 'o1', text: 'The action is more important', isCorrect: true },
            { id: 'o2', text: 'We know exactly who did it', isCorrect: false },
            { id: 'o3', text: 'It happened in the future', isCorrect: false },
        ]
    },

    // 4. Transformation
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'vm-comp-7',
        instructions: 'Complete the Passive sentence.',
        sentenceBefore: 'Active: The dog chased the cat.\n\nPassive: The cat ',
        sentenceAfter: ' by the dog.',
        options: [
            { id: 'o1', text: 'was chased', isCorrect: true },
            { id: 'o2', text: 'chased', isCorrect: false },
            { id: 'o3', text: 'is chasing', isCorrect: false },
        ]
    },

    // 5. Transformation (Agentless)
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'vm-comp-8',
        instructions: 'Change to Passive (no agent).',
        sentenceBefore: 'Active: Someone stole my bike.\n\nPassive: My bike ',
        sentenceAfter: '!',
        options: [
            { id: 'o1', text: 'was stolen', isCorrect: true },
            { id: 'o2', text: 'stole', isCorrect: false },
            { id: 'o3', text: 'is stealing', isCorrect: false },
        ]
    },

    // 6. Progressive Check
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'vm-comp-9',
        instructions: 'Complete with correct Passive form.',
        sentenceBefore: 'Active: They are fixing the road.\n\nPassive: The road ',
        sentenceAfter: '.',
        options: [
            { id: 'o1', text: 'is being fixed', isCorrect: true },
            { id: 'o2', text: 'was fixed', isCorrect: false },
            { id: 'o3', text: 'fixes', isCorrect: false },
        ]
    },

    // 7. Simple Past Transformation
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'vm-comp-10',
        instructions: 'Rephrase in Passive Voice.',
        sentenceBefore: 'Active: The storm damaged the roof.\n\nPassive: The roof ',
        sentenceAfter: ' by the storm.',
        options: [
            { id: 'o1', text: 'was damaged', isCorrect: true },
            { id: 'o2', text: 'is damaged', isCorrect: false },
            { id: 'o3', text: 'damages', isCorrect: false },
        ]
    },

    // 8. Focus Check (Semantic)
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'vm-comp-11',
        instructions: 'What is the focus?',
        sentenceBefore: 'In "The movie was watched by millions", the focus is on: ',
        sentenceAfter: '',
        options: [
            { id: 'o1', text: 'The movie', isCorrect: true },
            { id: 'o2', text: 'The millions', isCorrect: false },
            { id: 'o3', text: 'Watching', isCorrect: false },
        ]
    },

    // 9. Future Transformation
    {
        type: MasteryQuestionType.COMPLETE,
        id: 'vm-comp-12',
        instructions: 'Convert to Passive (Future).',
        sentenceBefore: 'Active: She will finish the project.\n\nPassive: The project ',
        sentenceAfter: ' by her.',
        options: [
            { id: 'o1', text: 'will be finished', isCorrect: true },
            { id: 'o2', text: 'will finish', isCorrect: false },
            { id: 'o3', text: 'is finished', isCorrect: false },
        ]
    }
];
