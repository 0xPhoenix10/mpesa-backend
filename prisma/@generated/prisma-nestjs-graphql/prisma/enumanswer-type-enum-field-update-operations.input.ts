import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { answerTypeEnum } from './answer-type.enum';

@InputType()
export class EnumanswerTypeEnumFieldUpdateOperationsInput {

    @Field(() => answerTypeEnum, {nullable:true})
    set?: keyof typeof answerTypeEnum;
}
