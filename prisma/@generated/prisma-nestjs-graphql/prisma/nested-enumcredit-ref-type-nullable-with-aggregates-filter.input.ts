import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { creditRefType } from './credit-ref-type.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumcreditRefTypeNullableFilter } from './nested-enumcredit-ref-type-nullable-filter.input';

@InputType()
export class NestedEnumcreditRefTypeNullableWithAggregatesFilter {

    @Field(() => creditRefType, {nullable:true})
    equals?: keyof typeof creditRefType;

    @Field(() => [creditRefType], {nullable:true})
    in?: Array<keyof typeof creditRefType>;

    @Field(() => [creditRefType], {nullable:true})
    notIn?: Array<keyof typeof creditRefType>;

    @Field(() => NestedEnumcreditRefTypeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumcreditRefTypeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumcreditRefTypeNullableFilter, {nullable:true})
    _min?: NestedEnumcreditRefTypeNullableFilter;

    @Field(() => NestedEnumcreditRefTypeNullableFilter, {nullable:true})
    _max?: NestedEnumcreditRefTypeNullableFilter;
}
