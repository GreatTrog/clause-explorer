import { ClauseType } from '../types';

export const PUNCTUATION_PRACTICE_QUESTIONS = [
    // Multiple Choice: Select the correctly punctuated sentence
    {
        id: 'p-ds-mc-1',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Choose the correctly punctuated sentence.',
        options: [
            { id: 'o1', text: 'She said, "I am hungry."', isCorrect: true },
            { id: 'o2', text: 'She said, I am hungry.', isCorrect: false },
            { id: 'o3', text: 'She said "I am hungry."', isCorrect: false },
            { id: 'o4', text: 'She said, "I am hungry".', isCorrect: false },
        ],
        hint: 'Remember the comma after the reporting clause and the full stop inside the marks!'
    },
    {
        id: 'p-ds-mc-2',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Choose the correctly punctuated sentence.',
        options: [
            { id: 'o1', text: '"Where are you going?" asked Tom.', isCorrect: true },
            { id: 'o2', text: '"Where are you going"? asked Tom.', isCorrect: false },
            { id: 'o3', text: 'Where are you going? asked Tom.', isCorrect: false },
            { id: 'o4', text: '"Where are you going?" Asked Tom.', isCorrect: false },
        ],
        hint: 'The question mark goes inside the inverted commas.'
    },
    {
        id: 'p-ds-mc-3',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Choose the correctly punctuated sentence.',
        options: [
            { id: 'o1', text: '"Stop!" she shouted.', isCorrect: true },
            { id: 'o2', text: '"Stop"! she shouted.', isCorrect: false },
            { id: 'o3', text: 'Stop! she shouted.', isCorrect: false },
            { id: 'o4', text: '"stop!" she shouted.', isCorrect: false },
        ],
        hint: 'Exclamation marks belong inside the inverted commas.'
    },

    // Punctuation Editor (Special handling in PracticeContainer)
    {
        id: 'p-ds-ed-1',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Add the missing punctuation to the sentence.',
        text: 'Tom said I am ready',
        correctSentence: [
            'Tom said, "I am ready."',
            'Tom said, "I am ready!"'
        ],
        hint: 'Don’t forget the comma, inverted commas, and the full stop!'
    },
    {
        id: 'p-ds-ed-2',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Add the missing punctuation to the sentence.',
        text: 'Where are you going asked Jack',
        correctSentence: '"Where are you going?" asked Jack.',
        hint: 'Jack is asking a question!'
    },
    {
        id: 'p-ds-ed-3',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Add the missing punctuation to the sentence.',
        text: 'It is cold outside whispered Sarah',
        correctSentence: [
            '"It is cold outside," whispered Sarah.',
            '"It is cold outside!" whispered Sarah.'
        ],
        hint: 'Remember the comma before the closing inverted commas.'
    },
    {
        id: 'p-ds-ed-4',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Add the missing punctuation to the sentence.',
        text: 'We should leave now suggested Dad',
        correctSentence: [
            '"We should leave now," suggested Dad.',
            '"We should leave now!" suggested Dad.'
        ],
        hint: 'Reporting clause goes second here.'
    },
    {
        id: 'p-ds-ed-5',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Add the missing punctuation to the sentence.',
        text: 'Mum yelled Clean your room right now',
        correctSentence: [
            'Mum yelled, "Clean your room right now!"',
            'Mum yelled, "Clean your room right now."'
        ],
        hint: 'Mum is yelling, so use an exclamation mark!'
    },
    {
        id: 'p-ds-mc-4',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Choose the correctly punctuated sentence.',
        options: [
            { id: 'o1', text: '"I can\'t believe it!" he exclaimed.', isCorrect: true },
            { id: 'o2', text: '"I can\'t believe it"! he exclaimed.', isCorrect: false },
            { id: 'o3', text: 'I can\'t believe it! he exclaimed.', isCorrect: false },
            { id: 'o4', text: '"I can\'t believe it!" He exclaimed.', isCorrect: false },
        ],
        hint: 'Exclamation marks belong inside the inverted commas.'
    },
    {
        id: 'p-ds-mc-5',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Choose the correctly punctuated sentence.',
        options: [
            { id: 'o1', text: 'Sarah asked, "Can we go now?"', isCorrect: true },
            { id: 'o2', text: 'Sarah asked "Can we go now?"', isCorrect: false },
            { id: 'o3', text: 'Sarah asked, Can we go now?', isCorrect: false },
            { id: 'o4', text: 'Sarah asked, "can we go now?"', isCorrect: false },
        ],
        hint: 'Use a comma after the reporting clause and start the speech with a capital letter.'
    },
    {
        id: 'p-ds-ed-6',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Add the missing punctuation to the sentence.',
        text: 'I am coming called Sam from the garden',
        correctSentence: '"I am coming," called Sam from the garden.',
        hint: 'Sam is speaking first here.'
    },
    {
        id: 'p-ds-ed-7',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Add the missing punctuation to the sentence.',
        text: 'Wait for me shouted Lily',
        correctSentence: [
            '"Wait for me!" shouted Lily.',
            '"Wait for me," shouted Lily.'
        ],
        hint: 'Lily is shouting!'
    },
    {
        id: 'p-ds-mc-6',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Choose the correctly punctuated sentence.',
        options: [
            { id: 'o1', text: '"It\'s time to eat," said Mum.', isCorrect: true },
            { id: 'o2', text: '"It\'s time to eat", said Mum.', isCorrect: false },
            { id: 'o3', text: 'It\'s time to eat, said Mum.', isCorrect: false },
            { id: 'o4', text: '"It\'s time to eat," Said Mum.', isCorrect: false },
        ],
        hint: 'The comma stays inside the closing speech mark.'
    },
    {
        id: 'p-ds-mc-7',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Choose the correctly punctuated sentence.',
        options: [
            { id: 'o1', text: 'The coach shouted, "Run faster!"', isCorrect: true },
            { id: 'o2', text: 'The coach shouted "Run faster!"', isCorrect: false },
            { id: 'o3', text: 'The coach shouted, "run faster!"', isCorrect: false },
            { id: 'o4', text: 'The coach shouted, Run faster!', isCorrect: false },
        ],
        hint: 'Comma after the reporting verb, capital letter for speech.'
    },
    {
        id: 'p-ds-ed-8',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Add the missing punctuation to the sentence.',
        text: 'The pilot announced We are landing now',
        correctSentence: 'The pilot announced, "We are landing now."',
        hint: 'Reporting clause followed by the speech.'
    },
    {
        id: 'p-ds-ed-9',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Add the missing punctuation to the sentence.',
        text: 'I love this song whispered Maya',
        correctSentence: [
            '"I love this song," whispered Maya.',
            '"I love this song!" whispered Maya.'
        ],
        hint: 'Maya is whispering.'
    },
    {
        id: 'p-ds-mc-8',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Choose the correctly punctuated sentence.',
        options: [
            { id: 'o1', text: '"Do you like it?" she inquired.', isCorrect: true },
            { id: 'o2', text: '"Do you like it?" She inquired.', isCorrect: false },
            { id: 'o3', text: '"Do you like it," she inquired?', isCorrect: false },
            { id: 'o4', text: 'Do you like it? she inquired.', isCorrect: false },
        ],
        hint: 'Inquiry is a question, so use a question mark.'
    },
    {
        id: 'p-ds-mc-9',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Choose the correctly punctuated sentence.',
        options: [
            { id: 'o1', text: '"Leave it there," ordered the captain.', isCorrect: true },
            { id: 'o2', text: '"Leave it there", ordered the captain.', isCorrect: false },
            { id: 'o3', text: 'Leave it there, ordered the captain.', isCorrect: false },
            { id: 'o4', text: '"Leave it there." ordered the captain.', isCorrect: false },
        ],
        hint: 'Commerce inside, no full stop if reporting clause follows.'
    },
    {
        id: 'p-ds-ed-10',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Add the missing punctuation to the sentence.',
        text: 'Please help me begged the boy',
        correctSentence: [
            '"Please help me," begged the boy.',
            '"Please help me!" begged the boy.',
            '"Please, help me," begged the boy.',
            '"Please, help me!" begged the boy.'
        ],
        hint: 'Speech marks around what the boy said.'
    },
    {
        id: 'p-ds-mc-10',
        type: ClauseType.DIRECT_SPEECH,
        instructions: 'Choose the correctly punctuated sentence.',
        options: [
            { id: 'o1', text: '"Wait!" Sam called. "I\'m coming."', isCorrect: true },
            { id: 'o2', text: '"Wait!" Sam called, "I\'m coming."', isCorrect: false },
            { id: 'o3', text: '"Wait!" Sam called "I\'m coming."', isCorrect: false },
            { id: 'o4', text: 'Wait! Sam called. I\'m coming.', isCorrect: false },
        ],
        hint: 'This is split speech where each part is a full sentence.'
    }
];
