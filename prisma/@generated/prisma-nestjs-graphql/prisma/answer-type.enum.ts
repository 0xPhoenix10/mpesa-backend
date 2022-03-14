import { registerEnumType } from '@nestjs/graphql';

export enum answerTypeEnum {
    boolean = "boolean",
    string = "string",
    scale7 = "scale7",
    scale5 = "scale5",
    number = "number",
    range = "range",
    selector = "selector"
}


registerEnumType(answerTypeEnum, { name: 'answerTypeEnum', description: undefined })
