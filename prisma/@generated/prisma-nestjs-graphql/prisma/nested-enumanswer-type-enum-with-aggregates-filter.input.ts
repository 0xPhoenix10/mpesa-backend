import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { answerTypeEnum } from './answer-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumanswerTypeEnumFilter } from './nested-enumanswer-type-enum-filter.input';

@InputType()
export class NestedEnumanswerTypeEnumWithAggregatesFilter {

    @Field(() => answerTypeEnum, {nullable:true})
    equals?: keyof typeof answerTypeEnum;

    @Field(() => [answerTypeEnum], {nullable:true})
    in?: Array<keyof typeof answerTypeEnum>;

    @Field(() => [answerTypeEnum], {nullable:true})
    notIn?: Array<keyof typeof answerTypeEnum>;

    @Field(() => NestedEnumanswerTypeEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumanswerTypeEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumanswerTypeEnumFilter, {nullable:true})
    _min?: NestedEnumanswerTypeEnumFilter;

    @Field(() => NestedEnumanswerTypeEnumFilter, {nullable:true})
    _max?: NestedEnumanswerTypeEnumFilter;
}
