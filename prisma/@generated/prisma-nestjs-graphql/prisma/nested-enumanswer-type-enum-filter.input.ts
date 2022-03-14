import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { answerTypeEnum } from './answer-type.enum';

@InputType()
export class NestedEnumanswerTypeEnumFilter {

    @Field(() => answerTypeEnum, {nullable:true})
    equals?: keyof typeof answerTypeEnum;

    @Field(() => [answerTypeEnum], {nullable:true})
    in?: Array<keyof typeof answerTypeEnum>;

    @Field(() => [answerTypeEnum], {nullable:true})
    notIn?: Array<keyof typeof answerTypeEnum>;

    @Field(() => NestedEnumanswerTypeEnumFilter, {nullable:true})
    not?: NestedEnumanswerTypeEnumFilter;
}
