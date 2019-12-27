import { AnswerResponse } from './answer-response';

export interface ReportResult {
    answer: AnswerResponse;
    count: number;
    percentage: number;
}
