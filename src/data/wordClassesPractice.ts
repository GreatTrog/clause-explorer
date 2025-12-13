import { WordClassType } from '../types';
import type { PracticeQuestion } from './practiceQuestions';

export const WORD_CLASSES_PRACTICE_QUESTIONS: PracticeQuestion[] = [
    // --- NOUNS (10 Questions) ---
    {
        id: 'wc-noun-p1',
        type: WordClassType.NOUN,
        text: 'The cat sat on the mat.',
        instructions: 'Find the Noun (Animal)',
        chunks: [
            { id: 'c1', text: 'The ', isCorrect: false },
            { id: 'c2', text: 'cat', isCorrect: true },
            { id: 'c3', text: ' sat on the mat.', isCorrect: false },
        ],
        hint: 'Find the animal.',
        explanation: '"Cat" is a noun because it names an animal.'
    },
    {
        id: 'wc-noun-p2',
        type: WordClassType.NOUN,
        text: 'London is a huge city.',
        instructions: 'Find the Proper Noun',
        chunks: [
            { id: 'c1', text: 'London', isCorrect: true },
            { id: 'c2', text: ' is a huge city.', isCorrect: false },
        ],
        hint: 'Find the specific name of a place (starts with a capital!).',
        explanation: '"London" is a Proper Noun naming a specific city.'
    },
    {
        id: 'wc-noun-p3',
        type: WordClassType.NOUN,
        text: 'Happiness is important.',
        instructions: 'Find the Abstract Noun',
        chunks: [
            { id: 'c1', text: 'Happiness', isCorrect: true },
            { id: 'c2', text: ' is important.', isCorrect: false },
        ],
        hint: 'Find the feeling or idea you cannot touch.',
        explanation: '"Happiness" is an Abstract Noun.'
    },
    {
        id: 'wc-noun-p4',
        type: WordClassType.NOUN,
        text: 'A flock of birds flew by.',
        instructions: 'Find the Collective Noun',
        chunks: [
            { id: 'c1', text: 'A ', isCorrect: false },
            { id: 'c2', text: 'flock', isCorrect: true },
            { id: 'c3', text: ' of birds flew by.', isCorrect: false },
        ],
        hint: 'Find the word for the GROUP.',
        explanation: '"Flock" is a Collective Noun for a group of birds.'
    },
    {
        id: 'wc-noun-p5',
        type: WordClassType.NOUN,
        text: 'Please use the toothpaste.',
        instructions: 'Find the Compound Noun',
        chunks: [
            { id: 'c1', text: 'Please use the ', isCorrect: false },
            { id: 'c2', text: 'toothpaste', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ],
        hint: 'Find the word made of two smaller words (tooth + paste).',
        explanation: '"Toothpaste" is a Compound Noun.'
    },
    {
        id: 'wc-noun-p6',
        type: WordClassType.NOUN,
        text: 'My teacher gave me homework.',
        instructions: 'Find the Person (Noun)',
        chunks: [
            { id: 'c1', text: 'My ', isCorrect: false },
            { id: 'c2', text: 'teacher', isCorrect: true },
            { id: 'c3', text: ' gave me homework.', isCorrect: false },
        ],
        hint: 'Who gave the homework?',
        explanation: '"Teacher" refers to a person.'
    },
    {
        id: 'wc-noun-p7',
        type: WordClassType.NOUN,
        text: 'The red car is my favourite.',
        instructions: 'Find the Concrete Noun (Thing)',
        chunks: [
            { id: 'c1', text: 'The red ', isCorrect: false },
            { id: 'c2', text: 'car', isCorrect: true },
            { id: 'c3', text: ' is my favourite.', isCorrect: false },
        ],
        hint: 'Find the vehicle.',
        explanation: '"Car" is a Concrete Noun (something you can touch).'
    },
    {
        id: 'wc-noun-p8',
        type: WordClassType.NOUN,
        text: 'Identify the type: "Freedom"',
        options: [
            { id: 'o1', text: 'Concrete Noun', isCorrect: false },
            { id: 'o2', text: 'Abstract Noun', isCorrect: true },
            { id: 'o3', text: 'Proper Noun', isCorrect: false },
        ],
        hint: 'Can you touch "Freedom"?',
        explanation: 'It is an idea/concept, so it is an Abstract Noun.'
    },
    {
        id: 'wc-noun-p9',
        type: WordClassType.NOUN,
        text: 'Identify the type: "Paris"',
        options: [
            { id: 'o1', text: 'Common Noun', isCorrect: false },
            { id: 'o2', text: 'Proper Noun', isCorrect: true },
            { id: 'o3', text: 'Collective Noun', isCorrect: false },
        ],
        hint: 'It starts with a capital letter and names a specific place.',
        explanation: 'It is a specific city name, so it is a Proper Noun.'
    },
    {
        id: 'wc-noun-p10',
        type: WordClassType.NOUN,
        text: 'Identify the type: "Team"',
        options: [
            { id: 'o1', text: 'Abstract Noun', isCorrect: false },
            { id: 'o2', text: 'Collective Noun', isCorrect: true },
            { id: 'o3', text: 'Proper Noun', isCorrect: false },
        ],
        hint: 'It refers to a group of people.',
        explanation: '"Team" is a Collective Noun.'
    },

    // --- VERBS (10 Questions) ---
    {
        id: 'wc-verb-p1',
        type: WordClassType.VERB,
        text: 'The rabbit jumped high.',
        instructions: 'Find the Verb (Physical Action)',
        chunks: [
            { id: 'c1', text: 'The rabbit ', isCorrect: false },
            { id: 'c2', text: 'jumped', isCorrect: true },
            { id: 'c3', text: ' high.', isCorrect: false },
        ],
        hint: 'What did the rabbit do?',
        explanation: '"Jumped" describes the physical action.'
    },
    {
        id: 'wc-verb-p2',
        type: WordClassType.VERB,
        text: 'She thought about the answer.',
        instructions: 'Find the Verb (Mental Action)',
        chunks: [
            { id: 'c1', text: 'She ', isCorrect: false },
            { id: 'c2', text: 'thought', isCorrect: true },
            { id: 'c3', text: ' about the answer.', isCorrect: false },
        ],
        hint: 'What did she do with her mind?',
        explanation: '"Thought" is a mental action.'
    },
    {
        id: 'wc-verb-p3',
        type: WordClassType.VERB,
        text: 'He is a doctor.',
        instructions: 'Find the Verb (State of Being)',
        chunks: [
            { id: 'c1', text: 'He ', isCorrect: false },
            { id: 'c2', text: 'is', isCorrect: true },
            { id: 'c3', text: ' a doctor.', isCorrect: false },
        ],
        hint: 'Find the "to be" verb.',
        explanation: '"Is" connects the subject to the description. It shows state of being.'
    },
    {
        id: 'wc-verb-p4',
        type: WordClassType.VERB,
        text: 'We learned grammar.',
        instructions: 'Find the Verb',
        chunks: [
            { id: 'c1', text: 'We ', isCorrect: false },
            { id: 'c2', text: 'learned', isCorrect: true },
            { id: 'c3', text: ' grammar.', isCorrect: false },
        ],
        hint: 'What happened?',
        explanation: '"Learned" is the action.'
    },
    {
        id: 'wc-verb-p5',
        type: WordClassType.VERB,
        text: 'They seemed happy.',
        instructions: 'Find the Linking Verb',
        chunks: [
            { id: 'c1', text: 'They ', isCorrect: false },
            { id: 'c2', text: 'seemed', isCorrect: true },
            { id: 'c3', text: ' happy.', isCorrect: false },
        ],
        hint: 'Which word links "They" to "happy"?',
        explanation: '"Seemed" is a state-of-being verb.'
    },
    {
        id: 'wc-verb-p6',
        type: WordClassType.VERB,
        text: 'I believe you.',
        instructions: 'Find the Mental Verb',
        chunks: [
            { id: 'c1', text: 'I ', isCorrect: false },
            { id: 'c2', text: 'believe', isCorrect: true },
            { id: 'c3', text: ' you.', isCorrect: false },
        ],
        hint: 'Find the action happening in the mind.',
        explanation: '"Believe" is a mental action.'
    },
    {
        id: 'wc-verb-p7',
        type: WordClassType.VERB,
        text: 'The sun shines brightly.',
        instructions: 'Find the Action Verb',
        chunks: [
            { id: 'c1', text: 'The sun ', isCorrect: false },
            { id: 'c2', text: 'shines', isCorrect: true },
            { id: 'c3', text: ' brightly.', isCorrect: false },
        ],
        hint: 'What does the sun do?',
        explanation: '"Shines" is the action.'
    },
    {
        id: 'wc-verb-p8',
        type: WordClassType.VERB,
        text: 'Identify the type: "Run"',
        options: [
            { id: 'o1', text: 'Physical Action', isCorrect: true },
            { id: 'o2', text: 'Mental Action', isCorrect: false },
            { id: 'o3', text: 'State of Being', isCorrect: false },
        ],
        hint: 'Do you use your body to run?',
        explanation: 'Yes, it is a Physical Action.'
    },
    {
        id: 'wc-verb-p9',
        type: WordClassType.VERB,
        text: 'Identify the type: "Understand"',
        options: [
            { id: 'o1', text: 'Physical Action', isCorrect: false },
            { id: 'o2', text: 'Mental Action', isCorrect: true },
            { id: 'o3', text: 'State of Being', isCorrect: false },
        ],
        hint: 'Does this happen in your brain?',
        explanation: 'Yes, Understanding is a Mental Action.'
    },
    {
        id: 'wc-verb-p10',
        type: WordClassType.VERB,
        text: 'Identify the type: "Am"',
        options: [
            { id: 'o1', text: 'Physical Action', isCorrect: false },
            { id: 'o2', text: 'Mental Action', isCorrect: false },
            { id: 'o3', text: 'State of Being', isCorrect: true },
        ],
        hint: 'It comes from "To Be".',
        explanation: '"Am" describes a state of existence.'
    },

    // --- ADJECTIVES (10 Questions) ---
    {
        id: 'wc-adj-p1',
        type: WordClassType.ADJECTIVE,
        text: 'The red car stopped.',
        instructions: 'Find the Adjective (Colour)',
        chunks: [
            { id: 'c1', text: 'The ', isCorrect: false },
            { id: 'c2', text: 'red', isCorrect: true },
            { id: 'c3', text: ' car stopped.', isCorrect: false },
        ],
        hint: 'What describes the car?',
        explanation: '"Red" describes the car.'
    },
    {
        id: 'wc-adj-p2',
        type: WordClassType.ADJECTIVE,
        text: 'The boy was happy.',
        instructions: 'Find the Predicative Adjective',
        chunks: [
            { id: 'c1', text: 'The boy was ', isCorrect: false },
            { id: 'c2', text: 'happy', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ],
        hint: 'What describes the boy (after the verb)?',
        explanation: '"Happy" describes the boy.'
    },
    {
        id: 'wc-adj-p3',
        type: WordClassType.ADJECTIVE,
        text: 'A scary monster appeared.',
        instructions: 'Find the Adjective',
        chunks: [
            { id: 'c1', text: 'A ', isCorrect: false },
            { id: 'c2', text: 'scary', isCorrect: true },
            { id: 'c3', text: ' monster appeared.', isCorrect: false },
        ],
        hint: 'What kind of monster?',
        explanation: '"Scary" describes the monster.'
    },
    {
        id: 'wc-adj-p4',
        type: WordClassType.ADJECTIVE,
        text: 'The sky is blue.',
        instructions: 'Find the Adjective',
        chunks: [
            { id: 'c1', text: 'The sky is ', isCorrect: false },
            { id: 'c2', text: 'blue', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ],
        hint: 'What color describes the sky?',
        explanation: '"Blue" describes the sky.'
    },
    {
        id: 'wc-adj-p5',
        type: WordClassType.ADJECTIVE,
        text: 'Five yellow ducklings swam.',
        instructions: 'Find the Adjective',
        chunks: [
            { id: 'c1', text: 'Five ', isCorrect: false },
            { id: 'c2', text: 'yellow', isCorrect: true },
            { id: 'c3', text: ' ducklings swam.', isCorrect: false },
        ],
        hint: 'How many ducks?',
        explanation: 'Numbers can be adjectives too! "Five" describes the number of ducks.'
    },
    {
        id: 'wc-adj-p6',
        type: WordClassType.ADJECTIVE,
        text: 'The old, rusty bike broke.',
        instructions: 'Find the FIRST Adjective',
        chunks: [
            { id: 'c1', text: 'The ', isCorrect: false },
            { id: 'c2', text: 'old', isCorrect: true },
            { id: 'c3', text: ', rusty bike broke.', isCorrect: false },
        ],
        hint: 'There are two adjectives. Find the first descriptor.',
        explanation: '"Old" describes the bike.'
    },
    {
        id: 'wc-adj-p7',
        type: WordClassType.ADJECTIVE,
        text: 'It tastes delicious.',
        instructions: 'Find the Adjective',
        chunks: [
            { id: 'c1', text: 'It tastes ', isCorrect: false },
            { id: 'c2', text: 'delicious', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ],
        hint: 'What word describes the taste?',
        explanation: '"Delicious" describes the subject "It".'
    },
    {
        id: 'wc-adj-p8',
        type: WordClassType.ADJECTIVE,
        text: 'Identify the Adjective: "The heavy box."',
        options: [
            { id: 'o1', text: 'The', isCorrect: false },
            { id: 'o2', text: 'Heavy', isCorrect: true },
            { id: 'o3', text: 'Box', isCorrect: false },
        ],
        hint: 'Which word describes weight?',
        explanation: '"Heavy" describes the box.'
    },
    {
        id: 'wc-adj-p9',
        type: WordClassType.ADJECTIVE,
        text: 'Identify the Adjective position: "The green apple."',
        options: [
            { id: 'o1', text: 'Attributive (Before Noun)', isCorrect: true },
            { id: 'o2', text: 'Predicative (After Verb)', isCorrect: false },
        ],
        hint: 'Is it before or after the noun "apple"?',
        explanation: 'It is before the noun, so it is Attributive.'
    },
    {
        id: 'wc-adj-p10',
        type: WordClassType.ADJECTIVE,
        text: 'Identify the Adjective position: "The apple is green."',
        options: [
            { id: 'o1', text: 'Attributive (Before Noun)', isCorrect: false },
            { id: 'o2', text: 'Predicative (After Verb)', isCorrect: true },
        ],
        hint: 'Is it after a linking verb?',
        explanation: 'Yes, it follows "is", so it is Predicative.'
    },

    // --- ADVERBS (10 Questions) ---
    {
        id: 'wc-adv-p1',
        type: WordClassType.ADVERB,
        text: 'The lion roared loudly.',
        instructions: 'Find the Adverb (Manner)',
        chunks: [
            { id: 'c1', text: 'The lion roared ', isCorrect: false },
            { id: 'c2', text: 'loudly', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ],
        hint: 'How did it roar?',
        explanation: '"Loudly" describes *how* the action happened.'
    },
    {
        id: 'wc-adv-p2',
        type: WordClassType.ADVERB,
        text: 'We arrived yesterday.',
        instructions: 'Find the Adverb (Time)',
        chunks: [
            { id: 'c1', text: 'We arrived ', isCorrect: false },
            { id: 'c2', text: 'yesterday', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ],
        hint: 'When did we arrive?',
        explanation: '"Yesterday" tells us *when*.'
    },
    {
        id: 'wc-adv-p3',
        type: WordClassType.ADVERB,
        text: 'Look upwards.',
        instructions: 'Find the Adverb (Place)',
        chunks: [
            { id: 'c1', text: 'Look ', isCorrect: false },
            { id: 'c2', text: 'upwards', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ],
        hint: 'Where should you look?',
        explanation: '"Upwards" tells us *where*.'
    },
    {
        id: 'wc-adv-p4',
        type: WordClassType.ADVERB,
        text: 'She always smiles.',
        instructions: 'Find the Adverb (Frequency)',
        chunks: [
            { id: 'c1', text: 'She ', isCorrect: false },
            { id: 'c2', text: 'always', isCorrect: true },
            { id: 'c3', text: ' smiles.', isCorrect: false },
        ],
        hint: 'How often does she smile?',
        explanation: '"Always" tells us *how often*.'
    },
    {
        id: 'wc-adv-p5',
        type: WordClassType.ADVERB,
        text: 'It is very cold.',
        instructions: 'Find the Adverb (Degree)',
        chunks: [
            { id: 'c1', text: 'It is ', isCorrect: false },
            { id: 'c2', text: 'very', isCorrect: true },
            { id: 'c3', text: ' cold.', isCorrect: false },
        ],
        hint: 'How cold is it?',
        explanation: '"Very" modifies the adjective "cold", telling us the degree.'
    },
    {
        id: 'wc-adv-p6',
        type: WordClassType.ADVERB,
        text: 'He ran fast.',
        instructions: 'Find the Adverb',
        chunks: [
            { id: 'c1', text: 'He ran ', isCorrect: false },
            { id: 'c2', text: 'fast', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ],
        hint: 'How did he run?',
        explanation: '"Fast" is an adverb describing the running.'
    },
    {
        id: 'wc-adv-p7',
        type: WordClassType.ADVERB,
        text: 'Come here.',
        instructions: 'Find the Adverb',
        chunks: [
            { id: 'c1', text: 'Come ', isCorrect: false },
            { id: 'c2', text: 'here', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ],
        hint: 'Where?',
        explanation: '"Here" is an adverb of place.'
    },
    {
        id: 'wc-adv-p8',
        type: WordClassType.ADVERB,
        text: 'Identify the type: "Slowly"',
        options: [
            { id: 'o1', text: 'Manner (How)', isCorrect: true },
            { id: 'o2', text: 'Time (When)', isCorrect: false },
            { id: 'o3', text: 'Place (Where)', isCorrect: false },
        ],
        hint: 'Does it describe *how* something is done?',
        explanation: 'Yes, "Slowly" is an adverb of manner.'
    },
    {
        id: 'wc-adv-p9',
        type: WordClassType.ADVERB,
        text: 'Identify the type: "Tomorrow"',
        options: [
            { id: 'o1', text: 'Manner (How)', isCorrect: false },
            { id: 'o2', text: 'Time (When)', isCorrect: true },
            { id: 'o3', text: 'Place (Where)', isCorrect: false },
        ],
        hint: 'Does it describe *when* something happens?',
        explanation: 'Yes, "Tomorrow" is an adverb of time.'
    },
    {
        id: 'wc-adv-p10',
        type: WordClassType.ADVERB,
        text: 'Identify the type: "Everywhere"',
        options: [
            { id: 'o1', text: 'Manner (How)', isCorrect: false },
            { id: 'o2', text: 'Time (When)', isCorrect: false },
            { id: 'o3', text: 'Place (Where)', isCorrect: true },
        ],
        hint: 'Does it describe *where*?',
        explanation: 'Yes, "Everywhere" is an adverb of place.'
    },

    // --- PRONOUNS (10 Questions) ---
    {
        id: 'wc-pro-p1',
        type: WordClassType.PRONOUN,
        text: 'She likes cake.',
        instructions: 'Find the Pronoun',
        chunks: [
            { id: 'c1', text: 'She', isCorrect: true },
            { id: 'c2', text: ' likes cake.', isCorrect: false },
        ],
        hint: 'Who likes cake?',
        explanation: '"She" replaces a person\'s name.'
    },
    {
        id: 'wc-pro-p2',
        type: WordClassType.PRONOUN,
        text: 'I saw him.',
        instructions: 'Find the Object Pronoun',
        chunks: [
            { id: 'c1', text: 'I saw ', isCorrect: false },
            { id: 'c2', text: 'him', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ],
        hint: 'Who did I see?',
        explanation: '"Him" is the one being seen.'
    },
    {
        id: 'wc-pro-p3',
        type: WordClassType.PRONOUN,
        text: 'They played football.',
        instructions: 'Find the Pronoun',
        chunks: [
            { id: 'c1', text: 'They', isCorrect: true },
            { id: 'c2', text: ' played football.', isCorrect: false },
        ],
        hint: 'Who played?',
        explanation: '"They" is a pronoun for a group.'
    },
    {
        id: 'wc-pro-p4',
        type: WordClassType.PRONOUN,
        text: 'Give it to me.',
        instructions: 'Find the FIRST Pronoun',
        chunks: [
            { id: 'c1', text: 'Give ', isCorrect: false },
            { id: 'c2', text: 'it', isCorrect: true },
            { id: 'c3', text: ' to me.', isCorrect: false },
        ],
        hint: 'It stands for an object.',
        explanation: '"It" is a pronoun.'
    },
    {
        id: 'wc-pro-p5',
        type: WordClassType.PRONOUN,
        text: 'We are ready.',
        instructions: 'Find the Pronoun',
        chunks: [
            { id: 'c1', text: 'We', isCorrect: true },
            { id: 'c2', text: ' are ready.', isCorrect: false },
        ],
        hint: 'Who is ready?',
        explanation: '"We" refers to the speaker and others.'
    },
    {
        id: 'wc-pro-p6',
        type: WordClassType.PRONOUN,
        text: 'Is this yours?',
        instructions: 'Find the Possessive Pronoun',
        chunks: [
            { id: 'c1', text: 'Is this ', isCorrect: false },
            { id: 'c2', text: 'yours', isCorrect: true },
            { id: 'c3', text: '?', isCorrect: false },
        ],
        hint: 'Who does it belong to?',
        explanation: '"Yours" shows ownership.'
    },
    {
        id: 'wc-pro-p7',
        type: WordClassType.PRONOUN,
        text: 'He hurt himself.',
        instructions: 'Find the Reflexive Pronoun',
        chunks: [
            { id: 'c1', text: 'He hurt ', isCorrect: false },
            { id: 'c2', text: 'himself', isCorrect: true },
            { id: 'c3', text: '.', isCorrect: false },
        ],
        hint: 'It ends in -self.',
        explanation: '"Himself" reflects back to "He".'
    },
    {
        id: 'wc-pro-p8',
        type: WordClassType.PRONOUN,
        text: 'Somebody called.',
        instructions: 'Find the Indefinite Pronoun',
        chunks: [
            { id: 'c1', text: 'Somebody', isCorrect: true },
            { id: 'c2', text: ' called.', isCorrect: false },
        ],
        hint: 'We don\'t know exactly who.',
        explanation: '"Somebody" is non-specific.'
    },
    {
        id: 'wc-pro-p9',
        type: WordClassType.PRONOUN,
        text: 'What is that?',
        instructions: 'Find the Interrogative Pronoun',
        chunks: [
            { id: 'c1', text: 'What', isCorrect: true },
            { id: 'c2', text: ' is that?', isCorrect: false },
        ],
        hint: 'Question word.',
        explanation: '"What" is used to ask a question.'
    },
    {
        id: 'wc-pro-p10',
        type: WordClassType.PRONOUN,
        text: 'Identify the word class: "Her"',
        options: [
            { id: 'o1', text: 'Pronoun', isCorrect: true },
            { id: 'o2', text: 'Noun', isCorrect: false },
            { id: 'o3', text: 'Verb', isCorrect: false },
        ],
        hint: 'It replaces a name (Sarah).',
        explanation: 'It is a Pronoun.'
    },

    // --- PREPOSITIONS (10 Questions) ---
    {
        id: 'wc-prep-p1',
        type: WordClassType.PREPOSITION,
        text: 'The cat is on the mat.',
        instructions: 'Find the Preposition (Place)',
        chunks: [
            { id: 'c1', text: 'The cat is ', isCorrect: false },
            { id: 'c2', text: 'on', isCorrect: true },
            { id: 'c3', text: ' the mat.', isCorrect: false },
        ],
        hint: 'Where is the cat?',
        explanation: '"On" shows position.'
    },
    {
        id: 'wc-prep-p2',
        type: WordClassType.PREPOSITION,
        text: 'We meet at noon.',
        instructions: 'Find the Preposition (Time)',
        chunks: [
            { id: 'c1', text: 'We meet ', isCorrect: false },
            { id: 'c2', text: 'at', isCorrect: true },
            { id: 'c3', text: ' noon.', isCorrect: false },
        ],
        hint: 'When do we meet?',
        explanation: '"At" shows the specific time.'
    },
    {
        id: 'wc-prep-p3',
        type: WordClassType.PREPOSITION,
        text: 'He walked through the door.',
        instructions: 'Find the Preposition (Movement)',
        chunks: [
            { id: 'c1', text: 'He walked ', isCorrect: false },
            { id: 'c2', text: 'through', isCorrect: true },
            { id: 'c3', text: ' the door.', isCorrect: false },
        ],
        hint: 'How did he go?',
        explanation: '"Through" shows movement.'
    },
    {
        id: 'wc-prep-p4',
        type: WordClassType.PREPOSITION,
        text: 'The book is under the bed.',
        instructions: 'Find the Preposition',
        chunks: [
            { id: 'c1', text: 'The book is ', isCorrect: false },
            { id: 'c2', text: 'under', isCorrect: true },
            { id: 'c3', text: ' the bed.', isCorrect: false },
        ],
        hint: 'Where is the book?',
        explanation: '"Under" shows the position.'
    },
    {
        id: 'wc-prep-p5',
        type: WordClassType.PREPOSITION,
        text: 'I will see you after school.',
        instructions: 'Find the Preposition (Time)',
        chunks: [
            { id: 'c1', text: 'I will see you ', isCorrect: false },
            { id: 'c2', text: 'after', isCorrect: true },
            { id: 'c3', text: ' school.', isCorrect: false },
        ],
        hint: 'When?',
        explanation: '"After" indicates time relation.'
    },
    {
        id: 'wc-prep-p6',
        type: WordClassType.PREPOSITION,
        text: 'She sat beside me.',
        instructions: 'Find the Preposition',
        chunks: [
            { id: 'c1', text: 'She sat ', isCorrect: false },
            { id: 'c2', text: 'beside', isCorrect: true },
            { id: 'c3', text: ' me.', isCorrect: false },
        ],
        hint: 'Where did she sit?',
        explanation: '"Beside" indicates position.'
    },
    {
        id: 'wc-prep-p7',
        type: WordClassType.PREPOSITION,
        text: 'The gift is for you.',
        instructions: 'Find the Preposition',
        chunks: [
            { id: 'c1', text: 'The gift is ', isCorrect: false },
            { id: 'c2', text: 'for', isCorrect: true },
            { id: 'c3', text: ' you.', isCorrect: false },
        ],
        hint: 'Who is it meant _?',
        explanation: '"For" is a preposition.'
    },
    {
        id: 'wc-prep-p8',
        type: WordClassType.PREPOSITION,
        text: 'Identify the Preposition: "In the box"',
        options: [
            { id: 'o1', text: 'In', isCorrect: true },
            { id: 'o2', text: 'The', isCorrect: false },
            { id: 'o3', text: 'Box', isCorrect: false },
        ],
        hint: 'Shows position.',
        explanation: '"In" is the preposition.'
    },
    {
        id: 'wc-prep-p9',
        type: WordClassType.PREPOSITION,
        text: 'Identify the Preposition: "During the movie"',
        options: [
            { id: 'o1', text: 'During', isCorrect: true },
            { id: 'o2', text: 'The', isCorrect: false },
            { id: 'o3', text: 'Movie', isCorrect: false },
        ],
        hint: 'Shows time duration.',
        explanation: '"During" is the preposition.'
    },
    {
        id: 'wc-prep-p10',
        type: WordClassType.PREPOSITION,
        text: 'Identify the type: "Above"',
        options: [
            { id: 'o1', text: 'Noun', isCorrect: false },
            { id: 'o2', text: 'Preposition', isCorrect: true },
            { id: 'o3', text: 'Adjective', isCorrect: false },
        ],
        hint: 'It describes position relative to something else.',
        explanation: '"Above" is a preposition.'
    },

    // --- DETERMINERS (10 Questions) ---
    {
        id: 'wc-det-p1',
        type: WordClassType.DETERMINER,
        text: 'The dog barked.',
        instructions: 'Find the Article',
        chunks: [
            { id: 'c1', text: 'The', isCorrect: true },
            { id: 'c2', text: ' dog barked.', isCorrect: false },
        ],
        hint: 'It introduces "dog".',
        explanation: '"The" is a definite article.'
    },
    {
        id: 'wc-det-p2',
        type: WordClassType.DETERMINER,
        text: 'I want that cake.',
        instructions: 'Find the Demonstrative Determiner',
        chunks: [
            { id: 'c1', text: 'I want ', isCorrect: false },
            { id: 'c2', text: 'that', isCorrect: true },
            { id: 'c3', text: ' cake.', isCorrect: false },
        ],
        hint: 'Points to a specific cake.',
        explanation: '"That" points out the specific noun.'
    },
    {
        id: 'wc-det-p3',
        type: WordClassType.DETERMINER,
        text: 'This is my book.',
        instructions: 'Find the Possessive Determiner',
        chunks: [
            { id: 'c1', text: 'This is ', isCorrect: false },
            { id: 'c2', text: 'my', isCorrect: true },
            { id: 'c3', text: ' book.', isCorrect: false },
        ],
        hint: 'Whose book?',
        explanation: '"My" shows possession.'
    },
    {
        id: 'wc-det-p4',
        type: WordClassType.DETERMINER,
        text: 'I have many friends.',
        instructions: 'Find the Quantifier',
        chunks: [
            { id: 'c1', text: 'I have ', isCorrect: false },
            { id: 'c2', text: 'many', isCorrect: true },
            { id: 'c3', text: ' friends.', isCorrect: false },
        ],
        hint: 'How many?',
        explanation: '"Many" tells us quantity.'
    },
    {
        id: 'wc-det-p5',
        type: WordClassType.DETERMINER,
        text: 'An apple for the teacher.',
        instructions: 'Find the Article',
        chunks: [
            { id: 'c1', text: 'An', isCorrect: true },
            { id: 'c2', text: ' apple', isCorrect: false },
            { id: 'c3', text: ' for the teacher.', isCorrect: false },
        ],
        hint: 'Introduces "apple".',
        explanation: '"An" is an indefinite article.'
    },
    {
        id: 'wc-det-p6',
        type: WordClassType.DETERMINER,
        text: 'Those shoes are nice.',
        instructions: 'Find the Demonstrative',
        chunks: [
            { id: 'c1', text: 'Those', isCorrect: true },
            { id: 'c2', text: ' shoes are nice.', isCorrect: false },
        ],
        hint: 'Points to shoes far away.',
        explanation: '"Those" points to specific plural items.'
    },
    {
        id: 'wc-det-p7',
        type: WordClassType.DETERMINER,
        text: 'Do you have any money?',
        instructions: 'Find the Determiner',
        chunks: [
            { id: 'c1', text: 'Do you have ', isCorrect: false },
            { id: 'c2', text: 'any', isCorrect: true },
            { id: 'c3', text: ' money?', isCorrect: false },
        ],
        hint: 'Refers to amount.',
        explanation: '"Any" is a quantifier.'
    },
    {
        id: 'wc-det-p8',
        type: WordClassType.DETERMINER,
        text: 'Identify the Determiner: "Some water"',
        options: [
            { id: 'o1', text: 'Some', isCorrect: true },
            { id: 'o2', text: 'Water', isCorrect: false },
        ],
        hint: 'Tells us quantity.',
        explanation: '"Some" specifies the amount of water.'
    },
    {
        id: 'wc-det-p9',
        type: WordClassType.DETERMINER,
        text: 'Identify the Determiner: "Your house"',
        options: [
            { id: 'o1', text: 'Your', isCorrect: true },
            { id: 'o2', text: 'House', isCorrect: false },
        ],
        hint: 'Shows possession.',
        explanation: '"Your" identifies whose house it is.'
    },
    {
        id: 'wc-det-p10',
        type: WordClassType.DETERMINER,
        text: 'Which word is a Determiner?',
        options: [
            { id: 'o1', text: 'The', isCorrect: true },
            { id: 'o2', text: 'Quick', isCorrect: false },
            { id: 'o3', text: 'Jump', isCorrect: false },
        ],
        hint: 'It introduces a noun.',
        explanation: '"The" is an article/determiner.'
    },

    // --- INTERJECTIONS (10 Questions) ---
    {
        id: 'wc-int-p1',
        type: WordClassType.INTERJECTION,
        text: 'Wow! That is cool.',
        instructions: 'Find the Interjection',
        chunks: [
            { id: 'c1', text: 'Wow', isCorrect: true },
            { id: 'c2', text: '! That is cool.', isCorrect: false },
        ],
        hint: 'The exclamation.',
        explanation: '"Wow" shows amazement.'
    },
    {
        id: 'wc-int-p2',
        type: WordClassType.INTERJECTION,
        text: 'Ouch, that hurt.',
        instructions: 'Find the Interjection',
        chunks: [
            { id: 'c1', text: 'Ouch', isCorrect: true },
            { id: 'c2', text: ', that hurt.', isCorrect: false },
        ],
        hint: 'Shows pain.',
        explanation: '"Ouch" shows pain.'
    },
    {
        id: 'wc-int-p3',
        type: WordClassType.INTERJECTION,
        text: 'Hey! Look at this.',
        instructions: 'Find the Interjection',
        chunks: [
            { id: 'c1', text: 'Hey', isCorrect: true },
            { id: 'c2', text: '! Look at this.', isCorrect: false },
        ],
        hint: 'Used to get attention.',
        explanation: '"Hey" is an interjection.'
    },
    {
        id: 'wc-int-p4',
        type: WordClassType.INTERJECTION,
        text: 'Oh no, I forgot.',
        instructions: 'Find the Interjection',
        chunks: [
            { id: 'c1', text: 'Oh no', isCorrect: true },
            { id: 'c2', text: ', I forgot.', isCorrect: false },
        ],
        hint: 'Shows worry.',
        explanation: '"Oh no" expresses dismay.'
    },
    {
        id: 'wc-int-p5',
        type: WordClassType.INTERJECTION,
        text: 'Yuck! Broccoli.',
        instructions: 'Find the Interjection',
        chunks: [
            { id: 'c1', text: 'Yuck', isCorrect: true },
            { id: 'c2', text: '! Broccoli.', isCorrect: false },
        ],
        hint: 'Shows disgust.',
        explanation: '"Yuck" shows disgust.'
    },
    {
        id: 'wc-int-p6',
        type: WordClassType.INTERJECTION,
        text: 'Shh, be quiet.',
        instructions: 'Find the Interjection',
        chunks: [
            { id: 'c1', text: 'Shh', isCorrect: true },
            { id: 'c2', text: ', be quiet.', isCorrect: false },
        ],
        hint: 'Demand for silence.',
        explanation: '"Shh" is an interjection.'
    },
    {
        id: 'wc-int-p7',
        type: WordClassType.INTERJECTION,
        text: 'Hurray! We won.',
        instructions: 'Find the Interjection',
        chunks: [
            { id: 'c1', text: 'Hurray', isCorrect: true },
            { id: 'c2', text: '! We won.', isCorrect: false },
        ],
        hint: 'Shows joy.',
        explanation: '"Hurray" shows celebration.'
    },
    {
        id: 'wc-int-p8',
        type: WordClassType.INTERJECTION,
        text: 'Identify the Interjection: "Oops, sorry."',
        options: [
            { id: 'o1', text: 'Oops', isCorrect: true },
            { id: 'o2', text: 'Sorry', isCorrect: false }, // Sorry can function as one but usually Adj. "Oops" is the pure interjection here.
        ],
        hint: 'Shows a mistake.',
        explanation: '"Oops" is the interjection for a mistake.'
    },
    {
        id: 'wc-int-p9',
        type: WordClassType.INTERJECTION,
        text: 'Identify the Interjection: "Ah, I see."',
        options: [
            { id: 'o1', text: 'Ah', isCorrect: true },
            { id: 'o2', text: 'See', isCorrect: false },
        ],
        hint: 'Shows realization.',
        explanation: '"Ah" is the interjection.'
    },
    {
        id: 'wc-int-p10',
        type: WordClassType.INTERJECTION,
        text: 'Identify the type: "Wow"',
        options: [
            { id: 'o1', text: 'Noun', isCorrect: false },
            { id: 'o2', text: 'Interjection', isCorrect: true },
            { id: 'o3', text: 'Verb', isCorrect: false },
        ],
        hint: 'Shows emotion.',
        explanation: '"Wow" is an Interjection.'
    },
];
