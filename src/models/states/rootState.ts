import { AnswerResponse } from '@/models/answer-response';

export default interface RootState {
  gender: string;
  answers: AnswerResponse[];
  currentQuestion: number;
}
