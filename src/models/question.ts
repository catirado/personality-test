import { AnswerResponse } from './answer-response';

export interface Question {
    text: string;
    answers: QuestionAnswer[];
}

export interface QuestionAnswer {
    text: string;
    type: AnswerResponse;
}
