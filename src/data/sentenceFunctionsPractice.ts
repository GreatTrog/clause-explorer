import { SentenceFunction } from '../types';
import type { PracticeQuestion } from './practiceQuestions';

type SentenceFunctionPracticeQuestion = Omit<PracticeQuestion, 'type'>;

const HIDDEN_END_PUNCTUATION = 'The end punctuation is hidden.';

const choose = (
    id: string,
    instructions: string,
    question: string | undefined,
    correct: string,
    distractors: string[],
    explanation: string,
): SentenceFunctionPracticeQuestion => ({
    id: `sentence-functions-practice-${id}`,
    instructions,
    question,
    options: [correct, ...distractors].map((text, index) => ({
        id: String(index),
        text,
        isCorrect: index === 0,
    })),
    hint: explanation,
    explanation,
});

const identify = (id: string, sentence: string, correct: SentenceFunction, explanation: string) =>
    choose(id, 'Select the function of this sentence.', sentence, correct,
        Object.values(SentenceFunction).filter(option => option !== correct), explanation);

export const SENTENCE_FUNCTIONS_PRACTICE_QUESTIONS = [
    identify('parcel', 'A parcel arrived for our neighbour.', SentenceFunction.STATEMENT,
        'This is a statement because it tells you what happened.'),
    identify('gate', 'Did you latch the garden gate?', SentenceFunction.QUESTION,
        'This is a question because it asks whether you did something.'),
    identify('shelf', 'Put the atlas back on the top shelf.', SentenceFunction.COMMAND,
        '“Put” is the verb that tells you what to do.'),
    identify('costume', 'What an unusual costume that is!', SentenceFunction.EXCLAMATION,
        '“What an unusual costume” opens an exclamation that expresses surprise.'),
    identify('canoes', 'The leader asked where the canoes were kept', SentenceFunction.STATEMENT,
        'The whole sentence reports what the leader asked, so it is a statement.'),
    identify('hall', 'Please wait outside the hall', SentenceFunction.COMMAND,
        '“Please” makes the command polite, and “wait” gives the instruction.'),
    identify('owl', 'How quietly that owl landed', SentenceFunction.EXCLAMATION,
        '“How quietly” introduces a reaction to the way the owl landed.'),
    identify('coach', 'Does the coach leave from this stop', SentenceFunction.QUESTION,
        'It asks for an answer. “Does” comes before the subject “the coach”.'),
    identify('bicycle', 'Keep away from the bicycle lane!', SentenceFunction.COMMAND,
        '“Keep away” tells someone what to do, and the exclamation mark adds urgency.'),
    choose('choose-statement', 'Select the sentence that gives information.', HIDDEN_END_PUNCTUATION,
        'The hedgehog sleeps beneath the shed',
        ['Does the hedgehog come out at dusk', 'Leave a shallow dish of water nearby', 'What a tiny hedgehog that is'],
        'The sentence about where the hedgehog sleeps gives information.'),
    choose('choose-question', 'Select the sentence that asks a question.', HIDDEN_END_PUNCTUATION,
        'How far can the paper plane fly',
        ['How smoothly the plane glides', 'Fold the corners towards the middle', 'Its wings are the same size'],
        '“How far can the paper plane fly” asks for a distance.'),
    choose('choose-command', 'Select the sentence that gives a command.', undefined,
        'Wrap the clay in a damp cloth.',
        ['The clay must stay damp.', 'I will wrap the clay before lunch.', 'Should we leave the clay on the tray?'],
        'Only the sentence that begins with “Wrap” gives the listener a direct instruction.'),
    choose('choose-exclamation', 'Select the sentence that is an exclamation.', HIDDEN_END_PUNCTUATION,
        'What a steep climb that was',
        ['What can we see from the top', 'We climbed up the rocky track', 'Take a drink before setting off again'],
        '“What a steep climb that was” expresses a strong reaction to the climb.'),
    choose('question-mark', 'Select the sentence that needs a question mark at the end.', HIDDEN_END_PUNCTUATION,
        'When will the lighthouse switch on',
        ['I wonder when the lighthouse will switch on', 'Tell me when the lighthouse switches on', 'When the lighthouse switches on, we will take a photograph'],
        '“When will the lighthouse switch on” asks a direct question.'),
    choose('full-stop', 'Select the punctuation mark that completes this sentence.', 'My brother knows how the puzzle works',
        '. Full stop', ['? Question mark', ', Comma', ': Colon'],
        'The whole sentence gives information, so a full stop completes it.'),
    choose('exclamation-mark', 'Select the punctuation mark that best completes this exclamation.', 'How cold the water feels',
        '! Exclamation mark', ['? Question mark', ', Comma', '. Full stop'],
        '“How cold the water feels” expresses a strong reaction. An exclamation mark shows that feeling.'),
    choose('opening-clause', 'Select the sentence that gives a command.', HIDDEN_END_PUNCTUATION,
        'Before the paint dries, rinse the brush',
        ['Before the paint dries, I will tidy the table', 'Before the paint dries, can I add another colour', 'How quickly the paint dries'],
        'After the opening words, “rinse” tells the reader what to do.'),
    choose('question-word-order', 'Select the option that puts the words in standard question order.', 'The badges are ready.',
        'Are the badges ready?',
        ['The badges are ready?', 'Are ready the badges?', 'The badges are ready.'],
        'Move “are” before “the badges” to form a question and finish with a question mark.'),
];
