import { ClauseType } from '../types';
import type { LearnPage } from './curriculum';

export const APOSTROPHE_OMISSION_CURRICULUM: LearnPage[] = [
    {
        id: 'apo-om-1',
        type: ClauseType.APOSTROPHE_OMISSION,
        title: 'What Is an Apostrophe for Omission?',
        definition: 'An apostrophe shows where one or more letters have been left out when two words are joined together.',
        mascotDialogue: "It's like a bridge! It joins words and shows where the missing letters were. For example, 'do not' becomes 'don't'.",
        exampleSentence: "I do not think you should go → I don’t think you should go.",
        highlightedText: "don’t"
    },
    {
        id: 'apo-om-2',
        type: ClauseType.APOSTROPHE_OMISSION,
        title: 'Common Contractions – Not (n’t)',
        definition: "The apostrophe replaces the 'o' in 'not'.",
        mascotDialogue: "Think of it as 'not' losing its middle! can't (cannot), won't (will not), hasn't (has not).",
        exampleSentence: "He should not do that → He shouldn’t do that.",
        highlightedText: "shouldn’t"
    },
    {
        id: 'apo-om-3',
        type: ClauseType.APOSTROPHE_OMISSION,
        title: 'Pronoun + Verb Contractions',
        definition: 'The apostrophe shows missing letters when a pronoun joins with a verb.',
        mascotDialogue: "I am becomes I'm, you are becomes you're, and they have becomes they've!",
        exampleSentence: "We will be there soon → We’ll be there soon.",
        highlightedText: "We’ll"
    },
    {
        id: 'apo-om-4',
        type: ClauseType.APOSTROPHE_OMISSION,
        title: 'Contractions with is or has',
        definition: 'Some contractions can mean two different verbs depending on context.',
        mascotDialogue: "She's could mean she IS or she HAS. You have to read the whole sentence to know!",
        exampleSentence: "She’s running (she is) and she’s finished (she has).",
        highlightedText: ["She’s", "she’s"]
    },
    {
        id: 'apo-om-5',
        type: ClauseType.APOSTROPHE_OMISSION,
        title: 'Common Errors to Avoid (Omission)',
        definition: 'Apostrophes are not optional and must replace missing letters accurately.',
        mascotDialogue: "Don't forget them! 'dont' and 'im' are wrong. Always check for that little mark!",
        exampleSentence: "❌ dont → ✅ don’t, ❌ im → ✅ I’m",
        highlightedText: ["don’t", "I’m"]
    },
    {
        id: 'apo-om-6',
        type: ClauseType.APOSTROPHE_OMISSION,
        title: 'It’s vs Its (Bridge Card)',
        definition: "it’s = it is / it has (omission). its = belonging to it (possession – no apostrophe).",
        mascotDialogue: "This is a tricky one! If you can say 'it is', use the apostrophe. If you can't, don't!",
        exampleSentence: "It’s cold today. The dog wagged its tail.",
        highlightedText: ["It’s", "its"]
    }
];

export const APOSTROPHE_POSSESSION_CURRICULUM: LearnPage[] = [
    {
        id: 'apo-pos-1',
        type: ClauseType.APOSTROPHE_POSSESSION,
        title: 'What Is an Apostrophe for Possession?',
        definition: 'An apostrophe shows that something belongs to someone or something.',
        mascotDialogue: "It's all about ownership! Who does it belong to?",
        exampleSentence: "The book belonging to Sam → Sam's book.",
        highlightedText: "Sam's"
    },
    {
        id: 'apo-pos-2',
        type: ClauseType.APOSTROPHE_POSSESSION,
        title: 'Singular Nouns (’s)',
        definition: 'Add ’s to a singular noun to show ownership.',
        mascotDialogue: "For one person or thing, just add 's. Like the boy's hat or the dog's lead.",
        exampleSentence: "The teacher’s desk was very tidy.",
        highlightedText: "teacher’s"
    },
    {
        id: 'apo-pos-3',
        type: ClauseType.APOSTROPHE_POSSESSION,
        title: 'Singular Nouns Ending in -s',
        definition: 'Still add ’s for most singular nouns ending in s.',
        mascotDialogue: "Even if a name like James ends in 's', we still add another 's to show possession in primary grammar!",
        exampleSentence: "James’s coat was hanging on the peg.",
        highlightedText: "James’s"
    },
    {
        id: 'apo-pos-4',
        type: ClauseType.APOSTROPHE_POSSESSION,
        title: 'Singular Possession with People and Objects',
        definition: 'Possession applies to people, animals, places, and objects.',
        mascotDialogue: "It's not just for people! London's streets, the car's engine, the tree's branches.",
        exampleSentence: "The cat’s whiskers were very long.",
        highlightedText: "cat’s"
    },
    {
        id: 'apo-pos-5',
        type: ClauseType.APOSTROPHE_POSSESSION,
        title: 'Plural Nouns Ending in -s',
        definition: 'If the plural already ends in s, add just an apostrophe.',
        mascotDialogue: "If there's more than one (like boys), just put the apostrophe AFTER the 's'.",
        exampleSentence: "The boys’ coats were all in a pile.",
        highlightedText: "boys’"
    },
    {
        id: 'apo-pos-6',
        type: ClauseType.APOSTROPHE_POSSESSION,
        title: 'Irregular Plural Nouns (’s)',
        definition: 'If the plural does not end in s, add ’s.',
        mascotDialogue: "Nouns like children, men, and women don't end in 's', so we add 's like we do for singular nouns.",
        exampleSentence: "The children’s toys were everywhere!",
        highlightedText: "children’s"
    },
    {
        id: 'apo-pos-7',
        type: ClauseType.APOSTROPHE_POSSESSION,
        title: 'Shared vs Separate Possession',
        definition: 'The position of the apostrophe shows whether something is shared or separate.',
        mascotDialogue: "Sam and Alex's bike means they share one. Sam's and Alex's bikes means they each have one!",
        exampleSentence: "We went to Sam and Alex’s house.",
        highlightedText: "Sam and Alex’s"
    },
    {
        id: 'apo-pos-8',
        type: ClauseType.APOSTROPHE_POSSESSION,
        title: 'Common Errors to Avoid (Possession)',
        definition: 'Apostrophes are not used to make words plural.',
        mascotDialogue: "Watch out! Never use an apostrophe just to show there's more than one. ❌ apple's ✅ apples.",
        exampleSentence: "The dogs are barking (no apostrophe needed!).",
        highlightedText: "dogs"
    }
];
