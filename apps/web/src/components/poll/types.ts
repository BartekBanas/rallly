import { VoteType } from "@rallly/database";

export interface ParticipantForm {
  votes: Array<
    | {
        optionId: string;
        type?: VoteType;
        start: Date | null;
        duration: number;
      }
    | undefined
  >;
}

export interface ParticipantFormSubmitted {
  votes: Array<{
    optionId: string;
    type: VoteType;
    start: Date | null;
    duration: number;
  }>;
}
