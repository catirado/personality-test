import { AnswerResponse } from '@/models/answer-response';
import { ReportResult } from '@/models/report';

export function getReport(answers: AnswerResponse[]): any[] {
    if (answers.length === 0) {
        return [];
    }
    const grouped = answers.reduce(
        (groups: any, response: AnswerResponse) => {

        if (!groups[response]) {
          groups[response] = 0;
        }

        groups[response] = groups[response] + 1;

        return groups;
        },
        {},
        );

    const report = Object.keys(grouped).map((response) => {
            return {
                answer: (response as unknown) as AnswerResponse,
                count: grouped[response] as number,
                percentage: Math.round((grouped[response] / answers.length) * 100),
            } as ReportResult;
          });

    return report;
}

export function getPersonality(answers: AnswerResponse[]): AnswerResponse {
    const grouped = getReport(answers);
    const result = grouped.reduce(
        // tslint:disable-next-line:no-shadowed-variable
        (maxResult: ReportResult, result: ReportResult) => {
        if (Object.keys(maxResult).length === 0 || maxResult.count < result.count) {
            maxResult = result;
        }
        return maxResult;
    },
    {},
    );
    return result.answer;
}
