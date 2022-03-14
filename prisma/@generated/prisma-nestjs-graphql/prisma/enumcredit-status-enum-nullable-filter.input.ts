import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { creditStatusEnum } from './credit-status.enum';
import { NestedEnumcreditStatusEnumNullableFilter } from './nested-enumcredit-status-enum-nullable-filter.input';

@InputType()
export class EnumcreditStatusEnumNullableFilter {

    @Field(() => creditStatusEnum, {nullable:true})
    equals?: keyof typeof creditStatusEnum;

    @Field(() => [creditStatusEnum], {nullable:true})
    in?: Array<keyof typeof creditStatusEnum>;

    @Field(() => [creditStatusEnum], {nullable:true})
    notIn?: Array<keyof typeof creditStatusEnum>;

    @Field(() => NestedEnumcreditStatusEnumNullableFilter, {nullable:true})
    not?: NestedEnumcreditStatusEnumNullableFilter;
}
