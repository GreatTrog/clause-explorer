import { MasteryQuestionType, type MasteryQuestion } from './masteryQuestions';

export const PUNCTUATION_MASTERY_QUESTIONS: MasteryQuestion[] = [
    // --- TABLE SORTING ---
    {
        type: MasteryQuestionType.TABLE,
        id: 'p-m-tab-1',
        instructions: 'Classify as Correct or Incorrect punctuation.',
        columns: ['Correct', 'Incorrect'],
        rows: [
            { id: 'r1', text: '"I’m tired," said Ben.', correctType: 'Correct' },
            { id: 'r2', text: '"I’m tired," Said Ben.', correctType: 'Incorrect' },
            { id: 'r3', text: 'Dad whispered "leave now."', correctType: 'Incorrect' },
            { id: 'r4', text: 'Dad whispered, "Leave now."', correctType: 'Correct' },
        ]
    },

    // --- PUNCTUATION EDIT ---
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-1',
        instructions: 'Punctuate this split speech sentence correctly.',
        originalText: 'I don\'t think she said this is a good idea',
        correctSentence: [
            '"I don\'t think," she said, "this is a good idea."',
            '"I don\'t think," she said, "this is a good idea!"'
        ],
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-2',
        instructions: 'Punctuate the reporting clause first.',
        originalText: 'The teacher asked Has everyone finished',
        correctSentence: 'The teacher asked, "Has everyone finished?"',
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-4',
        instructions: 'Punctuate the reporting clause at the end.',
        originalText: 'I’m not sure about this whispered the young boy to his friend',
        correctSentence: '"I’m not sure about this," whispered the young boy to his friend.',
    },
    {
        type: MasteryQuestionType.TABLE,
        id: 'p-m-tab-2',
        instructions: 'Identify correctly punctuated split speech.',
        columns: ['Correct', 'Incorrect'],
        rows: [
            { id: 'r1', text: '"Wait," he called, "I\'m coming!"', correctType: 'Correct' },
            { id: 'r2', text: '"Wait" he called "I\'m coming!"', correctType: 'Incorrect' },
            { id: 'r3', text: '"I know," she said. "It is late."', correctType: 'Correct' },
            { id: 'r4', text: '"I know," she said, "It is late."', correctType: 'Incorrect' },
        ]
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-5',
        instructions: 'Punctuate this long sentence correctly.',
        originalText: 'The captain shouted all hands on deck immediately as the storm approached',
        correctSentence: 'The captain shouted, "All hands on deck immediately!" as the storm approached.',
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-6',
        instructions: 'Punctuate this question within speech.',
        originalText: 'Would you like some tea asked Mrs Higgins kindly',
        correctSentence: '"Would you like some tea?" asked Mrs Higgins kindly.',
    },
    {
        type: MasteryQuestionType.TABLE,
        id: 'p-m-tab-3',
        instructions: 'Where does the comma go?',
        columns: ['Inside', 'Outside'],
        rows: [
            { id: 'r1', text: '"Stop," he said.', correctType: 'Inside' },
            { id: 'r2', text: 'She said, "Go."', correctType: 'Outside' },
            { id: 'r3', text: '"Help," I cried.', correctType: 'Inside' },
            { id: 'r4', text: 'He asked, "Why?"', correctType: 'Outside' },
        ]
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-7',
        instructions: 'Punctuate the split speech.',
        originalText: 'Stop shouted the guard you can’t go in there',
        correctSentence: '"Stop!" shouted the guard. "You can’t go in there."',
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-8',
        instructions: 'Punctuate the reporting clause first.',
        originalText: 'The doctor explained you need to rest for three days',
        correctSentence: 'The doctor explained, "You need to rest for three days."',
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-9',
        instructions: 'Punctuate the exclamation.',
        originalText: 'Watch out yelled the construction worker',
        correctSentence: [
            '"Watch out!" yelled the construction worker.',
            '"Watch out," yelled the construction worker.'
        ],
    },
    {
        type: MasteryQuestionType.TABLE,
        id: 'p-m-tab-4',
        instructions: 'Correct or Incorrect use of capital letters?',
        columns: ['Correct', 'Incorrect'],
        rows: [
            { id: 'r1', text: 'She said, "Hello."', correctType: 'Correct' },
            { id: 'r2', text: 'She said, "hello."', correctType: 'Incorrect' },
            { id: 'r3', text: '"Wait," she said, "Wait for me."', correctType: 'Incorrect' },
            { id: 'r4', text: '"Wait," she said, "wait for me."', correctType: 'Correct' },
        ]
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-10',
        instructions: 'Punctuate the split speech.',
        originalText: 'It is a beautiful day noted Arthur even if it is a bit cold',
        correctSentence: '"It is a beautiful day," noted Arthur, "even if it is a bit cold."',
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-11',
        instructions: 'Punctuate the direct speech.',
        originalText: 'I haven’t seen him today replied the witness',
        correctSentence: '"I haven’t seen him today," replied the witness.',
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-12',
        instructions: 'Punctuate the complex sentence.',
        originalText: 'If you are ready said the guide we can begin the tour now',
        correctSentence: '"If you are ready," said the guide, "we can begin the tour now."',
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-13',
        instructions: 'Punctuate the question.',
        originalText: 'How did you find that questioned the detective',
        correctSentence: '"How did you find that?" questioned the detective.',
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-14',
        instructions: 'Punctuate the exclamation.',
        originalText: 'I can’t believe we won cheered the team',
        correctSentence: [
            '"I can’t believe we won!" cheered the team.',
            '"I can’t believe we won," cheered the team.'
        ],
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-15',
        instructions: 'Punctuate the reporting clause in the middle.',
        originalText: 'Yes she agreed I will be there at seven o’clock',
        correctSentence: [
            '"Yes," she agreed. "I will be there at seven o’clock."',
            '"Yes," she agreed, "I will be there at seven o’clock."'
        ],
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-16',
        instructions: 'Punctuate the direct speech.',
        originalText: 'Dad asked where is my blue tie',
        correctSentence: 'Dad asked, "Where is my blue tie?"',
    },
    {
        type: MasteryQuestionType.PUNCTUATION_EDIT,
        id: 'p-m-ed-17',
        instructions: 'Punctuate the direct speech.',
        originalText: 'Don’t forget your umbrella mother called as it started to rain',
        correctSentence: '"Don’t forget your umbrella," mother called as it started to rain.',
    }
];
