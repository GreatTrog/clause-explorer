import { VoiceType } from '../types';
import type { LearnPage } from './curriculum';

export const VOICE_CURRICULUM: LearnPage[] = [
    // --- ACTIVE VOICE ---
    {
        id: 'v-act-1',
        title: 'Active Voice: The Doer',
        type: VoiceType.ACTIVE,

        definition: 'In an **Active** sentence, the subject is the one *doing* the action. It is direct and clear.',
        mascotDialogue: "The subject acts like a superhero doing the verb!",
        exampleSentence: "The cat chased the mouse.",
        highlightedText: "The cat chased"
    },
    {
        id: 'v-act-2',
        title: 'Spotting Active Voice',
        type: VoiceType.ACTIVE,

        definition: 'Look for the **Subject** at the start. If the subject is performing the verb, it is Active.',
        mascotDialogue: "Ask yourself: Who is doing the action?",
        exampleSentence: "Sarah ate the cake.",
        highlightedText: "Sarah ate"
    },
    {
        id: 'v-act-3',
        title: 'Active Voice & Tenses',
        type: VoiceType.ACTIVE,

        definition: 'Active voice works in any tense! Past, Present, or Future. The focus stays on the doer.',
        mascotDialogue: "I ran, I run, I will run. All Active!",
        exampleSentence: "Yesterday I ran. Tomorrow I will run.",
        highlightedText: "I ran"
    },
    {
        id: 'v-act-4',
        title: 'Why use Active Voice?',
        type: VoiceType.ACTIVE,

        definition: 'Use Active Voice when you want to be clear about **who** is responsible.',
        mascotDialogue: "It makes your writing strong and easy to read.",
        exampleSentence: "You solved the puzzle!",
        highlightedText: "You solved"
    },

    // --- PASSIVE VOICE ---
    {
        id: 'v-pas-1',
        title: 'Passive Voice: The Receiver',
        type: VoiceType.PASSIVE,

        definition: 'In a **Passive** sentence, the subject **receives** the action. The object becomes the subject!',
        mascotDialogue: "The subject isn't doing anything, things are happening TO it.",
        exampleSentence: "The mouse was chased by the cat.",
        highlightedText: "was chased"
    },
    {
        id: 'v-pas-2',
        title: 'The "By" Agent',
        type: VoiceType.PASSIVE,

        definition: 'Often, we use the word **"by"** to show who did the action (the agent). This comes *after* the verb.',
        mascotDialogue: "Look out for the word 'by'!",
        exampleSentence: "The cake was eaten by Sarah.",
        highlightedText: "by Sarah"
    },
    {
        id: 'v-pas-3',
        title: 'The Secret Agent',
        type: VoiceType.PASSIVE,

        definition: 'Sometimes, we don\'t say who did the action! The agent is **omitted**.',
        mascotDialogue: "It's a mystery! We don't know who did it.",
        exampleSentence: "The diamonds were stolen!",
        highlightedText: "were stolen"
    },
    {
        id: 'v-pas-4',
        title: 'Forming the Passive',
        type: VoiceType.PASSIVE,

        definition: 'To make it Passive, use the verb **"to be"** + the **Past Participle**.',
        mascotDialogue: "Be careful! Don't confuse it with Past Progressive.",
        exampleSentence: "Britain was invaded by the Romans.",
        highlightedText: "was invaded"
    }
];
